import { useState } from "react";
import { Link } from "react-router-dom";
import React from 'react'

const CaptainSignup = () => {
  const [name, setname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [userData, setuserData] = useState();

   const onSubmit = (e) => {
    e.preventDefault();
    setuserData({ name: name, email: email, password: password });  
    console.log(userData);
    setname("");
    setEmail("");
    setPassword("");
  };
  return (
     <div>
      <header className="bg-black bg-opacity-70">
        <h3 className="text-white text-3xl font-semibold py-4 pl-8">Uber</h3>
      </header>
      <div className="flex justify-center flex-col items-center min-h-screen">
        <form
          action=""
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <h3 className="text-xl font-medium mt-2.5 mb-2.5 ">What's your Name</h3>
          <input
            className=" text-lg placeholder:text-sm  bg-[#eeeeee]  px-4 py-2  w-full"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            type="text"
            required
            placeholder="Enter your name"
          />
          <h3 className="text-xl font-medium mt-2.5 mb-2.5 ">What's your email</h3>
          <input
            className="text-lg placeholder:text-sm  bg-[#eeeeee]  px-4 py-2  w-full"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            required
            placeholder="Enter your email"
          />
          <h3 className="text-xl  mt-2.5 mb-2.5 font-medium ">
            What's your Password
          </h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="text-lg placeholder:text-sm bg-[#eeeeee]  px-4 py-2  w-full"
            type="password"
            required
            placeholder="Enter your password"
          />

          <button className="mt-4 w-full bg-[#77ca1d] text-white rounded-2xl  px-4 py-2">
            Create Account as Captain
          </button>
        </form>
        <p className="text-center mt-1">
          Already have account?{" "}
          <Link to={"/login"} className="text-blue-600">
            Login
          </Link>
        </p>
        <p className="text-[16px] text-center pt-3 leading-tight" >
          By continuing, you agree to calls, including by autodialer, WhatsApp,<br></br> or texts from Uber and its affiliates.
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup
