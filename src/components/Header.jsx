import React, { useState } from 'react'
import Switch from './Switch'
import Navbar from './Navbar';
import { BiSolidPlaneLand, BiSolidPlaneTakeOff } from "react-icons/bi";

const Header = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='sticky top-0 z-10'>
            <Navbar toggle={toggle} setToggle={setToggle} />
            <div className='shadow-md py-3 sm:py-4 bg-white dark:bg-slate-900 dark:text-sky-500'>
                <div className="main-container">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl sm:text-4xl font-bold">Co-Pilot</h1>
                        <div className="flex gap-1 sm:gap-3">
                            <Switch />
                            <button onClick={() => setToggle(!toggle)}>
                                {toggle ? <BiSolidPlaneTakeOff className='w-10 h-10 text-amber-500'/> : <BiSolidPlaneLand className='w-10 h-10 text-amber-500' />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header