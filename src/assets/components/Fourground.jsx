import React, { useRef } from "react";
import Card from "./card";

const Fourground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "Hi I am Srizon.I know HTML CSS JAVASCRIPT , TailWindCss , Gsap. now I am still learning React",
      fileSize: ".9mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit sapiente.",
      fileSize: ".8mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit sapiente.",
      fileSize: ".8mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Fourground;
