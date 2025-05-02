import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  console.log(input);

  return (
    <>
      <h1>Weather search</h1>
      <input name="myInput" onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={() => setQuery(input)}>search</button>
    </>
  );
}

export default App;
