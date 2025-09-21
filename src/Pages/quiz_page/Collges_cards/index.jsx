import { juniorColleges } from "../Quiz_components/juniorColleges";
import { polytechnicColleges } from "../Quiz_components/polytechnic_colleges";
import { itiColleges } from "../Quiz_components/itiColleges";
import { useNavigate } from "react-router-dom";

export const CollegesDisplay = ({ selectedStream }) => {
  let collegesToDisplay = [];
  if (["Science(Engineering)", "Science(Medicine)", "commerce", "arts"].includes(selectedStream)) {
    collegesToDisplay = juniorColleges;
  } else if (selectedStream === "polytechnic") {
    collegesToDisplay = polytechnicColleges;
  } else if (selectedStream === "iti") {
    collegesToDisplay = itiColleges;
  }

  const navigate = useNavigate();

  if (!selectedStream) return null;

  return (
    <>
      {/* Title */}
      <div className="text-center mb-4">
        <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent capitalize">
          {selectedStream} Stream
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* Career Options Section */}
      <div className="flex justify-end items-center px-8 mb-6">
        <div className="text-right mr-4">
          <p className="text-sm text-slate-400">
            Click this button for career options for{" "}
            <span className="font-semibold capitalize">{selectedStream}</span>
          </p>
        </div>
        <button
          onClick={() =>
            navigate("/careeroptions", { state: { stream: selectedStream } })
          }
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded shadow hover:scale-105 transition-transform duration-300"
        >
          Career Options
        </button>
      </div>

      {/* College Cards */}
      <div className="grid grid-cols-4 gap-6 px-8">
        {collegesToDisplay.map((college, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 aspect-square flex flex-col"
          >
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-3 line-clamp-2 leading-tight">
                {college.name}
              </h3>

              <div className="flex items-center text-slate-300 text-sm sm:text-base mb-2">
                <svg
                  className="w-4 h-4 mr-2 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{college.location}</span>
              </div>

              <div className="mt-auto">
                <div className="text-sm sm:text-base text-slate-400 mb-1">
                  {college.streams ? "Streams:" : "Branches:"}
                </div>
                <div className="text-sm sm:text-base text-slate-300 line-clamp-3">
                  {college.streams
                    ? college.streams.join(", ")
                    : college.branches.join(", ")}
                </div>
              </div>
            </div>

            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          </div>
        ))}
      </div>

      {/* No colleges found */}
      {collegesToDisplay.length === 0 && (
        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800/50 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.239 0-4.236.844-5.757 2.228C8.001 18.102 9.911 19 12 19c2.089 0 3.999-.898 5.757-1.772z"
              />
            </svg>
          </div>
          <p className="text-xl text-slate-400 font-medium">
            No colleges found for {selectedStream}
          </p>
          <p className="text-slate-500 mt-2">
            Please try selecting a different stream
          </p>
        </div>
      )}
    </>
  );
};


