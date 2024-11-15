import React from 'react'
import aboutImg from '../assets/aboutMe.png'

const About = () => {
  return (
    <div className='bg-white flex font-title pb-20 p-7 flex-row'>
      <div className='flex w-[46%] items-center justify-center'>
        <img src={aboutImg} className='h-[450px] w-[450px]' />
      </div>
      <div className='w-[53%] pl-16 pt-8'>
        <p className='text-primaryDarkBlue text-[22px] font-semibold'>About</p>
        <h2 className='text-[37px] font-bold'>About Me?</h2>
        <p className='text-[17px] text-gray-700  font-normal mt-2'>Hi! I’m Vishal Shitole, a passionate React Native and React developer with a knack for building dynamic, user-friendly mobile applications. Beyond coding, I’m a cloud computing enthusiast,exploring ways to integrate cloud technologies in mobile applications for scalable solutions. </p>
        <p className='text-[17px] text-gray-700  font-normal mt-2'>
          I thrive on solving challenging problems, learning cutting-edge technologies, and delivering impactful projects. With a strong foundation in software development and a focus on creating seamless user experiences, I aim to bring value to every project I work on.</p>
          <p className='text-[17px] text-gray-700  font-normal mt-2'>
          When I’m not coding, you’ll find me sharpening my skills, contributing to team collaborations, and brainstorming innovative ideas. Let’s connect and create something extraordinary!</p>
      </div>

    </div>
  )
}

export default About;