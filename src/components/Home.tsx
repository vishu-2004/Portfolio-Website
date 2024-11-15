import React from 'react'
import Image from '../assets/image.png';
import BackGround from '../assets/ImageBack.png'
import cloud from '../assets/Download from the Cloud.png'

const Home = () => {
    return (
        <div className='flex bg-primaryLightBlue mt-10 items-center font-title p-10 px-24 justify-center  min-h-screen w-full  '>
            <div className='flex flex-row gap-x-20 font-normal '>
                <div className='flex-col w-[62%]'>
                    <p className='text-primaryDarkBlue text-[20px] '>Hi Everyone, I am</p>
                    <p className='font-bold text-[38px]' > Vishal Shitole</p>
                    <p className='text-[15px]'>Crafting seamless mobile experiences with React Native and React. I turn ideas into functional, engaging apps that delight users and solve real-world problems. Let’s build something amazing together!</p>
                    <div className='flex flex-row gap-x-7 mt-6 '>
                        <div className='flex-row flex items-center gap-x-4 justify-center bg-primaryDarkBlue  h-[58px] w-[260px] rounded-lg '>
                            <button
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = '/VishalShitoleResume.pdf'; 
                                    link.download = 'Vishal_Shitole_Resume.pdf'; 
                                    link.click();
                                }}
                                className='text-white'
                            >
                                Download Resume
                            </button>

                            <img src={cloud} className='w-[30px] h-[30px]' />
                        </div>
                        <button className=' h-[58px] w-[260px] border-[2px] border-primaryDarkBlue rounded-lg text-primaryDarkBlue' style={{
                            backgroundColor: 'rgba(79, 123, 157, 0.1)'
                        }}>Explore More </button>
                    </div>
                </div>
                <div className='flex w-[34%] mr-8'>
                    <img src={BackGround} alt="image" className='h-[280px] w-[360px]' />
                    <img src={Image} alt="image" className='z-10 absolute top-6 right-24 h-[430px]  ' />
                </div>
            </div>
        </div>
    )
}

export default Home;