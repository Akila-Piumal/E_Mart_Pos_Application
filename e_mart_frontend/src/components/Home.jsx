import React, { useEffect, useState } from 'react'
import {HiMenu} from 'react-icons/hi'
import Navbar from './MyNavbar'
import MyNavbar from './MyNavbar'
import Model from './Model'



const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const userInfo= localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    setUser(userInfo);
  },[])

  return (
    <>
        <MyNavbar user={user} />
    </>
  )
}

export default Home