

import { useLocation, useNavigate } from "react-router-dom";

export const CareerOptions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const stream = location.state?.stream || "";
  
  let options = [];
  let streamColor = "from-blue-400 to-purple-400";
  let iconColors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-pink-500", "bg-orange-500", "bg-cyan-500"];
  
  switch (stream) {
    case "Science(Engineering)":
      streamColor = "from-blue-400 to-cyan-400";
      iconColors = ["bg-blue-500", "bg-cyan-500", "bg-indigo-500", "bg-teal-500", "bg-sky-500", "bg-blue-600"];
      options = [
        "Software Engineer", "Civil Engineer", "Mechanical Engineer", "Electrical Engineer",
        "Electronics Engineer", "Computer Engineer", "Aerospace Engineer", "Chemical Engineer",
        "Data Scientist", "AI/ML Specialist", "Robotics Engineer", "Network Engineer",
        "Web Developer", "App Developer", "Game Developer", "Research Scientist (Engineering)"
      ];
      break;
    case "Science(Medicine)":
      streamColor = "from-red-400 to-pink-400";
      iconColors = ["bg-red-500", "bg-pink-500", "bg-rose-500", "bg-red-600", "bg-pink-600", "bg-fuchsia-500"];
      options = [
        "Doctor (MBBS/MD)", "Surgeon", "Dentist", "Nurse", "Pharmacist", "Physiotherapist",
        "Medical Researcher", "Biotechnologist", "Microbiologist", "Pathologist", "Radiologist",
        "Nutritionist", "Clinical Psychologist", "Healthcare Administrator", "Public Health Specialist"
      ];
      break;
    case "commerce":
      streamColor = "from-green-400 to-emerald-400";
      iconColors = ["bg-green-500", "bg-emerald-500", "bg-teal-500", "bg-green-600", "bg-lime-500", "bg-emerald-600"];
      options = [
        "Accountant", "Chartered Accountant (CA)", "Business Analyst", "Economist", "Financial Analyst",
        "Investment Banker", "Tax Consultant", "Auditor", "Stock Broker", "Entrepreneur",
        "Market Research Analyst", "HR Manager", "Banker", "Management Consultant", "Digital Marketing Specialist"
      ];
      break;
    case "arts":
      streamColor = "from-purple-400 to-pink-400";
      iconColors = ["bg-purple-500", "bg-violet-500", "bg-indigo-500", "bg-purple-600", "bg-fuchsia-500", "bg-pink-500"];
      options = [
        "Painter", "Designer (Graphic / Fashion / Interior)", "Writer / Author", "Journalist",
        "Content Creator", "Actor / Performer", "Musician / Composer", "Historian", "Psychologist",
        "Sociologist", "Political Analyst", "Social Worker", "Teacher / Educator", "Filmmaker", "Animator"
      ];
      break;
    case "polytechnic":
      streamColor = "from-orange-400 to-yellow-400";
      iconColors = ["bg-orange-500", "bg-amber-500", "bg-yellow-500", "bg-orange-600", "bg-yellow-600", "bg-amber-600"];
      options = [
        "Technician (Mechanical / Electrical / Civil)", "Lab Assistant", "Draftsman / CAD Designer",
        "HVAC Technician", "Automobile Technician", "Instrumentation Engineer", "Computer Hardware Technician",
        "Surveyor", "Quality Control Inspector", "Maintenance Engineer", "Industrial Designer",
        "Construction Supervisor", "Telecom Technician", "Electronics Repair Specialist", "Production Supervisor"
      ];
      break;
    case "iti":
      streamColor = "from-indigo-400 to-blue-400";
      iconColors = ["bg-indigo-500", "bg-blue-500", "bg-slate-500", "bg-indigo-600", "bg-blue-600", "bg-gray-600"];
      options = [
        "Electrician", "Plumber", "Mechanic (Automobile / Diesel)", "Fitter", "Welder", "Carpenter",
        "Sheet Metal Worker", "Machinist", "Refrigeration / AC Technician", "Painter (Industrial / Household)",
        "Turner", "Tool & Die Maker", "Wireman", "Bricklayer / Mason", "Computer Operator / Programmer"
      ];
      break;
    default:
      options = ["No career options available"];
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold mb-4 bg-gradient-to-r ${streamColor} bg-clip-text text-transparent`}>
            Career Pathways
          </h2>
          <p className="text-xl text-slate-400 mt-6 font-medium">
            for {stream}
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 h-full rounded-full"></div>

          {/* Career Options */}
          <div className="space-y-12">
            {options.map((option, index) => {
              const isLeft = index % 2 === 0;
              const iconColor = iconColors[index % iconColors.length];
              
              return (
                <div
                  key={index}
                  className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} relative`}
                >
                  {/* Content Card */}
                  <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                    <div className={`group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 hover:border-slate-500/50 ${isLeft ? 'text-right' : 'text-left'}`}>
                      <h3 className="text-lg font-semibold text-white">
                        {option}
                      </h3>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-12 h-12 ${iconColor} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-4 border-slate-800`}>
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Empty space */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section with Back Button */}
        <div className="text-center mt-20">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            ← Back
          </button>

          <p className="mt-6 text-slate-400 text-sm">
            Choose your path and start your journey
          </p>
        </div>
      </div>
    </div>
  );
};
