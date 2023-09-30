import { Input } from "@chakra-ui/react";
import React from "react";
import { BiScan } from "react-icons/bi";
import { FaAngleDown, FaSearch } from "react-icons/fa";

interface compProps {}

export default function UserSearch({}: compProps) {
  return (
    <div className="flex-[0.4] h-full max-w-[350px] overflow-hidden rounded-full border-[1px] border-[#d6d6d6] shadow-sm mx-4 flex items-center">
      <div className="flex items-center justify-center flex-[0.4] h-full bg-gray-100">
        {/* <h1 className="mx-2" style={{ fontSize: "calc(0.6rem + 0.25vw)" }}>
          All
        </h1>
        <FaAngleDown /> */}
        <select
          name="mode"
          className="bg-transparent cursor-pointer h-full px-4 w-full"
        >
          <option value="all">All</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="text">Text</option>
          <option value="subject">Subject</option>
        </select>
      </div>
      <div className="flex flex-1 p-2 items-center">
        <input
          className="flex-1 nooutline bg-white h-full"
          style={{ border: "0px", outline: "none" }}
        />
        <FaSearch
          className=" text-main-three"
          style={{ fontSize: "calc(0.6rem + 0.25vw)" }}
        />
        <hr className="mx-[0.5rem] h-[20px] w-[1px] bg-gray-300" />
        <BiScan
          className="text-main-three"
          style={{ fontSize: "calc(0.7rem + 0.25vw)" }}
        />
      </div>
    </div>
  );
}
