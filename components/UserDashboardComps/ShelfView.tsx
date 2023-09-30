import React from 'react'
import ShelfNav from './ShelfNav'
import Book_Ver_A from '../Book_Ver_A';

interface compProps{
    
}

export default function ShelfView({}:compProps) {
  return (
    <div style={{ animation: "slide_up 1s ease" }}>
      <h1 className="font-bold" style={{ fontSize: "calc(0.7rem + 1vw)" }}>
        Your <span className=" text-main-three">Shelf</span>
      </h1>
      <ShelfNav />

      <div className="flex w-full flex-wrap">
        <Book_Ver_A
          title="How to think bigger and bettter"
          author="Steve Krug, 2000"
          rating="4.5/5"
          img="/img/book_cover_three.png"
          desc={true}
          fdisplay={true}
          status="Borrowed"
        />
        <Book_Ver_A
          title="How to think bigger and bettter"
          author="Steve Krug, 2000"
          rating="4.5/5"
          img="/img/book_cover_three.png"
          desc={true}
          fdisplay={true}
          status="In-Shelf"
        />
        <Book_Ver_A
          title="How to think bigger and bettter"
          author="Steve Krug, 2000"
          rating="4.5/5"
          img="/img/book_cover_three.png"
          desc={true}
          fdisplay={true}
          status="In-Shelf"
        />
        <Book_Ver_A
          title="How to think bigger and bettter"
          author="Steve Krug, 2000"
          rating="4.5/5"
          img="/img/book_cover_three.png"
          desc={true}
          fdisplay={true}
          status="In-Shelf"
        />
        <Book_Ver_A
          title="How to think bigger and bettter"
          author="Steve Krug, 2000"
          rating="4.5/5"
          img="/img/book_cover_three.png"
          desc={true}
          fdisplay={true}
          status="Borrowed"
        />
        <Book_Ver_A
          title="How to think bigger and bettter"
          author="Steve Krug, 2000"
          rating="4.5/5"
          img="/img/book_cover_three.png"
          desc={true}
          fdisplay={true}
          status="Borrowed"
        />
      </div>
    </div>
  );
}
