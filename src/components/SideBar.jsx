import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import GoogleBtn from "./GoogleBtn";
import { getServerSession } from "next-auth";
import { avatarURL } from "@/lib/utils";

const SideBar = async () => {
  const session = await getServerSession(authOptions);
  console.log(session)

  return (
    <div className="sticky top-0 flex max-h-screen w-[25%] flex-col items-center justify-between py-5">
      <div className="flex flex-col gap-8">
        <Link href={"/"}>
          <FaXTwitter size={40} />
        </Link>

        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <IoMdHome size={25} />
            <h1 className="text-xl font-bold"> Home</h1>
          </div>

          <GoogleBtn session={session} />
        </div>
      </div>

      {session ? (
        <div className="flex cursor-pointer items-center gap-3 rounded-lg px-5 py-1 transition-all delay-200 hover:bg-gray-300">
          <img
            src={`${session?.user.image || avatarURL} `}
            className="h-10 w-10 rounded-full"
          />

          <div className="flex flex-col">
            <span className="font-semibold text-gray-600">
              {session?.user.name || session?.username}
            </span>
            <span className="-mt-1 whitespace-normal font-medium text-gray-400">
              {session?.user.email}
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default SideBar;
