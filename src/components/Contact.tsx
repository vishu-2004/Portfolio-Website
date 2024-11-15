import React from 'react'
import linkedIn from '../assets/LinkedIn.png'
import insta from '../assets/Instagram.png'
import github from '../assets/GitHub.png'


const Contact = () => {
  return (
    <div className='mt-20 pb-10 font-title bg-primaryLightBlue flex flex-col'>
        <div className='mt-8 ml-16 gap-y-8'>
        <div><p className='font-semibold text-[27px] text-primaryDarkBlue'>Contacts</p></div>
        <div><h2 className='text-[35px]  font-bold'>Get in touch</h2></div>
        <div><p className='text-[17px] font-normal'>vishal.shitole.2004@gmail.com</p></div>
        </div>
        <div className='flex flex-row mt-5 ml-16 gap-x-4'>
            <div><img src={linkedIn} className='h-[40px] w-[40px]'/></div>
            <div><img src={github} className='h-[40px] w-[40px]'/></div>
            <div><img src={insta} className='h-[40px] w-[40px]'/></div>
        </div>
        <p className='mt-12 ml-16'>Copyright © 2024. Developed by Vishal Shitole</p>
    </div>
  )
}

export default Contact;