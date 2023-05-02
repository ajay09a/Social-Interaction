import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import '../styles/style.scss'

function App() {
  const [userLoggedIn, setuserLoggedIn] = useState(false)
  return (
    <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn setuserLoggedIn={setuserLoggedIn} />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        {/* {userLoggedIn?<Route path="/user/home" element={<Home />}></Route>:null} */}
        <Route path="/user/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
