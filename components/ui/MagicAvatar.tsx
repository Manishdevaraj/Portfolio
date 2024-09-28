"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { HoverBorderGradient } from './Hoberbtn';
import { FaGithubAlt } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";

function MagicAvatar() {
  return (
    <>
    <div className="relative flex flex-col items-center justify-center w-full ">
      {/* Motion Circle */}
      <motion.svg
        className='absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]'
        fill='transparent'
        viewBox='0 0 506 506'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.circle
          cx='253'
          cy='253'
          r='250'
          stroke='#00ff99'
          strokeWidth='4'
          strokeLinecap='round'
          strokeLinejoin='round'
          initial={{ strokeDasharray: '24 10 0 0' }}
          animate={{
            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
            rotate: [120, 360],
            stroke: ['#00ff99', '#ff0066', '#0099ff', '#ffcc00'],
          }}
          transition={{
            duration: 20,
            repeatType: 'loop',
            ease: 'linear', // Smooth color transitions
          }}
        />
      </motion.svg>

      {/* Image */}
      <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden">
        <Image
          src='/images/t2.jpg'
          fill
          priority
          alt='Avatar'
          className="object-cover"
          quality={100}
        />
      </div>
    </div>
    {/* -------------------buttons----------- */}
      <div className='flex flex-col items-center justify-center gap-6 mt-8 md:mt-20'>
        <div className='flex gap-5'>
        <a href={"https://leetcode.com/u/ManishDevaraj/"} target="_blank" rel="noopener noreferrer" >
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        {/* <AceternityLogo /> */}
        <SiLeetcode className='text-purple' />
       
        <span>Leet Code</span>
      </HoverBorderGradient>
      </a>
      <a href={"https://www.linkedin.com/in/manishdevaraj"} target="_blank" rel="noopener noreferrer" >
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        {/* <AceternityLogo /> */}
        <CiLinkedin className='md:text-2xl text-purple' />
        <span>Linked In</span>
      </HoverBorderGradient>
      </a>
        </div>
          
        <a href={"https://github.com/Manishdevaraj"} target="_blank" rel="noopener noreferrer" >
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        {/* <AceternityLogo /> */}
        <FaGithubAlt className='md:text-lg text-purple'/>
        <span>Git Hub</span>
      </HoverBorderGradient>
      </a>
      </div>
   
    </>
  );
}

export default MagicAvatar;
