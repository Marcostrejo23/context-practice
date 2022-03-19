import React from "react";
import "./App.css";
import FunctionContextComponent from '';
function App() {

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return <div className="App"></div>;
}

export default App;
