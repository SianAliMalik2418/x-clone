"use client";

import { useSession } from "next-auth/react";
import NewPostInput from "./NewPostInput";
import UploadImage from "./UploadImage";
import { avatarURL } from "@/lib/utils";
import { FormProvider, useForm } from "react-hook-form";
import { usePostContext } from "../context/PostContext";
import axios from "axios";

const CreateNewPost = () => {
  const { data: session } = useSession();
  const { setImageFiles } = usePostContext();

  // Disabled btn until required fields are met, for that we use isValid
  const formMethods = useForm();
  const {
    handleSubmit,
    reset,
    formState: { isValid },
  } = formMethods;

  const handleCreateNewPost = handleSubmit(async (dataJSON) => {
    console.log(dataJSON);
    // reset();
    // setImageFiles([]);

    const formData = new FormData();

    formData.append("postCaption", dataJSON?.postCaption);

    if (dataJSON?.files.length > 0) {
      dataJSON?.files?.map((singleFile) => {
        formData.append("file", singleFile);
      });
    }

    try {
      const resp = await axios.post("api/posts", formData);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <FormProvider {...formMethods}>
      <form>
        <div className="mt-5 flex border-b border-gray-300 pb-10">
          <div className="image w-[10%]">
            <img
              src={session?.user?.image || avatarURL}
              className="h-10 w-10 rounded-full bg-red-500"
            />
          </div>

          <div className="ml-2 flex w-[90%] flex-col gap-4">
            <NewPostInput />

            <div className="flex items-start justify-between">
              <UploadImage />
              <button
                onClick={handleCreateNewPost}
                disabled={!isValid}
                className="cursor-pointer rounded-lg bg-blue-500 px-6 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-[0.5]"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
export default CreateNewPost;
