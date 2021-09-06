import Image from "next/image";
import { loader } from "../utlls";

function Storycard({ name, src, profile }) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-60 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <Image
        loader={loader}
        src={profile}
        height={40}
        width={40}
        objectFit="contain"
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 t-10"
      />
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        layout="fill"
      />
      <p
        className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate
                "
      >
        {name}
      </p>
    </div>
  );
}

export default Storycard;
