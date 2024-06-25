"use client";

import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

const Icons = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="icons mt-3 flex w-full items-center justify-start gap-5">
      <FaRegComment
        cursor={"pointer"}
        className="h-5 w-5 rounded-full transition-all duration-150 hover:text-blue-500"
      />
      {isLiked ? (
        <div className="flex items-center gap-1">
          <FaRegHeart
            cursor={"pointer"}
            className="h-5 w-5 rounded-full transition-all duration-150 hover:text-red-500"
            onClick={handleLike}
          />
          2
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <FaHeart
            cursor={"pointer"}
            className="h-5 w-5 rounded-full text-red-600 transition-all duration-150 hover:text-red-500"
            onClick={handleLike}
          />{" "}
          2
        </div>
      )}
    </div>
  );
};
export default Icons;
