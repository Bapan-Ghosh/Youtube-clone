import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-3 py-2 my-2 h-10 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg'>{name}</button>
    </div>
  )  
}

export default Button