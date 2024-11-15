import React from 'react';

interface HeaderProps {
  scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  return (
    <div className='h-[60px] fixed top-0 z-20 w-full border-b-2 border-black flex flex-row items-center justify-center bg-primaryLightBlue'>
      <div>
        <h2 className='font-title font-bold text-[23px]'>Vishal</h2>
      </div>
      <div className='flex-row flex justify-stretch gap-6 ml-[500px]'>
        <h3 onClick={() => scrollToSection('home')} className='font-title font-normal text-[19px] cursor-pointer'>Home</h3>
        <h3 onClick={() => scrollToSection('about')} className='font-title font-normal text-[19px] cursor-pointer'>About</h3>
        <h3 onClick={() => scrollToSection('experience')} className='font-title font-normal text-[19px] cursor-pointer'>Experience</h3>
        <h3 onClick={() => scrollToSection('projects')} className='font-title font-normal text-[19px] cursor-pointer'>Projects</h3>
        <h3 onClick={() => scrollToSection('contact')} className='font-title font-normal text-[19px] cursor-pointer'>Contact</h3>
      </div>
    </div>
  );
};

export default Header;
