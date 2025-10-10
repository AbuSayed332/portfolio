// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { MdFileDownload } from "react-icons/md";
// const SocialLinks = () => {
//   const links = [
//     {
//       id: 1,
//       child: (
//         <>
//           LinkedIn <FaLinkedin size={30} />
//         </>
//       ),
//       href: "https://www.linkedin.com/in/md-abu-sayed-165892203/",
//       style: "rounded-tr-md",
//     },
//     {
//       id: 2,
//       child: (
//         <>
//           GitHub <FaGithub size={30} />
//         </>
//       ),
//       href: "https://github.com/AbuSayed332",
//     },
//     {
//       id: 3,
//       child: (
//         <>
//           Mail <HiOutlineMail size={30} />
//         </>
//       ),
//       href: "mailto:foo@gmail.com",
//     },
//     {
//       id: 4,
//       child: (
//         <>
//           Resume <MdFileDownload size={30} />
//         </>
//       ),
//       href: "/resume.pdf",
//       style: "rounded-br-md",
//       download: true,
//     },
//   ];
//   return (
//     <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
//       <ul>
//         {links.map(({ id, child, href, style, download }) => (
//           <li
//             key={id}
//             className={
//               "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[10px] hover:rounded-md duration-300 bg-gray-500" +
//               " " +
//               style
//             }
//           >
//             <a
//               href={href}
//               className="flex justify-between items-center w-full text-white"
//               download={download}
//               target="_blank"
//               rel="noreferrer"
//             >
//               {child}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SocialLinks;


import { useState } from 'react';

const SocialLinks = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const links = [
    {
      id: 1,
      label: "LinkedIn",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: "https://www.linkedin.com/in/md-abu-sayed-165892203/",
      gradient: "from-blue-600 to-blue-800",
      hoverGradient: "from-blue-500 to-blue-700",
      style: "rounded-tr-2xl",
    },
    {
      id: 2,
      label: "GitHub",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
        </svg>
      ),
      href: "https://github.com/AbuSayed332",
      gradient: "from-gray-700 to-gray-900",
      hoverGradient: "from-gray-600 to-gray-800",
    },
    {
      id: 3,
      label: "Mail",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: "mailto:foo@gmail.com",
      gradient: "from-red-600 to-pink-600",
      hoverGradient: "from-red-500 to-pink-500",
    },
    {
      id: 4,
      label: "Resume",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      href: "/resume.pdf",
      gradient: "from-green-600 to-emerald-700",
      hoverGradient: "from-green-500 to-emerald-600",
      style: "rounded-br-2xl",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
      <ul className="flex flex-col">
        {links.map((link) => (
          <li
            key={link.id}
            onMouseEnter={() => setHoveredId(link.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`relative group ${link.style || ''}`}
          >
            <a
              href={link.href}
              className={`flex justify-between items-center w-40 h-16 px-5 bg-gradient-to-r ${
                hoveredId === link.id ? link.hoverGradient : link.gradient
              } text-white transform -translate-x-28 hover:translate-x-0 transition-all duration-300 ease-out shadow-lg hover:shadow-2xl ${link.style || ''}`}
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              <span className="font-semibold tracking-wider text-sm">
                {link.label}
              </span>
              <span className={`transition-transform duration-300 ${
                hoveredId === link.id ? 'scale-110 rotate-12' : ''
              }`}>
                {link.icon}
              </span>
            </a>

            {/* Glow effect on hover */}
            {hoveredId === link.id && (
              <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} blur-xl opacity-50 -z-10 ${link.style || ''}`}></div>
            )}

            {/* Border accent */}
            <div className={`absolute right-0 top-0 bottom-0 w-1 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
          </li>
        ))}
      </ul>

      {/* Decorative element */}
      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-0.5 h-24 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-50"></div>
    </div>
  );
};

export default SocialLinks;
