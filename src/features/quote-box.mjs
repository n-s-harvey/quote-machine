import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomQuote } from "./store/quoteSlice.js";

const QuoteBox = function () {
  const quote = useSelector((state) => state.quote)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomQuote());
  }, [])
  const twitterURL = `https://twitter.com/intent/tweet?text=${quote.quote} by ${quote.author}`
  return (
    <article id="quote-box">
      <p id="text">Quote: {quote.quote}</p>
      <p id="author">Author: {quote.author}</p>
      <button id="new-quote" onClick={() => dispatch(getRandomQuote())}>Get New Quote</button><br />
      <a id="tweet=quote" href={twitterURL} target="_blank">Tweet Quote</a>
    </article>
  )
}

export default QuoteBox;