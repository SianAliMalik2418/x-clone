import UploadImage from "@/components/UploadImage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { avatarURL } from "@/lib/utils";
import NewPostInput from "@/components/newPostInput";

export default async function Home() {
  // Cant use client while using server session.
  const session = await getServerSession(authOptions);
  console.log(session);

  

  return (
    <div className="flex min-h-screen w-[40%] flex-col border-x-2 border-gray-400 px-3">
      {/* Header */}

      <span className="w-full border-b border-gray-500 py-3 text-2xl font-bold">
        Home
      </span>

      {session ? (
        <div className="mt-5 flex border-b border-gray-300 pb-10">
          <div className="image w-[10%]">
            <img
              src={session?.user?.image || avatarURL}
              className="h-10 w-10 rounded-full bg-red-500"
            />
          </div>

          <div className="ml-2 flex w-[90%] flex-col gap-4">
            <NewPostInput />

            <div className="flex items-center justify-between">
              <UploadImage />
              <button
                disabled
                className="cursor-pointer rounded-lg bg-blue-500 px-6 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-[0.5]"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
