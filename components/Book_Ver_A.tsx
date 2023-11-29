import { book } from "@/interface";
import { changeView, setActiveBook, setBorrowedBooks } from "@/redux/dashboardSlice";
import { RootState } from "@/redux/store";
import { Box, Button, VStack } from "@chakra-ui/react";
import axios from "axios";
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
  fromDate?:string
  toDate?:string
  id?:string
}

export default function Book_Ver_A({
  img,
  author,
  rating,
  desc,
  title,
  fdisplay,
  status,
  fromDate,
  toDate,
  id
}: compProps) {
  const router = useRouter()
  const dispatch = useDispatch()
  const [returnLoad, setReturnLoad] = useState(false)
  
  const user = useSelector((state:RootState) => state.dashboardSlice)
  const handleClick = () => {
    if(!fromDate){
      let act_book = user.books.filter((book) => book.bookName == title)[0]
      dispatch(setActiveBook({
        book:act_book
      }))
      dispatch(changeView({
        view:'Book'
      }))
    }
  }
  const handleReturn = async () => {
    let getBook = user.borrowed_books.filter((book) => book._id == id)[0]
    console.log(getBook)
    setReturnLoad(true)
    // console.log(user.borrowed_books[0]._id)
    // console.log(id)
    let res_return = await axios.patch(
      `https://library-management-system-4hev.onrender.com/api/user/book/return/${getBook._id}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.jwt_token}`,
        },
      }
    );
    let res_borrowed_books = await axios.get(
      "https://library-management-system-4hev.onrender.com/api/user/books/borrowed",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.jwt_token}`,
        },
      }
    );
    const borrowed_books = res_borrowed_books.data.borrowedBooks;
    dispatch(
      setBorrowedBooks({
        borrowed_books,
      })
    );
    console.log(res_return)
    setReturnLoad(false)
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
           {fromDate}
          </p>

          <h1 className="mt-3">Submission Due</h1>
          <p
            className=" font-light"
            style={{ fontSize: "calc(0.4rem + 0.25vw)" }}
          >
            {toDate}
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
              <Button color={"red.400"} isLoading={returnLoad} isDisabled={returnLoad} onClick={handleReturn} border={"1px"} borderColor={"red.400"}>
                Return
              </Button>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
