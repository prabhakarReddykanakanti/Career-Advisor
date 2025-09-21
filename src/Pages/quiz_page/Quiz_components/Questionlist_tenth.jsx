

import { useState } from "react";

export function QuestionList_for_notsure({ onFinish }) {
  const [step, setStep] = useState(0); // 0 = mixed questions, 1 = stream-specific, 2 = advisor
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStream, setSelectedStream] = useState("");
  const [yesCount, setYesCount] = useState(0);
  const [noCount, setNoCount] = useState(0);

  // First mixed questions to detect stream
  const mixedQuestions = [
    { q: "Do you enjoy solving mathematical problems?", tag: "Science(Engineering)" },
    { q: "Are you interested in biology and health sciences?", tag: "Science(Medicine)" },
    { q: "Do you like working with money, business, or accounts?", tag: "commerce" },
    { q: "Do you enjoy arts, literature, or creative subjects?", tag: "arts" },
    { q: "Do you like hands-on technical work or machines?", tag: "polytechnic" },
  ];

  // Stream-specific questions
  const streamQuestions = {
    "Science(Engineering)": [
      "Do you enjoy coding, robotics, or physics experiments?",
      "Are you confident in Maths and Physics?",
      "Would you like to pursue Engineering after 12th?",
    ],
    "Science(Medicine)": [
      "Do you want to help people through healthcare?",
      "Are you comfortable with memorization and lab work?",
      "Are you ready for long preparation for medical entrance exams?",
    ],
    commerce: [
      "Do you like analyzing business or financial data?",
      "Would you consider CA, CS, or Banking as a career?",
      "Do you follow stock markets or finance news?",
    ],
    arts: [
      "Do you like reading, writing, or creative expression?",
      "Are you interested in history, culture, or society?",
      "Would you enjoy Journalism, Literature, or Social Work?",
    ],
    polytechnic: [
      "Do you like working with machines or practical projects?",
      "Are you interested in technical diploma courses?",
      "Would you enjoy a vocational or trade-based career?",
    ],
  };

  // Personalized advisor message
  const getAdvisorMessage = (stream, yes, no) => {
    if (yes >= 2) {
      return `Great! You seem confident and aligned with ${stream}. You can definitely excel if you continue building on your strengths.`;
    } else if (yes === 1) {
      return `You have some interest in ${stream}, but you may need to work harder and explore more before fully committing.`;
    } else {
      return `Right now, ${stream} may be challenging for you. But with consistent focus and guidance, you can still make it!`;
    }
  };

  const handleAnswer = (tag, answer) => {
    if (step === 0) {
      if (answer === "yes") setYesCount((c) => c + 1);
      else setNoCount((c) => c + 1);

      setSelectedStream(tag);
      setStep(1); // move to stream-specific questions
      setCurrentIndex(0);
    } else if (step === 1) {
      if (answer === "yes") setYesCount((c) => c + 1);
      else setNoCount((c) => c + 1);

      if (currentIndex < streamQuestions[selectedStream].length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setStep(2); // finished → show advisor
      }
    }
  };

  return (
    <div className="flex flex-col gap-8 text-center max-w-2xl mx-auto">
      {/* Step 0: Mixed questions */}
      {step === 0 && currentIndex < mixedQuestions.length && (
        <div className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-slate-600/30 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full translate-y-10 -translate-x-10"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Discovery Question</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">{mixedQuestions[currentIndex].q}</p>
            
            <div className="flex justify-center gap-6">
              <button
                className="group/btn relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                onClick={() => handleAnswer(mixedQuestions[currentIndex].tag, "yes")}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Yes
                </div>
              </button>
              
              <button
                className="group/btn relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                onClick={() => {
                  if (currentIndex < mixedQuestions.length - 1) {
                    setCurrentIndex((prev) => prev + 1);
                  } else {
                    setSelectedStream(mixedQuestions[0].tag); // default if none yes
                    setStep(1);
                    setCurrentIndex(0);
                  }
                }}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  No
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 1: Stream-specific questions */}
      {step === 1 && currentIndex < streamQuestions[selectedStream].length && (
        <div className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-slate-600/30 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full translate-y-10 -translate-x-10"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2 capitalize">{selectedStream} Focus</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
            
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">{streamQuestions[selectedStream][currentIndex]}</p>
            
            <div className="flex justify-center gap-6">
              <button
                className="group/btn relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                onClick={() => handleAnswer(selectedStream, "yes")}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Yes
                </div>
              </button>
              
              <button
                className="group/btn relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                onClick={() => handleAnswer(selectedStream, "no")}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  No
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Advisor + Continue */}
      {step === 2 && selectedStream && (
        <div className="group relative bg-gradient-to-br from-emerald-800/20 via-slate-800/90 to-slate-900/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-emerald-500/30 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-emerald-500/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full flex items-center justify-center shadow-lg shadow-emerald-400/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold mb-3">
              <span className="text-emerald-400">✅ Suitable Stream:</span>{" "}
              <span className="capitalize bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {selectedStream}
              </span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full mb-8"></div>
            
            <div className="bg-slate-700/50 rounded-2xl p-6 mb-8 border border-slate-600/30">
              <p className="text-lg text-slate-200 leading-relaxed">
                {getAdvisorMessage(selectedStream, yesCount, noCount)}
              </p>
            </div>
            
            <button
              className="group/btn relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              onClick={() => onFinish && onFinish(selectedStream)}
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                Continue to Colleges
                <svg className="w-6 h-6 ml-3 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}