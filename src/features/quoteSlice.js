import { createSlice } from "@reduxjs/toolkit";

// TODO finish stateslice
export const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    value: ''
  },
  currentQuote: '',
  reducers: {
    setQuote: (state, action) => {
      return action.data
    }
  },
})

export const { setQuote } = quoteSlice.actions;

export default quoteSlice.reducer;