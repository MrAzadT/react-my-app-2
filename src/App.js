import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
function App() {
  const [darkMode, setDarkmode] = useState(false);
  return (
    <div>
      <Navbar title="Azad Tamal" about="About" />;
      <About heading="About" />
      <Text heading="enter the Text" />
    </div>
  );
}

export default App;
