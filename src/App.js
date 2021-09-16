import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");
  return (
    <div>
      <Navbar title="Azad Tamal" about="About" mode={mode} />;
      <About heading="About" />
      <Text heading="enter the Text" />
    </div>
  );
}

export default App;
