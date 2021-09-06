import Image from "next/image";
import { facebookLoader } from "../utlls";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

function Postcontent({ name, message, email, postImage, image, timestamp }) {
  return (
    <div className="flex flex-col ">
      <div className="p-5 bg-white  mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img src={image} width={40} height={40} className="rounded-full" />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400 ">
              {new Date(timestamp?.toDate()).toLocaleDateString()}
            </p>
          </div>
        </div>
        <p className="p-4">{message} </p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image
            loader={facebookLoader}
            src={postImage}
            objectFit="cover"
            layout="fill"
          />
        </div>
      )}

      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputicon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xl md:text-base ">Like</p>
        </div>
        <div className="inputicon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xl md:text-base">comment</p>
        </div>
        <div className="inputicon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xl md:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Postcontent;
