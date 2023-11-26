interface User {
  bio:string
  email:string
  fullName:string
  phoneNumber:string
  profilePhoto:string
  regNo:string
  // books:book[]
}

interface book {
    user_id:string
    user_name:string
  book_id: string;
  title: string;
  author: string;
  issue_date: string;
  return_date: string;
  details: string;
  status: 'In-Shelf'|'Borrowed'|'Overdue';
  fine: string;
  rating:string
  category:string
  availability:{
    hardCopy:boolean
    ebook:boolean
    audiobook:boolean
  }
  liked:boolean
}

interface book_v1 {
  _Id: string
  bookName: string
  authorName:string
  isbn:string
  about: string
  coverImage:string
  audioBook: string
  eBook: string
  category: string
  hardCopyFormat: boolean
  audioBookFormat: boolean
  eBookFormat: boolean
}
type view =
  | "default"
  | "Books"
  | "Borrowed"
  | "Borrowed Books"
  | "New Members"
  | "Total Visitors"
  | "Overdue Books"
  | "Settings"
  | "Login & Security"
  | "Notifications"
  | "Interface"
  | "Search"
  | "My Shelf"
  | "Contribute"
  | "Book"

type shelfCategory =
  | "All Books"
  | "Favorite"
  | "Borrowed Books"
  | "E-Books"
  | "Audio Books"
  | "Articles and Journals";

export type { User, book, view, shelfCategory, book_v1 };
