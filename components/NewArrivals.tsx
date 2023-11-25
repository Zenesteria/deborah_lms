import React,{useEffect, useState} from 'react'
import {Book_Ver_A} from '@/components'
import axios from 'axios'
import { book_v1 } from '@/interface';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function NewArrivals() {
  const user = useSelector((state:RootState) => state.dashboardSlice)
  return (
    <div className="flex-1 bg-white h-[27vh] mx-10 rounded-xl flex overflow-hidden">
      <div className="flex-[0.085] flex items-center justify-center grad-one h-full">
        <h1
          className="w-[10px] h-[10px] flex items-center justify-center font-bold text-white whitespace-nowrap -rotate-90"
          style={{ fontSize: "calc(1rem + 0.5vw)" }}
        >
          New Arrivals
        </h1>
      </div>
      <div className="flex-1 overflow-x-auto cus-scrollbar-one items-center p-4 flex">
        {user.books.map((book) => {
          return (
            <Book_Ver_A
            title={book.bookName}
            author={book.authorName}
            rating=""
            img={book.coverImage}
            desc={false}
            />
          )
        })}
      </div>
    </div>
  );
}
