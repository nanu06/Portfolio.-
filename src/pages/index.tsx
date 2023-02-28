import Head from "next/head";
import Link from "next/link";

import Header from "../../components/Header";
import About from "../../components/About";
import Hero from "../../components/Hero";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import ContactMe from "../../components/ContactMe";
import Image from "next/image";
import image1 from '../images/image1.jpg'
// import { GetStaticProps } from "next";
// import { PageInfo, Project, Skill, Social } from "../../typing";
// import { fetchPageInfo } from "../../utils/fetchPageInfo";
// import { fetchSkills } from "../../utils/fetchSkills";
// import { fetchProjects } from "../../utils/fetchProjects";
// import { fetchSocials } from "../../utils/fetchSocials";

// type Props = {
//   // pageInfo: PageInfo;
//   skills: Skill[];
//   projects: Project[];
//   socials: Social[];
// };



const Home=()=> {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Nanu-Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div
            className="flex items-center justify-center 
          "
          >
          
            <Image

              className=" rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={image1}
              alt=""
              width={10}
              height={10}
            />
          </div>
        </footer>
      </Link>
    </div>
  );
  
}
export default Home
// export const getStaticProps: GetStaticProps<Props> = async () => {
 
//   const skills: Skill[] = await fetchSkills();
//   const projects: Project []= await fetchProjects();
//   const socials: Social[] = await fetchSocials();

//   return{
//     props:{
    
//       skills,
//       projects,
//       socials
//     }
//   }
// };