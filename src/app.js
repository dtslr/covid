import React from "react";
import Navbar from "./components/navbar";
import Content from "./components/content";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="wrapper">
        <Content />
      </div>
    </div>
  );
}

export default App;
