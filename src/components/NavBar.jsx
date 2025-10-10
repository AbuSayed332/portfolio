// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";
// const NavBar = () => {
//   const [nav, setNav] = useState(false);
//   const links = [
//     {
//       id: 1,
//       link: "home",
//     },
//     {
//       id: 2,
//       link: "about",
//     },
//     {
//       id: 3,
//       link: "portfolio",
//     },
//     {
//       id: 4,
//       link: "experience",
//     },
//     {
//       id: 5,
//       link: "contact",
//     },
//   ];
//   return (
//     <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
//       <div className="font-signature text-5xl ml-2 "> Abu Sayed </div>
//       <ul className="hidden md:flex">
//         {links.map(({ id, link }) => (
//           <li
//             key={id}
//             className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
//           >
//             <Link to={link} smooth duration={500}>
//               {link}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <div
//         onClick={() => setNav(!nav)}
//         className=" cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
//       >
//         {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//       </div>
//       {nav && (
//         <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-amber-500 to-orange-500 text-yellow-100 ">
//           {links.map(({ id, link }) => (
//             <li
//               key={id}
//               className=" px-4 cursor-pointer capitalize py-6 text-4xl"
//             >
//               <Link
//                 onClick={() => setNav(!nav)}
//                 to={link}
//                 smooth
//                 duration={500}
//               >
//                 {link}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default NavBar;


import { useState, useEffect } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setNav(false);
  };

  return (
    <>
      <nav className={`flex justify-between items-center w-full h-20 px-6 md:px-12 text-white fixed top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/80 backdrop-blur-lg border-b border-gray-800/50 shadow-lg' 
          : 'bg-transparent'
      }`}>
        {/* Logo */}
        <div className="relative group">
          <div className="font-signature text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent cursor-pointer transition-all duration-300 hover:scale-105">
            Abu Sayed
          </div>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2">
          {links.map(({ id, link }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(link)}
                className="relative px-5 py-2 capitalize font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                {link}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </button>
            </li>
          ))}
          <li>
            <button className="ml-4 px-6 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              Hire Me
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNav(!nav)}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group z-50"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${nav ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${nav ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${nav ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 md:hidden transition-all duration-500 ${
        nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <ul className="relative flex flex-col justify-center items-center h-full gap-2">
          {links.map(({ id, link }, index) => (
            <li
              key={id}
              className={`transition-all duration-500 ${
                nav 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-4'
              }`}
              style={{ transitionDelay: nav ? `${index * 100}ms` : '0ms' }}
            >
              <button
                onClick={() => scrollToSection(link)}
                className="relative px-8 py-4 capitalize text-3xl font-bold text-white hover:text-cyan-400 transition-colors duration-300 group"
              >
                {link}
                <span className="absolute bottom-2 left-1/2 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-3/4 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></span>
              </button>
            </li>
          ))}
          <li
            className={`mt-8 transition-all duration-500 ${
              nav 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-4'
            }`}
            style={{ transitionDelay: nav ? `${links.length * 100}ms` : '0ms' }}
          >
            <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xl font-bold hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              Hire Me
            </button>
          </li>
        </ul>

        {/* Social links in mobile menu */}
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-6 transition-all duration-500 ${
          nav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: nav ? `${(links.length + 1) * 100}ms` : '0ms' }}>
          {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
            <button
              key={social}
              className="w-12 h-12 rounded-full border-2 border-gray-700 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center text-sm font-medium"
            >
              {social[0]}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;