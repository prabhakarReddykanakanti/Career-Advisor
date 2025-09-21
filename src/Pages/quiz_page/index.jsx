import { useState } from "react";
import { Quiz_after_tenth } from "./Quiz_components/after10th_quiz";
import { Quiz_after_twelth } from "./Quiz_components/after12th_quiz";

export const Quiz = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  if (!selectedClass) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
        <h2 className="text-2xl font-bold mb-6">Are you choosing career after?</h2>
        <div className="flex gap-6">
          <button
            onClick={() => setSelectedClass("10th")}
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            After 10th
          </button>
        </div>
      </div>
    );
  }

  // Pass goBack function to reset
  return selectedClass === "10th" 
    ? <Quiz_after_tenth goBack={() => setSelectedClass(null)} /> 
    : <Quiz_after_twelth goBack={() => setSelectedClass(null)} />;
};
