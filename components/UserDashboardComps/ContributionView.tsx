import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  VStack,
  HStack,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import Book_Ver_A from '../Book_Ver_A';

interface compProps{

}

export default function ContributionView({}:compProps) {
    const formik = useFormik({
      initialValues: {
        regno: "",
        email: "",
        password: "",
        cpassword: "",
        reason:"",
      },
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  return (
    <div
      className="w-full flex justify-center flex-wrap items-center"
      style={{ animation: "slide_up 1s ease" }}
    >
      <div className="flex-1 h-fit bg-white rounded-lg p-10">
        <h1 className="font-semibold">Fill Up Book Details</h1>
        <form onSubmit={formik.handleSubmit}>
          <HStack p={5} alignItems={"flex-start"}>
            <div className="flex-1">
              <FormControl className="my-2 " id="regnocont">
                <Input
                  id="book"
                  placeholder="Book Name"
                  _placeholder={{ fontsize: "0.5vw" }}
                  name="regno"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.regno}
                  className="p-4"
                  border={2}
                  style={{ border: "1px solid black" }}
                />
              </FormControl>

              <FormControl className="my-5 " id="regnocont">
                <Input
                  id="regno"
                  placeholder="Book Name"
                  _placeholder={{ fontsize: "0.5vw" }}
                  name="regno"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.regno}
                  className="p-4"
                  border={2}
                  style={{ border: "1px solid black" }}
                />
              </FormControl>

              <FormControl className="my-2 " id="regnocont">
                <Textarea
                  id="about"
                  name="about"
                  placeholder="Reason for your Contribution"
                  onChange={formik.handleChange}
                  value={formik.values.reason}
                  colorScheme="gray"
                  className="my-2 p-[1.5rem]"
                  style={{ border: "1px solid black" }}
                  border={2}
                />
              </FormControl>

              <Button bg={"red.400"} w={"full"} type="submit">
                Submit
              </Button>
            </div>

            <div className="flex-[0.5] mx-5">
              <select
                name="lang"
                className="bg-transparent cursor-pointer h-full px-4 w-full outline-none border-[0.5px] py-2 my-3 border-black rounded-full"
                style={{ fontSize: "calc(0.6rem + 0.25vw)" }}
              >
                <option value="en">Category</option>
              </select>
              <select
                name="lang"
                className="bg-transparent cursor-pointer h-full px-4 w-full outline-none border-[0.5px] py-2 my-3 border-black rounded-full"
                style={{ fontSize: "calc(0.6rem + 0.25vw)" }}
              >
                <option value="en">Lang</option>
              </select>

              <div className="my-10">
                <h1 className="font-semibold mb-3">Available Format</h1>
                <div
                  className="flex w-full mb-2"
                  style={{ fontSize: "calc(0.6rem + 0.25vw)" }}
                >
                  <h1>Hard - Copy</h1>
                  <Checkbox
                    ml={"auto"}
                    border={2}
                    borderColor={"black"}
                    style={{}}
                  />
                </div>
                <div
                  className="flex w-full mb-2"
                  style={{ fontSize: "calc(0.6rem + 0.25vw)" }}
                >
                  <h1>E - Book</h1>
                  <Checkbox
                    ml={"auto"}
                    border={2}
                    borderColor={"black"}
                    style={{}}
                  />
                </div>
                <div
                  className="flex w-full mb-2"
                  style={{ fontSize: "calc(0.6rem + 0.25vw)" }}
                >
                  <h1>Audio Book</h1>
                  <Checkbox
                    ml={"auto"}
                    border={2}
                    borderColor={"black"}
                    style={{}}
                  />
                </div>
              </div>
            </div>
          </HStack>
        </form>
      </div>
      <div className="flex-1 px-7">
        <h1
          className=" font-bold mb-10"
          style={{ fontSize: "calc(1rem + 1vw)" }}
        >
          Your <span className=" text-main-three">Contribution</span> <br />
          Helps Others to Learn
        </h1>

        <h3 className="mb-2" style={{ fontSize: "calc(1rem + 0.25vw)" }}>
          Your Previous Contributions
        </h3>
        <div className="flex flex-wrap w-full">
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
