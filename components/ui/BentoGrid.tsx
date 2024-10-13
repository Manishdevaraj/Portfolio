"use client";

import { cn } from "@/utils/cn";
import { GlobeDemo } from "./GridGlobe";

import { AnimatedTooltip } from "./Animatetooltip";
import { Vortex } from "./Vortex";
import Lottie from "react-lottie";
import { useState } from "react";

import animationData from '@/data/confetti.json';
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
 
  id,
  imgClassName,
  titleClassName,
  img,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  imgClassName?: string;
  titleClassName?: string;
  img?: string;
  spareImg?:string;
}) => {
  


  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "manishdevaraj03@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  
  return (
    <div
      className={cn(
        "row-span-1 relative  rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none   justify-between flex flex-col space-y-4 border-white/[0.1] mb-7 overflow-hidden md:overflow-visible",
        className
      )}
      style={{
      
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >

 <div className={`h-full overflow-visible ${id===2&&'overflow-hidden'}`}>
          {id==2&&(<GlobeDemo/>)}
        {id==6&&<div className='flex justify-center w-full h-full'>
          <Vortex
        // backgroundColor="black"
        className="flex items-center flex-col  p w-full h-full "
      >
       <div  className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 w-full  transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}>

<div className=" font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          
          <div
            className={`font-sans text-lg text-white  text-center lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>
          



         
    </div>
    <div className=" relative">
    <div
                className={`absolute right-0 ${copied ? "block" : "block"
                  }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
    </div>
        
      </Vortex>
          </div>}
         
       

{id === 3 && (
   <div className="h-full">
    <div  className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative  flex flex-col text-white group-hover/bento:text-transparent"
          )}>


          
          <div
            className={`font-sans text-lg 
              lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>
          



         
    </div>
      <AnimatedTooltip/>
    </div>
  
)}

{/* --------------title and description---- */}
        {(id!=3&&id!=6)&&<div  className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}>

<div className=" font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          
          <div
            className={`font-sans text-lg text-white lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>
          



         
    </div>
        }
        
     
      {/* <BackgroundBeams/> */}
    
      </div> 
      
    </div>
  );
};
