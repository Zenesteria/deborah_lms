import React,{useState} from "react";
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
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik, Formik } from "formik";
import Link from "next/link";
import {useRouter} from 'next/router'
import { useDispatch } from "react-redux";
import { setBooks, setUser } from "@/redux/dashboardSlice";

export default function register() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      regno: "",
        email:"",
        password:"",
        cpassword:""
    },
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      setIsLoading(true)
      let res = await axios.post(
        "https://library-management-system-4hev.onrender.com/api/user/signup",
        {
          regNo: values.regno,
          email: values.email,
          password: values.password,
        }
      );
      let res_books = await axios.get(
        "https://library-management-system-4hev.onrender.com/api/books"
      );
      setIsLoading(false)
      // console.log(res.data)
      if (res.data.success) {
        // console.log(res.data.user)
        const { email, fullName, phoneNumber, profilePhoto, regNo, bio } =
          res.data.user;
          const token = res.data.token
          // console.log(token)
        dispatch(
          setUser({
            name: fullName,
            pfp: profilePhoto,
            regNo,
            email,
            token
          })
        );
        dispatch(
          setBooks({
            books: res_books.data.books,
          })
        );
        router.push("/dashboard");
      }
    }
  })
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat absolute top-[-2%]"
        style={{ backgroundImage: "url('/img/backdrop.svg')" }}
      ></div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          cpassword: "",
          regno: "",
        }}
        onSubmit={async (values) => {
          
        }}
        validate={(values) => {
          let errors = {
            password: "",
            email: "",
            regno: "",
          };
          if (values.password != values.cpassword) {
            errors.password = "Password Does Not match";
          }
          return errors;
        }}
      >
        {({ handleSubmit, errors, touched }) => (
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
              maxW={"400px"}
              py={12}
              px={6}
            >
              <VStack rounded={"lg"} bg="white" boxShadow={"lg"} p={8}>
                <div
                  className="w-[50%] min-w-[70px] max-w-[100px] aspect-square bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('/img/afit_logo.png')" }}
                ></div>
                <h1>Registration</h1>
                <Stack w={"full"} spacing={4}>
                  <form onSubmit={formik.handleSubmit}>
                    <FormControl className="my-2 " id="regnocont">
                      <FormLabel style={{ fontSize: "calc(0.6rem + 0.25vw)" }}>
                        Reg No.
                      </FormLabel>
                      <Input
                        id="regno"
                        placeholder="Staff ID No"
                        _placeholder={{ fontsize: "0.5vw" }}
                        name="regno"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.regno}
                        className="p-4"
                        border={2}
                        style={{ border: "1px solid black" }}
                      />
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>
                    <FormControl className="my-2 " id="emailcont">
                      <FormLabel style={{ fontSize: "calc(0.6rem + 0.25vw)" }}>
                        Email
                      </FormLabel>
                      <Input
                        id="email"
                        placeholder="username@collegename.ac.in"
                        _placeholder={{ fontsize: "0.5vw" }}
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="p-4"
                        border={2}
                        style={{ border: "1px solid black" }}
                      />
                    </FormControl>
                    <FormControl
                      isInvalid={errors.password == "Password Does Not match"}
                      className="my-2 "
                      id="passwordcont"
                    >
                      <FormLabel style={{ fontSize: "calc(0.6rem + 0.25vw)" }}>
                        Password
                      </FormLabel>
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                      <Input
                        id="password"
                        placeholder="*******"
                        _placeholder={{ fontsize: "0.5vw" }}
                        name="password"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        className="p-4"
                        border={2}
                        style={{ border: "1px solid black" }}
                      />
                    </FormControl>
                    <FormControl className="my-2 " id="cpasswordcont">
                      <FormLabel style={{ fontSize: "calc(0.6rem + 0.25vw)" }}>
                        Confirm Password
                      </FormLabel>
                      <Input
                        id="cpassword"
                        placeholder="********"
                        _placeholder={{ fontsize: "0.5vw" }}
                        name="cpassword"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.cpassword}
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
                        Register
                      </Button>
                      <Flex
                        justifyContent={"center"}
                        style={{ fontSize: "calc(0.5rem + 0.25vw)" }}
                      >
                        <p>
                          Already a User?{" "}
                          <Link className="underline text-blue-500" passHref href={'/'}>
                            Login now
                          </Link>
                        </p>
                      </Flex>
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
