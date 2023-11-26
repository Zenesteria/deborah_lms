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

export default function BookView() {
  const handleBorrow = async () => {};
  const handleRead = async () => {};
  const [toselectedDate, setToSelectedDate] = useState(null);
  const [fromselectedDate, setFromSelectedDate] = useState(null);
  const [isbn, setIsbn] = useState('');
  const [desc, setDesc] = useState('');
  const [err, setErr] = useState('');
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleFromDateSelect = (date:any) => {
    setToSelectedDate(date);
  };
  const handleSubmitBorrow = async () => {

        try {
            let res = await axios.post(
              "https://library-management-system-4hev.onrender.com/api/user/book/borrow",
              {
                borrowDate: `${fromselectedDate}`,
                returnDate: `${toselectedDate}`,
                bookSerialNo: `${isbn}`,
                description: "Just for a few days",
              }
            );
        } catch (error) {
            console.log(error)
        }
  }
  const handleToDateSelect = (date:any) => {
    setFromSelectedDate(date);
  };
  useEffect(() => {
    console.log(fromselectedDate)
    console.log(toselectedDate)
  })
  return (
    <div className="w-full h-fit min-h-screen flex flex-wrap bg-white text-black">
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fill Up the Details {err?err:''}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="">
                <h1>From</h1>
              <DateSelector
                selectedDate={fromselectedDate}
                onSelectDate={handleFromDateSelect}
              />
            </div>
            <div className="">
                <h1>
                    To
                </h1>
              <DateSelector
                selectedDate={toselectedDate}
                onSelectDate={handleToDateSelect}
              />
            </div>
            <div className="">
                <h1>
                    Book Serial No. 
                </h1>
                <Input
                    onChange={(e) => {setIsbn(e.target.value)}}
                    value={isbn}
                />
            </div>
            {/* <div className="">
                <h1>
                    
                </h1>
                <Input
                    onChange={(e) => {setIsbn(e.target.value)}}
                    value={isbn}
                />
            </div> */}
            <Button colorScheme="orange" onClick={handleSubmitBorrow}>
                Borrow
            </Button>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="flex-[0.3]">
        <div
          className="bg-cover bg-center bg-no-repeat w-full aspect-[2/2.5] bg-blue-300"
          style={{ backgroundImage: `url('')` }}
        ></div>
        <div className=" my-2 p-4 rounded-md bg-white">
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
            autem, ipsa eveniet, officia repellat, saepe deserunt excepturi
            alias numquam debitis vero aliquid cum minus neque.
          </p>
        </div>
      </div>
      <div className="flex-1 p-5">
        <div className="flex-1">
          <h1 style={{ fontSize: "calc(1rem + 1vw)" }}>
            {`Don't Make me Think`}
          </h1>
          <p>
            By{" "}
            <Link
              href={"#"}
              className="underline"
              style={{ fontSize: "calc(0.7rem)" }}
            >{`Steve Krug`}</Link>
          </p>
          <h3>Second Edition</h3>
          <div className="flex">
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
          <div className="flex">
            <Button colorScheme={"orange"} className="mx-4" onClick={onOpen}>
              BORROW
            </Button>
            <Button colorScheme={"green"} onClick={handleRead}>
              Read Now
            </Button>
          </div>
        </div>
        <div className="flex-[0.7]">
          <h1>About Author</h1>
          <h1>{`Steve Shrug`}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            praesentium impedit, eaque adipisci atque quas eum labore, neque,
            voluptatem iusto temporibus fugit ducimus rem cupiditate.
          </p>
        </div>
      </div>
    </div>
  );
}
