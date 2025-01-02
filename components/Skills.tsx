import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as SkillType } from '../typings';

type Props = {
  skills: SkillType[];
}

export default function Skills({ skills }: Props) {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.5 }}
  className="flex relative flex-col text-center md:text-left xl:flex-row
             max-w-[2000px] xl:px-10 min-h-screen justify-center space-y-10 xl:space-y-0 mx-auto items-center"
>
  {/* Heading */}
  <h3
    className="absolute top-10 sm:top-16 lg:top-20 uppercase tracking-[10px] sm:tracking-[15px] lg:tracking-[20px] text-gray-500 text-lg sm:text-xl lg:text-2xl">
    Skills
  </h3>

  {/* Skills Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 px-5 sm:px-10">
    {skills?.slice(0, skills.length / 2).map((skill) => (
      <Skill key={skill._id} skill={skill} />
    ))}

    {skills?.slice(skills.length / 2, skills.length).map((skill) => (
      <Skill key={skill._id} skill={skill} directionLeft />
    ))}
  </div>
</motion.div>
  );
}