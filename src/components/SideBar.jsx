import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";

const SideBar = () => {
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
          <button className="mt-2 rounded-lg bg-blue-500 px-20 py-2 font-semibold text-white hover:bg-blue-700">
            Sign In
          </button>
        </div>
      </div>

      <div className="flex cursor-pointer items-center gap-3 rounded-lg px-5 py-1 transition-all hover:bg-gray-100">
        <div className="h-10 w-10 rounded-full bg-red-500">{/* PFP  */}</div>
        <div className="g flex flex-col">
          <span className="font-semibold text-gray-600">Sian Malik</span>
          <span className="-mt-1 font-medium text-gray-400">
            @sianmalik2418
          </span>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
