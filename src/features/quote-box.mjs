import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomQuote } from "./store/quoteSlice.js";
import { initialize } from "./store/quoteSlice.js";

const QuoteBox = function () {
  const quote = useSelector((state) => state.quote)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initialize());
  }, [dispatch])
  return (
    <article id="quote-box">
      <p id="text">Quote: {quote.quote}</p>
      <p id="author">Author: {quote.author}</p>
      <button id="new-quote" onClick={() => dispatch(getRandomQuote())}>Get New Quote</button>
      <a id="tweet=quote"></a>
    </article>
  )
}

export default QuoteBox;