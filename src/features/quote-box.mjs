import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomQuote } from "./store/quoteSlice.js";

const QuoteBox = function () {
  const quote = useSelector((state) => state.quote)
  const dispatch = useDispatch();
  return (
    <article>
      <p>Quote: {quote.quote}</p>
      <p>Author: {quote.author}</p>
      <button onClick={() => dispatch(getRandomQuote())}>Get New Quote</button>
    </article>
  )
}

export default QuoteBox;