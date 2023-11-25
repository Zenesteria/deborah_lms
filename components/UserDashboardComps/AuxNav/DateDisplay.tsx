import getFormattedTime from '@/util/getTime';
import React, {useState} from 'react'
import { FaRegClock, FaRegCalendar } from 'react-icons/fa';

interface compProps{
    date:string
}

export default function DateDisplay({date}:compProps) {
    const [time,setTime] = useState("")
    setTimeout(() => {
        setTime(getFormattedTime())
    },1000)
  return (
    <div className="flex-[0.3] justify-center font-[digital] h-full max-w-[350px] overflow-hidden rounded-full border-[1px] border-[#d6d6d6] shadow-sm mx-4 flex items-center">
        <div className="flex items-center mx-4">
            <FaRegClock className=' text-main-three'/>
            <h1 className='ml-2'>
                {time}
            </h1>
        </div>
        <div className="flex items-center mx-4">
            <FaRegCalendar className=' text-main-three'/>
            <h1 className='ml-2'>
                {date}
            </h1>
        </div>
    </div>
  );
}
