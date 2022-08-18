import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="max-w-[800px] h-screen mx-auto text-center flex flex-col">
      <p className="font-bold p-2">Hi! My name is Aaron!</p>
      <h1 className="md: text-7xl sm:text-6xl text-4xl font-bold md:py-6">
        Welcome to my website
      </h1>
      <div className="flex justify-center items-center md:text-5xl sm:text-4xl text-xl font-bold">
        <p>I like to</p>
        <Typed
          className="text-red-500 pl-2"
          strings={[
            "&#128187; code",
            "&#127859; cook",
            "&#8986; collect watches",
            "&#127947; exercise",
            "&#128745; travel",
            "&#127936; watch basketball",
            "&#127928; play guitar",
            "&#128253; watch movies",
            "&#129316; try new foods",
          ]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
    </div>
  );
};

export default Hero;
