import React from 'react'
import {TextSlider_A, NewArrivals, Book_Ver_A} from '@/components'

interface compProps{

}

export default function HomeView({}:compProps) {
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
      {/* Recent Readings */}
      <div className="w-full mt-3 mb-5">
        <h1 className="" style={{ fontSize: "calc(1rem + 0.5vw)" }}>
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

      {/* Journals Articles and Publications */}
      <div className="w-full mt-3 mb-5">
        <h1 className="" style={{ fontSize: "calc(1rem + 0.5vw)" }}>
          Journals, Articles & Publications
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

      {/* News */}
      <div className="w-full mt-3 mb-5">
        <h1 className="" style={{ fontSize: "calc(1rem + 0.5vw)" }}>
          News
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
    </div>
  );
}
