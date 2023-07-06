import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import MyPage from "./components/MyPage";

const App = () => {
    // const navigate=useNavigate();

    // useEffect(()=>{
    //     const user= localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    //     if(!user) navigate('/login')
    // },[])

    return(
        // <MyPage/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    );
}

export default App;