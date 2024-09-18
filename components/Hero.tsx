import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { MdOutlineArrowOutward } from "react-icons/md";
import MagicAvatar from './ui/MagicAvatar';
import { BackgroundLines } from './ui/BackGroundlines';
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from './ui/Textreveal';
import { AnimatedTooltip } from './ui/Animatetooltip';

function Hero() {
  return (
    <div className='pb-20 pt-5 flex  z-10'
    >
        <div>
            <Spotlight  className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"/>
           <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

       


        <div className="md:h-screen w-full h-[130vh] dark:bg-black-100 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.03] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
   
       </div>

       <div className="flex justify-center items-center relative  z-10">

        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col md:flex-row items-center justify-center">
          {/* <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2> */}
          <div className='flex flex-col items-center justify-center'>

          <TextGenerateEffect
  words="Crafting Scalable and Innovative Solutions for the Modern Web"
  className="text-center text-[40px] md:text-5xl lg:text-6xl"
/>

<div className='sm:block md:hidden'>
   <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
   <MagicAvatar/>
   
    </BackgroundLines>
 
</div>


{/* <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight"> */}
      {/* Hi! I&apos;m Manish */}
    <div className='flex justify-center items-center'>

      <TextRevealCard
        revealText="Turning innovative ideas into impactful digital solutions."
        text="Hi! I&apos;m Manish"
        className='text-center ' 
      >
      </TextRevealCard>
    </div>
     

      {/* </h2> */}
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
       A Full-Stack Developer skilled in creating dynamic web applications. I thrive on turning ideas into reality, building robust solutions, and embracing every new technology challenge.
      
      </p>
         
  
      </div>
     
  

        </div>  
 
        </div>
        <div className='md:block hidden'>
   <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
   <MagicAvatar/>
   
   
    </BackgroundLines>
 
</div>
        
    </div>
  )
}

export default Hero