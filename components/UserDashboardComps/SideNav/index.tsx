import React from 'react'
import SideNavBtn from './SideNavBtn'
import { FaHome, FaSearch } from 'react-icons/fa'
import { GiBookshelf } from 'react-icons/gi'
import { BiDonateHeart } from "react-icons/bi";

interface compProps{

}

export default function index({}:compProps) {
  return (
    <div className="flex-[0.2] flex flex-col items-center p-7 max-w-[350px] min-w-[150px] bg-white h-screen">
      <div
        className="w-[7vw] min-w-[100px] max-w-[300px] aspect-square bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/afit_logo.png')" }}
      ></div>
      <div className="w-[70%] min-w-[50px] my-10">
        <SideNavBtn Icon={FaHome} text="Home" view="default" />
        <SideNavBtn Icon={FaSearch} text="Search" view="Search" />
        <SideNavBtn Icon={GiBookshelf} text="My Shelf" view="My Shelf" />
        <SideNavBtn Icon={BiDonateHeart} text="Contribute" view="Contribute" />
      </div>
    </div>
  );
}
