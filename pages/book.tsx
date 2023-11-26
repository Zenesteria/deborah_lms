import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";

export default function book() {
  return (
    <div className="w-full h-fit min-h-screen flex flex-wrap bg-white text-black">
      <div className="flex-[0.3]">
        <div
          className="bg-cover bg-center bg-no-repeat w-full aspect-[2/1] bg-white"
          style={{ backgroundImage: `url('')` }}
        ></div>
        <div className=" my-2 p-4 rounded-md bg-white">
          <h1>Buy This Book Online</h1>
          <div className="flex">
            <div
              className="w-[50px] aspect-square bg-red-300 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('')` }}
            ></div>
            <Link href={"#"}>
              <p>Buy Now</p>
            </Link>
          </div>
          <br />
          <div className="flex">
            <div
              className="w-[50px] aspect-square bg-red-300 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('')` }}
            ></div>
            <Link href={"#"}>
              <p>Buy Now</p>
            </Link>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
            autem, ipsa eveniet, officia repellat, saepe deserunt excepturi
            alias numquam debitis vero aliquid cum minus neque.
          </p>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex-1">
            <h1 style={{fontSize:'calc(1rem + 1vw)'}}>
                {`Don't Make me Think`}
            </h1>
            <p>
                By <Link href={'#'} className="underline" style={{fontSize:'calc(0.7rem)'}}>{`Steve Krug`}</Link>
            </p>
            <h3>
                Second Edition
            </h3>
            <div className="flex">
                <div className="flex-1">
                    <h1 className="font-bold">Availability</h1>
                    <div className="flex">
                        <FaCheck/>
                        <p className="mx-2 text-[0.6rem]">
                            Hard Copy
                        </p>
                    </div>
                    <div className="flex">
                        <FaCheck/>
                        <p className="mx-2 text-[0.6rem]">
                            E- Book
                        </p>
                    </div>
                    <div className="flex">
                        <FaCheck/>
                        <p className="mx-2 text-[0.6rem]">
                            Audio Book
                        </p>
                    </div>
                </div>
                <div className="flex-1">
                    <h1 className="font-bold">
                        Status
                    </h1>
                    <p>
                        {`In Shelf`}
                    </p>
                </div>
            </div>
        </div>
        <div className="flex-[0.7]" ></div>
      </div>
    </div>
  );
}
