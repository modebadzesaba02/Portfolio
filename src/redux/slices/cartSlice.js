import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = [
    {
        title: "Cap",
        price: 13.40,
        id: 1,
        q: 1
    },
    {
        title: "T shirt",
        price: 20.40,
        id: 2,
        q: 1
    },
    {
        title: "Boots",
        price: 120.40,
        id: 3,
        q: 1
    },
]

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        removeItem: (state, action) => state = state.filter(item => item.id !== action.payload.id),
        addItem: (state, action) => { return [...state, { title: action.payload.title, price: action.payload.price, id: action.payload.id, q: action.payload.q }] },
        inItem: (state, action) => state = state.map(item => { if (item.id === action.payload.id) { return { ...item, q: item.q + 1 } } else{return item} 
       
    }),
    deItem: (state, action) => state = state.map(item => { if (item.id === action.payload.id  ) {//if 
         return { ...item, q: item.q - 1 } }  else{return item}  
       
    })


    }
})

export const { removeItem } = cartSlice.actions
export const { addItem } = cartSlice.actions
export const { inItem } = cartSlice.actions
export const { deItem } = cartSlice.actions
export default cartSlice.reducer