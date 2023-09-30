import React from 'react'

interface compProps{
    img?:string
}

export default function ProfilePic({img}:compProps) {
  return (
    <div className='flex flex-col items-center w-fit my-3'>
        <h1>
            Your Profile Picture
        </h1>
        <div className="w-[10vw] max-w-[100px] min-w-[30px] aspect-square rounded-full my-3 bg-slate-300" style={{backgroundImage:`url('${img}')`}}></div>
        
        <p className=' text-gray-500 border-b-[0.1px]' style={{fontSize:'calc(0.5rem + 0.25vw)'}}>
            Upload New Photo
        </p>
    </div>
  )
}
