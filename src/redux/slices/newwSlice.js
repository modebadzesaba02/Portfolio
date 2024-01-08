import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        title: "bag",
        price: 11.20,
        id: 4
    },
    {
        title: "watch",
        price: 20.20,
        id: 5
    },
    {
        title: "backpack",
        price: 220.50,
        id: 6
    },
]

const newwSlice=createSlice({
    name:"neww",
    initialState,
    
})

export const { addItem } = newwSlice.actions
export default newwSlice.reducer