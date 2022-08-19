import { Typewriter } from "react-simple-typewriter";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="max-w-[800px] h-screen mx-auto mt-4 text-center flex flex-col">
      <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
        Hello there! My name is <span className="text-red-500">Aaron</span>.
      </h1>
      <p className="font-bold p-2">
        I'm a front end software developer, and I love all things related to the
        web!
      </p>
      <div className="flex justify-center items-center md:text-5xl sm:text-4xl text-xl font-bold">
        <p className="mr-2 md:mr-4">I like to</p>
        <p className="text-blue-500">
          <Typewriter
            words={[
              "code",
              "cook",
              "collect watches",
              "exercise",
              "travel",
              "watch basketball",
              "play guitar",
              "watch movies",
              "try new foods",
            ]}
            loop
          />
        </p>
      </div>
      <h1 className="mt-10 md:text-5xl sm:text-4xl text-2xl font-bold md:py-6">
        Let's Connect!
      </h1>
      {/* <img src="app/components/profile_pic.png" alt="profile" /> */}
      <ul className="flex mx-auto jusitfy-center">
        <li className="hover:cursor-pointer hover:text-red-500 mx-8">
          <AiFillLinkedin size={40} />
        </li>
        <li className="hover:cursor-pointer hover:text-red-500 mx-8">
          <AiFillGithub size={40} />
        </li>
      </ul>
    </div>
  );
};

export default Hero;
