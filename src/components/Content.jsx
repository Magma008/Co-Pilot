import Lottie from 'lottie-react'
import React from 'react'
import Animation from "../assets/Animation.json"

const Content = () => {
    return (
        <div id='home' className='pt-20 sm:pt-0'>
            <div className="main-container">
                <div className="flex-col flex justify-center min-h-[88.8vh]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-5 sm:gap-0">
                        <div className="text">
                            <p className="text-lg sm:text-xl font-medium dark:text-white">Co-Pilot is an American aerospace, arms, defense, information security, and technology corporation with worldwide interests. It was formed by the merger of Lockheed Corporation with Martin Marietta in March 1995. It is headquartered in North Bethesda, Maryland, in the Washington, D.C. area. As of January 2022, Lockheed Martin employs approximately 115,000 employees worldwide, including about 60,000 engineers and scientists.</p>
                        </div>
                        <div>
                            <div className="img w-full flex justify-center">
                                <Lottie className='xs:w-[18rem] sm:w-[20rem] md:w-[25rem] xs:h-[18rem] sm:h-[20rem] md:h-[25rem] overflow-hidden bd-full-rounded dark:border-white border-4 border-sky-400' animationData={Animation} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content