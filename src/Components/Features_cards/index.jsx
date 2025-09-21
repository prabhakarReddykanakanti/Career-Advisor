import React from "react";

export const Features = () => {
  const features = [
    {
      title: "Aptitude & Interest-Based Course Suggestion",
      description:
        "Assess your interests and strengths through quizzes and get recommended streams and subjects.",
      icon: "📝",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Course-to-Career Path Mapping",
      description:
        "Visual charts showing what each degree leads to in terms of jobs, exams, or higher education.",
      icon: "📊",
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Nearby Government Colleges",
      description:
        "Discover government colleges in J&K with course details, eligibility, cut-offs, and facilities.",
      icon: "🏫",
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Timeline Tracker",
      description:
        "Get notifications for admission dates, scholarships, entrance tests, and counseling schedules.",
      icon: "⏰",
      color: "from-pink-500 to-rose-600",
    },
    {
        title: "Customization & Personalization",
        description:
          "Create a profile to get AI-driven recommendations for courses, colleges, career paths, and study materials.",
        icon: "👤",
        color: "from-indigo-500 to-blue-600"
      },
      {
        title: "Career Path Comparison",
        description:
          "Compare streams and courses based on your aptitude and interests. Visualize different combinations and their outcomes.",
        icon: "📈",
        color: "from-purple-500 to-pink-600"
      }      
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Platform Features
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Discover powerful tools designed to guide your educational journey
          </p>
        </div>

        {/* Compact card deck layout */}
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 max-w-xs w-full"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient border effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}
              ></div>

              {/* Icon container */}
              <div className="relative mb-4">
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-sm font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
