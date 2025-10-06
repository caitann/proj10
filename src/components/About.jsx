import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion.js';
import {SectionWrapper} from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max:45,
          scale: 1,
          speed: 450
        }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex
        justify-evenly items-center flex-col'>
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> 
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
     I’m Cait Bobby,a 21 year old creative, currently in my final semester of B.Voc Digital Media and Animation at St. Joseph’s University. I started my journey as a Graphic Designer and Art Director in films, and over time, I expanded into motion graphics and title design. This helped me build a diverse skill set across digital media. As I gained more experience, I took on more active art direction roles in film projects, combining storytelling with technical creativity to bring projects to life. I’m passionate about both art and innovation, and I’m continuously growing as a multimedia artist with a strong focus on 3D art, animation, and motion graphics.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map( (service, index) => (
          <ServiceCard key={service.title}  index={index} {...service}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about");