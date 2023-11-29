import {
  createColumnHelper,
} from "@tanstack/react-table";

// import { table_data } from "@/util/aux_data";
import { useEffect, useState } from "react";
import { User, book_v1 } from "@/interface";
import Table from "./Table";
import { Btn_A } from '@/components'
import Action from "./Action";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";




export default function index() {
  const UsercolumnHelper = createColumnHelper<User>();
  const BookcolumnHelper = createColumnHelper<book_v1>();
  const user = useSelector((state:RootState) => state.dashboardSlice)
  const [usersData, setUsersData] = useState<User[]>([]);
  const [booksData, setBooksData] = useState<book_v1[]>(user.books);
  useEffect(() => {
    axios
      .get(
        "https://library-management-system-4hev.onrender.com/api/admin/users",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.jwt_token}`,
          },
        }
      )
      .then((res) => {
        let user = res.data;
        console.log(user.users);
        setUsersData(user.users)
      });
  })


  

  const usercolumns = [
    UsercolumnHelper.accessor("bio", {
      header: "Bio",
      cell: (info) => info.getValue(),
    }),
    UsercolumnHelper.accessor("fullName", {
      header: "Full Name",
      cell: (info) => info.getValue(),
    }),
    // columnHelper.accessor("books", {
    //   header: "Books Issued",
    //   cell: (info) => info.getValue().length,
    // }),
    UsercolumnHelper.accessor("regNo", {
      header: "Reg No",
      cell: (info) => info.getValue(),
    }),
    UsercolumnHelper.accessor("bio", {
      header: "Actions",
      cell: Action,
    }),
  ];
  const bookcolumns = [
    BookcolumnHelper.accessor("bookName", {
      header: "Book Name",
      cell: (info) => info.getValue(),
    }),
    BookcolumnHelper.accessor("authorName", {
      header: "Author Name",
      cell: (info) => info.getValue(),
    }),
    // columnHelper.accessor("books", {
    //   header: "Books Issued",
    //   cell: (info) => info.getValue().length,
    // }),
    BookcolumnHelper.accessor("isbn", {
      header: "ISBN",
      cell: (info) => info.getValue(),
    }),
    BookcolumnHelper.accessor("isbn", {
      header: "Actions",
      cell: Action,
    }),
  ];


  return (
    <div className="w-full min-h-[70vh] z-[200] relative rounded-xl">
      <div className="w-full flex flex-wrap justify-between">
        <div className="max-w-[530px]">
          <Table
            data={usersData}
            columns={usercolumns}
            title="Users List"
            cta={<Btn_A text="Add a new User" link="#" view='AddUser'/>}
          />
        </div>
        <div className="max-w-[530px]">
          <Table
            data={booksData}
            columns={bookcolumns}
            title="Books List"
            cta={<Btn_A text="Add a new Book" link="/admin/addBook" />}
          />
        </div>
      </div>
    </div>
  );
}
