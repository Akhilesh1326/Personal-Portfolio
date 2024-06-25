import React, { useEffect, useState } from "react";
import proimg from "../assets/male_profile.png";
import { set } from "mongoose";
const Home = () => {
  const [im, setIm] = useState("");
  var count = 0;
  useEffect(() => {
    setInterval(() => {
      count++;
      // console.log("hello = ",count)
      if (count == 1) {
        setIm("Problem Solver");
      } else if (count == 2) {
        setIm("Enthusiastic Learner");
      } else if (count == 3) {
        setIm("Web-Developer");
        count = 0;
      }
    }, 1000);
  }, []);

  return (
    <div className="bg-[#2d3250]">
      <div className="flex flex-col justify-center items-center h-auto pt-10">
        <img
          src={proimg}
          className="sm:w-[25%] w-[30%] lg:w-[15%] my-4"
          alt=""
        />
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#EEAA74] font-bold font-mono">
          Akhilesh Pimple
        </p>
        <div className="flex flex-col items-center">
          <p className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-[#ffff] font-semibold font-mono transition-opacity">
            I'm a
          </p>
          <p className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-[#EEAA74] font-semibold font-mono transition-opacity animate-mod my-10">
            {im}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-[#676f9d] font-semibold font-mono my-[2rem] mt-[10rem] lg:mt-[18rem]">
            About Me
          </p>
          <div className="h-1 w-[80%] lg:h-2  md mb-10 bg-white rounded-full"></div>
          <div className="w-[70%]">
            <p className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl mb-20 text-[#424679] font-semibold font-mono">
              Background:
              <p className="mt-5 text-xl sm:text-1xl md:text-2xl lg:text-3xl ml-10 text-[#EEAA74]">
                Hey it's Akhilesh here, I am a student and wanna be a good
                programmer/Developer in good and bright future. I like to read
                and explore things.
              </p>
            </p>
            <p className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl mb-20 text-[#424679] font-semibold font-mono">
              Education:
              <p className="mt-5 text-xl sm:text-1xl md:text-2xl lg:text-3xl ml-10 text-[#EEAA74]">
                B.Tech {"("}Computer Science and Artifical Integlince{")"}
              </p>
              <p className="text-lg sm:text-xl md:text-1xl lg:text-2xl ml-10 text-[#EEAA74] ">
                at Vishwakarma Institiue Of Technology, Pune
              </p>
              <p className="text-lg sm:text-xl md:text-1xl lg:text-2xl ml-10 text-[#EEAA74] ">
                Passing Year: 2026
              </p>
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
