import { view } from "@/interface";
import { changeView } from "@/redux/dashboardSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface compProps {
  Icon: any;
  view: view;
  text:string
}

export default function SideNavBtn({ Icon, view, text }: compProps) {
    const dashboardState = useSelector((state:RootState) => state.dashboardSlice )
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeView({ view: view }));
  };
  return (
    <div
      onClick={handleClick}
      className="mb-10 w-fit flex items-center cursor-pointer group"
      style={{ fontSize: "calc(0.6rem + 0.5vw)", color: dashboardState.view == view?'':"#8A8A8A" }}
    >
      <Icon />
      <h1 className="ml-3 duration-300">{text}</h1>
    </div>
  );
}
