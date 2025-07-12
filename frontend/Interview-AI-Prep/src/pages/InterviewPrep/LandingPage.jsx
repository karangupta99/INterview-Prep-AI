import React, { useState } from 'react';
import { APP_FEATURES } from '../../utils/data';
import { useNavigate } from 'react-router-dom';
import { LuSparkles } from 'react-icons/lu';
import Modal from "../../components/Modal"; // or "../Modal" — based on folder structure
import Login from "../auth/Login";

// ✅ Make sure this path is correct

const LandingPage = () => {
  const navigate = useNavigate();

  const [openAuthModel, setopenAuthModel] = useState(false);
  const [currentPage, setcurrentPage] = useState("login");

  const handleCTA = () => {};

  return (
    <>
      <div className="w-full min-h-full bg-[#FFFCEF]">
        <div className="w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0" />
        <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
          {/* Header */}
          <header className="flex justify-between items-center mb-16">
            <div className="text-xl text-black font-bold">Interview Prep AI</div>
            <button
              className="bg-gradient-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-color cursor-pointer"
              onClick={() => setopenAuthModel(true)}
            >
              Login / Sign Up
            </button>
          </header>

          {/* Hero Content */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-4 mb-8 md-mb-0 ">
              <div className="flex item justify-left mb-2 ">
                <div className="flex items-center gap-2 text-[13px] text-amber-600 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                  <LuSparkles /> AI Powered
                </div>
              </div>

              <h1 className="text-5xl text-black font-medium mb-6 leading-tight ">
                Ace Interviews with <br />
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,_#FCD760_100%)] bg--[length:200%_200%]animate-text-shine font-semibold">
                  AI-Powered
                </span>{" "}
                Learning
              </h1>
            </div>

            <div className="w-full md:w-1/2">
              <p className="text-[17px] text-gray-900 mr-0 md:mr-20 mb-6">
                Get role-specific questions, expand answers when you need them,
                dive deeper into concepts, and organize everything your way.
                From preparation to mastery – your ultimate in
              </p>
              <button
                className="bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300transition-colors cursor-pointer"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full min-h-full relative z-10 mb-56">
  <div>
    <section className="flex items-center justify-center -mt-36">
     
    </section>
  </div>

   <div className="w-full min-h-full bg-[#FFFCEF] mt-10">
  <div className="container mx-auto px-4 pt-10 pb-20">
    <section className="mt-5">
      <h2 className="text-2xl text-center text-medium pb-12">
        Features That makes you Shine
      </h2>
    <div className="fle flex-col items-center gap-8">
        {/* first 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {APP_FEATURES.slice(0, 3).map((feature) => (
            <div
              key={feature.id}
              className="bg-[#FFFEFB] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100"
            >
              <h3 className="text-base font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

     {/* ✅ Remaining 2 cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {APP_FEATURES.slice(3).map((feature) => (
    <div
      key={feature.id}
      className="bg-[#FFFEFB] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100"
    >
      <h3 className="text-base font-semibold mb-3">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  ))}
</div>
</div>
 </section>
</div>
</div>


<div className=''>
  Made with ❣️... Happy Coding
</div>
</div>

      <Modal
  isOpen={openAuthModel}
  onClose={() => {
    setOpenAuthModel(false);
    setcurrentPage("login");// reset only on close 
  }}
  hideHeader
>
  <div>
    {currentPage === "login" && (
      <Login setCurrentPage={setcurrentPage} />
    )}

    {currentPage === "signup" && (
      <SignUp setCurrentPage={setcurrentPage} />
    )}
  </div>
</Modal>

    </>
  );


};

export default LandingPage;
