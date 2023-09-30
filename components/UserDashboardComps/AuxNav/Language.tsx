import React from 'react'
import { LiaLanguageSolid } from "react-icons/lia";

interface compProps{

}

export default function Language({}:compProps) {
  return (
    <div className="flex-[0.12] h-full max-w-[350px] overflow-hidden rounded-full border-[1px] border-[#d6d6d6] shadow-sm mx-4 flex items-center">
      <div className="flex items-center p-2">
        <LiaLanguageSolid className='text-main-three' style={{fontSize:'calc(2rem + 0.5vw)'}}/>
        <select
          name="lang"
          className="bg-transparent cursor-pointer h-full px-4 w-full outline-none"
          style={{fontSize:'calc(0.6rem + 0.25vw)'}}
        >
          <option value="en">EN</option>
        </select>
      </div>
    </div>
  );
}
