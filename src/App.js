// import './App.css';
import "./stylesheets/styles.css";
import QuoteBox from "./features/quote-box.mjs";

function App() {
  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>
      <QuoteBox />
    </div>
  );
}

export default App;
