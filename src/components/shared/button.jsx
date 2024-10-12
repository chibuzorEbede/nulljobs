import React from 'react'

const Button = ({text}) => {
  return (
    <button className='p-3 bg-yellow-500 dark:bg-white rounded-md capitalize'>{text}</button>
  )
}

export default Button