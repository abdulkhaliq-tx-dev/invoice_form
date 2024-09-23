import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Invoice from "./pages/Invoice";
import Test from "./components/Test";

function App() {
  return (
    <>
      <Navbar />
      {/* <Invoice/> */}
      <Test/>
    </>
  );
}

export default App;
