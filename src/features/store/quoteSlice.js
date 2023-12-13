import { createSlice } from "@reduxjs/toolkit";
import randomQuote from "../quote-parser.mjs"

// TODO finish stateslice
export const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    value: ''
  },
  value: '',
  reducers: {
    getRandomQuote: (state, action) => {
      return randomQuote();
    }
  },
})

export const  { getRandomQuote }  = quoteSlice.actions;

export default quoteSlice.reducer;