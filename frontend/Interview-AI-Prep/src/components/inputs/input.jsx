  import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, label, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label className="">{label}</label>

      <div className="">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className=""
          value={value}
          onChange={(e) => onChange(e)}
        />

        {type === "password" && (
          <span onClick={toggleShowPassword}>
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
