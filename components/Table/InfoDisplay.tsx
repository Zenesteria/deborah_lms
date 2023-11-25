import {
  createColumnHelper,
} from "@tanstack/react-table";

// import { table_data } from "@/util/aux_data";
import { useEffect, useState } from "react";
import { User } from "@/interface";
import Table from "./Table";
import { Btn_A } from '@/components'
import Action from "./Action";
import axios from "axios";




export default function index() {
  const columnHelper = createColumnHelper<User>();
  useEffect(() => {
    // axios
    //   .get(
    //     "https://library-management-system-4hev.onrender.com/api/admin/users",
    //     {
    //       headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     let user;
    //     console.log(res);
    //   });
  })

  const [data, setData] = useState<User[]>([]);

  

  const columns = [
    columnHelper.accessor("bio", {
      header: "Bio",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("fullName", {
      header: "Full Name",
      cell: (info) => info.getValue(),
    }),
    // columnHelper.accessor("books", {
    //   header: "Books Issued",
    //   cell: (info) => info.getValue().length,
    // }),
    columnHelper.accessor("regNo", {
      header: "Reg No",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("bio", {
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
