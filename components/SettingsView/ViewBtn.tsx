import { view } from '@/interface'
import { changeView } from '@/redux/dashboardSlice'
import { RootState } from '@/redux/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface compProps{
    text:view
}

export default function ViewBtn({text}:compProps) {
    const dashboardState = useSelector((state:RootState) => state.dashboardSlice)
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changeView({view:text}))
    }
  return (
    <h3
      className="mx-3 pb-2 border-b-[0.5px] border-black cursor-pointer duration-300 hover:text-red-700"
      onClick={handleClick}
      style={{
        fontSize: "calc(0.6rem + 0.5vw)",
        borderBottomColor: dashboardState.view == text ? "red" : "",
        color: dashboardState.view == text ? "red" : "",
        fontWeight:dashboardState.view == text?'bold':''
      }}
    >
      {text}
    </h3>
  );
}
