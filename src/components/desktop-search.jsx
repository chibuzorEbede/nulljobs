import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Button from "./shared/button"



const DesktopSearch = () => {
    const IconSize = 20
  return (
    <div className='hidden md:flex p-5  gap-3 justify-evenly   items-center w-[90%] bg-white dark:bg-yellow-500 dark:text-black -mt-8 mx-auto rounded-md shadow-sm'>
        <IconTextInput icon={<IoMdSearch size={IconSize}/>} text={`filter by title,companies...`}/>
        <IconTextInput icon={<FaLocationDot size={IconSize}/>} text={`filter by location`}/>
        <IconCheckInput />
    </div>
  )
}

export default DesktopSearch


const IconTextInput = ({icon,text})=>{
    return (
        <div className='flex items-center justify-center border-r border-yellow-500 bg-white rounded-md pl-2'>
            {icon}
            <input className='capitalize  p-2 outline-none rounded-r-md' type="text" name="" id="" placeholder={text}/>
        </div>
    )
}
const IconCheckInput = ()=>{
    return (
        <div className='flex items-center justify-center '>
            <input className='capitalize outline-none p-2  rounded-md' type="checkbox" name="" id="" placeholder={`hi`}/>
            <label htmlFor="" className='capitalize mr-2'>full time only</label>
            <Button text={`search`}/>
        </div>
    )
}