import React from 'react'
import myself from "../assets/myself.png"
import laptopMockup from "../assets/laptop_mockup.webp"
import MedlineaFI from "../assets/MedlineaFI.png"


const Main = () => {
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
      <div className="bg-gradient-to-b from-[#353552] via-[#353552] to-[#1A2238] py-16">
        <h2 className="text-[#F5F5F7] text-[30px] font-medium font-Poppins text-center mb-10">
          Skill Set
        </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-10">
            <div className="flex flex-col items-center bg-[#27293D] p-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ReactJS Logo" className="w-16 h-16 mb-3" aria-label="ReactJS" />
              <h3 className="text-[#F5F5F7] text-lg font-semibold">ReactJS</h3>
            </div>
          </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-10">
          <div className="flex flex-col items-center bg-[#27293D] p-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="ReactJS Logo" className="w-16 h-16 mb-3" aria-label="ReactJS" />
            <h3 className="text-[#F5F5F7] text-lg font-semibold">ReactJS</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-10">
          <div className="flex flex-col items-center bg-[#27293D] p-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js Logo" className="w-16 h-16 mb-3" aria-label="Node.js" />

            <h3 className="text-[#F5F5F7] text-lg font-semibold">ReactJS</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-10">
          <div className="flex flex-col items-center bg-[#27293D] p-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Express.js Logo" className="w-16 h-16 mb-3" aria-label="Express.js" />

            {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ReactJS Logo" className="w-16 h-16 mb-3" aria-label="ReactJS" /> */}
            <h3 className="text-[#F5F5F7] text-lg font-semibold">ReactJS</h3>
          </div>
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
