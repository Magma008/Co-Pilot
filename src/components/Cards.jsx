import React from 'react'
import planes from "./data"
import plane from "/Images/plane1-airbus.jpg"

const Cards = () => {
  // console.log(planes);
  return (
    <div id="planes" className='py-5'>
      <div className="main-container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
          {
            planes.map(item => (
              <div key={item.id} className="shadow-lg dark:bg-slate-700 dark:shadow-none shadow-gray-700 flex flex-col bg-gray-500/80 rounded-md overflow-hidden">
                <div className="card-img aspect-video overflow-hidden">
                  <img src={item.image} alt="plane" className="w-full h-full object-cover object-center" />
                </div>
                <div className="p-2 flex flex-col flex-1 justify-between">
                  <div className='dark:text-white'>
                    <h1 className="text-center text-lg sm:text-2xl font-semibold">{item.name}</h1>
                    <p className="py-2 text-xs sm:text-base">{item.text}</p>
                  </div>
                  <button className="bg-slate-500 py-1 transition-all duration-300 hover:bg-gray-500/50 hover:border-white hover:text-white border border-gray-500/50 rounded-md mt-auto dark:bg-cyan-500 dark:border-cyan-500 dark:hover:bg-slate-700 dark:hover:text-cyan-500 dark:hover:border-cyan-500 dark:hover:shadow-cyan-400 dark:hover:shadow-inner">
                    <a href={item.link} className="text-lg font-medium">More</a>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Cards