import { signIn } from "next-auth/client";
import Image from "next/image";
import loader from "../utlls";

function Login() {
  return (
    <div className="grid h-screen place-items-center ">
      <div>
        <Image
          loader={loader}
          src="https://res.cloudinary.com/majesty1/image/upload/v1630197468/faceicon_z6ufmk.png"
          width={300}
          height={300}
          objectFit="contain"
        />
        <h1
          onClick={signIn}
          className="bg-blue-500 mt-20 rounded-full text-white p-5 text-center cursor-pointer"
        >
          login with facebook
        </h1>
      </div>
    </div>
  );
}

export default Login;
