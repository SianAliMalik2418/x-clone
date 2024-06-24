import Image from "next/image";
import { MdDelete } from "react-icons/md";

const PhotoCard = ({ url , handleDeleteFiles , index }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="relative h-20 w-24  rounded-lg bg-red-600">
        <Image alt="image" src={url} fill className="object-cover" />
      </div>
      <MdDelete color="red" cursor={"pointer"} onClick={() => handleDeleteFiles(index)}/>
    </div>
  );
};
export default PhotoCard;
