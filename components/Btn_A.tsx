import React from 'react'

interface compProps{
    text:string
}

export default function Btn_A({text}:compProps) {
  return (
    <p className='py-2 px-4 cursor-pointer font-semibold border-2 rounded-lg border-slate-200'>
        {text}
    </p>
  )
}
