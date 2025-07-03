import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Handle Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Welcome Back</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6 ">
        Please enter your details to log in
      </p>

      <form onSubmit={handleLogin}>
<input
value={email}
onChange={({target})=>{setEmail(target.value)}}
label="Email Address"
placeholder="Karan@gmail.com"
type="text"
/>
<input
value={password}
onChange={({target})=>{setPassword(target.value)}}
label="password"
placeholder="Min 8 Character"
type="password"
/>


      </form>
  );
  };
 export default Login;