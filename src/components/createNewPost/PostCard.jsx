import Icons from "./Icons";

const PostCard = () => {
  return (
    <div className="flex h-[30rem] w-full cursor-pointer gap-3 rounded-lg px-3 py-2 transition-all duration-150 ease-linear hover:bg-gray-100">
      <div className="flex w-full flex-col gap-3">
        <div className="username mt-1 flex items-center">
          <div className="h-fit w-16">
            <div className="h-14 w-14 rounded-full bg-green-600"></div>
          </div>
          <h1 className="text-lg font-semibold">
            Sian <span className="text-sm text-gray-500">sian@gmail.com</span>
          </h1>
        </div>

        <div className="postCaption mt-3 text-base">
          Hello New post is here!
        </div>

        <div className="mt-2 flex w-full items-center justify-center">
          <div className="image h-[20rem] w-[90%] rounded-lg bg-orange-600"></div>
        </div>

        <div className="container mx-auto">
          <Icons />
        </div>
      </div>
    </div>
  );
};
export default PostCard;
