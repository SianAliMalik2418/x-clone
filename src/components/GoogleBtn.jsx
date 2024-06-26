"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const GoogleBtn = ({ session }) => {
  const router = useRouter();

  return (
    <>
      {session ? (
        <button
          onClick={() => signOut()}
          className="mt-2 rounded-lg bg-blue-500 px-20 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => router.push("/api/auth/signin")}
          className="mt-2 rounded-lg bg-blue-500 px-20 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Sign In
        </button>
      )}
    </>
  );
};
export default GoogleBtn;
