import { useSession } from "next-auth/client";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase/compat/app";

function Inputbox() {
  const [session] = useSession();
  const input = useRef(null);
  const insertImage = useRef(null);
  const [imagepost, setImagepost] = useState(null);

  const submitPost = (e) => {
    e.preventDefault();
    if (input.current.value === "") return;

    db.collection("post")
      .add({
        message: input.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imagepost) {
          const uploadImage = storage
            .ref(`post/${doc.id}`)
            .putString(imagepost, "data_url");

          removeImage();

          uploadImage.on(
            "state_change",
            null,
            (err) => console.log(err),
            () => {
              storage
                .ref("post")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("post").doc(doc.id).set(
                    {
                      postImageUrl: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    input.current.value = "";
  };

  const handleImageChange = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImagepost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImagepost(null);
    2;
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p4 items-center">
        <Image
          src={session.user.image}
          height={40}
          width={40}
          objectFit="contain"
          className="rounded-full"
          layout="fixed"
        />
        <form action="#" className="flex flex-1">
          <input
            type="text"
            ref={input}
            placeholder={`what's on your mind ${session.user.name}`}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 outline-none"
          />
          <button hidden onClick={submitPost} type="submit"></button>
        </form>

        {imagepost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="h-10 object-contain" src={imagepost} />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly border-t">
        <div className="inputicon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div onClick={() => insertImage.current.click()} className="inputicon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo</p>
          <input
            ref={insertImage}
            onChange={handleImageChange}
            type="file"
            hidden
          />
        </div>

        <div className="inputicon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feelings/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default Inputbox;
