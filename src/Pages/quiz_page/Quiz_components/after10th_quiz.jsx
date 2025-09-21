
import { useState } from "react";
import { CollegesDisplay } from "../Collges_cards";
import { QuestionList_for_notsure } from "./Questionlist_tenth";

export const Quiz_after_tenth = ({ goBack }) => {
  const [step, setStep] = useState(1);
  const [selectedStream, setSelectedStream] = useState("");

  const streamOptions = [
    { label: "🧮 11th–12th — Science (Engineering Focus)", value: "Science(Engineering)", color: "bg-indigo-700 hover:bg-indigo-600" },
    { label: "🩺 11th–12th — Science (Medical Focus)", value: "Science(Medicine)", color: "bg-pink-700 hover:bg-pink-600" },
    { label: "💹 11th–12th — Commerce", value: "commerce", color: "bg-yellow-700 hover:bg-yellow-600" },
    { label: "🎭 11th–12th — Arts / Humanities", value: "arts", color: "bg-purple-700 hover:bg-purple-600" },
    { label: "🛠 Polytechnic (Diploma)", value: "polytechnic", color: "bg-blue-700 hover:bg-blue-600" },
    { label: "🔧 ITI (Vocational / Trades)", value: "iti", color: "bg-green-700 hover:bg-green-600" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      
      {/* Step 1: Stream Selection */}
      {step === 1 && (
        <div className="flex items-center justify-center min-h-screen px-6 py-8">
          <div className="max-w-5xl w-full bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-3xl p-10 shadow-2xl relative">
            {/* Back Button */}
            <button
              onClick={goBack}
              className="absolute top-6 left-6 flex items-center px-4 py-2 rounded-xl bg-slate-600 hover:bg-slate-500 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>

            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Which path are you considering after 10th?
              </h2>
              <p className="text-slate-400 text-lg">Choose the stream that interests you the most</p>
            </div>
            
            <div className="flex flex-col gap-6 max-w-3xl mx-auto">
              {streamOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSelectedStream(option.value);
                    setStep(3);
                  }}
                  className={`group relative w-full p-6 rounded-2xl font-semibold text-left transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-white/20 ${option.color}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg">{option.label}</span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
              
              {/* Not Sure Button */}
              <button
                onClick={() => setStep(2)}
                className="group relative w-full p-6 rounded-2xl bg-gray-700 hover:bg-gray-600 font-semibold text-left transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-white/20"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg">❓ I'm not sure yet</span>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Not Sure → run questions */}
      {step === 2 && (
        <div className="flex items-center justify-center min-h-screen px-6 py-8">
          <div className="max-w-5xl w-full bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-3xl p-10 shadow-2xl relative">
            <QuestionList_for_notsure
              onFinish={(stream) => {
                setSelectedStream(stream);
                setStep(3);
              }}
            />
          </div>
        </div>
      )}

      {/* Step 3: Colleges Display - NO CONTAINER CONSTRAINTS */}
      {step === 3 && (
        <div className="px-6 py-8">
          {/* Back Button */}
          <button
            onClick={() => setStep(1)}
            className="mb-6 flex items-center px-4 py-2 rounded-xl bg-slate-600 hover:bg-slate-500 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          
          <CollegesDisplay selectedStream={selectedStream} />
        </div>
      )}
    </section>
  );
};
