import Storycard from "./Storycard";

const stories = [
  {
    name: "Asare Gideon",
    src: "https://res.cloudinary.com/majesty1/image/upload/v1630389396/gideon_ouszsl.jpg",
    profile:
      "https://res.cloudinary.com/majesty1/image/upload/v1630389640/waja_zxpuli.jpg",
  },
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
    name: "Florence Agyetey",
    src: "https://res.cloudinary.com/majesty1/image/upload/v1630389709/girl_klvzoe.jpg",
    profile:
      "https://res.cloudinary.com/majesty1/image/upload/v1630389266/musk_gmdbrd.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story, index) => (
        <Storycard
          key={index}
          name={story.name}
          profile={story.profile}
          src={story.src}
        />
      ))}
    </div>
  );
}

export default Stories;
