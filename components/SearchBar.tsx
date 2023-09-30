import React from 'react'

interface compProps{

}

export default function SearchBar({}:compProps) {
  return (
    <div className="flex-[0.8] flex justify-center">
      <input
        type="text"
        placeholder="Search"
        className="px-4 border-2 py-2 shadow-md w-full bg-white  max-w-[500px]"
      />
    </div>
  );
}
