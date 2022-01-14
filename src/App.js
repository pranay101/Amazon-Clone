import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Component/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
        <Routes>
          <Route path="checkout" element={<Checkout/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
