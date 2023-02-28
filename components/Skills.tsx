import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import cssLogo from "../assets/cssLogo.png";
type Props = {};

const Skills = (props: Props) => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex relative flex-col text-center md:text-left xl:flex-row max-w[2000px] xl:px-10 h-screen justify-center xl:space-y-0 mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          {" "}
          Skills
        </h3>

        <h3 className="absolute top-[24%]   uppercase tracking-[3px] text-gray-500 text-sm">
          Hover over a skill for current profieciency
        </h3>
        <div style={{ marginTop: "10rem" }} className="grid grid-cols-3 md:grid-cols-4 gap-5  ">
          <Skill
            imageSource=" https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png"
            directionLeft={true}
          />
          <Skill
            imageSource="https://cdn.iconscout.com/icon/free/png-512/css3-9-1175237.png"
            directionLeft={false}
          />
          <Skill
            imageSource="https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png "
            directionLeft={true}
          />
          <Skill
            imageSource="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
            directionLeft={false}
          />{" "}
          <Skill
            imageSource="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg"
            directionLeft={true}
          />
          <Skill
            imageSource="  https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png"
            directionLeft={false}
          />
          <Skill
            imageSource="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
            directionLeft={true}
          />
          <Skill
            imageSource="https://img.icons8.com/color/96/000000/mongodb.png"
            directionLeft={false}
          />
          <Skill
            imageSource=" https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"
            directionLeft={true}
          />
          <Skill
            imageSource=" https://img.icons8.com/color/96/000000/python.png"
            directionLeft={false}
          />
          <Skill
            imageSource="https://img.icons8.com/color/96/000000/c-programming.png"
            directionLeft={true}
          />
          <Skill
            imageSource=" https://img.icons8.com/color/96/000000/c-plus-plus-logo.png"
            directionLeft={false}
          />
          
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
