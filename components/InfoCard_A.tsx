import { view } from '@/interface'
import { changeView } from '@/redux/dashboardSlice'
import { RootState } from '@/redux/store'
import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface compProps{
    val:number
    Icon:any
    title:view
}

export default function InfoCard_A({title,val,Icon}:compProps) {
    const dashboardState = useSelector((state:RootState) => state.dashboardSlice);
    const dispatch = useDispatch();
    // const [display, setDisplay] = useState(dashboardState.view == title || dashboardState.view == '');
    const [currentStyle, setCurrentStyle] = useState({});

    useEffect(( ) => {
        // if (dashboardState.view == title) {
        //   setCurrentStyle({
        //     position: "absolute !important",
        //     top: "0",
        //     left: "0",
        //   });
        //   console.log(`${title} is active`);
        // } else {
        //   if (dashboardState.view != "") {
        //     console.log(`${title} is inactive`);
        //     setCurrentStyle({ opacity: 0 });
        //     setTimeout(() => {
        //       let ele: any = document.getElementById(title);
        //       ele.style.width = "0";
        //       ele.style.padding = "0";
        //       ele.style.margin = "0";
        //     }, 500);
        //   }

        //   console.log("default");
        //   setCurrentStyle({});
        // }
    },[dashboardState.view])


    const handleClick = () => {
        dispatch(changeView({view:title}))
    }
  return (
    <div
        id={title}
      onClick={handleClick}
      className="w-[200px] flex flex-col mr-10 hover:scale-[1.02] relative hover:shadow-md hover:duration-300 cursor-pointer h-fit hover:shadow-white duration-700 z-[99] rounded-xl bg-white py-4 px-7 top-0 left-0"
      style={
        dashboardState.view == title
          ? { transform:'translateX(30%) translateY(-10%)', cursor:'default' }
          : dashboardState.view != "default"
          ? { opacity:'0', transform:'translateX(-100%)', width:'0',padding:'0',margin:'0',transition:'1s' }
          : {}
      }
    >
      <div className="flex justify-between">
        <h1 className="font-bold" style={{ fontSize: "calc(0.8rem + 1vw)" }}>
          {val}
        </h1>
        <Icon
          className=" bg-red-500 rounded-full text-white p-2"
          style={{ fontSize: "calc(1.5rem + 1vw)" }}
        />
      </div>
      <h1
        className="mt-10 font-semibold"
        style={{ fontSize: "calc(0.5rem + 0.5vw)" }}
      >
        {title}
      </h1>
    </div>
  );
}
