import React from "react";
import { FaRegFileCode } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { RiCloseFill } from "react-icons/ri";
import { motion } from "framer-motion";
function card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      className="relative flex-shrink-0 w-60 h-80 bg-zinc-900/90 rounded-[50px] text-white overflow-hidden p-8 py-10 px-5"
    >
      <FaRegFileCode />
      <p className="text-xs mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-[40px] left-0 w-full h-12">
        <div className="flex items-center justify-between py-3 px-10">
          <h5>{data.fileSize}</h5>
          <span className="w-6 h-6 bg-sky-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <LuDownload size={".9rem"} color="#fff" />
            ) : (
              <RiCloseFill size={".9rem"} color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen ? (
          <div
            className={`tag w-full h-10 bg-green-600 flex items-center justify-center text-[#000]`}
          >
            <h3>{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default card;
// বীজ ভালো তার ফসল ভালো।।
// দুধ ভালো তার ঘি।।
// বাপ ভালো তার ছেলে ভালো।।
// মা ভালো তার জি।।
