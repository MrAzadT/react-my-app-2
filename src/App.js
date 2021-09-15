import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
function App() {
  return (
    <div>
      <Navbar title="Azad Tamal" about="About" />;
      <About heading="My About" />
      <Text heading="enter the Text" />
    </div>
  );
}

export default App;
