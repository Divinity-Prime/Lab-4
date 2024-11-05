import { useState } from "react";
import "./App.css";
import FakeApiApp from "./Components/FakeApiApp.jsx";

function App() {
  const [count, setCount] = useState(0);

  return <>{<FakeApiApp />}</>;
}

export default App;
