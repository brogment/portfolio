"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                >
                    <Image 
                        src='/bird.jpg' 
                        alt='William Portrait' 
                        width={192} 
                        height={192} 
                        quality={95} 
                        priority={true}
                        className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
                        <motion.span className='absolute bottom-0 right-0 text-4xl'
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 125,
                                delay: 0.1,
                                duration: 0.7
                            }}    
                        >👋</motion.span>
                </motion.div>
            </div>
        </div>
        <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        >
            <span className='font-bold'>Hello, I'm William. </span> 
            I'm an aspiring 
            <span className='font-bold'> Software Engineer. </span>
            I enjoy building 
            <span className="italic"> sites & apps. </span>
            My focus is 
            <span className="font-bold"> full-stack development </span> 
            using modern web technolgies like{" "}
            <span className="underline">React (Next.JS), Angular, and Spring Boot.</span>
        </motion.p>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.1
        }}
        >
            <Link href="#contact"
            className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110
            hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
                Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
            </Link>

            <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full
            outline-none focus:scale-110 hover:scale-110  active:scale-105 transition border border-black/10'
            href='/CV.pdf' download={true}>
                Download CV <HiDownload className='opacity-70 group-hover:translate-y-1 transition'/>
            </a>

            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full 
            focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-[1.15] transition border border-black/10'
            href='https://www.linkedin.com/in/william-brown-aa04a4238/' target='_blank'>
                <BsLinkedin/>
            </a>

            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full
            focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-[1.15] transition border border-black/10'
            href='https://www.github.com/brogment' target='_blank'>
                <FaGithubSquare/>
            </a>
        </motion.div>
    </section>
  )
}