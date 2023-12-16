import { createAction, createSlice } from "@reduxjs/toolkit";
import randomQuote from "../quote-parser.mjs"

export const initialize = createAction('initialize');

// TODO finish stateslice
export const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    value: '',
  },
  reducers: {
    getRandomQuote: (state, action) => {
      return randomQuote();
    }
  },
  extraReducers: (builder) => {
    builder.addCase(initialize, (state) => {
      state.value = randomQuote();
    })
  }
})

export const  { getRandomQuote }  = quoteSlice.actions;

export default quoteSlice.reducer;