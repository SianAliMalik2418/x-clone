import NewsCard from "./NewsCard";

const NewsSection = () => {
  return (
    <div className="flex w-[35%] flex-col gap-3 px-4 py-5 pr-20">
      <input
        type="text"
        className="w-full rounded-lg bg-[#F3F4F6] px-3 py-2 placeholder:text-gray-400"
        placeholder="Search..."
      />

      <div className="newsContainer flex flex-col gap-4 bg-[#F3F4F6] px-2 py-3">
        <h1 className="text-xl font-bold text-[#374151]">What's happening</h1>

        <div className="flex flex-col gap-6">
          <NewsCard />
          
        </div>
      </div>
    </div>
  );
};
export default NewsSection;
