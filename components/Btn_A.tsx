import { view } from '@/interface'
import { changeView } from '@/redux/dashboardSlice'
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'

interface compProps{
    text:string
    link:string
    view?:view
}

export default function Btn_A({text,link,view}:compProps) {
  const dispatch = useDispatch()
  const handleClick = () => {
    if(view){
      dispatch(changeView({view}))
    }
  }
  return (
    <Link onClick={handleClick} href={link}>
      <p className="py-2 px-4 cursor-pointer font-semibold border-2 rounded-lg border-slate-200">
        {text}
      </p>
    </Link>
  );
}
