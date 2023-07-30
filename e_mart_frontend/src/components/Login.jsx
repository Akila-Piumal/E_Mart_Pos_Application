import React, { useState } from 'react'
import Model from './Model';

import { FcGoogle } from "react-icons/fc";

import logo from "../assets/image2.png";
import cart from "../assets/cart.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MyNavbar from './MyNavbar';
import { useGoogleLogin } from '@react-oauth/google';
import { toast } from 'react-hot-toast';


const Login = () => {

  const navigate = useNavigate();

  const [showModel, setShowModel] = useState(true);
  const [loginSignupChange, setLoginSignupChange] = useState(true);
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [role, setRole] = useState("customer");
  const [signupPassword, setSignupPassword] = useState("");


  // Login with Google
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const resp = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        localStorage.setItem("user", JSON.stringify(resp.data));

        const {email, name, sub, picture } = resp.data;

        // Save to the database  --------------------------------------------------------------

        const user = {
          userName: name,
          address: "undefined",
          email: email,
          contactNo: "0000000000",
          role: role,
        };

        const signupPassword = sub;

          try{
              await axios
                .post("http://localhost:5000/api/v1/signup",{
                  user,
                  signupPassword
                })
                .then((res) => {
                  if (res.data.message == "saved") {
                    localStorage.setItem('user',JSON.stringify(user))
                    navigate("/dashboard");
                  }
                });

          }catch(err){
            alert("Failed");
            console.log(err.message);
          }

        // ----------------------------------------------------------------------------------------
        
      } catch (err) {
        console.log(err);
      }
    },
  });

  // Save register details to the backend
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const user = {
      userName: userName,
      address: address,
      email: signUpEmail,
      contactNo: contactNo,
      role: role,
    };

    try {
      await axios
        .post("http://localhost:5000/api/v1/signup", {
          user,
          signupPassword,
        })
        .then((res) => {
          if (res.data.message == "saved") {
            localStorage.setItem('user',JSON.stringify(user))
            navigate("/dashboard");
          }
        });
    } catch (err) {
      alert("Failed");
      console.log(err.message);
    }
  };

  // Login with email and password
  const loginWithEmail = async (e) =>{
      e.preventDefault();

      try{
        await axios
          .post("http://localhost:5000/api/v1/login",{
              signUpEmail,
              signupPassword
          })
          .then((res)=>{
              if(res.status=== 201){
                localStorage.setItem('user',JSON.stringify(res.data.user));
                toast.success(`Login Success`);
                console.log(res.data.user)
                if(res.data.user.role === 'admin'){
                  navigate("/admin")
                }else{
                  navigate("/dashboard");
                }
              }
          })
      }catch(err){
          alert("Email or password incorrect.!")
      }
  }


  return (
    <div>
      <MyNavbar/>
      <Model
        className="w-[600px]"
        isVisible={showModel}
        onClose={() => {setShowModel(false); navigate('/')}}
      >
        {loginSignupChange ? (
          //Login Model
          <div className="py-6 px-6 lg:px-8 text-left">
            <h3 className="mb-4 text-2xl font-medium text-gray-900 text-center font-black">
              Login
            </h3>
            <form className="space-y-6" action="#" onSubmit={loginWithEmail}>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
                  placeholder="Ex : name@example.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*********"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
                      required
                    />
                  </div>
                  <label
                    for="remember"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-700 hover:underline">
                  Forget Password
                </a>
              </div>
              <div className="flex justify- flex-col items-center ">
                <button
                  type="submit"
                  className="w-56 lg:w-72 text-white bg-BlueSet1 hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Login
                </button>

                <h3 className="mt-3 font-bold">or</h3>

                <button
                  type="button"
                  className="mt-3 w-56 lg:w-72 text-white bg-Green2Set2 hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() => {
                    setLoginSignupChange(false);
                  }}
                >
                  Registration
                </button>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className="shadow-xl" rounded>
                  <button
                    type="button"
                    className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                    onClick={login}
                  >
                    <FcGoogle className="mr-4" /> Sign in with Google
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          // Sign Up Model
          <div className="py-6 px-6 lg:px-8 text-left">
            <h3 className="mb-4 text-2xl font-medium text-gray-900 text-center font-black">
              Register
            </h3>
            <form
              className="space-y-2"
              action="#"
              id="signUpForm"
              onSubmit={handleOnSubmit}
            >
              <div>
                <label
                  for="userName"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
                  placeholder=""
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="address"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="emailInSignUp"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="signUpEmail"
                  id="signUpEmail"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
                  placeholder="Ex : name@example.com"
                  required
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="contactNo"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Contact No
                </label>
                <input
                  type="number"
                  name="contactNo"
                  id="contactNo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
                  required
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="passwordInSignup"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="signupPassword"
                  id="signupPassword"
                  placeholder="*********"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                />
              </div>

              <div className="flex justify- flex-col items-center ">
                <button
                  type="submit"
                  className="w-56 lg:w-72 text-white bg-BlueSet1 hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Register
                </button>

                <h3 className="mt-3 font-bold">or</h3>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className="shadow-xl" rounded>
                  <button
                    type="button"
                    className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                    onClick={login}
                 >
                    <FcGoogle className="mr-4" /> Sign in with Google
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </Model>
    </div>
  )
}

export default Login