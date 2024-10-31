import React from 'react'
import myself from "../assets/myself.png"

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
      <div className='flex flex-col justify-center items-center bg-[#00ADB5]'>
        <h2 className='text-[#F5F5F7] text-[30px] font-medium font-Poppins mt-40'>Project Listing</h2>
        <div className='flex justify-end'>
          <div className='w-40'>
            <div>medlinia</div>
            <div >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quibusdam!</div>
          </div>

          <div className='w-1 h-[450px] bg-white rounded-full  shadow-[0px_0px_15px_1px_#EDEDED] '> </div>

            <div className='w-40'>
              <div>medlinia</div>
              <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quibusdam!</div>
            </div>
         

        </div>
        <div>
          <div>medlinia</div>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quibusdam!</div>
          <div>medlinia</div>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quibusdam!</div>
        </div>
      </div>
      <div>
        <div>Skills Set</div>
        <div>reactjs</div>
        <div>nextjs</div>
        <div>react native</div>
        <div>nodejs</div>
        <div>expressjs</div>
        <div>mysql</div>
        <div>mongodb</div>
        <div>tailwindCss</div>
        <div>c/c++</div>
        <div>python</div>
        <div>DSA</div>
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
