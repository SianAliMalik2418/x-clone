import PostCard from "./createNewPost/PostCard";

const PostsFeed = () => {
  return (
    <div className="mt-4 flex flex-col gap-28  pb-10">
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};
export default PostsFeed;
