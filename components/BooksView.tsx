import React, {useState,useEffect} from 'react'
import {AddBooks, Book_Ver_A, NewArrivals, TextSlider_A} from '@/components'
import { book_v1 } from '@/interface';
import axios from "axios"
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function BooksView() {
  const books = useSelector((state:RootState) => state.dashboardSlice.books)
  return (
    <div
      className="w-full h-fit z-[200] relative"
      style={{ animation: "slide_up 1s ease" }}
    >
      <div className="flex w-full items-center justify-between my-5">
        <h1
          className=" uppercase font-bold p-2 rounded-xl text-white bg-main-two"
          style={{ fontSize: "calc(0.7rem + 1vw)" }}
        >
          Available Books
        </h1>
        {/* <AddBooks /> */}
      </div>

      <div className="w-full flex h-fit flex-wrap mb-10">
        <TextSlider_A />
        <NewArrivals />
      </div>
      <h1
        className="text-white font-semibold my-4"
        style={{ fontSize: "calc(1rem + 1vw)" }}
      >
        Good Morning
      </h1>

      {/* Recent Readings */}
      <div className="w-full mt-3 mb-5">
        <h1 className="text-white" style={{ fontSize: "calc(1rem + 0.5vw)" }}>
          Recent Readings
        </h1>
        <div className="w-full flex flex-wrap my-2">
          {books.map((book) => {
            return (
              <Book_Ver_A
                title={book.bookName}
                author={book.authorName}
                rating="4.5/5"
                img={book.coverImage}
                desc={true}
              />
            );
          })}
        </div>
      </div>

      {/* All Books */}
      <div className="w-full my-10">
        <h1 className="text-white" style={{ fontSize: "calc(1rem + 0.5vw)" }}>
          Recent Readings
        </h1>
        <div className="w-full flex flex-wrap my-2">
          {books.map((book) => {
            return (
              <Book_Ver_A
                title={book.bookName}
                author={book.authorName}
                rating="4.5/5"
                img={book.coverImage}
                desc={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
