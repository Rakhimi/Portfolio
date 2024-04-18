'use client'

import React from 'react'
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from 'next/image';

const images = [
  {src:'/images/TypeScript.png', alt:'TypeScript Logo' },
  {src:'/images/React.png', alt:'React Logo' },
  {src:'/images/Next.png', alt:'Next Logo' },
  {src:'/images/Prisma.png', alt:'Prisma Logo' },
]

const HeroSection = () => {
  return (
    <section className="lg:py-10 flex justify-center h-screen">
    <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          
        >


            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className='text-sky-500'>
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Kimi",
                2000,
                "a Web Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-2 lg:text-lg">
            I&apos;m a freelancer from a low cost living standard country that actually speaks good english.
          </p>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-lg">
            I&apos;m flexible with time and a quick learner. Check out my project video
          </p>
          <div className='flex gap-2 bg-gray-400 p-2 rounded-lg w-1/2'>
          {images.map((img, index) => (
            <Image 
            key={index} 
            src={img.src} 
            alt={img.alt} 
            width={50}
            height={50}
            />
          ))}
          </div>

          <div className='mt-10'>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-sky-500 hover:bg-slate-700 text-white"
            >
              Hire Me
            </Link>
          </div>
          </motion.div>
    </section>
  )
}

export default HeroSection