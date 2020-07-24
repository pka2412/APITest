import React from "react";
import axios from "axios";

const SendResquest = (event) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=flowers")
    .then((response) => console.log(response));
};

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={SendResquest}>Send Request</button>
    </div>
  );
}

export default App;
