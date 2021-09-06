import Postcontent from "./Postcontent";
import { db } from "../firebase";
import { useEffect, useState } from "react";

function Post() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection("post")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  console.log(post);

  return (
    <div>
      {post.map((doc) => (
        <Postcontent
          key={doc.id}
          name={doc.data.name}
          timestamp={doc.data.timestamp}
          message={doc.data.message}
          image={doc.data.image}
          postImage={doc.data.postImageUrl}
          email={doc.data.email}
        />
      ))}
    </div>
  );
}

export default Post;
