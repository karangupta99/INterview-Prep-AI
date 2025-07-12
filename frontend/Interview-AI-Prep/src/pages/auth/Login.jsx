import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Welcome Back</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6 ">
        Please enter your details to log in
      </p>

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <label className="text-sm font-medium">Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="karan@gmail.com"
          type="email"
          className="p-2 border border-gray-300 rounded-md"
        />

        <label className="text-sm font-medium">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="Min 8 characters"
          type="password"
          className="p-2 border border-gray-300 rounded-md"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="mt-4 bg-black text-white py-2 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
        <p className="text-[13px] text-slate-800 mt-3">
          Don't Hvae an Account?{" "}
          <button className="font-medium text-amber-500 underline cursor-pointer"
           onClick={()=>{
            setCurrentPage("signup");
          }}>
            SignUp
          </button>
        </p>

      </form>
    </div>
  );
};

export default Login;
