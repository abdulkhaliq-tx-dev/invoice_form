import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Invoice from "./pages/Invoice";

function App() {
  return (
    <>
      <Navbar />
      <Invoice/>
    </>
  );
}

export default App;
