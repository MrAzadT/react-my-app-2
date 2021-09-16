import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <div>
      <Navbar
        title="Azad Tamal"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      ;
      <About heading="About" />
      <Text heading="enter the Text" />
    </div>
  );
}

export default App;
