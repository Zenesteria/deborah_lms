import { User, book } from "@/interface";

const options = [
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
  { value: "red", label: "Red" },
  { value: "yellow", label: "Yellow" },
  { value: "orange", label: "Orange" },
  { value: "pink", label: "Pink" },
  { value: "purple", label: "Purple" },
  { value: "grey", label: "Grey" },
];

const table_data: User[] = [
  {
    user_id: "A1B2C3D4",
    user_name: "Chinwe Obi",
    books: [
      {
        rating: "4.5/5",
        user_id: "A1B2C3D4",
        user_name: "Chinwe Obi",
        book_id: "B001",
        title: "The Alchemist",
        author: "Paulo Coelho",
        issue_date: "2023-01-15",
        return_date: "2023-02-15",
        details: "Science fiction novel",
        status: "Borrowed",
        fine: "$5.00",
        availability: {
          audiobook: false,
          ebook: true,
          hardCopy: true,
        },
        category: "Computer Science",
        liked: true,
      },
    ],
    department: "Computer Science",
    reg_no: "AFIT/CS/2023/001",
  },
  {
    user_id: "E5F6G7H8",
    user_name: "Emeka Nwosu",
    books: [
      {
        rating: "4.5/5",
        user_id: "A1B2C3D4",
        user_name: "Chinwe Obi",
        book_id: "B001",
        title: "The Alchemist",
        author: "Paulo Coelho",
        issue_date: "2023-01-15",
        return_date: "2023-02-15",
        details: "Science fiction novel",
        status: "Borrowed",
        fine: "$5.00",
        availability: {
          audiobook: false,
          ebook: true,
          hardCopy: true,
        },
        category: "Computer Science",
        liked: true,
      },
    ],
    department: "Electrical Engineering",
    reg_no: "AFIT/EE/2023/002",
  },
  {
    user_id: "I9J0K1L2",
    user_name: "Chiamaka Okonkwo",
    books: [],
    department: "Mechanical Engineering",
    reg_no: "AFIT/ME/2023/003",
  },
  {
    user_id: "M3N4O5P6",
    user_name: "Ngozi Uche",
    books: [
      {
        rating: "4.5/5",
        user_id: "A1B2C3D4",
        user_name: "Chinwe Obi",
        book_id: "B001",
        title: "The Alchemist",
        author: "Paulo Coelho",
        issue_date: "2023-01-15",
        return_date: "2023-02-15",
        details: "Science fiction novel",
        status: "Borrowed",
        fine: "$5.00",
        availability: {
          audiobook: false,
          ebook: true,
          hardCopy: true,
        },
        category: "Computer Science",
        liked: true,
      },
    ],
    department: "Civil Engineering",
    reg_no: "AFIT/CE/2023/004",
  },
  {
    user_id: "Q7R8S9T0",
    user_name: "Oluwafemi Adekunle",
    books: [],
    department: "Aerospace Engineering",
    reg_no: "AFIT/AE/2023/005",
  },
  {
    user_id: "U1V2W3X4",
    user_name: "Aisha Mohammed",
    books: [],
    department: "Chemistry",
    reg_no: "AFIT/CH/2023/006",
  },
  {
    user_id: "Y5Z6A1B2",
    user_name: "Isaiah Okafor",
    books: [
      {
        rating: "4.5/5",
        user_id: "A1B2C3D4",
        user_name: "Chinwe Obi",
        book_id: "B001",
        title: "The Alchemist",
        author: "Paulo Coelho",
        issue_date: "2023-01-15",
        return_date: "2023-02-15",
        details: "Science fiction novel",
        status: "Borrowed",
        fine: "$5.00",
        availability: {
          audiobook: false,
          ebook: true,
          hardCopy: true,
        },
        category: "Computer Science",
        liked: true,
      },
    ],
    department: "Physics",
    reg_no: "AFIT/PH/2023/007",
  },
  {
    user_id: "C3D4E5F6",
    user_name: "Adesua Ogundele",
    books: [],
    department: "Mathematics",
    reg_no: "AFIT/MA/2023/008",
  },
  {
    user_id: "G7H8I9J0",
    user_name: "Chukwudi Eze",
    books: [
      {
        rating: "4.5/5",
        user_id: "A1B2C3D4",
        user_name: "Chinwe Obi",
        book_id: "B001",
        title: "The Alchemist",
        author: "Paulo Coelho",
        issue_date: "2023-01-15",
        return_date: "2023-02-15",
        details: "Science fiction novel",
        status: "Borrowed",
        fine: "$5.00",
        availability: {
          audiobook: false,
          ebook: true,
          hardCopy: true,
        },
        category: "Computer Science",
        liked: true,
      },
    ],
    department: "Biology",
    reg_no: "AFIT/BI/2023/009",
  },
  {
    user_id: "K1L2M3N4",
    user_name: "Fatima Ibrahim",
    books: [],
    department: "Environmental Science",
    reg_no: "AFIT/ES/2023/010",
  },
];

const books_data: book[] = [
  {
    rating:'4.5/5',
    user_id: "A1B2C3D4",
    user_name: "Chinwe Obi",
    book_id: "B001",
    title: "The Alchemist",
    author: "Paulo Coelho",
    issue_date: "2023-01-15",
    return_date: "2023-02-15",
    details: "Science fiction novel",
    status: "Borrowed",
    fine: "$5.00",
    availability:{
      audiobook:false,
      ebook:true,
      hardCopy:true
    },
    category:'Computer Science',
    liked:true
  },
  {
    rating:'4.5/5',
    user_id: "A1B2C3D4",
    user_name: "Chinwe Obi",
    book_id: "B001",
    title: "The Alchemist",
    author: "Paulo Coelho",
    issue_date: "2023-01-15",
    return_date: "2023-02-15",
    details: "Science fiction novel",
    status: "Borrowed",
    fine: "$5.00",
    availability:{
      audiobook:false,
      ebook:true,
      hardCopy:true
    },
    category:'Computer Science',
    liked:true
  },
  {
    rating:'4.5/5',
    user_id: "A1B2C3D4",
    user_name: "Chinwe Obi",
    book_id: "B001",
    title: "The Alchemist",
    author: "Paulo Coelho",
    issue_date: "2023-01-15",
    return_date: "2023-02-15",
    details: "Science fiction novel",
    status: "Borrowed",
    fine: "$5.00",
    availability:{
      audiobook:false,
      ebook:true,
      hardCopy:true
    },
    category:'Computer Science',
    liked:true
  },
  {
    rating:'4.5/5',
    user_id: "A1B2C3D4",
    user_name: "Chinwe Obi",
    book_id: "B001",
    title: "The Alchemist",
    author: "Paulo Coelho",
    issue_date: "2023-01-15",
    return_date: "2023-02-15",
    details: "Science fiction novel",
    status: "Borrowed",
    fine: "$5.00",
    availability:{
      audiobook:false,
      ebook:true,
      hardCopy:true
    },
    category:'Computer Science',
    liked:true
  },

];





export {options, table_data, books_data}