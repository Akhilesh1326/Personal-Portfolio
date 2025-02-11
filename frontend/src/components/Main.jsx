import React, { useState } from 'react'
import myself from "../assets/myself.png"
import laptopMockup from "../assets/laptop_mockup.webp"
import MedlineaFI from "../assets/MedlineaFI.png"
import rightArrow from "../assets/rightArrow.png"
import leftArrow from "../assets/leftArrow.png"


const Main = () => {

  const [currentTM, setCurrentTM] = useState(0);
  const [prev, setPrev] = useState(0);

  const testimonials = [
    {
      text: "This is the best service I've ever used. The team is professional, and the quality is unmatched!",
      name: "John Doe",
      role: "CEO, Company XYZ",
      image: "https://via.placeholder.com/50",
    },
    {
      text: "Fantastic experience! Highly recommended for anyone looking for great service.",
      name: "Jane Smith",
      role: "CTO, Startup Inc.",
      image: "https://via.placeholder.com/50",
    },
    {
      text: "Absolutely amazing! Everything was delivered on time with perfect quality.",
      name: "Alice Brown",
      role: "Manager, Tech Corp",
      image: "https://via.placeholder.com/50",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTM((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTM(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <div className=' '>
      <div className='flex justify-center items-center bg-[#1F1F38] h-screen'>


        <div className='flex flex-col justify-center items-center  w-[1000px] ml-10'  >
          <div className=' group '>
            <img src={myself} className="w-40 mt-5 mx-5 rounded-full border-4 border-slate-300 absolute z-50 shadow-[0px_0px_15px_1px_#000000] group-hover:shadow-[0px_0px_20px_10px_#000000] duration-300" alt="" />
            <div className='w-48 h-48 rounded-full mb-5 mx-1 bg-gradient-to-r from-indigo-500 via-50% via-purple-500 to-pink-400 animate-spin shadow-[0px_0px_15px_1px_#00ADB5] group-hover:shadow-[0px_0px_100px_2px_#00ADB5] duration-300' style={{ animationDuration: '2s' }}>
            </div>
          </div>
          <div className='flex my-2 mb-5 '>
            <h1 className='text-[#F5F5F7] text-2xl font-Pacifico text-[33px] mr-2'>Hey</h1>
            <h1 className='text-[#F5F5F7] text-2xl font-Poppins text-[33px] mr-2'>it{"'"}s</h1>
            <h1 className='text-[#F5F5F7] text-2xl font-Poppins text-[38px]  mr-2'>Akhilesh </h1>
            <h1 className='text-[#F5F5F7] text-2xl font-Poppins text-[38px]  mr-2'>Pimpale </h1>
          </div>
          <button className='border-2 border-[#EDEDED] rounded-lg py-2 px-2 text-[#00ADB5] shadow-[0px_0px_15px_1px_#00ADB5]'>Check Out my work</button>
        </div>

        <div className='w-4 h-[450px] bg-white rounded-full mt-16 mx-10 shadow-[0px_0px_15px_1px_#EDEDED] '></div>

        <div className='mt-16 flex flex-col justify-center'>
          <div className=' px-4 text-justify '>
            <h1 className='text-[#F5F5F7] text-[30px] font-medium font-Poppins'>About me</h1>
            <div className='text-[#F5F5F7] text-[18px] font-Roboto'>Hey, fellas i am a developer as i'am pursuing my computer engineering degree, in this path i have collected learning gems and greate experiences, that made me a proud developer, learning about anything related programming is fascinating and very elgant in my openion of course at start i sucked but now i am at some level and i am really proud of myself. </div>
            <h1 className='text-[#F5F5F7] text-[30px] font-medium font-Poppins'>Skills</h1>
            <div className='text-[#F5F5F7] text-[18px] font-Roboto'>reactjs, nextjs, react native, nodejs, expressjs, mysql, mongodb, tailwindCss, c/c++, python, DSA</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#00ADB5] min-h-screen">
        <h2 className="text-[#F5F5F7] text-[30px] font-medium font-Poppins mt-10">
          Project Listing
        </h2>
        <div className="flex  justify-center items-center  mt-20">
          {/* Left Section */}
          <div className="flex flex-col items-center w-80 ">

            <div className="text-white text-center font-semibold mb-1">Medlinia</div>
            <div className="relative w-full">
              <img src={laptopMockup} alt="Medlinia mockup" className="w-[450px] h-[180px]" />

              {/* Project Image inside Mockup */}
              <img
                src={MedlineaFI}
                alt="Project screenshot"
                className="absolute top-[8%] left-[10%] w-[80%] h-[80%] size-0 object-cover"
              />
            </div>
            {/* <img src={laptopMockup} alt="Medlinia mockup" className="w-full" /> */}

            <div className="text-white text-lg  text-center w-96 mt-1 ">
              A Web App for connecting doctors and patients with integration of AI functionalities
            </div>
          </div>


          <div className="w-2  h-[250px] ml-60 bg-white rounded-full shadow-[0px_0px_15px_1px_#EDEDED]"></div>
        </div>

        <div className="flex  justify-center items-center  mt-40">

          <div className="w-2 h-[250px] mr-60 bg-white rounded-full shadow-[0px_0px_15px_1px_#ededed]"></div>

          <div className="flex flex-col items-center w-72 ">
            <div className="text-white text-center font-semibold mb-1">GLOF Alert-System</div>
            <img
              src={laptopMockup}
              alt="Medlinia mockup"
              className="w-full h-auto "
            />
            <div className="text-white text-lg  text-center w-96 mt-1">
              Website based on the predicting and alerting about the glacial lake outburst and floodS
            </div>
            <img src="" alt="" />
          </div>

        </div>
        <div className="flex  justify-center items-center  mt-20">
          {/* Left Section */}
          <div className="flex flex-col items-center w-80 ">

            <div className="text-white text-center font-semibold mb-1">Medlinia</div>
            <div className="relative w-full">
              <img src={laptopMockup} alt="Medlinia mockup" className="w-[450px] h-[180px]" />

              {/* Project Image inside Mockup */}
              <img
                src={MedlineaFI}
                alt="Project screenshot"
                className="absolute top-[8%] left-[10%] w-[80%] h-[80%] size-0 object-cover"
              />
            </div>
            {/* <img src={laptopMockup} alt="Medlinia mockup" className="w-full" /> */}

            <div className="text-white text-lg  text-center w-96 mt-1 ">
              A Web App for connecting doctors and patients with integration of AI functionalities
            </div>
          </div>


          <div className="w-2  h-[250px] ml-60 bg-white rounded-full shadow-[0px_0px_15px_1px_#EDEDED]"></div>
        </div>

        <div className="flex  justify-center items-center  mt-40">

          <div className="w-2 h-[250px] mr-60 bg-white rounded-full shadow-[0px_0px_15px_1px_#ededed]"></div>

          <div className="flex flex-col items-center w-72 ">
            <div className="text-white text-center font-semibold mb-1">GLOF Alert-System</div>
            <img
              src={laptopMockup}
              alt="Medlinia mockup"
              className="w-full h-auto "
            />
            <div className="text-white text-lg  text-center w-96 mt-1">
              Website based on the predicting and alerting about the glacial lake outburst and floodS
            </div>
            <img src="" alt="" />
          </div>

        </div>
        {/* </div> */}

      </div>
      <div className="bg-gradient-to-b from-[#353552] via-[#353552] to-[#1A2238] pt-16 pb-36">
        <h2 className="text-[#F5F5F7] text-[30px] font-medium font-Poppins text-center mb-10">
          Skill Set
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-10">

          <div className="flex flex-col items-center bg-[#27293D] p-2 rounded-lg hover:shadow-[0px_0px_15px_5px_#61DAFB] shadow-lg hover:scale-105  duration-200 ">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ReactJS Logo" className="w-16 h-16 mb-3" aria-label="ReactJS" />
            <h3 className="text-[#F5F5F7] text-lg font-semibold">ReactJS</h3>
          </div>

          <div className="flex flex-col items-center bg-[#27293D] p-2 rounded-lg  hover:shadow-[0px_0px_15px_5px_#ffff] shadow-lg hover:scale-105  duration-200">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="ReactJS Logo" className="w-16 h-16 mb-3" aria-label="ReactJS" />
            <h3 className="text-[#F5F5F7] text-lg font-semibold">NextJS</h3>
          </div>

          <div className="flex flex-col items-center bg-[#27293D] p-2 rounded-lg  hover:shadow-[0px_0px_15px_5px_#57A745] shadow-lg hover:scale-105  duration-200">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js Logo" className="w-16 h-16 mb-3" aria-label="Node.js" />

            <h3 className="text-[#F5F5F7] text-lg font-semibold">NodeJS</h3>
          </div>

          <div className="flex flex-col items-center bg-[#27293D] p-2 rounded-lg  hover:shadow-[0px_0px_15px_5px_#ffff] shadow-lg hover:scale-105  duration-200">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Express.js Logo" className="w-16 h-16 mb-3" aria-label="Express.js" />

            <h3 className="text-[#F5F5F7] text-lg font-semibold">Express</h3>
          </div>
          <div className="flex flex-col items-center bg-[#27293D] p-2 rounded-lg  hover:shadow-[0px_0px_15px_5px_#06B6D4] shadow-lg hover:scale-105  duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 73.29"
              className="w-16 h-16 mb-3"
              aria-label="Tailwind CSS"
            >
              <defs>
                <style>{".cls-1{fill:#06b6d4;fill-rule:evenodd;}"}</style>
              </defs>
              <path
                className="cls-1"
                d="M61.44,0Q36.87,0,30.72,24.43q9.22-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.26,6,6.08,13,13.11,28.22,13.11q24.57,0,30.72-24.43-9.21,12.22-21.5,9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64,7,76.67,0,61.44,0ZM30.72,36.64Q6.15,36.64,0,61.07q9.23-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.27,6,6.07,13,13.11,28.22,13.11q24.57,0,30.72-24.43Q82.95,61.07,70.66,58c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z"
              />
            </svg>
            <h3 className="text-[#F5F5F7] text-lg font-semibold">Tailwind CSS</h3>
          </div>

          <div className="flex flex-col items-center bg-[#27293D] p-2 rounded-lg  hover:shadow-[0px_0px_15px_5px_#00618A] shadow-lg hover:scale-105  duration-200">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL Logo" className="w-16 h-16 mb-3" aria-label="MySQL" />

            <h3 className="text-[#F5F5F7] text-lg font-semibold">MySQL</h3>
          </div>

          <div className="flex flex-col items-center  bg-[#27293D] p-2 rounded-lg hover:shadow-[0px_0px_15px_5px_#45A538] shadow-lg hover:scale-105  duration-200">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB Logo" className="w-16 h-16 mb-3" aria-label="MongoDB" />

            <h3 className="text-[#F5F5F7] text-lg font-semibold">MognoDB</h3>
          </div>

          <div className="flex flex-col items-center bg-[#27293D] p-2 rounded-lg  hover:shadow-[0px_0px_15px_5px_#F0DB4F] shadow-lg hover:scale-105  duration-200">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript Logo" className="w-16 h-16 mb-3" aria-label="JavaScript" />

            <h3 className="text-[#F5F5F7] text-lg font-semibold">JavaScript</h3>
          </div>
          <div className="flex flex-col items-center bg-[#27293D] p-2 rounded-lg  hover:shadow-[0px_0px_15px_5px_#659AD2] shadow-lg hover:scale-105  duration-200">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++ Logo" className="w-16 h-16 mb-3" aria-label="C++" />

            <h3 className="text-[#F5F5F7] text-lg font-semibold">C++</h3>
          </div>
          <div className="flex flex-col items-center bg-[#27293D] p-2 rounded-lg  hover:shadow-[0px_0px_15px_5px_#0074BD] shadow-lg hover:scale-105  duration-200">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java Logo" className="w-16 h-16 mb-3" aria-label="Java" />

            <h3 className="text-[#F5F5F7] text-lg font-semibold">Java</h3>
          </div>
          <div className="flex flex-col items-center bg-[#27293D] p-2 rounded-lg  hover:shadow-[0px_0px_15px_5px_#77BC1F] shadow-lg hover:scale-105  duration-200">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot Logo" className="w-16 h-16 mb-3" aria-label="Spring Boot" />

            <h3 className="text-[#F5F5F7] text-lg font-semibold">SpringBoot</h3>
          </div>
          <div className="flex flex-col items-center bg-[#27293D] p-2 rounded-lg  hover:shadow-[0px_0px_15px_5px_#F5D44B] shadow-lg hover:scale-105  duration-200">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI Logo" className="w-16 h-16 mb-3" aria-label="Power BI" />

            <h3 className="text-[#F5F5F7] text-lg font-semibold">PowerBI</h3>
          </div>
          <div className="flex flex-col items-center bg-[#27293D] p-2 rounded-lg  hover:shadow-[0px_0px_15px_5px_#3B78A8] shadow-lg hover:scale-105  duration-200">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python Logo" className="w-16 h-16 mb-3" aria-label="Python" />

            <h3 className="text-[#F5F5F7] text-lg font-semibold">PYthon</h3>
          </div>

        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#1F1F38] to-[#27293D] py-16">
        <h2 className="text-[30px] text-center text-[#F5F5F7] font-medium font-Poppins mb-8">
          What People Say About Us
        </h2>
        <div className="flex w-[25rem] overflow-x-auto snap-x snap-mandatory">
  {/* Testimonial Card 1 */}
  <div className="w-80 flex-shrink-0 snap-center">
    <div className="bg-[#1B1F35] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
      <div className="text-[#F5F5F7] text-xl italic mb-4">
        "This is the best service I've ever used. The team is professional, and the quality is unmatched!"
      </div>
      <div className="flex items-center mt-4">
        <img
          src="https://via.placeholder.com/50"
          alt="Reviewer"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-[#F5F5F7] font-bold">John Doe</h3>
          <p className="text-gray-400 text-sm">CEO, Company XYZ</p>
        </div>
      </div>
    </div>
  </div>

  {/* Testimonial Card 2 */}
  <div className="w-80 flex-shrink-0 snap-center">
    <div className="bg-[#1B1F35] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
      <div className="text-[#F5F5F7] text-xl italic mb-4">
        "Fantastic experience! Highly recommended for anyone looking for great service."
      </div>
      <div className="flex items-center mt-4">
        <img
          src="https://via.placeholder.com/50"
          alt="Reviewer"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-[#F5F5F7] font-bold">Jane Smith</h3>
          <p className="text-gray-400 text-sm">CTO, Startup Inc.</p>
        </div>
      </div>
    </div>
  </div>

  {/* Add more cards as needed */}
</div>

      </div>


      <div>
        <div>TestiMonials</div>
        <div>
          <div>person 1</div>
          <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptates aspernatur quod. Fuga voluptatum eos adipisci unde commodi aliquid nesciunt?</div>
          <div>person 2</div>
          <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptates aspernatur quod. Fuga voluptatum eos adipisci unde commodi aliquid nesciunt?</div>
          <div>person 3</div>
          <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptates aspernatur quod. Fuga voluptatum eos adipisci unde commodi aliquid nesciunt?</div>
        </div>
      </div>
      <div>
        <div>
          blogs
        </div>
        <div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laborum at accusamus consequatur iure nostrum quo accusantium nobis optio officiis?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laborum at accusamus consequatur iure nostrum quo accusantium nobis optio officiis?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laborum at accusamus consequatur iure nostrum quo accusantium nobis optio officiis?</div>
        </div>
      </div>
      <div>
        <div>
          contact Me
        </div>
        <div>Email</div>
        <div>Insta</div>
        <div>Twitter</div>
        <div>LinkedIn</div>
      </div>
    </div>
  )
}

export default Main
