import React from 'react'
import portfolio from '../assets/portfolio.png'
import athena from '../assets/athena.png'
import recipeapp from '../assets/recipeapp.png'

const Projects = () => {
    return (
        <div className='font-title flex flex-col  bg-white  pt-12 items-center justify-center'>
            <div><p className='font-semibold text-[27px] text-primaryDarkBlue'>Projects</p></div>
            <div><h2 className='text-[35px] ml-4 font-bold'>What I have made?</h2></div>

            <div className='flex flex-row gap-x-3 mt-6'>
                <div className='w-[373px] flex flex-col h-[390px] rounded-xl bg-white' style={{
                    borderRadius: '8px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 12px rgba(0, 0, 0, 0.1)'
                }}>
                    <div className='p-1 pt-2'>
                        <img src={portfolio} alt="" className='h-[198px] w-full' />

                    </div>
                    <div className='p-6 pt-3'>
                        <p className='text-[18px] font-semibold'>Portfolio Website</p>
                        <p className='text-[13px] text-gray-700'> Created a responsive and visually engaging website using React, Tailwind CSS, and TypeScript. The site showcases dynamic features, modern UI components, and seamless functionality for an enhanced user experience.

                        </p>
                        <a href="https://github.com/vishu-2004/Portfolio-Website" target="_blank" rel="noopener noreferrer">
                            <p className='mt-2 underline text-[14px] font-semibold text-primaryDarkBlue'>
                                GitHub
                            </p>
                        </a>


                    </div>
                </div>
                <div className='w-[373px] h-[390px] rounded-xl bg-white' style={{
                    borderRadius: '8px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 12px rgba(0, 0, 0, 0.1)'
                }}>
                    <div className='p-1 pt-2'>
                        <img src={recipeapp} alt="" className='h-[198px] w-full' />

                    </div>
                    <div className='p-6 pt-3'>
                        <p className='text-[18px] font-semibold'>Recipe App</p>
                        <p className='text-[13px] text-gray-700'>Tastebuds is a mobile app built with React Native and Expo, utilizing the Spoonacular API.
                            This app includes features such as filtering recipes by category, saving favorite recipes, and searching for recipes effortlessly.
                        </p>
                        <a href="https://github.com/vishu-2004/TasteBuds" target="_blank" rel="noopener noreferrer">
                            <p className='mt-2 underline text-[14px] font-semibold text-primaryDarkBlue'>
                                GitHub
                            </p>
                        </a>
                    </div>

                </div>
                <div className='w-[373px] h-[390px] rounded-xl bg-white' style={{
                    borderRadius: '8px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 12px rgba(0, 0, 0, 0.1)'
                }}>
                    <div className='p-1 pt-2'>
                        <img src={athena} alt="" className='h-[198px] w-full' />

                    </div>
                    <div className='p-6 pt-3 '>
                        <p className='text-[18px] font-semibold'>Iot Gate Control App</p>
                        <p className='text-[13px] text-gray-700'>Designed and developed a robust IoT-based gate control application using React Native and Expo.Implemented role-based access management to enhance security and functionality.
                        </p>
                        <a href="https://github.com/vishu-2004/IoT-Gate-Control-and-Access-management-app" target="_blank" rel="noopener noreferrer">
                            <p className='mt-2 underline text-[14px] font-semibold text-primaryDarkBlue'>
                                GitHub
                            </p>
                        </a>
                    </div>

                </div>



            </div>




        </div>
    )
}

export default Projects;