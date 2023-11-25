import React from "react";
import { FaChevronDown } from "react-icons/fa";

interface compProps {
  name: string;
  pfp:string
}

export default function UserProfile({ name, pfp }: compProps) {
  return (
    <div className="flex-[0.2] px-3 h-full max-w-[350px] overflow-hidden rounded-full border-[1px] border-[#d6d6d6] shadow-sm mx-4 flex items-center">
      <div className="w-[40px] aspect-square rounded-full bg-slate-300 bg-center bg-cover bg-no-repeat" style={{backgroundImage:`url('${pfp}')`}}></div>
      <div className="flex cursor-pointer items-center">
        <h1 className="mx-4 ">{name}</h1>
        <FaChevronDown />
      </div>
    </div>
  );
}
