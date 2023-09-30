import React from 'react'

interface compProps{
    title:string
    text:string
    caption:string
}

export default function Slide({title,text,caption}:compProps) {
  return (
    <div className='text-white h-[18vh]'>
      <h1>{title}</h1>
      <p className='my-2' style={{fontSize:'calc(0.6rem + 0.25vw)'}}>
        {text}
      </p>
        <p className=' text-right'>
            {caption}
        </p>
    </div>
  );
}
