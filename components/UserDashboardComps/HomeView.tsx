import React, {useState, useEffect} from 'react'
import {TextSlider_A, NewArrivals, Book_Ver_A} from '@/components'
import { book_v1 } from '@/interface';
import axios from "axios"
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

interface compProps{

}

export default function HomeView({}:compProps) {
  const books = useSelector((state: RootState) => state.dashboardSlice.books);
  return (
    <div style={{ animation: "slide_up 1s ease" }}>
      <div className="w-full flex h-fit flex-wrap mb-10">
        <TextSlider_A />
        <NewArrivals />
      </div>
      <h1
        className="font-semibold my-4"
        style={{ fontSize: "calc(1rem + 1vw)" }}
      >
        Good Morning
      </h1>

      {/* Recommended for you */}
      <div className="w-full mt-3 mb-5">
        <h1 className="" style={{ fontSize: "calc(1rem + 0.5vw)" }}>
          Recommended for you
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
      {/* Recent Readings */}
      <div className="w-full mt-3 mb-5">
        <h1 className="" style={{ fontSize: "calc(1rem + 0.5vw)" }}>
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

      {/* Journals Articles and Publications */}
      <div className="w-full mt-3 mb-5">
        <h1 className="" style={{ fontSize: "calc(1rem + 0.5vw)" }}>
          Journals, Articles & Publications
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

      {/* News */}
      <div className="w-full mt-3 mb-5">
        <h1 className="" style={{ fontSize: "calc(1rem + 0.5vw)" }}>
          News
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
