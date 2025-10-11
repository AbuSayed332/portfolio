// const Contact = () => {
//   return (
//     <div
//       name="contact"
//       className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white  "
//     >
//       <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
//         <div className="pd-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
//             Contact
//           </p>
//           <p className="py-6">Submit the form below to get in touch with me</p>
//         </div>
//         <div className="flex justify-center items-center">
//           <form
//             action="https://getform.io/f/3fac442c-a92f-4075-bb0c-b0974116fb00"
//             method="POST"
//             className=" flex flex-col w-full md:w-1/2"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             />
//             <input
//               type="text"
//               name="email"
//               placeholder="Enter your Email"
//               className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             />
//             <textarea
//               name="message"
//               rows="10"
//               placeholder="Type your message"
//               className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             ></textarea>
//             <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import { useState, useEffect } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "engineerabusayed1@gmail.com",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "+880 161 701 6002",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      value: "Dhaka, Bangladesh",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div
      id="contact"
      className="w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 py-20 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl top-40 left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl bottom-40 right-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-screen-xl mx-auto p-6 md:p-12 relative z-10">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-cyan-400 font-mono text-sm">04.</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
            <div className="h-px w-32 md:w-64 bg-gradient-to-r from-gray-700 to-transparent"></div>
          </div>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl">
            Have a project in mind or want to collaborate? I'd love to hear from you. Drop me a message and let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-gray-700/50">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-400 rounded-br-lg"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of these channels.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="group p-4 rounded-xl bg-slate-700/30 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-700/50"
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${info.gradient} text-white`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">{info.title}</p>
                        <p className="text-white font-semibold">{info.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-gray-700/50">
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social, index) => (
                  <button
                    key={social}
                    className="flex-1 p-4 rounded-xl bg-slate-700/50 border border-gray-700 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 text-white font-medium text-sm hover:scale-105"
                    style={{ transitionDelay: `${600 + index * 50}ms` }}
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-gray-700/50">
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-cyan-400 rounded-bl-lg"></div>

              <div className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full p-4 bg-slate-700/50 border-2 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                      focusedField === 'name' 
                        ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' 
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full p-4 bg-slate-700/50 border-2 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                      focusedField === 'email' 
                        ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' 
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project..."
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full p-4 bg-slate-700/50 border-2 rounded-xl text-white placeholder-gray-500 focus:outline-none resize-none transition-all duration-300 ${
                      focusedField === 'message' 
                        ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' 
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  />
                </div>

                {/* Note about form */}
                {/* <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-sm text-cyan-300">
                    <span className="font-semibold">Note:</span> To enable form submission, wrap these inputs in a form tag with action="https://getform.io/f/3fac442c-a92f-4075-bb0c-b0974116fb00" and method="POST"
                  </p>
                </div> */}

                {/* Submit Button */}
                <button
                  type="button"
                  formAction='https://getform.io/f/3fac442c-a92f-4075-bb0c-b0974116fb00'
                  formMethod='POST'
                  className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm">
            <p className="text-gray-300 mb-4">
              Prefer email? Drop me a line directly at{' '}
              <a href="mailto:abusayed@example.com" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-300">
                engineerabusayed1@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-500">Usually respond within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;