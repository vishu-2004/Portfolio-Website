import React from 'react'
import html from '../assets/html.png'
import java from '../assets/java.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import sql from '../assets/sql.png'
import react from '../assets/react.png'
import expo from '../assets/expo.png'
import cpp from '../assets/cpp.png'



const Skills = () => {
  return (
    <div className='font-title flex flex-col  bg-primaryLightBlue mt-20 px-8 pt-8 pb-8 items-center justify-center'>
        <div><p className='font-semibold text-[27px] text-primaryDarkBlue'>Skills</p></div>
        <div><h2 className='text-[35px] ml-4 font-bold'>What I am capable of?</h2></div>
        <div className=' mt-4 gap-x-5 flex flex-row'>
            <img src={html} className='h-[90px]' />
            <img src={css} className='h-[90px]' />
            <img src={react} className='h-[90px]' />
            <img src={expo} className='h-[90px]' />
            <img src={tailwind} className='h-[90px]' />
            <img src={cpp} className='h-[90px]' />
            <img src={java} className='h-[90px] ml-2' />
            <img src={sql} className='h-[90px] ml-2' />

            

        </div>
        
        

    </div>
  )
}

export default Skills;