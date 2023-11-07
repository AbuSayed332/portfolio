const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-4">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <p className=" text-xl mt-20">
          To secure a challenging position as a front-end developer in a dynamic
          and innovative company where I can leverage my expertise in React and
          Redux to develop high-quality web applications. With a keen eye for
          design and a passion for clean code, I am committed to creating
          engaging and responsive user interfaces that deliver an exceptional
          user experience. My goal is to work collaboratively with a team of
          like-minded professionals to solve complex problems and drive business
          growth through innovative digital solutions.
        </p>
        <br />
        <p className="text-xl">
          Some responsibilities of a Java Developer include designing, planning,
          developing, and managing Java-based software and applications. Java
          Developers work on collaborating with other software engineers in the
          team to integrate Java into the website.
        </p>
      </div>
    </div>
  );
};

export default About;
