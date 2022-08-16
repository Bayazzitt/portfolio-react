import React from 'react';
import { HiDownload } from 'react-icons/hi';
import Pdf from "../assets/pdf/alican.pdf";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Ali Can Bayazıt
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Front End Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I am a developer who is knowledgeable about modern designs, has the ability to analyze and think well by understanding the user's wishes from the user's point of view, is developing more and more every day by working on React.js, and has information hardware with customer relations.
        </p>
        <div>
        <a href={Pdf} target="_blank"
            >
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            Resume
            <span className=''>
              <HiDownload className='ml-3 ' />
            </span>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
