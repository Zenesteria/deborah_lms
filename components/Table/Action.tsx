import React from 'react'
import { FaEllipsisH } from 'react-icons/fa'

interface compProps{

}

export default function Action({}:compProps) {
  return (
    <div className='w-full cursor-pointer'>
        <FaEllipsisH className='mx-auto'/>
    </div>
  )
}
