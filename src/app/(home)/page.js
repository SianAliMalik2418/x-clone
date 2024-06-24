import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

import NewPost from "@/components/createNewPost/CreateNewPost";

export default async function Home() {
  // Cant use client while using server session.
  const session = await getServerSession(authOptions);

  return (
    <div className="flex min-h-screen w-[40%] flex-col border-x-2 border-gray-400 px-3">
      {/* Header */}

      <span className="w-full border-b border-gray-500 py-3 text-2xl font-bold">
        Home
      </span>

      {session ? <NewPost /> : ""}
    </div>
  );
}
