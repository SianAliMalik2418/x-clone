"use client";

import { useRef } from "react";
import { MdImage } from "react-icons/md";


const UploadImage = () => {
  const imageRef = useRef();

  return (
    <div>
      <input type="file" accept="image/*" className="hidden" ref={imageRef} />
      <div onClick={() => imageRef.current.click()}>
        <MdImage size={25} className="text-sky-500" cursor={"pointer"}/>
      </div>
    </div>
  );
};
export default UploadImage;
