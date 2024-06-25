import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import os from "os";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImagesToCloudinary = async (newFiles) => {
  const multiplePhotosPromise = newFiles.map((file) =>
    cloudinary.v2.uploader.upload(file.filePath, { folder: "nextjs-x-clone" }),
  );

  return await Promise.all(multiplePhotosPromise);
};

const storeImagesTemporarily = async (files) => {
  const multipleBufferPromise = files.map((file) =>
    file.arrayBuffer().then((data) => {
      const buffer = Buffer.from(data);

      //   Making the name of each img unique.
      const name = uuidv4();
      const extension = file.type.split("/")[1];

      // const uploadDir = path.join(process.cwd(), "public", `/${name}.${extension}`);
      // Desnt work in vercel

      const tempDir = os.tmpdir();
      //   This refers to the default directory of your system.

      const uploadDir = path.join(tempDir, `/${name}.${extension}`);
      //   WORKS IN VERCEL :)

      fs.writeFile(uploadDir, buffer);

      return { filePath: uploadDir, fileName: file.name };
    }),
  );

  return await Promise.all(multipleBufferPromise);
};

export const POST = async (request) => {
  try {
    const reqBody = await request.formData();
    const files = reqBody.getAll("file");

    // Saving files in temp folder.
    const newFiles = await storeImagesTemporarily(files);

    // Returns the url
    const photos = await uploadImagesToCloudinary(newFiles);
    console.log(photos);

    // Delete the images from temp after sucessful upload.
    newFiles.map((file) => fs.unlink(file.filePath));

    return NextResponse.json(reqBody);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
};
