import React from "react";
import photo from '../assets/photo2.jpg'

import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-col max-w-7xl px-10 justify-evenly
    mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>

      <motion.img

        src="https://mail.google.com/mail/u/0?ui=2&ik=216766acda&attid=0.1&permmsgid=msg-a:r187031596088306763&th=18683bc986b01272&view=att&disp=safe&realattid=18683bc496b42f64ed11"
        className="absolute top-[30%] mb-20 rounded-full h-28 w-28 md:w-56 md:h-56  mx-auto object-cover "
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
      />
      <div className="space-y-10 px-0 md:px-10 text-center " style={{marginTop:"25rem"}}>
        <h4 className="text-4xl font-semibold ">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50 ">little </span>{" "}
          background
        </h4>
        <p className="text-base ">
          I am a software developer with a strong focus on web development. My
          passion for technology drives me to constantly improve and stay
          current with the latest industry trends. I am dedicated to delivering
          high-quality results that meet the needs of my clients and bring their
          ideas to life. With my knowledge and skills in web development, I am
          confident in my ability to create innovative solutions and bring
          projects to completion. I approach each task with a positive attitude
          and a desire to continuously grow and learn in this ever-evolving
          field.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
