import React from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    skill: Skill;
    directionLeft?: boolean;
}

function Skill({ skill, directionLeft}: Props) {
  return (
    <div className="group relative flex justify-center items-center p-2 sm:p-4">
  <motion.img
    initial={{
      x: directionLeft ? -200 : 200,
      opacity: 0,
    }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    src={urlFor(skill?.image).url()}
    className="rounded-full border border-gray-500 object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
               lg:w-28 lg:h-28 xl:w-32 xl:h-32 filter transition duration-300 ease-in-out"
  />
</div>
  );
}

export default Skill