import React, { useState, useEffect } from 'react';

export const About = () => {
    const [visibleItems, setVisibleItems] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const problems = [
        "Which stream to choose?",
        "Which government college is right?",
        "What career opportunities come after graduation?",
    ];

    const solutions = [
        {
            icon: "🎯",
            text: "Find the right stream based on your interests",
            color: "from-blue-500 to-purple-500",
        },
        {
            icon: "🚀",
            text: "Explore career options linked to each course",
            color: "from-blue-500 to-purple-500",
        },
        {
            icon: "🏛️",
            text: "Discover nearby government colleges with real details",
            color: "from-blue-500 to-purple-500",
        },
        {
            icon: "📅",
            text: "Stay updated on admissions, scholarships, and exams",
            color: "from-blue-500 to-purple-500",
        },
    ];

    useEffect(() => {
        setIsVisible(true);
        const timer = setInterval(() => {
            setVisibleItems((prev) =>
                prev < solutions.length ? prev + 1 : prev
            );
        }, 600);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-16 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div
                    className={`text-center mb-12 transform transition-all duration-1000 ${isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                >
                    <h2 className="text-4xl font-bold text-white">
                        Why Personalized Career Advisor?
                    </h2>
                </div>

                {/* Problem Statement */}
                <div
                    className={`bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-8 transform transition-all duration-1000 ${isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                >
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            The Confusion Many J&K Students Face
                        </h3>
                        <p className="text-gray-300">
                            Many students in J&K feel lost after Class 10 or 12:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {problems.map((problem, index) => (
                            <div
                                key={index}
                                className="bg-gray-900/60 border border-gray-700 rounded-xl p-4 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                            >
                                <span className="text-3xl mb-2 block">❓</span>
                                <p className="text-gray-200 font-medium">{problem}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Solution */}
                <div
                    className={`text-center mb-8 transform transition-all duration-1000 ${isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                >
                    <h3 className="text-3xl font-bold text-white">
                        Career Advisor solves this by offering{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            personalized guidance
                        </span>
                    </h3>
                </div>
                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className={`group relative bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${visibleItems > index
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-10 opacity-0"
                                }`}
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${solution.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm`}
                            ></div>

                            <div className="relative z-10 flex items-start gap-4">
                                <div
                                    className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                >
                                    {solution.icon}
                                </div>
                                <div className="flex-1">
                                    <p className="text-lg font-medium text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                                        {solution.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
