import React from 'react'
import { FaRegClock, FaRegCalendar } from 'react-icons/fa';

interface compProps{

}

export default function DateDisplay({}:compProps) {
  return (
    <div className="flex-[0.3] justify-center font-[digital] h-full max-w-[350px] overflow-hidden rounded-full border-[1px] border-[#d6d6d6] shadow-sm mx-4 flex items-center">
        <div className="flex items-center mx-4">
            <FaRegClock className=' text-main-three'/>
            <h1 className='ml-2'>
                09:00 AM
            </h1>
        </div>
        <div className="flex items-center mx-4">
            <FaRegCalendar className=' text-main-three'/>
            <h1 className='ml-2'>
                4-MAR-2023
            </h1>
        </div>
    </div>
  );
}
