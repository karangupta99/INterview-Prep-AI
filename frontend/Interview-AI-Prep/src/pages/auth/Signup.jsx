import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
 // ✅ capitalized

const Signup = ({ setCurrentPage }) => {
  const [profilepIC, setProfilepIC] = useState(null)
  const [fullName, setfullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
  }

  return (
    <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>
      <h3 className='text-lg font-semibold text-black'>Create an account</h3>
      <p className='text-sm text-slate-700 mt-[5px] mb-6'>Join us today by entering your details below</p>

      <form onSubmit={handleSignUp} className=''>
        <div className='grid grid-cols-1 md:grid-cols-1 gap-2'>

          <Input
            value={fullName}
            onChange={({ target }) => setfullName(target.value)}
            label="Full Name"
            placeholder="John"
            type="text"
          />

          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="John@gmail.com"
            type="email"
          />

          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="password"
            placeholder="password"
            type="password"
          />

        </div>

        {error && <p className='text-red-500 text-sm pb-2.5'>{error}</p>}

        <button type='submit' className='btn-primary'> SIGN UP </button>

        <p className='text-[13px] text-slate-800 mt-3 '>
          Already have an account?{" "}
          <button className='font-medium text-primary underline text-pointer' onClick={() => {
            setCurrentPage("login")
          }}>Login</button>
        </p>
      </form>
    </div>
  )
}

export default Signup
