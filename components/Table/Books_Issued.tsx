import { createColumnHelper } from "@tanstack/react-table";

import { useState } from "react";
import { User, book } from "@/interface";
import Table from "./Table";
import { Btn_A } from "@/components";
import Action from "./Action";

interface compProps {
  book_data: book[];
}

export default function Books_Issued({ book_data }: compProps) {
  const columnHelper = createColumnHelper<book>();
  const [data, setData] = useState<book[]>(book_data);

  const columns = [
    columnHelper.accessor("user_id", {
      header: "User ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("user_name", {
      header: "Username",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("book_id", {
      header: "Bood ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("title", {
      header: "Title",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("author", {
      header: "Reg No",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("return_date", {
      header: "Overdue",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("fine", {
      header: "Fine",
      cell: (info) => info.getValue(),
    }),
  ];

  return (
    <div className="w-full z-[200] relative rounded-xl my-10">
      <div className="w-full flex flex-wrap justify-between">
        <Table data={data} columns={columns} title="Bookx Issued" cta={<Action/>} />
      </div>
    </div>
  );
}
