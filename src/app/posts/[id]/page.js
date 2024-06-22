import { IoArrowBack } from "react-icons/io5";
const SinglePostPage = ({ params }) => {
  return (
    <div className="flex min-h-screen w-[40%] flex-col border-x-2 border-gray-400 px-3">
      <span className="flex w-full items-center gap-4 border-b border-gray-500 py-4 text-xl font-bold">
        <IoArrowBack className="text-xl" />
        Back
      </span>
      SinglePostPage for {params.id}
    </div>
  );
};
export default SinglePostPage;
