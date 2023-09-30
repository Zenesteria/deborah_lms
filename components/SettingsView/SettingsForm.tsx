import { useFormik } from "formik";
import { Input, Button, Textarea } from "@chakra-ui/react";
import FormGroup from "./FormGroup";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";

interface compProps {
  fname: string;
  email: string;
  staffId: string;
  phoneNumber: string;
  about: string;
}

export default function SettingsForm({
  fname,
  email,
  staffId,
  phoneNumber,
  about,
}: compProps) {
  const [editable, setEditable] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: email,
      fname: fname,
      staffId,
      phoneNumber,
      about,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col w-full">
        <FaRegEdit
          className="ml-auto cursor-pointer"
          style={{ fontSize: "calc(1rem + 0.5vw)" }}
          onClick={() => setEditable(true)}
        />
        <div className="flex flex-wrap w-full">
          <FormGroup>
            <label htmlFor="fullname">Full Name</label>
            <Input
              readOnly={!editable}
              id="fullname"
              name="fullname"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.fname}
              colorScheme="gray"
              className="my-2 p-[1.5rem]"
              border={2}
              style={
                editable
                  ? { border: "1px solid black" }
                  : {
                      border: "2px solid #E0E4EC",
                      backgroundColor: "#FAFBFC",
                      color: "gray",
                    }
              }
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email ID</label>
            <Input
              readOnly={!editable}
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              colorScheme="gray"
              className="my-2 p-[1.5rem]"
              border={2}
              style={
                editable
                  ? { border: "1px solid black" }
                  : {
                      border: "2px solid #E0E4EC",
                      backgroundColor: "#FAFBFC",
                      color: "gray",
                    }
              }
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="staffid">Staff ID No</label>
            <Input
              readOnly={!editable}
              id="staffid"
              name="staffid"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.staffId}
              colorScheme="gray"
              className="my-2 p-[1.5rem]"
              border={2}
              style={
                editable
                  ? { border: "1px solid black" }
                  : {
                      border: "2px solid #E0E4EC",
                      backgroundColor: "#FAFBFC",
                      color: "gray",
                    }
              }
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="number">Phone Number</label>
            <Input
              readOnly={!editable}
              id="number"
              name="number"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              colorScheme="gray"
              className="my-2 p-[1.5rem]"
              border={2}
              style={
                editable
                  ? { border: "1px solid black" }
                  : {
                      border: "2px solid #E0E4EC",
                      backgroundColor: "#FAFBFC",
                      color: "gray",
                    }
              }
            />
          </FormGroup>

          <div className="w-full m-4">
            <label htmlFor="about">Phone Number</label>
            <Textarea
              readOnly={!editable}
              id="about"
              name="about"
              onChange={formik.handleChange}
              value={formik.values.about}
              colorScheme="gray"
              className="my-2 p-[1.5rem]"
              border={2}
              style={
                editable
                  ? { border: "1px solid black" }
                  : {
                      border: "2px solid #E0E4EC",
                      backgroundColor: "#FAFBFC",
                      color: "gray",
                    }
              }
            />
          </div>
        </div>

        <div className="flex items-center">
          <Button type="submit" color={"white"} bg={"red"}>
            Update Profile
          </Button>

          {editable ? (
            <div className="flex">
              <h1 onClick={() => setEditable(false)} className="mx-5 cursor-pointer" style={{ fontSize: "calc(1rem + 0.3vw)" }}>
                Cancel
              </h1>
            </div>
          ) : null}
        </div>
      </div>
    </form>
  );
}
