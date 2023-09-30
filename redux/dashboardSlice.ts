
import { shelfCategory, view } from '@/interface'
import {createSlice} from '@reduxjs/toolkit'

export interface initialState{
    name:string
    type:'admin'|'user'
    view:view
    shelfCategory:shelfCategory
}

const initialState:initialState = {
    name:'',
    type:'user',
    view:'default',
    shelfCategory:'All Books'
}

const dashboardSlice = createSlice({
    name:'dashboardSlice',
    initialState,
    reducers:{
        setUser: () => {

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
export const {setUser, changeView, changeCategory} = dashboardSlice.actions