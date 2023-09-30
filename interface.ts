interface User {
  user_id: string;
  user_name: string;
  books:book[]
  department: string;
  reg_no: string;
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

type shelfCategory =
  | "All Books"
  | "Favorite"
  | "Borrowed Books"
  | "E-Books"
  | "Audio Books"
  | "Articles and Journals";

export type { User, book, view, shelfCategory };
