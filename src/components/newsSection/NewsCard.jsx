"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const NewsCard = () => {
  const [news, setNews] = useState([]);
  const [articleCount, setArticleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNews = async () => {
    try {
      setIsLoading(true);
      const response = await axios(
        "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json",
      );
      setNews(response.data.articles);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="text-center font-bold">Loading...</div>
      ) : (
        <>
          {news.slice(0, articleCount).map((singleNews) => (
            <a
              href={singleNews.url}
              key={singleNews.url}
              className="flex items-center gap-3 px-1 py-2 transition-all duration-150 hover:bg-gray-300"
              target="_blank"
            >
              <div className="flex max-w-[70%] flex-col gap-1">
                <span className="line-clamp-3 text-base font-medium">
                  {singleNews.title}
                </span>
                <span className="text-xs text-gray-400">
                  {singleNews.author}
                </span>
              </div>

              <div className="mzx-w-[30%] h-14 w-20 rounded">
                <img
                  src={singleNews.urlToImage}
                  className="h-full w-full object-cover"
                />
              </div>
            </a>
          ))}
          <span
            className="mt-2 cursor-pointer px-1 py-2 text-blue-500"
            onClick={() => setArticleCount((prev) => prev + 3)}
          >
            Show More...
          </span>
        </>
      )}
    </>
  );
};
export default NewsCard;
