import {
  createColumnHelper,
} from "@tanstack/react-table";

import { table_data } from "@/util/aux_data";
import { useState } from "react";
import { User } from "@/interface";
import Table from "./Table";
import { Btn_A } from '@/components'
import Action from "./Action";




export default function index() {
  const columnHelper = createColumnHelper<User>();
  const [data, setData] = useState<User[]>(table_data);

  const columns = [
    columnHelper.accessor("user_id", {
      header: "User ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("user_name", {
      header: "Username",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("books", {
      header: "Books Issued",
      cell: (info) => info.getValue().length,
    }),
    columnHelper.accessor("department", {
      header: "Department",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("reg_no", {
      header: "Reg No",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("user_id", {
      header: "Actions",
      cell: Action,
    }),
  ];


  return (
    <div className="w-full min-h-[70vh] z-[200] relative rounded-xl">
      <div className="w-full flex flex-wrap justify-between">
        <div className="max-w-[530px]">
          <Table
            data={data}
            columns={columns}
            title="Users List"
            cta={<Btn_A text="Add a new User" />}
          />
        </div>
        <div className="max-w-[530px]">
          <Table
            data={data}
            columns={columns}
            title="Books List"
            cta={<Btn_A text="Add a new Book" />}
          />
        </div>
      </div>
    </div>
  );
}
