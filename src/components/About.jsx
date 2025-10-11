// const About = () => {
//   return (
//     <div
//       name="about"
//       className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
//     >
//       <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className=" pb-4">
//           <p className=" text-4xl font-bold inline border-b-4 border-gray-500 ">
//             About
//           </p>
//         </div>
//         <p className=" text-xl mt-20">
//           To secure a challenging position as a front-end developer in a dynamic
//           and innovative company where I can leverage my expertise in React and
//           Redux to develop high-quality web applications. With a keen eye for
//           design and a passion for clean code, I am committed to creating
//           engaging and responsive user interfaces that deliver an exceptional
//           user experience. My goal is to work collaboratively with a team of
//           like-minded professionals to solve complex problems and drive business
//           growth through innovative digital solutions.
//         </p>
//         <br />
//         <p className="text-xl">
//           Some responsibilities of a Java Developer include designing, planning,
//           developing, and managing Java-based software and applications. Java
//           Developers work on collaborating with other software engineers in the
//           team to integrate Java into the website.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;


import { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const skills = [
    { name: 'React', level: 95 },
    { name: 'Redux', level: 90 },
    { name: 'JavaScript', level: 92 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Express.js', level: 98 },
    { name: 'Node.js', level: 90 },
    { name: 'Nest.js', level: 85 },
    { name: 'MongoDB', level: 88 },

    
  ];

  const highlights = [
    { icon: '🎯', title: 'User-Centric', desc: 'Creating exceptional user experiences' },
    { icon: '⚡', title: 'Fast Performance', desc: 'Optimized and lightning-fast applications' },
    { icon: '🎨', title: 'Clean Design', desc: 'Pixel-perfect responsive interfaces' },
    { icon: '🚀', title: 'Modern Stack', desc: 'Latest technologies and best practices' },
  ];

  return (
    <div
      id="about"
      className="w-full min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 text-white py-20 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl top-20 right-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl bottom-20 left-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-screen-xl p-6 md:p-12 mx-auto relative z-10">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-cyan-400 font-mono text-sm">01.</span>
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <div className="h-px w-32 md:w-64 bg-gradient-to-r from-gray-700 to-transparent"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-400 rounded-br-lg"></div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate <span className="text-cyan-400 font-semibold">full-stack developer</span> specializing in building exceptional digital experiences. With expertise in <span className="text-blue-400 font-semibold">React and Redux</span>, I create high-quality web applications that combine beautiful design with clean, maintainable code.
              </p>
            </div>

            <div className="relative p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
              <p className="text-gray-300 text-lg leading-relaxed">
                My approach focuses on creating <span className="text-cyan-400 font-semibold">engaging and responsive user interfaces</span> that deliver exceptional user experiences. I thrive in collaborative environments, working with teams to solve complex problems and drive innovation through cutting-edge digital solutions.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <p className="text-3xl font-bold text-cyan-400">5+</p>
                <p className="text-sm text-gray-400 mt-1">Years Exp</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <p className="text-3xl font-bold text-blue-400">50+</p>
                <p className="text-sm text-gray-400 mt-1">Projects</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <p className="text-3xl font-bold text-purple-400">30+</p>
                <p className="text-sm text-gray-400 mt-1">Clients</p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Highlights */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-cyan-400">💻</span>
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${600 + index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights Grid */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-cyan-400">✨</span>
                What I Bring
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-slate-800/50 border border-gray-700/50 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 group cursor-pointer"
                    style={{
                      transitionDelay: `${800 + index * 100}ms`
                    }}
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer" className="w-full mt-6 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 group">
              <span>Download Resume</span>
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;