import { useState } from "react";
import "./App.css";

import NavigationBar from "./components/home/NavigationBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
      </BrowserRouter>
    </>
  );
}

export default App;
