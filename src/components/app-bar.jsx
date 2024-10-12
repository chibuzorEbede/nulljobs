import React, { useState } from 'react'
import { MdLightMode, MdDarkMode } from "react-icons/md";
import Switch from './shared/toggle';


const AppBar = ({ title = "NullJobs" }) => {
  const [toggleValue, setToggleValue] = useState('translate-x-3')
  
  const theme = ()=>{
    let mode = ''
    //light mode
    if(toggleValue  === '-translate-x-3'){
      document.documentElement.classList.remove('dark')
      mode = 'translate-x-3'
      // setToggleValue(mode)

    }else{
      document.documentElement.classList.add('dark')
      mode = '-translate-x-3'
      // setToggleValue(mode)
    }
    return mode
  }


  return (
    <header className='bg-black text-yellow-500 dark:bg-white dark:text-black p-5 flex justify-between items-center md:rounded-bl-3xl min-h-[20vh]'>
      <div className='text-3xl font-bold'>{title}</div>
      <div className='flex items-center justify-around gap-3'>
        <MdLightMode />
        <Switch toggleHandler={() => setToggleValue(theme)} toggleValue={toggleValue} />
        <MdDarkMode />
      </div>
    </header>
  )
}

export default AppBar


