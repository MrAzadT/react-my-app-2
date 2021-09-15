import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import Text from "./components/Text";
function App() {
  return (
    <div>
      <Navbar title="Abid Azad Tamal" about="About" />;
      {/* <Text heading="enter the Text" /> */}
      <About />
    </div>
  );
}

export default App;
