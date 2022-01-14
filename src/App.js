import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="checkout" element={<h1>I am the checkout page</h1>} />
          <Route path="/" element={[<Header />,<Home />]} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
