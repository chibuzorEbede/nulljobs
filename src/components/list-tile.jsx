import React from 'react'

const ListTile = ({ data }) => {
  const { company, time, type, title, location,logo } = data

  return (
    <div className=' relative bg-black text-white dark:text-black px-6 py-6 dark:bg-white rounded-md shadow-sm capitalize'>
      <LogoAvatar src={logo} company={company}/>
      <p className='text-slate-500 text-sm flex items-center gap-2 pt-3'>
        <span>{time + ' ago'} </span>
        <span>.</span>
        <span>{type}</span>

      </p>
      <h3 className='font-bold pt-3'>{title}</h3>
      <p className='text-slate-500 pt-3'>{company}</p>
      <p className='dark:text-yellow-900 text-yellow-500 pt-4'>{location}</p>
    </div>
  )
}

export default ListTile


const LogoAvatar = ({ src, company }) => {
  const logoSize = '50px'
  return (<aside className={`rounded-3xl w-[${logoSize}] h-[${logoSize}] -mt-14 shadow-sm`}>
    <img className='aspect-square' src={src} alt={company} width={1000} height={100}/>
  </aside>)
}