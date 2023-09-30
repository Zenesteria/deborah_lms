import {configureStore} from '@reduxjs/toolkit'
import dashboardSlice from './dashboardSlice'

const store = configureStore({
    reducer:{
        dashboardSlice:dashboardSlice
    }
})


export default store;
export type RootState = ReturnType<typeof store.getState>;