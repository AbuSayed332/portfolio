import { BiRightArrow } from "react-icons/bi";
import { Link } from "react-scroll";
import heroImage from "../assets/heroImage.jpg";
const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Font End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md ">
            Full Stack Developers are the Swiss Army knives of the tech world,
            combining creativity,
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <BiRightArrow size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="my logo"
            className=" rounded-2xl ml-2 mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
