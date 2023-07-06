import React from 'react'
import MyNavbar from './MyNavbar'

const Login = () => {
  const user ={
    name:"Akila",
    address:"Mathugama",
    password:1234
  }

  const LoginToSystem = () =>{
    localStorage.setItem("user",JSON.stringify(user));
  }

  return (
       
    <div className='w-full h-screen bg-blackOverlay'>
        <MyNavbar/>
        <h1 className='text-3xl underline font-bold '>Login</h1>
        <button onClick={()=>LoginToSystem}>Login</button>
    </div>
  )
}

export default Login