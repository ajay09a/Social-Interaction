import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import '../style.scss'
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/" />;
    }

    return children
  };
  return (
    <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/user/home" element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
