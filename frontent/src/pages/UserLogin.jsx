import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userData, setuserData] = useState();

  const { user, setuser } = React.useContext(UserDataContext);
  const navigate = useNavigate();

  const onSubmit = async(e) => {
    e.preventDefault();
    console.log("kakakak");
    const userData = { email: email, password: password };
    console.log(userData);

    setEmail("");
    setPassword("");

    const response = await axios
      .post("http://localhost:3000/user/login" , userData)
      .then((res) => {
        console.log("response fetch successfully");
        return res;
      })
      .catch((err) => {
        console.error("Error sending data to backend", err);
        alert("Something went wrong while creating your account!");
      });

      console.log(response);
      if(response.status == 200 ){
        const data = response.data
        setuser(data.user)
        localStorage.setItem('token' , data.token)
        
        
        navigate('/home')
      }
      
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
          <h3 className="text-xl font-medium mb-2 ">What's your email</h3>
          <input
            className="text-lg placeholder:text-sm  bg-[#eeeeee] rounded-2xl px-4 py-2 border w-full"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            required
            placeholder="Enter your email"
          />
          <h3 className="text-xl mb-2 mt-3 font-medium ">
            What's your Password
          </h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="text-lg placeholder:text-sm bg-[#eeeeee] rounded-2xl px-4 py-2 border w-full"
            type="password"
            required
            placeholder="Enter your password"
          />

          <button className="mt-4 w-full bg-black text-cyan-100 rounded-2xl px-4 py-2">
            Login
          </button>
        </form>
        <p className="text-center mt-1">
          New here?{" "}
          <Link to={"/signup"} className="text-blue-600">
            Create New Account
          </Link>
        </p>
        <Link
          to={"/captain-login"}
          className="mt-4 w-3/14 flex items-center justify-center  bg-blue-500 text-white rounded-2xl px-4 py-2"
        >
          Signin as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
