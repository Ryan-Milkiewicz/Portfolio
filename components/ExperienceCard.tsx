import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg  items-center space-y-7 flex-shrink-0 
    w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
       <motion.img
    initial={{
        y: -100,
        opacity: 0,
    }}
    transition={{ duration: 1.2 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 xl:w-[200px] xl:h-[200px] 
               rounded-full object-cover object-center"
    src={urlFor(experience?.companyImage).url()}
    alt=""
/>


            <div className="px-0 md:px-10">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-light">{experience.company}</h4>
                <p className="font-bold text-2xl mt-1">{experience.jobTitle}</p>
                <div className="flex space-x-2 my-2">
                    {experience.technologies.map(technology => (
                        <Image
                            unoptimized
                            key={technology._id}
                            className="h-10 w-10 rounded-full"
                            src={urlFor(technology.image).url()}
                            height={10}
                            width={10}
                            alt='technologyImage'
                        />
                    ))}
                </div>
              
                <p className="uppercase py-5 text-gray-200">
                    {new Date(experience.dateStarted).toDateString()} -{" "}
                    {experience.isCurrentlyWorkingHere 
                        ? "Present" 
                        : new Date(experience.dateEnded).toDateString()}
                </p>

                <ul className="list-disc space-y-4 ml-5 text-lg">
                    {experience.points.map((points, i)=> (
                        <li key={i}>{points}</li>
                    ))}
                </ul>
            </div>
    </article>
  );
}