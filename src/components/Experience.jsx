// import css from "../assets/css.png";
// import github from "../assets/github.png";
// import html from "../assets/html.png";
// import javascript from "../assets/javascript.png";
// import nextjs from "../assets/nextjs.png";
// import node from "../assets/node.png";
// import react from "../assets/react.png";
// import tailwind from "../assets/tailwind.png";

// const Experience = () => {
//   const tags = [
//     {
//       id: 1,
//       src: html,
//       title: "HTML",
//       style: "shadow-orange-500",
//     },
//     {
//       id: 2,
//       src: node,
//       title: "Node.Js",
//       style: "shadow-green-500",
//     },
//     {
//       id: 3,
//       src: tailwind,
//       title: "Tailwind CSS",
//       style: "shadow-sky-400",
//     },
//     {
//       id: 4,
//       src: react,
//       title: "REACT",
//       style: "shadow-blue-600",
//     },
//     {
//       id: 5,
//       src: github,
//       title: "GitHub",
//       style: "shadow-gray-400",
//     },
//     {
//       id: 6,
//       src: javascript,
//       title: "JavaScript",
//       style: "shadow-yellow-500",
//     },
//     {
//       id: 7,
//       src: nextjs,
//       title: "Next.Js",
//       style: "shadow-white",
//     },
//     {
//       id: 8,
//       src: css,
//       title: "CSS",
//       style: "shadow-blue-500",
//     },
//   ];
//   return (
//     <div
//       name="experience"
//       className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
//     >
//       <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
//         <div>
//           <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
//             Experience
//           </p>
//           <p className="py-6"> These are the technologies I have worked with</p>
//         </div>
//         <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
//           {tags.map(({ id, src, title, style }) => (
//             <div
//               key={id}
//               className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}
//             >
//               <img src={src} alt="" className=" w-20 mx-auto " />
//               <p className="mt-4">{title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;


import { useState, useEffect } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const technologies = [
    {
      id: 1,
      title: "HTML5",
      level: "Advanced",
      color: "orange",
      gradient: "from-orange-500 to-red-500",
      icon: "🌐",
      years: "5+",
    },
    {
      id: 2,
      title: "Node.js",
      level: "Intermediate",
      color: "green",
      gradient: "from-green-500 to-emerald-600",
      icon: "⚡",
      years: "3+",
    },
    {
      id: 3,
      title: "Tailwind CSS",
      level: "Advanced",
      color: "sky",
      gradient: "from-sky-400 to-cyan-500",
      icon: "🎨",
      years: "4+",
    },
    {
      id: 4,
      title: "React",
      level: "Advanced",
      color: "blue",
      gradient: "from-blue-500 to-blue-700",
      icon: "⚛️",
      years: "5+",
    },
    {
      id: 5,
      title: "GitHub",
      level: "Advanced",
      color: "gray",
      gradient: "from-gray-400 to-gray-600",
      icon: "🐙",
      years: "5+",
    },
    {
      id: 6,
      title: "JavaScript",
      level: "Advanced",
      color: "yellow",
      gradient: "from-yellow-400 to-amber-500",
      icon: "⚡",
      years: "5+",
    },
    {
      id: 7,
      title: "Next.js",
      level: "Intermediate",
      color: "white",
      gradient: "from-gray-200 to-gray-400",
      icon: "▲",
      years: "2+",
    },
    {
      id: 8,
      title: "CSS3",
      level: "Advanced",
      color: "blue",
      gradient: "from-blue-400 to-indigo-600",
      icon: "💎",
      years: "5+",
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      orange: 'border-orange-500/50 hover:border-orange-500 hover:shadow-orange-500/50',
      green: 'border-green-500/50 hover:border-green-500 hover:shadow-green-500/50',
      sky: 'border-sky-400/50 hover:border-sky-400 hover:shadow-sky-400/50',
      blue: 'border-blue-500/50 hover:border-blue-500 hover:shadow-blue-500/50',
      gray: 'border-gray-400/50 hover:border-gray-400 hover:shadow-gray-400/50',
      yellow: 'border-yellow-400/50 hover:border-yellow-400 hover:shadow-yellow-400/50',
      white: 'border-gray-300/50 hover:border-gray-300 hover:shadow-gray-300/50',
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div
      id="experience"
      className="bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 w-full min-h-screen py-20 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl top-20 right-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl bottom-20 left-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-screen-xl mx-auto p-6 md:p-12 relative z-10">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-cyan-400 font-mono text-sm">03.</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Skills & Experience</h2>
            <div className="h-px w-32 md:w-64 bg-gradient-to-r from-gray-700 to-transparent"></div>
          </div>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl">
            A comprehensive toolkit of modern technologies and frameworks I've mastered over the years
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(tech.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`relative h-full p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border-2 transition-all duration-500 ${getColorClasses(tech.color)} ${
                hoveredId === tech.id ? 'transform scale-105 shadow-2xl' : ''
              }`}>
                {/* Icon/Logo Placeholder */}
                <div className="relative mb-4">
                  <div className={`w-20 h-20 mx-auto rounded-xl bg-gradient-to-br ${tech.gradient} p-0.5 shadow-lg`}>
                    <div className="w-full h-full bg-slate-800 rounded-xl flex items-center justify-center">
                      <span className="text-4xl">{tech.icon}</span>
                    </div>
                  </div>
                  
                  {/* Animated ring on hover */}
                  {hoveredId === tech.id && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-24 h-24 rounded-xl border-2 border-${tech.color}-500 animate-ping opacity-75`}></div>
                    </div>
                  )}
                </div>

                {/* Technology Name */}
                <h3 className="text-xl font-bold text-white text-center mb-2">
                  {tech.title}
                </h3>

                {/* Level Badge */}
                <div className="flex justify-center mb-3">
                  <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${tech.gradient} text-white text-xs font-semibold`}>
                    {tech.level}
                  </span>
                </div>

                {/* Experience Years */}
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{tech.years} years</span>
                </div>

                {/* Progress indicator */}
                <div className="mt-4 w-full bg-slate-700 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${tech.gradient} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: isVisible ? (tech.level === 'Advanced' ? '90%' : '70%') : '0%',
                      transitionDelay: `${index * 100 + 500}ms`
                    }}
                  ></div>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 rounded-2xl transition-opacity duration-500 ${
                  hoveredId === tech.id ? 'opacity-5' : ''
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 text-center hover:border-cyan-500/50 transition-all duration-300">
            <p className="text-4xl font-bold text-cyan-400 mb-2">8+</p>
            <p className="text-gray-400 text-sm">Technologies</p>
          </div>
          <div className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 text-center hover:border-cyan-500/50 transition-all duration-300">
            <p className="text-4xl font-bold text-blue-400 mb-2">5+</p>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </div>
          <div className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 text-center hover:border-cyan-500/50 transition-all duration-300">
            <p className="text-4xl font-bold text-purple-400 mb-2">50+</p>
            <p className="text-gray-400 text-sm">Projects Built</p>
          </div>
          <div className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 text-center hover:border-cyan-500/50 transition-all duration-300">
            <p className="text-4xl font-bold text-green-400 mb-2">100%</p>
            <p className="text-gray-400 text-sm">Client Satisfaction</p>
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 inline-flex items-center gap-2 group">
            <span>Download Full Resume</span>
            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;