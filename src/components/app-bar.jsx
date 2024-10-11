import React from 'react'
import { MdLightMode, MdDarkMode } from "react-icons/md";


const AppBar = ({ title = "NullJobs" }) => {
  return (
    <header className='bg-black text-yellow-500 dark:bg-white dark:text-black p-5 flex justify-between items-center md:rounded-bl-3xl'>
      <div className='text-3xl font-bold'>{title}</div>
      <div className='flex items-center justify-around gap-3'>
        <MdLightMode />
        <Switch />
        <MdDarkMode />
      </div>
    </header>
  )
}

export default AppBar


const Switch = () => {
  return <div>
    <div className='w-10 h-4 bg-white p-2 rounded-lg flex items-center justify-center'>
      <div className='w-3 h-3 bg-yellow-600 rounded-full -translate-x-3 md:translate-x-3'></div>
    </div>
  </div>
}