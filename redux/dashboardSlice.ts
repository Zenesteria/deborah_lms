
import { book_v1, shelfCategory, view } from '@/interface'
import {createSlice} from '@reduxjs/toolkit'

export interface initialState{
    type:'admin'|'user'
    isLoggedIn:boolean
    view:view
    shelfCategory:shelfCategory
    pfp:string
    regNo:string
    fullName:string
    email:string
    books:book_v1[]
    active_book:book_v1|{}
}

const initialState:initialState = {
    type:'user',
    email:'',
    view:'default',
    shelfCategory:'All Books',
    fullName:'',
    isLoggedIn:false,
    regNo:'',
    pfp:'',
    books:[],
    active_book:{}
}

const dashboardSlice = createSlice({
    name:'dashboardSlice',
    initialState,
    reducers:{
        setUser: (state,action) => {
            const {name, pfp, regNo, email} = action.payload
            console.log(action.payload)
            state.fullName = name
            state.pfp = pfp
            state.regNo = regNo
            state.email = email
            state.isLoggedIn = true
            state.type = 'user'
        },
        setAdmin: (state,action) => {
            const {name, pfp, regNo, email} = action.payload
            console.log(action.payload)
            state.fullName = name
            state.pfp = pfp
            state.regNo = regNo
            state.email = email
            state.isLoggedIn = true
            state.type = 'admin'
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
export const {setUser, changeView, changeCategory, setAdmin, setBooks, setActiveBook} = dashboardSlice.actions