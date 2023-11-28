
import { book_v1, shelfCategory, view } from '@/interface'
import {createSlice} from '@reduxjs/toolkit'

export interface initialState {
  type: "admin" | "user";
  isLoggedIn: boolean;
  view: view;
  shelfCategory: shelfCategory;
  pfp: string;
  regNo: string;
  fullName: string;
  email: string;
  books: book_v1[];
  active_book: book_v1;
  jwt_token: string;
  borrowed_books: {
    book:book_v1
    bookName: string;
    borrowDate: string;
    createdAt: string;
    fine: 0;
    isbn: string;
    paymentStatus: string
    returnDate:string
    status: "Borrowed"|"Returned";
    updatedAt:string
    user: string
    _id:string
  }[];
}

const initialState:initialState = {
    type:'user',
    email:'',
    jwt_token:'',
    view:'default',
    shelfCategory:'All Books',
    fullName:'',
    isLoggedIn:false,
    regNo:'',
    pfp:'',
    books:[],
    active_book:{
        _Id:'',
        bookName:'',
        authorName:'',
        isbn:'',
        about:'',
        coverImage:'',
        audioBook:'',
        eBook:'',
        category:'',
        hardCopyFormat:false,
        eBookFormat:false,
        audioBookFormat:false
    },
    borrowed_books:[]
}

const dashboardSlice = createSlice({
    name:'dashboardSlice',
    initialState,
    reducers:{
        setUser: (state,action) => {
            const {name, pfp, regNo, email,token,borrowed_books} = action.payload
            // console.log(action.payload)
            state.fullName = name
            state.pfp = pfp
            state.regNo = regNo
            state.email = email
            state.isLoggedIn = true
            state.type = 'user'
            state.jwt_token=token,
            state.borrowed_books=borrowed_books
        },
        setBorrowedBooks: (state,action) => {
            const {borrowed_books} = action.payload
            
            state.borrowed_books=borrowed_books
        },
        setAdmin: (state,action) => {
            const {name, pfp, regNo, email,token} = action.payload
            // console.log(action.payload)
            state.fullName = name
            state.pfp = pfp
            state.regNo = regNo
            state.email = email
            state.isLoggedIn = true
            state.type = 'admin'
            state.jwt_token=token
        },
        setBooks: (state,action) => {
            const {books} = action.payload
            state.books = books
        },
        setActiveBook: (state,action) => {
            const {book} = action.payload
            state.active_book = book
        },
        changeView:(state, action) => {
            state.view = action.payload.view
        },
        changeCategory:(state, action) => {
            state.shelfCategory = action.payload.cat
        },
    }

});

export default dashboardSlice.reducer
export const {setUser, changeView, changeCategory, setAdmin, setBooks, setActiveBook, setBorrowedBooks} = dashboardSlice.actions