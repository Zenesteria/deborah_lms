import { view } from '@/interface'
import { changeView } from '@/redux/dashboardSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

interface compProps{
    name:string
    Icon:any
    view:view
}

export default function SideNavBtn({name, Icon, view}:compProps) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeView({view:view}))

  }
  return (
    <div onClick={handleClick} className='mb-10 text-main-one cursor-pointer duration-300 hover:scale-[1.05]' style={{fontSize:'calc(1rem + 1vw)'}}>
        <Icon/>
    </div>
  )
}
