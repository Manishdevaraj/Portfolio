"use client";

// import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { SiKubernetes } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { SiChakraui } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiCloudflare } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { FaGithub } from "react-icons/fa"; // Import your icons
import { FaAws } from "react-icons/fa6";

export const AnimatedTooltip = () => {
  const icons = [
   
    { id: 1, component: <FaReact className="text-4xl text-blue-500" />, name: 'React', designation: "Frontend Library" },
    { id: 2, component: <TbBrandTailwind className="text-4xl text-blue-300" />, name: 'Tailwind CSS', designation: "CSS Framework" },
    { id: 3, component: <SiChakraui className="text-4xl text-green-300" />, name: 'Chakra UI', designation: "Component Library" },
    { id: 4, component: <SiMui className="text-4xl text-blue-800" />, name: 'Material UI', designation: "Component Library" },
    { id: 5, component: <TbBrandVite className="text-4xl text-yellow-400" />, name: 'Vite', designation: "Build Tool" },
    { id: 6, component: <RiNextjsLine className="text-4xl text-red-600" />, name: 'Next.js', designation: "React Framework" },
    { id: 7, component: <SiExpress className="text-4xl text-green-500" />, name: 'Express', designation: "Web Framework" },
    { id: 8, component: <FaNodeJs className="text-4xl text-green-400" />, name: 'Node.js', designation: "JavaScript Runtime" },
    { id: 9, component: <SiSpringboot className="text-4xl text-green-900" />, name: 'Spring Boot', designation: "Java Framework" },
    { id: 10, component: <SiSocketdotio className="text-4xl text-gray-700" />, name: 'Socket.IO', designation: "Real-time Framework" },
    { id: 11, component: <SiKubernetes className="text-4xl text-sky-500" />, name: 'Kubernetes', designation: "Container Orchestration" },
    { id: 12, component: <FaDocker className="text-4xl text-blue-600" />, name: 'Docker', designation: "Containerization" },
    { id: 13, component: <SiMongodb className="text-4xl text-green-600" />, name: 'MongoDB', designation: "NoSQL Database" },
    { id: 14, component: <SiMysql className="text-4xl text-sky-600" />, name: 'MySQL', designation: "Relational Database" },
    { id: 15, component: <SiFirebase className="text-4xl text-red-900" />, name: 'Firebase', designation: "Backend-as-a-Service" },
    { id: 16, component: <SiCloudflare className="text-4xl text-orange-500" />, name: 'Cloudflare', designation: "Web Infrastructure" },
    { id: 17, component: <FaAws className="text-4xl text-orange-400" />, name: 'AWS', designation: "Cloud Provoider" },
    { id: 18, component: <SiRender className="text-4xl text-black" />, name: 'Render', designation: "Cloud Provider" },
    { id: 19, component: <FaGithub className="text-4xl text-black" />, name: 'GitHub', designation: "Version Control" },
  ];

  const chunkArray = (array:any, chunkSize:any) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const iconRows = chunkArray(icons, 6);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="flex flex-col relative overflow-visible">
      {iconRows.map((row, rowIndex) => (
        <div className="flex gap-5" key={rowIndex}>
          {row.map((item:any) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredIndex(item.id)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative" // Set relative positioning here
            >
              <AnimatePresence mode="popLayout">
                {hoveredIndex === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 10,
                      },
                    }}
                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                    style={{
                      translateX: translateX,
                      rotate: rotate,
                      whiteSpace: "nowrap",
                    }}
                    className="absolute -top-16 right-2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl overflow-visible"
                  >
                    <div className="absolute inset-x-10 z-50 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                    <div className="absolute left-10 w-[40%] z-50 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                    <div className="font-bold text-white relative z-50 text-base">
                      {item.name}
                    </div>
                    <div className="text-white text-xs">{item.designation}</div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div
                onMouseMove={handleMouseMove}
                className="object-cover !m-0 !p-0 h-14 w-14 transition-transform duration-500 hover:scale-105"
              >
                {item.component}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};