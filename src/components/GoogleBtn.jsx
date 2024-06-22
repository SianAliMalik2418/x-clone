"use client";

import { signIn, signOut } from "next-auth/react";

const GoogleBtn = ({ session }) => {
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
          onClick={() => signIn("google")}
          className="mt-2 rounded-lg bg-blue-500 px-20 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Sign In
        </button>
      )}
    </>
  );
};
export default GoogleBtn;
