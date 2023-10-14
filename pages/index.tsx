import type { GetStaticProps, NextPage } from "next";
import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from "../components/WorkExperience";
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import { Experience, PageInfo, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocial } from "../utils/fetchSocials";
import { fetchExperiences } from "../utils/fetchExperiences";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  // need to add projects
  socials: Social[];
}

const Home = ({pageInfo, experiences, skills, socials}: Props) => {
  //left off at 3:39
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y 
      snap-mandatory overflow-y-scroll overflow-x-hidden z-0
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Ryan's Portfolio</title>
      </Head>

      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>

      {/* Skills */}
        <section id="skills" className="snap-start">
          <Skills skills={skills}/>
        </section>

        {/* Projects */}
        <section id="projects" className="snap-start">
          <Projects />
        </section>

        {/* Contact Me */}
        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
   
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async() => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocial();
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      socials
    },
    // Next.js will attempt to re-generate the page:
    // When a request comes in
    // At most once every 10 seconds
    revalidate: 10,
  };
};
