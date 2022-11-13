import React from "react";
import { motion } from "framer-motion";

const Card = ({ source }) => {
  return (
    <motion.div
      className={`relative w-[300px]  h-96 flex flex-col bg-white rounded-lg shadow-2xl p-2`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, delay: source.delay }}
    >
      <div className="relative w-full h-[20%] flex justify-start items-center ">
        <span className="relative left-3 w-[6px] rounded-full h-12 bg-purple"></span>
        <div className="relative left-5 flex flex-col justify-center items-start">
          <h1 className="text-xl font-leaguespartan">{source.title}</h1>
          <h3 className="text-sm font-pacifico">{source.subtitle}</h3>
        </div>
      </div>
      <div className="relative w-full h-[48%] px-3 py-5">
        <div className="relative w-full h-full rounded-lg bg-lightWhite truncate">
          <img className="relative w-full h-full" src={source.img} />
        </div>
      </div>
      <div className="relative w-full h-[32%] px-3 py-1  font-leaguespartan">
        <p>
          {source.description}
          <a href={source.link} target="_blank" className="text-purple">
            {" "}
            Watch the live demo{" "}
          </a>{" "}
          of this project here.
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
