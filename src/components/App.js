import React from "react";
import "../styles/App.css";
import { TopBar } from "./TopBar";
import { Main } from "./Main.js";


function App() {
  return (
    <div className="App">
      <TopBar />
      <Main />
    </div>
  );
}

export default App;
