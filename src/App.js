import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Paths } from "./routes/Paths";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Paths />
    </div>
  );
}

export default App;
