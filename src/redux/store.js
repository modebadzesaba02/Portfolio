import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./slices/cartSlice"
import newwSlice from "./slices/newwSlice"
import taskSlice from "./slices/taskSlice"

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        task:taskSlice
    }
})