import React from 'react'

export default function Category() {
  return (
    <div className="flex-[0.12] h-full max-w-[150px] overflow-hidden rounded-full border-[1px] border-[#d6d6d6] shadow-sm mx-4 flex items-center">
      <div className="flex items-center p-2">
        <select
          name="lang"
          className="bg-transparent cursor-pointer h-full px-4 w-full outline-none"
          style={{ fontSize: "calc(0.6rem + 0.25vw)" }}
        >
          <option value="en">Browse</option>
          <option value="en">Engineering</option>
          <option value="en">Medical</option>
          <option value="en">Arts & Science</option>
          <option value="en">Architecture</option>
          <option value="en">Law</option>
        </select>
      </div>
    </div>
  );
}
