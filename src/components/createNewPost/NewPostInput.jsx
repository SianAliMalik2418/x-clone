"use client";

import { useFormContext } from "react-hook-form";

const NewPostInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <textarea
        name="newPostInput"
        id="newPostInput"
        cols="10"
        rows="1"
        className="max-h-[100px] border-b border-gray-400 pb-7 pt-1 outline-none"
        placeholder="What's Happening"
        {...register("postCaption", { required: "Post Caption is required!" })}
      ></textarea>

      {errors.postCaption && (
        <span className="text-red-500">{errors.postCaption.message}</span>
      )}
    </>
  );
};
export default NewPostInput;
