import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";

function Widget() {
  const friends = [
    {
      name: "Waja Benjamin",
      src: "https://res.cloudinary.com/majesty1/image/upload/v1630389640/waja_zxpuli.jpg",
      profile:
        "https://res.cloudinary.com/majesty1/image/upload/v1630389396/gideon_ouszsl.jpg",
    },
    {
      name: "Elon Musk",
      src: "https://res.cloudinary.com/majesty1/image/upload/v1630389266/musk_gmdbrd.jpg",
      profile:
        "https://res.cloudinary.com/majesty1/image/upload/v1630389709/girl_klvzoe.jpg",
    },
    {
      name: "Asare Gideon",
      src: "https://res.cloudinary.com/majesty1/image/upload/v1630389396/gideon_ouszsl.jpg",
      profile:
        "https://res.cloudinary.com/majesty1/image/upload/v1630389640/waja_zxpuli.jpg",
    },
    {
      name: "Florence Agyetey",
      src: "https://res.cloudinary.com/majesty1/image/upload/v1630389709/girl_klvzoe.jpg",
      profile:
        "https://res.cloudinary.com/majesty1/image/upload/v1630389266/musk_gmdbrd.jpg",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500">
        <h2 className="text-xl mr-2 ">Contact</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {friends.map((friend) => (
        <SidebarRow src={friend.src} title={friend.name} size={40} />
      ))}
    </div>
  );
}

export default Widget;
