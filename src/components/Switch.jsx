import React, { useEffect, useState } from 'react'
import { FaRegMoon } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";

const Switch = () => {
    const [theme, setTheme] = useState(null)

    useEffect(() => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme("dark")
      }
      else (
        setTheme("light")
      )
    }, [])

    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark")
      }
      else (
        document.documentElement.classList.remove("dark")
      )
    }, [theme])

    const switchHandler = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    return (
        <div className="flex items-center">
            <button onClick={() => switchHandler()} className='flex  text-black dark:text-white'>
                {theme === "dark" ? <FiSun className='w-8 h-8' /> : <FaRegMoon className='w-8 h-8' />}
            </button>
        </div>
    )
}

export default Switch