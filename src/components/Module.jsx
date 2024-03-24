import React from 'react'

const Module = ({ open, setOpen }) => {
  return (
    <div className={`${open ? "fixed" : "hidden"}  top-0 z-50 bottom-0 left-0 right-0 backdrop-blur-sm`}>
      <div className="flex flex-col min-h-screen items-center justify-center">
        <div className="w-[250px] sm:w-[400px] h-[435px] sm:h-[460px] p-3 overflow-hidden bg-gray-500 border-4 border-slate-700 rounded-md">
          <form className='flex flex-col //h-full gap-2 sm:gap-4 justify-center'>
            <input required className='transition-all py-1 px-2 outline-none bg-indigo-500 border border-blue-700 placeholder:text-white focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:bg-gray-500 focus:border-b-2 focus:shadow-inner focus:shadow-teal-500 text-sm sm:text-base focus:placeholder:text-teal-500 rounded' type="text" placeholder='Name' />

            <input className='transition-all py-1 px-2 outline-none bg-indigo-500 border border-blue-700 placeholder:text-white focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:bg-gray-500 focus:border-b-2 focus:shadow-inner focus:shadow-teal-500 text-sm sm:text-base focus:placeholder:text-teal-500 rounded' type="text" placeholder='Surname' />

            <textarea required className='h-[15rem] sm:h-[17rem] transition-all py-1 px-2 outline-none bg-indigo-500 border border-blue-700 text-sm sm:text-base placeholder:text-white focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:bg-gray-500 focus:border-b-2 focus:shadow-inner focus:shadow-teal-500 focus:placeholder:text-teal-500 rounded resize-none' placeholder='Comment'></textarea>
            <div className='flex justify-between flex-col sm:gap-10 sm:flex-row gap-2'>
              <div className="flex justify-between sm:flex-auto">
                <button onClick={() => setOpen(!open)} type='reset' className="bg-teal-500 py-[2px] sm:py-4px px-5 border-2 border-teal-500 text-white rounded-md sm:text-lg font-medium transition-all duration-300 hover:bg-gray-500 hover:text-teal-400 hover:shadow-inner hover:shadow-emerald-300">Exit</button>
                <button type='reset' className="bg-green-500 py-[2px] sm:py-4px px-5 border-2 border-green-500 text-white rounded-md sm:text-lg font-medium transition-all duration-300 hover:bg-gray-500 hover:text-green-400 hover:shadow-inner hover:shadow-emerald-300">Clear</button>
              </div>
              <button onSubmit={() => setOpen(!open)} type='submit' className="bg-red-500 py-[2px] sm:py-4px px-5 border-2 border-red-500 text-white rounded-md sm:text-lg font-medium transition-all duration-300 hover:bg-gray-500 hover:text-red-500 hover:shadow-inner hover:shadow-amber-300">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Module