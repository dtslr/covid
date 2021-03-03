import React from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Content from "./components/content";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
