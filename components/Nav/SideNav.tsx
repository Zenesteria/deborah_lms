import React from 'react'
import SideNavBtn from './SideNavBtn'
import {FaHome, FaCog} from 'react-icons/fa'
import { FiRefreshCcw } from "react-icons/fi";
import { GiBookshelf } from "react-icons/gi";

export default function SideNav() {
  return (
    <div className="flex-[0.3] max-w-[70px] min-w-[30px] min-h-[50vh] mx-7">
      <SideNavBtn name="" Icon={FaHome} view="default" />
      <SideNavBtn name="" Icon={FiRefreshCcw} view="default" />
      <SideNavBtn name="" Icon={GiBookshelf} view="Books" />
      <SideNavBtn name="" Icon={FaCog} view="Settings" />
    </div>
  );
}
