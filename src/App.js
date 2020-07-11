import React from "react";
import LinearSearch from "./Components/LinearSearch/LinearSearch";
import BinarySearch from "./Components/BinarySearch/BinarySearch";
import BubbleSort from "./Components/BubbleSort/BubbleSort";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LinearSearch />
      <div style={{ padding: "3rem" }}></div>
      <BinarySearch />
    </div>
  );
}

export default App;
