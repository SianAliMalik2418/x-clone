"use client";

import { createContext, useContext, useState } from "react";

const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [imageFiles, setImageFiles] = useState([]);

  return (
    <PostContext.Provider value={{ imageFiles, setImageFiles }}>
      {children}
    </PostContext.Provider>
  );
};
export default PostContextProvider;

export const usePostContext = () => {
  const context = useContext(PostContext);
  return context;
};
