// import { BiRightArrow } from "react-icons/bi";
// import { Link } from "react-scroll";
// import heroImage from "../assets/heroImage.jpg";
// const Home = () => {
//   return (
//     <div
//       name="home"
//       className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
//     >
//       <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
//         <div className="flex flex-col justify-center h-full">
//           <h2 className="text-4xl sm:text-7xl font-bold text-white">
//             I am a Font End Developer
//           </h2>
//           <p className="text-gray-500 py-4 max-w-md ">
//             Full Stack Developers are the Swiss Army knives of the tech world,
//             combining creativity,
//           </p>
//           <div>
//             <Link
//               to="portfolio"
//               smooth
//               duration={500}
//               className="text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
//             >
//               Portfolio
//               <span className="group-hover:rotate-90 duration-300">
//                 <BiRightArrow size={25} className="ml-1" />
//               </span>
//             </Link>
//           </div>
//         </div>
//         <div>
//           <img
//             src={heroImage}
//             alt="my logo"
//             className=" rounded-2xl ml-2 mx-auto w-2/3 md:w-full "
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import { useState, useEffect } from 'react';
import { BiRightArrow } from "react-icons/bi";
import { Link } from "react-scroll";
import heroImage from "../assets/me.png";
const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      id="home"
      className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1s'
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center min-h-screen px-6 md:px-12 md:flex-row relative z-10">
        <div className={`flex flex-col justify-center h-full md:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 w-fit backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-400 text-sm font-medium">Available for work</span>
          </div>

          {/* Main heading with gradient */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-white">I'm a </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Web 
            </span>
            <br />
            <span className="text-white">Developer</span>
          </h1>

          <p className="text-gray-400 text-lg py-4 max-w-lg leading-relaxed">
            Crafting pixel-perfect experiences with modern technologies. 
            Specializing in React, Next.js, and creating seamless user interfaces 
            that blend aesthetics with functionality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group relative px-8 py-4 flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              <span className="relative z-10">View Portfolio</span>
              <BiRightArrow 
                size={22} 
                className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl border-2 border-gray-700 text-white font-semibold hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300">
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-gray-800">
            <div>
              <p className="text-3xl font-bold text-white">5+</p>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-gray-500 text-sm">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">30+</p>
              <p className="text-gray-500 text-sm">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className={`md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            
            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 backdrop-blur-sm">
              <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                {/* Placeholder - replace with your actual image */}
               <img src={heroImage} alt="my logo" className="w-full h-full object-cover" />
                {/* <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                     
                  <svg className="w-32 h-32 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  
                </div> */}
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating elements */}
            <div className="absolute -right-4 top-1/4 bg-slate-800/90 backdrop-blur-sm border border-gray-700 rounded-xl px-4 py-3 shadow-xl animate-float">
              <p className="text-cyan-400 font-semibold text-sm">⚡ Fast Delivery</p>
            </div>
            <div className="absolute -left-4 bottom-1/4 bg-slate-800/90 backdrop-blur-sm border border-gray-700 rounded-xl px-4 py-3 shadow-xl animate-float-delay">
              <p className="text-blue-400 font-semibold text-sm">🎨 Creative Design</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;