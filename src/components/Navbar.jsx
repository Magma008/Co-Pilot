import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { FaTelegramPlane, FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = ({toggle, setToggle}) => {
  return (
    <div className={`${toggle ? "w-[300px] sm:w-[380px] border-r-4 border-cyan-500" : "w-0"} fixed left-0 dark:bg-white/25 bg-slate-600/35 z-20 overflow-hidden  min-h-screen backdrop-blur-md transition-all duration-300`}>
      <div className='flex flex-col justify-between h-full min-h-screen'>

        <div className="flex flex-col gap-10">

          <div className="flex justify-between p-4">
            <h1 className="text-4xl font-bold text-cyan-500">Co-Pilot</h1>
            <button className={`${toggle ? "rotate-90" : "-rotate-90"} transition-all duration-300`} onClick={() => setToggle(!toggle)}><IoClose className='w-10 h-10 text-red-500' /></button>
          </div>

          <ul className="">
            <li className="transition-all group hover:bg-cyan-500/50 px-4 py-3 hover:pl-6">
              <a href='#home' className='text-lg transition-all dark:group-hover:text-amber-500 dark:text-white group-hover:text-fuchsia-500'>Home</a>
            </li>
            <li className="transition-all group hover:bg-cyan-500/50 px-4 py-3 hover:pl-6">
              <a href='#about' className='text-lg transition-all dark:group-hover:text-amber-500 dark:text-white group-hover:text-fuchsia-500'>About</a>
            </li>
            <li className="transition-all group hover:bg-cyan-500/50 px-4 py-3 hover:pl-6">
              <a href='#planes' className='text-lg transition-all dark:group-hover:text-amber-500 dark:text-white group-hover:text-fuchsia-500'>Planes</a>
            </li>
            <li className="transition-all group hover:bg-cyan-500/50 px-4 py-3 hover:pl-6">
              <a href='#opinion' className='text-lg transition-all dark:group-hover:text-amber-500 dark:text-white group-hover:text-fuchsia-500'>Opinion</a>
            </li>
          </ul>

        </div>

        <div className='flex gap-4 p-4 justify-center'>
          <div className="bg-sky-400/45 dark:border-white border border-slate-800 p-2 rounded-full items-center text-blue-700 transition-all duration-300 hover:scale-75 hover:rotate-90">
            <a href="https://t.me/my_porfolio_links">
              <FaTelegramPlane className='w-8 h-8' />
            </a>
          </div>
          <div className="bg-sky-400/45 text-red-600 dark:border-white border border-slate-800 p-2 rounded-full items-center transition-all duration-300 hover:scale-75 hover:rotate-90">
            <a href="https://www.youtube.com/">
              <FaYoutube className='w-8 h-8' />
            </a>
          </div>
          <div className="bg-sky-400/45 text-sky-700 dark:border-white border border-slate-800 p-2 rounded-full items-center transition-all duration-300 hover:scale-75 hover:rotate-90">
            <a href="https://www.facebook.com/">
              <FaFacebookF className='w-8 h-8' />
            </a>
          </div>
          <div className="bg-sky-400/45 dark:border-white border border-slate-800 p-2 rounded-full items-center transition-all duration-300 hover:scale-75 hover:rotate-90">
            <a href="https://twitter.com/">
              <FaXTwitter className='w-8 h-8' />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar