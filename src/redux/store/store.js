import { configureStore } from "@reduxjs/toolkit";
import CountryReducer from "../reducer/country.reducer";
import thunk from "redux-thunk";

const store = configureStore({
    reducer: CountryReducer,
    middleware: [thunk],
    devTools: true
})

export default store;