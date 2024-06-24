"use client";

import {useRef } from "react";
import { MdImage } from "react-icons/md";
import PhotoCard from "./PhotoCard";
import { useFormContext } from "react-hook-form";
import { usePostContext } from "../context/PostContext";

const UploadImage = () => {
  const { imageFiles, setImageFiles } = usePostContext();
  const { register, setValue } = useFormContext();


  const handleFiles = (e) => {
    const imageFilesFromInput = e.target.files;
    const maxFiles = 4;
    const maxSize = 5 * 1024 * 1024; // 5 MB

    // Filter files based on size and type, and limit the number of files
    const filteredImages = Array.from(imageFilesFromInput).filter(
      (imageFile) => {
        return imageFile.size <= maxSize && imageFile.type.startsWith("image/");
      },
    );

    const totalFiles = imageFiles.length + filteredImages.length;

    if (totalFiles > maxFiles) {
      alert(`You can only upload a maximum of ${maxFiles} images`);
    } else {
      setImageFiles((prev) => [...prev, ...filteredImages]);
      setValue("files", [...imageFiles, ...filteredImages]);
    }
  };

  const handleDeleteFiles = (clickedFileIndex) => {
    const newFiles = imageFiles.filter(
      (_, currentFileIndex) => currentFileIndex !== clickedFileIndex,
    );
    setImageFiles(newFiles);
    setValue("files", newFiles);
  };

  const imageRef = useRef();

  return (
    <>
      <div className="flex flex-col gap-3">
        <input
          type="file"
          onChange={handleFiles}
          accept="image/*"
          className="hidden"
          multiple
          ref={imageRef}
        />

        <input type="hidden" {...register("files")} />
        <div
          onClick={() => imageRef.current && imageRef.current.click()}
          className="flex gap-2"
        >
          <MdImage size={25} className="text-sky-500" cursor={"pointer"} />
        </div>
        <div className="mt-5 flex w-full flex-wrap gap-2">
          {imageFiles.map((file, i) => (
            <PhotoCard
              key={i}
              index={i}
              url={URL.createObjectURL(file)}
              handleDeleteFiles={handleDeleteFiles}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default UploadImage;
