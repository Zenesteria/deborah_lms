import React from 'react'
import {AddBooks, Book_Ver_A, NewArrivals, TextSlider_A} from '@/components'

export default function BooksView() {
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
        <AddBooks />
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
          <Book_Ver_A
            title="How to think bigger and bettter"
            author="Steve Krug, 2000"
            rating="4.5/5"
            img="/img/book_cover_three.png"
            desc={true}
          />
          <Book_Ver_A
            title="How to think bigger and bettter"
            author="Steve Krug, 2000"
            rating="4.5/5"
            img="/img/book_cover_three.png"
            desc={true}
          />
          <Book_Ver_A
            title="How to think bigger and bettter"
            author="Steve Krug, 2000"
            rating="4.5/5"
            img="/img/book_cover_three.png"
            desc={true}
          />
          <Book_Ver_A
            title="How to think bigger and bettter"
            author="Steve Krug, 2000"
            rating="4.5/5"
            img="/img/book_cover_three.png"
            desc={true}
          />
          <Book_Ver_A
            title="How to think bigger and bettter"
            author="Steve Krug, 2000"
            rating="4.5/5"
            img="/img/book_cover_three.png"
            desc={true}
          />
          <Book_Ver_A
            title="How to think bigger and bettter"
            author="Steve Krug, 2000"
            rating="4.5/5"
            img="/img/book_cover_three.png"
            desc={true}
          />
        </div>
      </div>

      {/* All Books */}
      <div className="w-full my-10">
        <h1 className="text-white" style={{ fontSize: "calc(1rem + 0.5vw)" }}>
          Recent Readings
        </h1>
        <div className="w-full flex flex-wrap my-2">
          <Book_Ver_A
            title="How to think bigger and bettter"
            author="Steve Krug, 2000"
            rating="4.5/5"
            img="/img/book_cover_three.png"
            desc={true}
          />
          <Book_Ver_A
            title="How to think bigger and bettter"
            author="Steve Krug, 2000"
            rating="4.5/5"
            img="/img/book_cover_three.png"
            desc={true}
          />
          <Book_Ver_A
            title="How to think bigger and bettter"
            author="Steve Krug, 2000"
            rating="4.5/5"
            img="/img/book_cover_three.png"
            desc={true}
          />
          <Book_Ver_A
            title="How to think bigger and bettter"
            author="Steve Krug, 2000"
            rating="4.5/5"
            img="/img/book_cover_three.png"
            desc={true}
          />
          <Book_Ver_A
            title="How to think bigger and bettter"
            author="Steve Krug, 2000"
            rating="4.5/5"
            img="/img/book_cover_three.png"
            desc={true}
          />
          <Book_Ver_A
            title="How to think bigger and bettter"
            author="Steve Krug, 2000"
            rating="4.5/5"
            img="/img/book_cover_three.png"
            desc={true}
          />
          <Book_Ver_A
            title="How to think bigger and bettter"
            author="Steve Krug, 2000"
            rating="4.5/5"
            img="/img/book_cover_three.png"
            desc={true}
          />
          <Book_Ver_A
            title="How to think bigger and bettter"
            author="Steve Krug, 2000"
            rating="4.5/5"
            img="/img/book_cover_three.png"
            desc={true}
          />
          <Book_Ver_A
            title="How to think bigger and bettter"
            author="Steve Krug, 2000"
            rating="4.5/5"
            img="/img/book_cover_three.png"
            desc={true}
          />
          <Book_Ver_A
            title="How to think bigger and bettter"
            author="Steve Krug, 2000"
            rating="4.5/5"
            img="/img/book_cover_three.png"
            desc={true}
          />
          <Book_Ver_A
            title="How to think bigger and bettter"
            author="Steve Krug, 2000"
            rating="4.5/5"
            img="/img/book_cover_three.png"
            desc={true}
          />
          <Book_Ver_A
            title="How to think bigger and bettter"
            author="Steve Krug, 2000"
            rating="4.5/5"
            img="/img/book_cover_three.png"
            desc={true}
          />
        </div>
      </div>
    </div>
  );
}
