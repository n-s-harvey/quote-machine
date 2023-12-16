## React and Redux

One of the first issues that I ran into in this project was transitioning to the (legacy) version of React Redux taught on FreeCodeCamp to what is currently available. I followed along on the React Redux guide and learned about state slices.

## Getting a Random Quote Generator Working

My next learning opportunity was setting up a random quote generator. I was unsure of how to represent this in my code. Did I want to store all of the available quotes in state? Should I set up a module that would read a JSON file and return a random quote and author upon a function call? Ultimately, I decided to place all the quotes into a JavaScript module file to avoid relying on the `fetch` API with a JSON file.

## Initializing State

I ran into an issue initializing state. At first, I was attempting to call `getRandomQuote()` within the `initialState` of the slice.