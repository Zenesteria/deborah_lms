import { book } from "@/interface";
import { changeView, setActiveBook } from "@/redux/dashboardSlice";
import { RootState } from "@/redux/store";
import { Box, Button, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, {useState} from "react";
import { FaHeadphones } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

interface compProps {
  title: string;
  author?: string;
  rating?: string;
  img: string;
  desc: boolean;
  fdisplay?: boolean;
  status?: book["status"];
}

export default function Book_Ver_A({
  img,
  author,
  rating,
  desc,
  title,
  fdisplay,
  status,
}: compProps) {
  const router = useRouter()
  const dispatch = useDispatch()
  
  const user = useSelector((state:RootState) => state.dashboardSlice)
  const handleClick = () => {
    let act_book = user.books.filter((book) => book.bookName == title)[0]
    dispatch(setActiveBook({
      book:act_book
    }))
    dispatch(changeView({
      view:'Book'
    }))
  }
  return (
    <div onClick={handleClick} className="flex-1 flex max-w-[200px] bg-white border-[0.5px] border-slate-500 px-4 py-2 rounded-lg m-2" style={{minWidth:fdisplay?'250px':'150px'}}>
      <div className="w-full">
        <div
          className="min-w-[70px] w-full aspect-[0.63/1] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${img}')` }}
        ></div>
        {desc ? (
          <div className="">
            <p
              className="max-w-[120px]"
              style={{ fontSize: "calc(0.4rem + 0.25vw)" }}
            >
              {title}
            </p>
            <p style={{ fontSize: "calc(0.4rem + 0.25vw)" }}>{author}</p>
            <p style={{ fontSize: "calc(0.4rem + 0.25vw)" }}>
              {rating?.split("/")[0]}/
              <span className=" text-slate-500">{rating?.split("/")[1]}</span>
            </p>
          </div>
        ) : null}
      </div>
      {fdisplay ? (
        <div className="flex ml-4 flex-col justify-center">
          <h1>Borrowed on</h1>
          <p
            className=" font-light"
            style={{ fontSize: "calc(0.4rem + 0.25vw)" }}
          >
            11 Mar 2023 09:00 AM
          </p>

          <h1 className="mt-3">Submission Due</h1>
          <p
            className=" font-light"
            style={{ fontSize: "calc(0.4rem + 0.25vw)" }}
          >
            14 Mar 2023
          </p>

          <div className="flex flex-col">
            <Button
              className="my-3"
              _hover={{}}
              bg={status == "In-Shelf" ? "green.400" : "gray.400"}
            >
              {status == "In-Shelf" ? "E-Book" : "Borrowed"}
            </Button>
            {status == "In-Shelf" ? (
              <div className="flex border-[1px] border-red-500 rounded-md">
                <Button
                  color={"red.400"}
                 
                >
                  Read
                </Button>
                <Button
                  color={"red.400"}
                  borderRadius={'0'}
                  borderLeft={"1px"}
                  borderColor={"red.400"}
                >
                  <FaHeadphones />
                </Button>
              </div>
            ) : (
              <Button color={"red.400"} border={"1px"} borderColor={"red.400"}>
                Return
              </Button>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
