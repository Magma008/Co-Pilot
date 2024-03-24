import React, { useState } from 'react'
import image1 from "../../public/Images/pilot1.jpg"
import Module from './Module'

const Footer = () => {
    const [open, setOpen] = useState(false)
    return (
        <div id="opinion">
            <div className='py-6'>
                <div className="main-container">
                    <div className="flex flex-col sm:flex-row">
                        <div className="w-full overflow-hidden rounded-md border-black/60 dark:border-slate-500 border-2 md:w-[50%]">
                            <img src={image1} alt="pilot" className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="text p-4 py-5 w-full md:w-[50%] flex flex-col justify-between border-black">
                            <p className="text-lg font-medium dark:text-white">Although the airline industry is highly competitive, the competition among aircraft suppliers is relatively limited. Lesser-known makers of large passenger airplanes are attempting to build a more significant presence on the world's stage. Still, in the large commercial aircraft market, there are just two major players: the U.S.-based Boeing (BA) and the Airbus Group (EADSY), formerly known as the European Aeronautic Defense and Space Company (EADS).</p>
                            <div className="flex justify-end mt-4">
                                <button onClick={() => setOpen(!open)} className="transtion-all duration-300 hover:bg-red-500 py-1 px-5 border-2 text-red-500 font-medium hover:text-black border-red-500 dark:hover:text-white">Feedback</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Module open={open} setOpen={setOpen} />
        </div>
    )
}

export default Footer