import React from 'react';
import micpic from '../assets/micpic.png';
import musicpic from '../assets/musicpic.png';

export default function HomeBanner() {

  return (
    <>
      <section className='border-transparent mt-[80px] h-[60vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-between px-10'>
        <img className='max-h-[60vh]' src={micpic} alt="Resume illustration" />
        <h1 className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-lg text-wrap'>
          Find Opportunities, Build Futures
        </h1>
        <img className='max-h-[60vh]' src={musicpic} alt="Job illustration" />
      </section>
    </>
  );
}
