import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Stack, VStack } from '@chakra-ui/react';
import { Formik } from 'formik';
import Link from 'next/link';
import React,{useState, useEffect} from 'react'
import DateSelector from './DatePicker';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { book_v1 } from '@/interface';
import { useRouter } from 'next/router';
import { changeView } from '@/redux/dashboardSlice';

export default function AddUser() {
    const user = useSelector((state:RootState) => state.dashboardSlice)
    const [isLoading,setIsLoading] = useState(false)
    const [toselectedDate, setToSelectedDate] = useState(null);
    const [fromselectedDate, setFromSelectedDate] = useState(null);
    const dispatch = useDispatch();

    const [msg,setMsg] = useState('')
    const [desc,setDesc] = useState('')
    const [isbn,setIsbn] = useState('')
    const [books,setBooks] = useState<book_v1[]>([])
    
    const handleFromDateSelect = (date: any) => {
        console.log('test')
        setFromSelectedDate(date);
    };
    
    const handleToDateSelect = (date: any) => {
        console.log('test')
        setToSelectedDate(date);
    };
    useEffect(() => {
        axios.get(
          "https://library-management-system-4hev.onrender.com/api/books",
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.jwt_token}`,
            },
          }
        ).then((res) => {
            // console.log(res.data.books)
            setBooks(res.data.books)
            // console.log(books)
        })
    })
    return (
      <div className="w-full min-h-screen text-black p-5 rounded-xl my-4 bg-white relative z-[500]">
        <h1
          className="text-center font-bold"
          style={{ fontSize: "calc(1rem + 1vw)" }}
        >
          User Details
        </h1>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            regNo: "",
            phoneNumber: "",
            borrowDate: "",
            returnDate: "",
            bookName: "",
            bookSerialNo: "",
            description: "",
          }}
          onSubmit={async (values) => {
            setIsLoading(true);
            console.log({
              fullName: values.fullName,
              email: values.email,
              regNo: values.regNo,
              phoneNumber: values.phoneNumber,
              borrowDate: fromselectedDate,
              returnDate: toselectedDate,
              bookName: values.bookName,
              bookSerialNo: books.filter(
                (book) => book.bookName == values.bookName
              )[0]?.isbn,
              description: books.filter(
                (book) => book.bookName == values.bookName
              )[0]?.about,
            });
            try {
              let res = await axios.post(
                "https://library-management-system-4hev.onrender.com/api/admin/users/adduser",

                {
                  fullName: values.fullName,
                  email: values.email,
                  regNo: values.regNo,
                  phoneNumber: values.phoneNumber,
                  borrowDate: fromselectedDate,
                  returnDate: toselectedDate,
                  bookName: values.bookName,
                  bookSerialNo: isbn,
                  description: desc,
                },
                {
                  headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.jwt_token}`,
                  },
                }
              );
            //   console.log(res.data);
              setMsg(res.data.response.data.message);
                dispatch(changeView({
                    view:'default'
                }))
            } catch (error: any) {
            //   console.log(error);
              setMsg(error.response.data.message);
            }
            setIsLoading(false);
          }}
          // validate={(values) => {
          //   let errors = {
          //     password: "",
          //     email: "",
          //     regno: "",
          //   };
          //   if (values.password != values.cpassword) {
          //     errors.password = "Password Does Not match";
          //   }
          //   return errors;
          // }}
        >
          {({ handleSubmit, errors, touched, values, handleChange }) => (
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
                //   maxW={"400px"}
                py={12}
                px={6}
              >
                <VStack rounded={"lg"} bg="white" boxShadow={"lg"} p={8}>
                  {/* <div
                  className="w-[50%] min-w-[70px] max-w-[100px] aspect-square bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('/img/afit_logo.png')" }}
                ></div>
                <h1>Registration</h1> */}
                  <h1>{msg}</h1>
                  <Stack w={"full"} spacing={4}>
                    <form onSubmit={handleSubmit}>
                      <FormControl className="my-2 " id="regnocont">
                        <FormLabel
                          style={{ fontSize: "calc(0.6rem + 0.25vw)" }}
                        >
                          Full Name
                        </FormLabel>
                        <Input
                          id="fullName"
                          placeholder="Full Name"
                          _placeholder={{ fontsize: "0.5vw" }}
                          name="fullName"
                          type="text"
                          onChange={handleChange}
                          value={values.fullName}
                          className="p-4"
                          border={2}
                          style={{ border: "1px solid black" }}
                        />
                      </FormControl>
                      <FormControl className="my-2 " id="emailcont">
                        <FormLabel
                          style={{ fontSize: "calc(0.6rem + 0.25vw)" }}
                        >
                          Email
                        </FormLabel>
                        <Input
                          id="email"
                          placeholder="username@collegename.ac.in"
                          _placeholder={{ fontsize: "0.5vw" }}
                          name="email"
                          type="text"
                          onChange={handleChange}
                          value={values.email}
                          className="p-4"
                          border={2}
                          style={{ border: "1px solid black" }}
                        />
                      </FormControl>
                      <FormControl className="my-2 " id="regcont">
                        <FormLabel
                          style={{ fontSize: "calc(0.6rem + 0.25vw)" }}
                        >
                          Reg No.
                        </FormLabel>
                        <Input
                          id="regNo"
                          placeholder=""
                          _placeholder={{ fontsize: "0.5vw" }}
                          name="regNo"
                          type="text"
                          onChange={handleChange}
                          value={values.regNo}
                          className="p-4"
                          border={2}
                          style={{ border: "1px solid black" }}
                        />
                      </FormControl>
                      <FormControl className="my-2 " id="phoneCont">
                        <FormLabel
                          style={{ fontSize: "calc(0.6rem + 0.25vw)" }}
                        >
                          Phone Number
                        </FormLabel>
                        <Input
                          id="phoneNumber"
                          placeholder="+234----"
                          _placeholder={{ fontsize: "0.5vw" }}
                          name="phoneNumber"
                          type="text"
                          onChange={handleChange}
                          value={values.phoneNumber}
                          className="p-4"
                          border={2}
                          style={{ border: "1px solid black" }}
                        />
                      </FormControl>
                      <FormControl className="my-2 " id="bookNameCont">
                        <FormLabel
                          style={{ fontSize: "calc(0.6rem + 0.25vw)" }}
                        >
                          Book Name
                        </FormLabel>
                        {/* <Input
                          id="bookName"
                          placeholder=""
                          _placeholder={{ fontsize: "0.5vw" }}
                          name="bookName"
                          type="text"
                          onChange={handleChange}
                          value={values.bookName}
                          className="p-4"
                          border={2}
                          style={{ border: "1px solid black" }}
                        /> */}
                        <select
                          className="p-4 w-full"
                          onChange={handleChange}
                          name="bookName"
                          id="bookName"
                          value={values.bookName}
                        >
                          {/* Your select options go here */}
                          {books.map((book) => {
                            return (
                              <option value={book.bookName}>
                                {book.bookName}
                              </option>
                            );
                          })}
                        </select>
                      </FormControl>
                      <FormControl className="my-2 " id="bookSerialCont">
                        <FormLabel
                          style={{ fontSize: "calc(0.6rem + 0.25vw)" }}
                        >
                          Book Serial Number
                        </FormLabel>
                        <Input
                          id="bookSerialNo"
                          placeholder="ISBN"
                          _placeholder={{ fontsize: "0.5vw" }}
                          name="bookSerialNo"
                          type="text"
                          onChange={() => {setIsbn(
                            books.filter(
                              (book) => book.bookName == values.bookName
                            )[0]?.isbn
                          );}}
                          value={
                            books.filter(
                              (book) => book.bookName == values.bookName
                            )[0]?.isbn
                          }
                          //   isDisabled={true}
                          disabled
                          className="p-4"
                          border={2}
                          style={{ border: "1px solid black" }}
                        />
                      </FormControl>
                      <FormControl className="my-2 " id="bookDescCont">
                        <FormLabel
                          style={{ fontSize: "calc(0.6rem + 0.25vw)" }}
                        >
                          Book Description
                        </FormLabel>
                        <Input
                          id="bookDesc"
                          placeholder=""
                          _placeholder={{ fontsize: "0.5vw" }}
                          name="description"
                          type="text"
                          onChange={() => {setDesc(
                            books.filter(
                              (book) => book.bookName == values.bookName
                            )[0]?.about
                          );}}
                          value={
                            books.filter(
                              (book) => book.bookName == values.bookName
                            )[0]?.about
                          }
                          //   isDisabled={true}
                          disabled
                          className="p-4"
                          border={2}
                          style={{ border: "1px solid black" }}
                        />
                      </FormControl>

                      <h1>From:</h1>
                      <DateSelector
                        selectedDate={fromselectedDate}
                        onSelectDate={handleFromDateSelect}
                      />

                      <h1>To:</h1>
                      <DateSelector
                        selectedDate={toselectedDate}
                        onSelectDate={handleToDateSelect}
                      />

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
                          Add User
                        </Button>
                        {/* <Flex
                        justifyContent={"center"}
                        style={{ fontSize: "calc(0.5rem + 0.25vw)" }}
                      >
                        <p>
                          Already a User?{" "}
                          <Link
                            className="underline text-blue-500"
                            passHref
                            href={"/admin/login"}
                          >
                            Login now
                          </Link>
                        </p>
                      </Flex> */}
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
