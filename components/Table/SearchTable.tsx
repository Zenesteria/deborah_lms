import { createColumnHelper } from "@tanstack/react-table";

import { useState } from "react";
import { User, book } from "@/interface";
import { Btn_A } from "@/components";
import TableB from "./TableB";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import PreviewAction from "../PreviewAction";

interface compProps {
  book_data: book[];
}

export default function SearchTable({ book_data }: compProps) {
  const columnHelper = createColumnHelper<book>();
  const [data, setData] = useState<book[]>(book_data);

  const columns = [
    // columnHelper.accessor("user_id", {
    //   header: "User ID",
    //   cell: (info) => info.getValue(),
    // }),
    // columnHelper.accessor("user_name", {
    //   header: "Username",
    //   cell: (info) => info.getValue(),
    // }),
    // columnHelper.accessor("book_id", {
    //   header: "Bood ID",
    //   cell: (info) => info.getValue(),
    // }),
    columnHelper.accessor("title", {
      header: "Title",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("rating", {
      header: "Rating",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("category", {
      header: "Category",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("return_date", {
      header: "Availability",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("liked", {
      header: "",
      cell: (info) =>
        info.getValue() ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart className="text-red-500" />
        ),
    }),
    columnHelper.accessor("fine", {
      header: "",
      cell: (info) => <PreviewAction/>,
    }),
  ];

  return (
    <div className="w-full z-[200] relative rounded-xl my-10">
      <div className="w-full flex flex-wrap justify-between">
        <TableB data={data} columns={columns} title="Users List" />
      </div>
    </div>
  );
}
