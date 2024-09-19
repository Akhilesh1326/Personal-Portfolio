import { useEffect, useState } from "react";
import proimg from "../assets/male_profile.png";
import VITlogo from "../assets/vit_logo2.png";
import p1i1 from "../assets/p1i1.png";
import p2i1 from "../assets/p2i1.png";
import cpp from "../assets/cpp.png";
import github from "../assets/github.png";
import c from "../assets/c.png";
// import certi1 from "../assets/cz.png";
import certi2 from "../assets/dc.png";
import certi3 from "../assets/isa.jpg";
import mern from "../assets/MERN-logo.png"
import call from "../assets/call.png"
import mail from "../assets/mail.png"
import BB from "../assets/BB.png"
import ISIH from "../assets/ISIH.png"
import myself from "../assets/myself.png"


const Home = () => {
  const [im, setIm] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  // const [color, setColor] = useState('#263798');




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
  const c1 = () => {
    const t = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facilis id totam nihil quod rerum officia aperiam vero voluptatum, ipsam veritatis. Similique mollitia nisi sequi, sed";
    let index = 0;
    var text = "";
    setInterval(() => {
      text = text + t[index];
      index++;
      if (index >= t.length) {
        return;
      }
      setText1(text);
    }, 50);
  };

  const c2 = () => {
    const t = "Fucking certifcicat to fuck evryon on this planet";
    let index = 0;
    var text = "";
    setInterval(() => {
      text = text + t[index];
      index++;
      if (index >= t.length) {
        return;
      }
      setText2(text);
    }, 100);
  };
  const c3 = () => {
    const t = "Fucking certifcicat to fuck evryon on this planet";
    let index = 0;
    var text = "";
    setInterval(() => {
      text = text + t[index];
      index++;
      if (index >= t.length) {
        return;
      }
      setText3(text);
    }, 100);
  };
  const c4 = () => {
    const t = "Fucking certifcicat to fuck evryon on this planet";
    let index = 0;
    var text = "";
    setInterval(() => {
      text = text + t[index];
      index++;
      if (index >= t.length) {
        return;
      }
      setText4(text);
    }, 100);
  };


  return (
    <div className="scroll-smooth bg-[#263798]">
      <div className="flex flex-col justify-center items-center h-auto pt-10">
        <img
          src={myself}
          className="sm:w-[25%] w-[30%] lg:w-[15%] my-4"
          alt=""
        />
        <p className="text-3xl sm:tesm-4xl md:text-5xl [20rem] text-[#EEAA74] font-bold font-mono mb-4">
          Akhilesh Pimple
        </p>
        <div className="flex flex-col items-center">
          <p className="text-xl sm:text-1xl md:text-2xl lg:text-3xl text-[#ffff] font-semibold font-mono transition-opacity">
            I{"'"}m a
          </p>
          <p className="text-xl sm:text-1xl md:text-2xl lg:text-3xl text-[#EEAA74] font-semibold font-mono transition-opacity animate-mod my-2 mb-[10rem] lg:mb-[18rem]">
            {im}
          </p>
        </div>

        <div className="flex flex-col items-center group  bg-gradient-to-b from-[#263798] from-10% via-#1B2632-100 via-50% to-[#0D1925] to-40%">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-[#676f9d] font-semibold font-mono  transition ease-in-out duration-300 group-hover:-translate-y-3 group-hover:text-[#ffffff]">
            About Me
          </p>
          <div className="h-1 w-[80%] lg:h-2  md mb-5 bg-white rounded-full font-mono transition ease-in-out duration-300 group-hover:-translate-y-2"></div>
          <div className="w-[70%] transition duration-500 delay-150 shadow-inherit  group-hover:shadow-[10px_10px_5px_10px]  group-hover:-translate-y-2  py-5 px-5 ">
            <p className="text-xl sm:text-1xl md:text-2xl lg:text-3xl mb-20 text-[#424679] font-semibold font-mono transition ease-in-out duration-300 group-hover:-translate-y-2 group-hover:text-[#ffff]">
              Background:
              <p className="mt-5 text-lg sm:text-xl md:text-1xl lg:text-2xl ml-10 text-[#EEAA74] transition duration-100 group-hover:text-[#ff9d4e]">
                Hey it{"'"}s Akhilesh here, I am a student and wanna be a good
                programmer/developer in good and bright future. I like to read
                and explore things.
              </p>
            </p>
            <p className="text-xl sm:text-1xl md:text-2xl lg:text-3xl mb-10 text-[#424679] font-semibold font-mono transition ease-in-out duration-300 group-hover:-translate-y-2 group-hover:text-[#ffff] group/img">
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
        <div className="flex flex-col items-center group bg-gradient-to-b pt-10 from-[#0D1925] via-#1B2632 to-[#1B2632]">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-[#676f9d] font-semibold font-mono  transition ease-in-out duration-300 group-hover:-translate-y-3 group-hover:text-[#c2c8e9]">
            Projects
          </p>
          <div className="h-1 w-[80%] lg:h-2 mb-5 bg-white rounded-full font-mono transition ease-in-out duration-300 group-hover:-translate-y-2"></div>
          <div className="w-[70%] mb-20 transition duration-500 delay-150 shadow-inherit  group-hover:shadow-[10px_10px_5px_10px]  group-hover:-translate-y-2  py-5 px-5">
            <p className=" text-xl sm:text-1xl md:text-2xl lg:text-3xl mb-20 text-[#424679] font-semibold font-mono transition ease-in-out duration-300 group-hover:-translate-y-2 group-hover:text-[#676f9d] group/p1">
              <div className="group/ic hover:text-white flex flex-col transition-all duration-300 ease-in-out ">
                <a
                  href="https://github.com/Akhilesh1326/Blood-Report-Diagnosis."
                  target="_blank"
                >
                  1.Blood Report Dignosis:
                  <p className="mt-5 text-lg sm:text-xl md:text-1xl lg:text-2xl ml-10 text-[#8a5931] transition duration-100 group-hover:text-[#ff9d4e] group-hover/ic:text-[#c78f3b]">
                    Hey it{"'"}s Akhilesh here, I am a student and wanna be a good
                    programmer/developer in good and bright future. I like to
                    read and explore things.
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

        <div className="flex flex-col items-center group bg-gradient-to-b w-full from-[#1B2632] via-#364252-100 to-[#0D1925]">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-[#676f9d] font-semibold font-mono  transition ease-in-out duration-300 group-hover:-translate-y-3 group-hover:text-[#c2c8e9]">
            Skills
          </p>
          <div className="h-1 w-[50%] lg:h-2 md mb-5 bg-white rounded-full font-mono transition ease-in-out duration-300 group-hover:-translate-y-2 "></div>
          <div className="w-[70%] mb-20 transition duration-500 delay-150 shadow-inherit  group-hover:shadow-[10px_10px_5px_10px]  group-hover:-translate-y-2  py-5 px-5">
            <p className=" text-xl sm:text-1xl md:text-2xl lg:text-3xl mb-10 text-[#424679] font-semibold font-mono transition ease-in-out duration-300 group-hover:-translate-y-2 group-hover:text-[#676f9d] ">
              <div className="group/ic hover:text-white flex flex-row transition-all duration-300 ease-in-out ">
                <img
                  src={mern}
                  className="sm:w-[25%] w-[30%] lg:w-[20%] mx-2 opacity-50 group-hover/ic:translate-x-2  group-hover:opacity-100 duration-300"
                  alt=""
                />
              </div>
            </p>
            <p className=" text-xl sm:text-1xl md:text-2xl lg:text-3xl mb-10 text-[#424679] font-semibold font-mono transition ease-in-out duration-300 group-hover:-translate-y-2 group-hover:text-[#676f9d] ">
              <div className="group/ic hover:text-white flex flex-row transition-all duration-500 ease-in-out ">
                C/C++
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
                Version Controlling
                <img
                  src={github}
                  className="sm:w-[25%] w-[30%] lg:w-[4%] mx-2 opacity-50 group-hover/ic:translate-x-2  group-hover:opacity-100 duration-300"
                  alt=""
                />
              </div>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center group w-full bg-gradient-to-b from-[#0D1925] via-#1B2632-100 to-[#364252]">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-[#676f9d] font-semibold font-mono  transition ease-in-out duration-300 group-hover:-translate-y-3 group-hover:text-[#c2c8e9]">
            Certificates
          </p>

          <div className="h-1 w-[70%] lg:h-2 md mb-5 bg-white rounded-full font-mono transition ease-in-out duration-300 group-hover:-translate-y-2 "></div>
          <p className="text-slate-400 font-semibold text-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:text-slate-50 my-4">Click on Certificate for more info</p>
          <div className="transition duration-500 delay-150 shadow-inherit group-hover:shadow-[5px_5px_2px_5px] group-hover:-translate-y-2">


            <div className="flex justify-center content-center">
              <div className="mx-4 py-2 px-2  my-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-md hover:shadow-slate-300">
                <img src={BB} alt="" onClick={() => { c1() }} className="w-[20rem] bg-slate-800 " />
                <div className="text-md text-justify font-bold max-w-[20rem] font-mono my-2 text-[#EEAA74]">{text1}
                </div>
              </div>

              <div className="mx-4 py-2 px-2 my-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-md hover:shadow-slate-300">
                <img src={ISIH} alt="" onClick={() => { c2() }} className="w-[20rem] bg-slate-800 " />
                <div className="text-md text-justify font-bold max-w-[20rem] font-mono my-2 text-[#EEAA74]">{text2}
                </div>
              </div>
            </div>
            <div className="flex justify-center content-center">
              <div className="mx-4 py-2 px-2 my-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-md hover:shadow-slate-300">
                <img src={certi3} alt="" onClick={() => { c3() }} className="w-[20rem] bg-slate-800 " />
                <div className="text-md text-justify font-bold max-w-[20rem] font-mono my-2 text-[#EEAA74]">{text3}
                </div>
              </div>

              <div className="mx-4 py-2 px-2 my-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-md hover:shadow-slate-300">
                <img src={certi2} alt="" onClick={() => { c4() }} className="w-[20rem] bg-slate-800 " />
                <div className="text-md text-justify font-bold max-w-[20rem] font-mono my-2 text-[#EEAA74]">{text4}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center group bg-gradient-to-b pt-10 w-full from-[#364252] via-#1B2632 to-[#1B2632]">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-[#676f9d] font-semibold font-mono  transition ease-in-out duration-300 group-hover:-translate-y-3 group-hover:text-[#c2c8e9]">
            Contact Me
          </p>
          <div className="h-1 w-[80%] lg:h-2 mb-5 bg-white rounded-full font-mono transition ease-in-out duration-300 group-hover:-translate-y-2"></div>
          <div className="w-[70%] mb-20 transition duration-500 delay-150 shadow-inherit  group-hover:shadow-[10px_10px_5px_10px]  group-hover:-translate-y-2  py-5 px-5">
            <p className=" text-xl sm:text-1xl md:text-2xl lg:text-3xl  text-[#424679] font-semibold font-mono transition ease-in-out duration-300 group-hover:-translate-y-2 group-hover:text-[#676f9d] group/p1">
            <div className="group/call">
                <div className=" hover:text-white flex flex-row transition-all duration-300 ease-in-out ">
                <img src={call} alt="" className="w-8 h-8 mx-4 " />Phone:-
              </div>
              <div className="text-[20px] my-2 ml-10 transition-all ease-in-out duration-500  group-hover/call:sm:text-[10px] group-hover/call:lg:text-[30px]  group-hover/call:text-white mb-5"
                alt="">+91 8626059005
              </div>
              </div>
            <div className="group/call">
                <div className=" hover:text-white flex flex-row transition-all duration-300 ease-in-out ">
                <img src={mail} alt="" className="w-8 h-8 mx-4 " />Phone:-
              </div>
              <div className="text-[20px] my-2 ml-10 transition-all ease-in-out duration-500  group-hover/call:sm:text-[10px] group-hover/call:lg:text-[30px]  group-hover/call:text-white mb-5"
                alt="">akhileshpimple3@gmail.com
              </div>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
