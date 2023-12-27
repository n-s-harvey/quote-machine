import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomQuote } from "./store/quoteSlice.js";

const QuoteBox = function () {
  const quote = useSelector((state) => state.quote);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomQuote());
  }, []);
  const twitterURL = `https://twitter.com/intent/tweet?text="${quote.text}" by ${quote.author}`;
  return (
    <article id="quote-box">
      <section id="quote">
        <p id="text">"{quote.text}"</p>
      </section>
      <section id="interact-line">
        <p id="author">- {quote.author}</p>
        <button id="new-quote" onClick={() => dispatch(getRandomQuote())}>
          New Quote
        </button>
        <a id="tweet=quote" href={twitterURL} target="_blank">
          Tweet Quote
        </a>
      </section>
    </article>
  );
};

export default QuoteBox;
