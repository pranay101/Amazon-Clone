import React, { useEffect } from "react";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Component/Checkout/Checkout";
import Login from "./Component/Login/Login";
import { auth } from "./ConfidentialImports/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./Component/ReactContextAPI/StateProvider/StateProvider";
import Footer from "./Component/Footer/Footer"
import Payment from "./Component/Payment/Payment";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // do some shit cuz the user is logged i
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // do some shit cuz there is no user logged in
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      console.log("cleaning up!!");
    };
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/checkout" element={[<Header key={1}/>, <Checkout key={3} />]} />
          <Route path="/payment" element={[<Header key={1}/>, <Payment />]} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={[<Header key={1} />, <Home key={2}/>,<Footer />]} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
