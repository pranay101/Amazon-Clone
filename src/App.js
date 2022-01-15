import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Component/Checkout/Checkout";
import Login from "./Component/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
     
        <Routes>
          <Route path="/checkout" element={[ <Header />,<Checkout/>]} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={[ <Header />,<Home />]} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
