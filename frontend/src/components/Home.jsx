import React, { useEffect, useState } from "react";
import proimg from "../assets/male_profile.png";
import VITlogo from "../assets/vit_logo2.png";
import p1i1 from "../assets/p1i1.png";
import p2i1 from "../assets/p2i1.png";
import mysql from "../assets/mysql.png";
import reactjs from "../assets/reactjs.png";
import express from "../assets/express.png";
import nodejs from "../assets/node.png";
import cpp  from "../assets/cpp.png"
import github from "../assets/github.png"
import c from "../assets/c.png"


const Home = () => {
  const [im, setIm] = useState("");
  const [fullPara, setFullPara] = useState(false);
  const [showImg, setShowImg] = useState(true);
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
    <div className="bg-[#2d3250] scroll-smooth">
      <div className="flex flex-col justify-center items-center h-auto pt-10">
        <img
          src={proimg}
          className="sm:w-[25%] w-[30%] lg:w-[15%] my-4"
          alt=""
        />
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#EEAA74] font-bold font-mono mb-4">
          Akhilesh Pimple
        </p>
        <div className="flex flex-col items-center">
          <p className="text-xl sm:text-1xl md:text-2xl lg:text-3xl text-[#ffff] font-semibold font-mono transition-opacity">
            I'm a
          </p>
          <p className="text-xl sm:text-1xl md:text-2xl lg:text-3xl text-[#EEAA74] font-semibold font-mono transition-opacity animate-mod my-2 mb-[10rem] lg:mb-[18rem]">
            {im}
          </p>
        </div>
        <div className="flex flex-col items-center group mb-20">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-[#676f9d] font-semibold font-mono  transition ease-in-out duration-300 group-hover:-translate-y-3 group-hover:text-[#8f99d1]">
            About Me
          </p>
          <div className="h-1 w-[80%] lg:h-2  md mb-5 bg-white rounded-full font-mono transition ease-in-out duration-300 group-hover:-translate-y-2"></div>
          <div className="w-[70%] transition duration-500 delay-150 shadow-inherit  group-hover:shadow-[10px_10px_5px_10px] py-5 px-5 ">
            <p className="text-xl sm:text-1xl md:text-2xl lg:text-3xl mb-20 text-[#424679] font-semibold font-mono transition ease-in-out duration-300 group-hover:-translate-y-2 group-hover:text-[#676f9d]">
              Background:
              <p className="mt-5 text-lg sm:text-xl md:text-1xl lg:text-2xl ml-10 text-[#EEAA74] transition duration-100 group-hover:text-[#ff9d4e]">
                Hey it's Akhilesh here, I am a student and wanna be a good
                programmer/developer in good and bright future. I like to read
                and explore things.
              </p>
            </p>
            <p className="text-xl sm:text-1xl md:text-2xl lg:text-3xl mb-10 text-[#424679] font-semibold font-mono transition ease-in-out duration-300 group-hover:-translate-y-2 group-hover:text-[#676f9d] group/img">
              Education:
              <p className="mt-5 text-lg sm:text-xl md:text-1xl lg:text-2xl ml-10 text-[#EEAA74] transition duration-100 group-hover:text-[#ff9d4e]">
                B.Tech {"("}Computer Science and Artifical Integlince{")"}
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-1xl ml-10 text-[#EEAA74] transition duration-100 group-hover:text-[#ff9d4e]">
                at Vishwakarma Institiue Of Technology, Pune
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-1xl ml-10 text-[#EEAA74] transition duration-100 group-hover:text-[#ff9d4e] ">
                Passing Year: 2026
              </p>
              <div className="flex ml-10">
                <a href="https://www.vit.edu/" target="_blank">
                  <img
                    src={VITlogo}
                    className="w-[0%] transition-all ease-in-out duration-500  group-hover/img:sm:w-[20%] group-hover/img:lg:w-[70%] "
                    alt=""
                  />
                </a>
              </div>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center group">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-[#676f9d] font-semibold font-mono  transition ease-in-out duration-300 group-hover:-translate-y-3 group-hover:text-[#8f99d1]">
            Projects
          </p>
          <div className="h-1 w-[80%] lg:h-2 mb-5 bg-white rounded-full font-mono transition ease-in-out duration-300 group-hover:-translate-y-2"></div>
          <div className="w-[70%] mb-20 transition duration-500 delay-150 shadow-inherit  group-hover:shadow-[10px_10px_5px_10px] py-5 px-5">
            <p className=" text-xl sm:text-1xl md:text-2xl lg:text-3xl mb-20 text-[#424679] font-semibold font-mono transition ease-in-out duration-300 group-hover:-translate-y-2 group-hover:text-[#676f9d] group/p1">
            <div className="group/ic hover:text-white flex flex-col transition-all duration-300 ease-in-out ">
              <a
                href="https://github.com/Akhilesh1326/Blood-Report-Diagnosis."
                target="_blank"
              >
                1.Blood Report Dignosis:
              
              <p className="mt-5 text-lg sm:text-xl md:text-1xl lg:text-2xl ml-10 text-[#8a5931] transition duration-100 group-hover:text-[#ff9d4e] group-hover/ic:text-[#c78f3b]">
                Hey it's Akhilesh here, I am a student and wanna be a good
                programmer/developer in good and bright future. I like to read
                and explore things.
              </p>

                <img
                  src={p1i1}
                  className="w-[0%] my-2 ml-10 transition-all ease-in-out duration-500  group-hover/img:sm:w-[20%] group-hover/p1:lg:w-[40%] "
                  alt=""
                />
                </a>
            </div>
            </p>
            <p className="text-xl sm:text-1xl md:text-2xl lg:text-3xl mb-10 text-[#424679] font-semibold font-mono transition ease-in-out duration-300 group-hover:-translate-y-2 group-hover:text-[#676f9d] group/p2">
            <div className="group/ic hover:text-white flex flex-col transition-all duration-500 ease-in-out ">
              <a
                href="https://github.com/Akhilesh1326/Task-Manager-Using-MERN-Stack"
                target="_blank"
              >
                2.Task Manager:
              
              <p className="mt-5 text-lg sm:text-xl md:text-1xl lg:text-2xl ml-10 text-[#8a5931] transition duration-100 group-hover:text-[#ff9d4e] group-hover/ic:text-[#c78f3b]">
                B.Tech {"("}Computer Science and Artifical Integlince{")"}
              </p>

                <img
                  src={p2i1}
                  className="w-[0%] my-2 ml-10 transition-all ease-in-out duration-500  group-hover/img:sm:w-[20%] group-hover/p2:lg:w-[40%] "
                  alt=""
                />
                </a>
                </div>
            </p>
            <p className="text-xl sm:text-1xl md:text-2xl lg:text-3xl mb-10 text-[#424679] font-semibold font-mono transition ease-in-out duration-300 group-hover:-translate-y-2 group-hover:text-[#676f9d]">
            <div className="group/ic hover:text-white flex flex-col transition-all duration-700 ease-in-out ">
              <a
                href="https://github.com/Akhilesh1326/Object-Detection-Using-YOLOv8-and-Bard-API"
                target="_blank"
              >
                3.Object Detection and Recognition:
              
              <p className="mt-5 text-lg sm:text-xl md:text-1xl lg:text-2xl ml-10 text-[#8a5931] transition duration-100 group-hover:text-[#ff9d4e] group-hover/ic:text-[#c78f3b]">
                B.Tech {"("}Computer Science and Artifical Integlince{")"}
              </p>
              </a>
              </div>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center group">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-[#676f9d] font-semibold font-mono  transition ease-in-out duration-300 group-hover:-translate-y-3 group-hover:text-[#8f99d1]">
            Skills
          </p>
          <div className="h-1 w-[50%] lg:h-2 md mb-5 bg-white rounded-full font-mono transition ease-in-out duration-300 group-hover:-translate-y-2 "></div>
          <div className="w-[70%] mb-20 transition duration-500 delay-150 shadow-inherit  group-hover:shadow-[10px_10px_5px_10px] py-5 px-5">
            <p className=" text-xl sm:text-1xl md:text-2xl lg:text-3xl mb-10 text-[#424679] font-semibold font-mono transition ease-in-out duration-300 group-hover:-translate-y-2 group-hover:text-[#676f9d] ">
              <div className="group/ic hover:text-white flex flex-row transition-all duration-300 ease-in-out ">
                1.MERN Stack
                <img
                  src={mysql}
                  className="sm:w-[25%] w-[30%] lg:w-[4%] mx-2 opacity-50 group-hover/ic:translate-x-2  group-hover:opacity-100 duration-300"
                  alt=""
                />
                <img
                  src={express}
                  className="sm:w-[25%] w-[30%] lg:w-[4%] mx-2 opacity-50 group-hover/ic:translate-x-2  group-hover:opacity-100 duration-300"
                  alt=""
                />
                <img
                  src={reactjs}
                  className="sm:w-[25%] w-[30%] lg:w-[4%] mx-2 opacity-50 group-hover/ic:translate-x-2  group-hover:opacity-100 duration-300"
                  alt=""
                />
                <img
                  src={nodejs}
                  className="sm:w-[25%] w-[30%] lg:w-[4%] mx-2  opacity-50 group-hover/ic:translate-x-2  group-hover:opacity-100 duration-300"
                  alt=""
                />
              </div>
            </p>
            <p className=" text-xl sm:text-1xl md:text-2xl lg:text-3xl mb-10 text-[#424679] font-semibold font-mono transition ease-in-out duration-300 group-hover:-translate-y-2 group-hover:text-[#676f9d] ">
              <div className="group/ic hover:text-white flex flex-row transition-all duration-500 ease-in-out ">
                2.C/C++
                <img
                  src={cpp}
                  className="sm:w-[25%] w-[30%] lg:w-[4%] mx-2 opacity-50 group-hover/ic:translate-x-2  group-hover:opacity-100 duration-300"
                  alt=""
                />
                <img
                  src={c}
                  className="sm:w-[25%] w-[30%] lg:w-[4%] mx-2 opacity-50 group-hover/ic:translate-x-2  group-hover:opacity-100 duration-300"
                  alt=""
                />
              </div>
            </p>
            <p className=" text-xl sm:text-1xl md:text-2xl lg:text-3xl mb-10 text-[#424679] font-semibold font-mono transition ease-in-out duration-300 group-hover:-translate-y-2 group-hover:text-[#676f9d] ">
              <div className="group/ic hover:text-white flex flex-row transition-all duration-700 ease-in-out ">
                3.Git/GitHub
                <img
                  src={github}
                  className="sm:w-[25%] w-[30%] lg:w-[4%] mx-2 opacity-50 group-hover/ic:translate-x-2  group-hover:opacity-100 duration-300"
                  alt=""
                />
              </div>
            </p>
            
          </div>
        </div>
        <div className="flex flex-col items-center group">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-[#676f9d] font-semibold font-mono  transition ease-in-out duration-300 group-hover:-translate-y-3 group-hover:text-[#8f99d1]">
            Skills
          </p>
          <div className="h-1 w-[50%] lg:h-2 md mb-5 bg-white rounded-full font-mono transition ease-in-out duration-300 group-hover:-translate-y-2 "></div>
        <div className="grid grid-cols-2">
          <div className="h-20 w-16 bg-black">
            <div></div>
          </div>
          <div className="h-20 w-16 bg-black">
            <div></div>
          </div>

        </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
