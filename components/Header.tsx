import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-30 xl:items-center ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social ICons */}
        <SocialIcon
          url="https://www.linkedin.com/in/balwinder-singh-nanu/"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://github.com/nanu06"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://www.instagram.com/0.nanu.0/"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://twitter.com/Nanu006"
          bgColor="transparent"
          fgColor="gray"
        />
       
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          network="email"
          className="cursor-pointer"
          bgColor="transparent"
          fgColor="gray"
        />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
