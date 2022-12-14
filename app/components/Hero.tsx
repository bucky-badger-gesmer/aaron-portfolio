import { Typewriter } from "react-simple-typewriter";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="max-w-[800px] mx-auto mt-4 text-center flex flex-col">
      <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
        Hello there! My name is <span className="text-red-500">Aaron</span>.
      </h1>
      <p className="font-bold p-2">
        I'm a software engineer, and I love all things related to front end software development!
      </p>
      <div className="flex justify-center items-center md:text-5xl sm:text-4xl text-xl font-bold">
        <p className="mr-2 md:mr-4">I like to</p>
        <p className="text-blue-500">
          <Typewriter
            words={[
              "code.",
              "cook.",
              "collect watches.",
              "exercise.",
              "travel.",
              "watch basketball.",
              "play guitar.",
              "watch movies.",
              "try new foods.",
              "hang out with my dog.",
            ]}
            loop
            cursor
            cursorStyle="_"
          />
        </p>
      </div>
      <div className="rounded-xl grid place-items-center mt-4">
        <img
          className="w-4/5 md:w-3/4 rounded-t-xl shadow-2xl"
          src="profile_pic.png"
          alt="profile"
        />
        <div className="p-5">
          <h1 className="mt-10 md:text-5xl sm:text-4xl text-2xl font-bold md:py-6">
            Let's Connect!
          </h1>
          {/* <ul className="flex mx-auto jusitfy-center">
            <li className="hover:cursor-pointer hover:text-red-500 mx-8">
              <AiFillLinkedin size={40} />
            </li>
            <li className="hover:cursor-pointer hover:text-red-500 mx-8">
              <AiFillGithub size={40} />
            </li>
          </ul> */}
        </div>
      </div>
      <div className="container mx-auto p-8 my-8">
        <h1 className="text-2xl m-8" >My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex justify-center text-xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100 shadow-2xl">
            Remix Propublica Congress App
          </div>
          <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100 shadow-2xl">
            2
          </div>
          <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100 shadow-2xl">
            3
          </div>
          <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100 shadow-2xl">
            4
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
