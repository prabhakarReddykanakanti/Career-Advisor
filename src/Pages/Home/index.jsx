import React from 'react';
import { Navbar } from '../../Components/Navbar';
import { Features } from '../../Components/Features_cards';
import { About } from '../../Components/About_project';
import { Vision } from '../../Components/Vision';
import {useNavigate} from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      {/* Tagline */}
      <div className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 px-6 py-2 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <p className="text-white text-center text-sm font-medium tracking-wide">
            🎯 Empowering Kashmir's Future Leaders • Career Guidance • College Recommendations • Personal Growth
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight">
            Your Path to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
              Success
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed font-light">
            Empowering <strong className="text-purple-700">J&K students</strong> with career guidance, resources, mentorship,
            nearby college recommendations, and a personal tracker — discover your
            path to success, all in one platform.
          </p>

          {/* Get Started Button */}
          <button onClick={()=>navigate("/quiz")} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-10 py-4 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
            Get Started
          </button>
        </div>
      </div>
      <div>
      <Features/>
      </div>

      <div>
      <About/>
      </div>

      <div>
      <Vision/>
      </div>

    </>
  );
};


