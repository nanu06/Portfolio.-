

import React from "react";
import { motion } from "framer-motion";
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import Image from 'next/image'

type Props = {};

type Project = {
  id: number;
  name: string;
  image: any;
  description: string;
};

const projects:Project[]= [
  {
    id: 1,
    name: "Share-Me",
    image:project3,
    description: "Share Me is an application that allows users to share and categorize images on the internet. Users can log in using their Google ID, and once logged in, they can upload images and categorize them based on different categories. The application also provides a filtering feature that allows users to filter the images based on their category. Overall, Share Me is a user-friendly platform that simplifies the process of sharing and organizing images on the internet.",
  },
  {
    id: 2,
    name: "DALL-E Clone",
    image: project5,
    description: "Dalle Clone is an AI-powered image generation app built on the MERN stack. Using the OpenAI API, users can generate unique images and share them on the app. The app offers various customization options for image generation, and users can also categorize and filter images based on their preferences. With Dalle Clone, users can explore the possibilities of AI-generated art and share their creations with others on the platform.",
  },
  {
    id: 3,
    name: "Amazon CLone ",
    image: project1,
    description: "The Amazon Clone project is a web application that emulates the functionality of Amazon's online store. Users can add items to their shopping cart and see the total price of their order adjust accordingly.",
  },
  {
    id: 4,
    name: "Meetup App",
    image: project2,
    description: "This app is a meetup management system that allows users to add meetups along with their photos and location. Users can easily add new meetups, view them, and even mark them as favorites. The app provides basic functionality to remove meetups from the favorites list as well. With a simple user interface, it is easy to add new meetups, view their details, and organize them for future events. Overall, this app is perfect for individuals and organizations who need a simple yet effective way to manage meetups and events.",
  },
  {
    id: 5,
    name: "Portfolio",
    image: project4,
    description: "The portfolio app is a personal website that showcases an individual's skills, projects, and experiences. It typically includes a homepage, an about page, a portfolio page, a blog, and a contact page. The purpose of the app is to provide an online presence for the individual and to showcase their work to potential clients or employers. It is often used by freelancers, creatives, and professionals to establish their personal brand and attract new opportunities.",
  },
];

const Projects = (props: Props) => {
  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>
      <div className="relative w-full flex flex-grow-1 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.div
              initial={{y:-300,opacity:0}}
              transition={{duration:1.2}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              
             
              style={{ marginTop: "8rem", width:'50%',zIndex:'1' }}
              className='h-68 w-68 md:h-65 md:w-65 '
            >
              <Image
              src={project.image}    
              alt=""          
              />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center mb-0 pb-0">
                <span className="underline decoration-[#F7AB0A]/50">
                   {i + 1} of {projects.length} :
                </span>{" "}
                {project.name}
              </h4>
              <p className="text-base text-center md:text-left mt-0 pt-0">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 "></div>
    </motion.div>
  );
};

export default Projects;
