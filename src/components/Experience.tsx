import React from 'react'

const Experience = () => {
  return (
    <div className='bg-primaryLightBlue font-title p-10 flex'>
        <h1 className='text-primaryDarkBlue ml-14 mt-5 text-[35px] font-bold'>Experience</h1>
        
  
  
  <div className="relative -ml-44 mt-28 ">
  
    <div className="absolute h-full border-l-2 border-primaryDarkBlue top-0 left-2" />

    
    <div className="flex items-start mb-8">
    
      <div className="w-4 h-4 bg-primaryDarkBlue rounded-full absolute left-0  " />
      
      <div className="ml-8">
        <p className="text-sm text-gray-500">Feb 2024 - Aug 2024</p>
        <h3 className="text-lg font-semibold">Mobile Application Developer (Intern)</h3>
        <p className="text-gray-600">
        Collaborated with Athena Automation to design and develop the frontend of an IoT-based application for gate control and access management. Streamlined user interfaces for seamless operation of gate opening and closing functionalities. Contributed to enhancing app performance and user experience with modern development practices.
        </p>
      </div>
    </div>

    {/* Experience Item 2 */}
    <div className="flex items-start mb-8">
      {/* Dot Indicator */}
      <div className="w-4 h-4 bg-primaryDarkBlue rounded-full absolute left-0 " />
      
      <div className="ml-8">
        <p className="text-sm text-gray-500">Sep 2024 - Present</p>
        <h3 className="text-lg font-semibold">React Native Developer Intern</h3>
       
        <p className="text-gray-600">
        In this freelancing role, I contributed to two projects, collaborating closely with backend developers to create seamless and responsive user interfaces. Developed the frontend and integrated APIs for a pet management app and an application for farmers, enabling them to buy products and access services like soil testing and crop monitoring. Focused on delivering engaging user experiences and efficient, scalable solutions.
        </p>
      </div>
    </div>

   
      
    
  
</div>


        
    </div>
  )
}

export default Experience;