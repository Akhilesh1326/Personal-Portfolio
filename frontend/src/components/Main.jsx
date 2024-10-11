import React from 'react'
import myself from "../assets/myself.png"

const Main = () => {
  return (
    <div >
      <div className='flex'>


        <div className='bg-[#1F1F38] flex-col'  >
          <div className='self-center'>
            <img src={myself} className='w-40' alt="" />
          </div>
          <div className='flex'>
            <h1 className='text-[#F5F5F7] text-2xl font-Pacifico'>Hey</h1>
            <h1 className='text-[#F5F5F7] text-2xl font-Poppins'>it's</h1>
            <h1 className='text-[#F5F5F7] text-2xl font-Poppins'>Akhilesh Pimpale</h1>
          </div>
          <div className='border-2 border-white py-2 px-2'>Check Out my work</div>

        </div>
        <div>
          <div className='border-black border-2'>
            <h1>About me</h1>
            <div>Hey, fellas i am a developer as i'am pursuing my computer engineering degree, in this path i have collected learning gems and greate experiences, that made me a proud developer, learning about anything related programming is fascinating and very elgant in my openion of course at start i sucked but now i am at some level and i am really proud of myself. </div>
            <h1>Skills</h1>
            <div>reactjs, nextjs, react native, nodejs, expressjs, mysql, mongodb, tailwindCss, c/c++, python, DSA</div>
          </div>
        </div>
      </div>
      <div>
        <h2>Project Listing</h2>
        <div>
          <div>medlinia</div>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quibusdam!</div>
          <div>medlinia</div>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quibusdam!</div>
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
