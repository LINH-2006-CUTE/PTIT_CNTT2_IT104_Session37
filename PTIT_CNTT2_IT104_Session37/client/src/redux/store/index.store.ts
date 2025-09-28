import { configureStore } from "@reduxjs/toolkit";

import studentListSlice from "../slices/students.slices"
import formActionSlice from "../slices/form.slices"

const store = configureStore({
    reducer: {
        students: studentListSlice,
        formAction : formActionSlice
    }
})

export default store
export type AppStore = typeof store
