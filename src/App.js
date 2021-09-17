import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    <Router>
      <div>
        <Navbar
          title="Azad Tamal"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert />
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Text heading="enter the Text" />
          </Route>
        </Switch>

        {/* <About heading="About" /> */}
      </div>
    </Router>
  );
}

export default App;
