import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Vision = () => {

  const [visiblePoints, setVisiblePoints] = useState(0);

  const [isVisible, setIsVisible] = useState(false);

    const navigate = useNavigate();
  const visionPoints = [
    {
      text: "Empower students with personalized guidance",
      icon: "💪",
      color: "from-blue-500 to-cyan-500"
    },
    {
      text: "Bridge awareness gaps about courses and careers", 
      icon: "🌉",
      color: "from-purple-500 to-pink-500"
    },
    {
      text: "Support informed decision-making to reduce dropouts",
      icon: "🎯",
      color: "from-green-500 to-emerald-500"
    },
    {
      text: "Highlight government colleges as viable options",
      icon: "🏛️", 
      color: "from-orange-500 to-red-500"
    },
    {
      text: "Enable students to discover career pathways",
      icon: "🛤️",
      color: "from-indigo-500 to-purple-500"
    },
    {
      text: "Inspire thousands towards higher education",
      icon: "✨",
      color: "from-pink-500 to-rose-500"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setVisiblePoints(prev => prev < visionPoints.length ? prev + 1 : prev);
    }, 600);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-10 pb-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-pink-500 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Vision & Impact
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We aim to empower students in Jammu & Kashmir with the clarity they
            need to make informed academic decisions. By bridging the awareness
            gap, reducing dropouts, and strengthening trust in government colleges,
            we are building a brighter future for thousands of students.
          </p>
        </div>

        {/* Animated Timeline/Roadmap */}
        <div className="relative mb-16">
          {/* Central connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 rounded-full">
            <div className="absolute top-0 w-full bg-gradient-to-b from-transparent to-blue-500 rounded-full animate-pulse"></div>
          </div>

          {/* Vision Points - Alternating left and right */}
          {visionPoints.map((point, index) => {
            const isLeft = index % 2 === 0;
            const isVisible = visiblePoints > index;
            
            return (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${isLeft ? 'justify-start' : 'justify-end'}`}
              >
                {/* Connector dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full transition-all duration-700 z-10 ${
                  isVisible 
                    ? `bg-gradient-to-r ${point.color} shadow-lg animate-pulse` 
                    : 'bg-gray-600'
                }`}>
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${point.color} animate-ping ${isVisible ? 'opacity-75' : 'opacity-0'}`}></div>
                </div>

                {/* Content card */}
                <div className={`w-5/12 transform transition-all duration-700 ${
                  isVisible ? 'translate-x-0 opacity-100' : (isLeft ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0')
                }`}>
                  <div className={`relative group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:scale-105 transition-all duration-300 ${
                    isLeft ? 'mr-8' : 'ml-8'
                  }`}>
                    {/* Gradient glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${point.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}></div>
                    
                    {/* Arrow pointing to center */}
                    <div className={`absolute top-1/2 ${isLeft ? '-right-3' : '-left-3'} transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r ${point.color} rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10 flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${point.color} rounded-xl flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {point.icon}
                      </div>
                      <p className="text-gray-200 group-hover:text-white transition-colors duration-300 font-medium">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Completion indicator */}
          <div className={`absolute left-1/2 bottom-0 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center transition-all duration-1000 ${
            visiblePoints >= visionPoints.length ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}>
            <span className="text-white text-lg">✓</span>
          </div>
        </div>

        {/* Impact Statement - keeping as requested */}
        <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Building a Brighter Future
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            With the right guidance, we{" "}
            <span className="text-blue-400 font-semibold">boost awareness</span>,{" "}
            <span className="text-purple-400 font-semibold">increase enrollments</span>{" "}
            in government colleges, and help students build a brighter future.
          </p>
          <div className="mt-8">
            <button onClick={()=>navigate("/quiz")} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30">
              Start Your Journey Today 🚀
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
  
  
