import Link from 'next/link'
import React from 'react'

interface compProps{
    link:string
    img:string
}

export default function Book({link, img}:compProps) {
  return (
    <Link
      href={link}
      passHref
      className="flex-1 z-[200] max-w-[200px] min-w-[100px] mr-10 rounded-xl overflow-hidden"
    >
      <div
        className="w-full duration-500 hover:scale-105 hover:shadow-lg bg-red-300 hover:shadow-[rgba(255,255,255,0.35)] bg-contain aspect-[1/1.25] bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${img}')` }}
      ></div>
    </Link>
  );
}
