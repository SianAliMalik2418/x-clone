import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import os from "os";
import cloudinary from "cloudinary";
import { PostModel } from "@/models/postModel";
import { connectDB } from "@/db/dbConnect";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImagesToCloudinary = async (newFiles) => {
  const multiplePhotosPromise = newFiles.map(async (file) => {
    const resp = await cloudinary.v2.uploader.upload(file.filePath, {
      folder: "nextjs-x-clone",
    });
    return resp.url;
  });

  const imgUrls = await Promise.all(multiplePhotosPromise);
  return imgUrls;
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
    await connectDB();
    const reqBody = await request.formData();

    const files = reqBody.getAll("file");
    const postCaption = reqBody.get("postCaption");
    const userId = reqBody.get("userId");

    // Saving files in temp folder.
    const newFiles = await storeImagesTemporarily(files);

    // Returns the url
    const photosUrl = await uploadImagesToCloudinary(newFiles);
    console.log(photosUrl);

    // Delete the images from temp after sucessful upload.
    newFiles.map(async (file) => await fs.unlink(file.filePath));

    const newPost = new PostModel({
      userId,
      postCaption,
      imgUrls: photosUrl,
    });

    const createdPost = await newPost.save();

    return NextResponse.json(
      { postDetails: createdPost, message: "Post Created successfully!" },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
};
