import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Create from "./components/create";

function App() {
  return (
    <div className="main">
      <div className="create-component">
        <Create />
      </div>
    </div>
  );
}

export default App;
