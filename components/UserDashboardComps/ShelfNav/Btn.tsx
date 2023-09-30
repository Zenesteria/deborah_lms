import { shelfCategory} from '@/interface'
import { changeCategory } from '@/redux/dashboardSlice'
import { RootState } from '@/redux/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface compProps{
    text:string
    cat:shelfCategory
}

export default function Btn({text,cat}:compProps) {
    const dashboardState = useSelector((state:RootState) => state.dashboardSlice)
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changeCategory({cat}))
    }
  return (
    <h1 onClick={handleClick} className='font-semibold duration-500 text-gray-400 cursor-pointer mr-10' style={{color:cat==dashboardState.shelfCategory?'black':''}}>
        {text}
    </h1>
  )
}
