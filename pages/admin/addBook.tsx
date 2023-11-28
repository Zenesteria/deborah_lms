import React, { useState } from "react";
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
  FormErrorMessage,
  VStack,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setBooks, setUser } from "@/redux/dashboardSlice";
import { RootState } from "@/redux/store";

export default function AddBook() {
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state:RootState) => state.dashboardSlice)
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const [msg,setMsg] = useState('')
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="relative w-full min-h-screen h-fit bg-white overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat absolute top-[-2%]"
        style={{ backgroundImage: "url('/img/backdrop.svg')" }}
      ></div>
      <Formik
        initialValues={{
          bookName: "",
          authorName: "",
          isbn: "",
          about: "",
          coverImageUrl: "",
          audiobook: "",
          hardCopy: false,
          ebookUrl: "",
          audioBookUrl: "",
          category: "",
        }}
        onSubmit={async (values) => {
          // alert(JSON.stringify(values, null, 2));
          setIsLoading(true);
          console.log({
            bookName: values.bookName,
            authorName: values.authorName,
            isbn: values.isbn,
            about: values.about,
            coverImage: values.coverImageUrl,
            audioBook: "test",
            eBook: values.ebookUrl,
            category: values.category,
            hardCopyFormat: true,
            audioBookFormat: true,
            eBookFormat: true,
          });
          const res = await axios.post(
            "https://library-management-system-4hev.onrender.com/api/books/add",
            {
              bookName: values.bookName,
              authorName: values.authorName,
              isbn: values.isbn,
              about: values.about,
              coverImage: values.coverImageUrl,
              audioBook:
                "https://res.cloudinary.com/dwinqwsit/video/upload/v1696868502/userFile/gmcbybpto6l8r1iepxb3.mp4",
              eBook: values.ebookUrl,
              category: values.category,
              hardCopyFormat: true,
              audioBookFormat: true,
              eBookFormat: true,
            },
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.jwt_token}`,
              },
            }
          );
          let res_books = await axios.get(
            "https://library-management-system-4hev.onrender.com/api/books",
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.jwt_token}`,
              },
            }
          );
          dispatch(
            setBooks({
              books: res_books.data.books,
            })
          );
          setIsLoading(false);
          setMsg('Book Added Successfully')
          console.log(res.data);
          //   alert(values)
        }}
        validate={(values) => {
          //   let errors = {
          //     password: "",
          //     email: "",
          //   };
          //   return errors;
        }}
      >
        {({ handleSubmit, errors, touched, handleChange, values }) => (
          <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            color={"black"}
            zIndex={200}
            pos={"relative"}
          >
            <Stack
              spacing={8}
              mx={"auto"}
              w="full"
              maxW={"700px"}
              py={12}
              px={6}
            >
              <VStack rounded={"lg"} bg="white" boxShadow={"lg"} p={8}>
                <div
                  className="w-[70%] min-w-[70px] max-w-[100px] aspect-square bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('/img/afit_logo.png')" }}
                ></div>
                <h1>Add a New Book</h1>
                <h1 className=" text-green-500">{msg}</h1>
                {err ? <p className="text-red-500">{err}</p> : null}
                <Stack w={"full"} spacing={4}>
                  <form onSubmit={handleSubmit}>
                    <FormControl className="my-2 " id="emailcont">
                      <FormLabel style={{ fontSize: "calc(0.6rem + 0.25vw)" }}>
                        Book Name
                      </FormLabel>
                      <Input
                        id="bookName"
                        placeholder="Book Title"
                        _placeholder={{ fontsize: "0.5vw" }}
                        name="bookName"
                        type="text"
                        onChange={handleChange}
                        value={values.bookName}
                        className="p-4"
                        border={2}
                        style={{ border: "1px solid black" }}
                      />
                    </FormControl>
                    <FormControl className="my-2 " id="emailcont">
                      <FormLabel style={{ fontSize: "calc(0.6rem + 0.25vw)" }}>
                        Author Name
                      </FormLabel>
                      <Input
                        id="authorName"
                        placeholder=""
                        _placeholder={{ fontsize: "0.5vw" }}
                        name="authorName"
                        type="text"
                        onChange={handleChange}
                        value={values.authorName}
                        className="p-4"
                        border={2}
                        style={{ border: "1px solid black" }}
                      />
                    </FormControl>
                    <FormControl className="my-2 " id="emailcont">
                      <FormLabel style={{ fontSize: "calc(0.6rem + 0.25vw)" }}>
                        ISBN
                      </FormLabel>
                      <Input
                        id="isbn"
                        placeholder="000-0000-00"
                        _placeholder={{ fontsize: "0.5vw" }}
                        name="isbn"
                        type="text"
                        onChange={handleChange}
                        value={values.isbn}
                        className="p-4"
                        border={2}
                        style={{ border: "1px solid black" }}
                      />
                    </FormControl>
                    <FormControl className="my-2 " id="emailcont">
                      <FormLabel style={{ fontSize: "calc(0.6rem + 0.25vw)" }}>
                        Book Description
                      </FormLabel>
                      <Textarea
                        id="about"
                        placeholder=""
                        _placeholder={{ fontsize: "0.5vw" }}
                        name="about"
                        onChange={handleChange}
                        value={values.about}
                        className="p-4"
                        border={2}
                        style={{ border: "1px solid black" }}
                      />
                    </FormControl>
                    <FormControl className="my-2 " id="emailcont">
                      <FormLabel style={{ fontSize: "calc(0.6rem + 0.25vw)" }}>
                        Cover Image Url
                      </FormLabel>
                      <Input
                        id="coverImageUrl"
                        placeholder=""
                        _placeholder={{ fontsize: "0.5vw" }}
                        name="coverImageUrl"
                        type="text"
                        onChange={handleChange}
                        value={values.coverImageUrl}
                        className="p-4"
                        border={2}
                        style={{ border: "1px solid black" }}
                      />
                    </FormControl>
                    <FormControl className="my-2 " id="emailcont">
                      <FormLabel style={{ fontSize: "calc(0.6rem + 0.25vw)" }}>
                        E-Book Url
                      </FormLabel>
                      <Input
                        id="ebookUrl"
                        placeholder=""
                        _placeholder={{ fontsize: "0.5vw" }}
                        name="ebookUrl"
                        type="text"
                        onChange={handleChange}
                        value={values.ebookUrl}
                        className="p-4"
                        border={2}
                        style={{ border: "1px solid black" }}
                      />
                    </FormControl>
                    <FormControl className="my-2 " id="passwordcont">
                      <FormLabel style={{ fontSize: "calc(0.6rem + 0.25vw)" }}>
                        Category
                      </FormLabel>
                      <Input
                        id="category"
                        placeholder=""
                        _placeholder={{ fontsize: "0.5vw" }}
                        name="category"
                        type="text"
                        onChange={handleChange}
                        value={values.category}
                        className="p-4"
                        border={2}
                        style={{ border: "1px solid black" }}
                      />
                    </FormControl>

                    <Stack my={"5"} spacing={10}>
                      {/* <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Text color={"blue.400"}>Forgot password?</Text>
                  </Stack> */}
                      <Button
                        bg={"orange.400"}
                        color={"white"}
                        _hover={{
                          bg: "orange.500",
                        }}
                        type="submit"
                        isLoading={isLoading}
                        isDisabled={isLoading}
                      >
                        Add Book
                      </Button>
                      <Link href={'/admin'} className="text-blue-500 underline text-center">
                          Go Back to dashboard
                      </Link>
                    </Stack>
                  </form>
                </Stack>
              </VStack>
            </Stack>
          </Flex>
        )}
      </Formik>
    </div>
  );
}
