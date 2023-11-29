import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
} from "@chakra-ui/react";
import Link from "next/link";
import React,{useEffect, useState} from "react";
import { FaCheck } from "react-icons/fa";
import DateSelector from "./DatePicker";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function BookView() {
  const handleBorrow = async () => {};
  const handleRead = async () => {};
  const [toselectedDate, setToSelectedDate] = useState(null);
  const [fromselectedDate, setFromSelectedDate] = useState(null);
  const [isbn, setIsbn] = useState('');
  const [desc, setDesc] = useState('');
  const [loading, setIsloading] = useState(false);
  const [err, setErr] = useState('');
  const [success, setSuccess] = useState('');
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector((state:RootState) => state.dashboardSlice)
  const handleFromDateSelect = (date:any) => {
    setFromSelectedDate(date);
  };
  const handleSubmitBorrow = async () => {

        try {
            setIsloading(true)
            console.log({
              borrowDate: `${fromselectedDate}`,
              returnDate: `${toselectedDate}`,
              bookSerialNo: `${user.active_book.isbn}`,
              description: "Just for a few days",
            });
            let res = await axios.post(
              "https://library-management-system-4hev.onrender.com/api/user/book/borrow",
              {
                borrowDate: `2023-11-29T12:00:00.000Z`,
                returnDate: `2023-12-15T12:00:00.000Z`,
                bookSerialNo: `${user.active_book.isbn}`,
                description: "Just for a few days",
              },
              {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${user.jwt_token}`,
                },
              }
            );
            console.log(res.data)
            setSuccess('Book Borrowed Successfully')
            onClose()
        } catch (error:any) {
            setErr(error.response.data.message)
            console.log(error.response.data.message)
        }
        setIsloading(false)
  }
  const handleToDateSelect = (date:any) => {
    setToSelectedDate(date);
  };
  useEffect(() => {
    console.log(fromselectedDate)
    console.log(toselectedDate)
  },[fromselectedDate,toselectedDate])
  return (
    <div className="w-full z-[500] relative h-fit flex flex-wrap bg-white text-black">
      {user.type == "user" ? (
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg={"white"} textColor={"black"}>
            <ModalHeader>Fill Up the Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1 className="mb-2 text-red-500">{err}</h1>
              <div className="flex">
                <div className="">
                  <h1>From</h1>
                  <div className="">
                    <DateSelector
                      selectedDate={fromselectedDate}
                      onSelectDate={handleFromDateSelect}
                    />
                  </div>
                </div>
                <div className="mx-2">
                  <h1>To</h1>
                  <div className="">
                    <DateSelector
                      selectedDate={toselectedDate}
                      onSelectDate={handleToDateSelect}
                    />
                  </div>
                </div>
              </div>
              {/* <div className="">
                <h1>
                    Book Serial No. 
                </h1>
                <Input
                    onChange={(e) => {setIsbn(e.target.value)}}
                    value={isbn}
                />
            </div> */}
              {/* <div className="">
                <h1>
                    
                </h1>
                <Input
                    onChange={(e) => {setIsbn(e.target.value)}}
                    value={isbn}
                />
            </div> */}
              <Button
                className="my-4"
                colorScheme="orange"
                onClick={handleSubmitBorrow}
                isLoading={loading}
                isDisabled={loading}
              >
                Borrow
              </Button>
            </ModalBody>

            {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
          </ModalContent>
        </Modal>
      ) : null}
      <div className="flex-[0.7]">
        <div
          className="bg-cover bg-center bg-no-repeat w-full aspect-[2/2.5] bg-blue-300"
          style={{ backgroundImage: `url('${user.active_book.coverImage}')` }}
        ></div>
        {/* <div className=" my-2 p-4 rounded-md bg-white">
          <h1>Buy This Book Online</h1>
          <div className="flex">
            <div
              className="w-[20px] aspect-square bg-red-300 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('')` }}
            ></div>
            <Link href={"#"} className="text-[0.7rem]">
              <p className="mx-2">Buy Now</p>
            </Link>
          </div>
          <br />
          <div className="flex">
            <div
              className="w-[20px] aspect-square bg-red-300 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('')` }}
            ></div>
            <Link href={"#"} className="text-[0.7rem]">
              <p className="mx-2">Buy Now</p>
            </Link>
          </div>
          <p>
            {user.active_book.about}
          </p>
        </div> */}
      </div>
      <div className="flex-1 p-5">
        <div className="flex-1">
          <h1 style={{ fontSize: "calc(1rem + 1vw)" }}>
            {user.active_book.bookName}
          </h1>
          <p>
            By{" "}
            <Link
              href={"#"}
              className="underline"
              style={{ fontSize: "calc(0.7rem)" }}
            >
              {user.active_book.authorName}
            </Link>
          </p>
          <h3>Second Edition</h3>
          <div className="flex my-5">
            <div className="flex-1">
              <h1 className="font-bold">Availability</h1>
              <div className="flex">
                <FaCheck />
                <p className="mx-2 text-[0.6rem]">Hard Copy</p>
              </div>
              <div className="flex">
                <FaCheck />
                <p className="mx-2 text-[0.6rem]">E- Book</p>
              </div>
              <div className="flex">
                <FaCheck />
                <p className="mx-2 text-[0.6rem]">Audio Book</p>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="font-bold">Status</h1>
              <p>{`In Shelf`}</p>
            </div>
          </div>
          <div className="flex my-5">
            {user.type == "user" ? (
              <Button colorScheme={"orange"} className="mx-4" onClick={onOpen}>
                BORROW
              </Button>
            ) : null}
            <Button colorScheme={"green"} onClick={handleRead}>
              Read Now
            </Button>
          </div>
        </div>
        <div className="flex-[0.7]">
          <h1>About Author</h1>
          <h1>{user.active_book.authorName}</h1>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            praesentium impedit, eaque adipisci atque quas eum labore, neque,
            voluptatem iusto temporibus fugit ducimus rem cupiditate.
          </p>
        </div>
      </div>
    </div>
  );
}
