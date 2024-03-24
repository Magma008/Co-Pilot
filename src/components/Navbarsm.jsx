import React, { useState } from 'react'
import { RiCloseCircleFill } from "react-icons/ri";
import { ImHome } from "react-icons/im";
import { FcAbout } from "react-icons/fc";
import { IoAirplane } from "react-icons/io5";
import { MdEventNote } from "react-icons/md";
import Switch from './Switch';



const Navbarsm = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='fixed top-4 z-10 right-4 '>
            <div className="flex flex-col gap-2 items-center">
                <button onClick={() => setToggle(!toggle)}>
                    <RiCloseCircleFill className={`w-9 h-9 ${toggle ? "rotate-90 text-amber-500" : "-rotate-90 text-sky-500"} transition-all duration-300`} />
                </button>
                <div className={`flex px-1 bg-green-500/45 backdrop-blur-lg ${toggle ? "h-[336px] py-2" : "h-0"} transition-all flex-col overflow-hidden duration-300 rounded-sm gap-5 items-center`}>
                    <button>
                        <a href="#" className='flex flex-col items-center text-white dark:text-fuchsia-300'>
                            <ImHome className='w-8 h-8 text-indigo-600' />
                            <p className="text-sm">Home</p>
                        </a>
                    </button>
                    <button>
                        <a href="#about" className='flex flex-col items-center text-white dark:text-fuchsia-300'>
                            <FcAbout className='w-8 h-8' />
                            <p className="text-sm">About</p>
                        </a>
                    </button>
                    <button>
                        <a href="#planes" className='flex flex-col items-center text-white dark:text-fuchsia-300'>
                            <IoAirplane className='w-8 h-8 text-amber-500' />
                            <p className="text-sm">Planes</p>
                        </a>
                    </button>
                    <button>
                        <a href="#opinion" className='flex flex-col items-center text-white dark:text-fuchsia-300'>
                            <MdEventNote className='w-8 h-8 text-red-500' />
                            <p className="text-sm">Opinion</p>
                        </a>
                    </button>
                    <Switch />
                </div>
            </div>
        </div>
    )
}

export default Navbarsm