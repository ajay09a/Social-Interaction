import SignUp from "./SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./SignIn";
import Home from "./Home";

function App() {
  return (
    <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/user/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
