import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import DashBoard from "./components/DashBoard";
import { Toaster } from "react-hot-toast";

const App = () => {
  // const navigate=useNavigate();

  // useEffect(()=>{
  //     const user= localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

  //     if(!user) navigate('/login')
  // },[])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
};

export default App;
