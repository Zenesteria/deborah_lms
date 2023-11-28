import React, {useEffect,useState} from 'react'
import ShelfNav from './ShelfNav'
import Book_Ver_A from '../Book_Ver_A';
import axios from "axios"
import { book_v1 } from '@/interface';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface compProps{
    
}

export default function ShelfView({}:compProps) {
  const books = useSelector((state: RootState) => state.dashboardSlice.borrowed_books);
  return (
    <div style={{ animation: "slide_up 1s ease" }}>
      <h1 className="font-bold" style={{ fontSize: "calc(0.7rem + 1vw)" }}>
        Your <span className=" text-main-three">Shelf</span>
      </h1>
      <ShelfNav />

      <div className="flex w-full flex-wrap">
        {books.map((book) => {
            return (
              <Book_Ver_A
                title={book.book.bookName}
                author={book.book.authorName}
                rating="4.5/5"
                img={book.book.coverImage}
                desc={true}
                fdisplay={true}
                fromDate={book.borrowDate}
                toDate={book.returnDate}
                id={book._id}
              />
            );
          })}
      </div>
    </div>
  );
}
