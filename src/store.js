import { configureStore } from "@reduxjs/toolkit";
// TODO finish importing the state slice
import quoteReducer from './features/store/quoteSlice'

export default configureStore({
  reducer: {
    quote: quoteReducer
  }
})