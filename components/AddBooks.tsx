import Link from 'next/link'
import React from 'react'

export default function AddBooks() {
  return (
    <Link href={'/admin/addBook'} passHref>
      <h1
        className="shadow-lg font-semibold bg-white rounded-xl h-full px-20 hover:bg-slate-100 duration-300 cursor-pointer text-main-two py-2"
        style={{ fontSize: "calc(0.8rem + 0.5vw)" }}
      >
        Add Books +
      </h1>
    </Link>
  );
}
