import Image from "next/image";
import { loader, facebookLoader } from "../utlls";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { useSession, signout } from "next-auth/client";

function Header() {
  const [session] = useSession();
  console.log(session);
  return (
    <div className="sticky top-0 z-50 bg-white flex  items-center p-2 lg:p-5  shadow-md">
      {/* leftside */}
      <div className="flex items-center">
        <Image
          loader={loader}
          src="https://res.cloudinary.com/majesty1/image/upload/v1630197468/faceicon_z6ufmk.png"
          width={40}
          height={40}
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex flex-shrink items-center bg-transparent ml-2 outline-none placeholder-gray-500"
            type="text"
            placeholder="search facebook"
          />
        </div>
      </div>

      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex  md:space-x-2 space-x-4 sm:space-x-6">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* right */}

      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          loader={facebookLoader}
          src={session.user.image}
          width={40}
          height={40}
          objectFit="contain"
          className="rounded-full cursor-pointer"
          onClick={signout}
        />

        <p className="font-semibold pr-3 whitespace-nowrap">
          {session ? session.user.name : "Majesty"}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
