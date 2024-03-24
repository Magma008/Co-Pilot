import React from 'react'
import pilot from "../../public/Images/pilot2.avif"

const About = () => {
  return (
    <div id="about" className='py-8'>
        <div className="main-container">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                <div className="image w-full sm:w-[50%]">
                    <img src={pilot} alt="image" className="overflow-hidden rounded-xl border-4 border-gray-500 xxl:w-[558px] xxl:h-[358px] dark:border-sky-500" />
                </div>
                <div className="text w-full sm:w-[50%]">
                    <p className="text-lg sm:text-xl md:text-2xl dark:text-white">Founded in 1986, Co-Pilot is the authoritative, independent, professional news source for the world’s defense decision-makers. In print and online, we provide the global defense community with the latest news and analysis on programs, policy, business and technology. Our bureaus and reporters around the world set the standard for accuracy, credibility and timeliness in defense reporting.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About