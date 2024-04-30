import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/card";
import data from "./data.json";

function App() {
  return (
    <>
      <Navbar title="Textile" about="Know everything about textile" />
      <Card />
    </>
  );
}

export default App;
