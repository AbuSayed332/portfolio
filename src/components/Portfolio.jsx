// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWather from "../assets/portfolio/reactWeather.jpg";
// const Portfolio = () => {
//   const profile = [
//     {
//       id: 1,
//       src: arrayDestruct,
//     },
//     {
//       id: 2,
//       src: installNode,
//     },
//     {
//       id: 3,
//       src: navbar,
//     },
//     {
//       id: 4,
//       src: reactParallax,
//     },
//     {
//       id: 5,
//       src: reactSmooth,
//     },
//     {
//       id: 6,
//       src: reactWather,
//     },
//   ];
//   return (
//     <div
//       name="portfolio"
//       className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
//             Portfolio
//           </p>
//           <p className="py-6">Check out some of my work right here </p>
//         </div>

//         <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
//           {profile.map(({ id, src }) => (
//             <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
//               <img
//                 src={src}
//                 alt=""
//                 className=" rounded-md hover:scale-105 duration-200"
//               />
//               <div className="flex items-center justify-center">
//                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                   Demo
//                 </button>
//                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                   Code
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

import { useState, useEffect } from 'react';

const Portfolio = () => {
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

    const element = document.getElementById('portfolio');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Courier Service App",
      category: "JavaScript",
      description: "Modern ES6+ features demonstration",
      tech: ["React", "JavaScript", "Tailwind"],
      src: "/courier.png",
      link: "https://courier-frontend-gamma.vercel.app/"
    },
    {
      id: 2,
      title: "Personal Portfolio",
      category: "MERN Stack",
      description: "Complete setup documentation",
      tech: ["Node.js", "NPM", "Guide"],
      src: "/arrayDestruct.png",
      link: "https://souravalam.netlify.app/"
    },
    {
      id: 3,
      title: "Tutor Finder App",
      category: "Component",
      description: "Mobile-first navigation system",
      tech: ["React", "CSS", "Responsive"],
      src: "/tutordemo.png",
      link: "https://tutordemo.netlify.app/"
    },
    {
      id: 4,
      title: "My Engineering Blog",
      category: "Animation",
      description: "Smooth scrolling effects",
      tech: ["React", "GSAP", "Animation"],
      src: "/engir.png",
      link: "https://engineerabusayed.netlify.app/"
    },
    {
      id: 5,
      title: "Product Store App",
      category: "Feature",
      description: "Enhanced user experience",
      tech: ["React", "JavaScript", "UX"],
      src: "/productStore.png",
       link: "https://mern-stack-69d7.onrender.com/"

    },
    {
      id: 6,
      title: "Customer Support Bot",
      category: "API Project",
      description: "Real-time chat application",
      tech: ["React", "API", "TypeScript"],
      src: "/installNode.png",
      link: "https://customer-support-system-5mpt.vercel.app/"
    },
  ];

  return (
    <div
      id="portfolio"
      className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 w-full text-white py-20 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl top-40 left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl bottom-40 right-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-screen-xl p-6 md:p-12 mx-auto relative z-10">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-cyan-400 font-mono text-sm">02.</span>
            <h2 className="text-4xl md:text-5xl font-bold">My Portfolio</h2>
            <div className="h-px w-32 md:w-64 bg-gradient-to-r from-gray-700 to-transparent"></div>
          </div>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl">
            Showcasing my latest work and projects. Each piece represents my commitment to quality, innovation, and user-centered design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card */}
              <div className="relative h-full rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/20">
                {/* Image Container */}
                <div className="relative h-64 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                  {/* Placeholder for image */}
                  <img src={project.src} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                  {/* <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                    <svg className="w-20 h-20 text-cyan-400/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div> */}

                  {/* Overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent transition-opacity duration-500 ${
                    hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-0 flex items-center justify-center gap-4">
                      <button className="p-3 rounded-full bg-cyan-500 text-white hover:bg-cyan-600 transition-all duration-300 hover:scale-110 shadow-lg">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110 shadow-lg">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-slate-700/50 text-gray-300 text-xs font-medium border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a href={project.link} target='_blank' className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      <span>Demo</span>
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                    <a href="https://github.com/AbuSayed332" target='_blank' className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-700 text-white font-semibold hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                      </svg>
                      <span>Code</span>
                    </a>
                  </div>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-tr-2xl transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-bl-2xl transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="px-8 py-4 rounded-xl bg-slate-800/50 border-2 border-gray-700 text-white font-semibold hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 inline-flex items-center gap-2 group">
            <span>View All Projects</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;