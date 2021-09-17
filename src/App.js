import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
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
      <Alert />

      <About heading="About" />
      <Text heading="enter the Text" />
    </div>
  );
}

export default App;
