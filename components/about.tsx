"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About', 0.9);
  return (
    <motion.section 
      ref = {ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y:100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175}}
      id='about'
    >
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>
            Welcome to my personal website and showcase of my journey in programming! I'm William A. Brown.
            I starting coding at an early age, as being homeschooled allowed me ample time to pursue various interests.
        </p>
        <p className='mb-3'>
            In January of 2024 I finished my Bachelors of Science in Software Engineering from Western Governors University. Coursework included computer science fundamentals such as data structures 
            and algorithms, calculus, as well as web and mobile app development in the front and back-end, working with databases, and UI and UX design principles.
        </p>
        <p className='mb-3'>
            Since graduating, I've continued maintaining my skills by practicing Leetcode, and working on personal projects, the most recent of which
            is a Chrome extension that adds missing features to the YouTube browsing experience.
        </p>
        <p>
          A key takeaway I learned from being homeschooled, universities going online during COVID-19, and WGU is the ability to self-motivate and do research to solve problems
          even with little guidance or experience with a tool or technology. If you're looking for a developer who can hit the ground running feel free to reach out through
          the contact form on this page. Thanks!
        </p>
    </motion.section>
  )
}
