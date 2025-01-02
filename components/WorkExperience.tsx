import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row 
               max-w-full px-5 sm:px-10 justify-evenly mx-auto items-center"
  >
    {/* Heading */}
    <h3 className="absolute top-10 sm:top-16 md:top-20 lg:top-24 uppercase tracking-[10px] sm:tracking-[15px] md:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl">
      Experience
    </h3>
  
    {/* Content Container */}
    <div className="w-full flex flex-wrap sm:flex-nowrap space-y-5 sm:space-y-0 sm:space-x-5 overflow-x-auto sm:overflow-x-scroll 
                    p-5 sm:p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      {experiences?.map((experience) => (
        <ExperienceCard key={experience._id} experience={experience} />
      ))}
    </div>
  </motion.div>
  )
}