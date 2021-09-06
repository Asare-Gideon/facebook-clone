import { facebookLoader, loader } from "../utlls";
import Image from "next/image";

function SidebarRow({ Icon, src, title, size }) {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      {Icon && <Icon className="h-5 w-5 sm:w-8 sm:h-8 text-blue-500" />}
      {src && (
        <Image
          loader={facebookLoader}
          src={src}
          width={size ? size : 30}
          height={size ? size : 30}
          objectFit="contain"
          className="rounded-full cursor-pointer"
        />
      )}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
}

export default SidebarRow;
