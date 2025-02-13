'use client'

import Image from 'next/image'
import { TradingCardGrid } from '../ui/cards'

export default function About() {
  return (
    <section className='relative flex flex-col items-center min-h-[800px] text-white bg-black pb-16 sm:pt-8 px-4 md:px-8 lg:px-16'>
      <div className='max-w-3xl text-center pb-[50px] md:pb-[80px] lg:pb-[100px] items-center flex flex-col'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl '>
          About Cnyq
        </h2>
        <p className='text-[16px] md:text-[18px] lg:text-[20px] text-white/70  text-center max-w-[80%] sm:max-w-[330px] md:max-w-[420px] mt-2'>
          Lorem ipsum dolor sit amet consectetur. At leo fermentum at lectus
          pellentesque purus hac.
        </p>
      </div>

      <div className='relative flex flex-col md:flex-row items-center md:gap-[30px] text-center md:text-start justify-center'>
        <div className='bg-[#160428] z-[1] h-[150px] w-[150px] md:h-[217px] md:w-[217px] border border-white/15 p-4 md:px-[16px] md:py-[12px] rounded-[20px] relative shadow-[0px_0px_150px_#9b4bfc] '>
          <span className='xl:w-[800px] md:w-[700px] w-[250px] h-[1px] bg-white/10 block absolute top-[-1px] left-2/4 md:-translate-x-1/4 -translate-x-2/4 '></span>
          <span className='xl:w-[800px] md:w-[700px] w-[250px] h-[1px] bg-white/10 block absolute bottom-[-1px] left-2/4 md:-translate-x-1/4 -translate-x-2/4 '></span>
          <span className='w-[1px] lg:h-[340px] md:h-[300px] h-[220px] bg-white/10 block absolute top-2/4 -translate-y-2/4 left-0 -translate-x-2/4 '></span>
          <span
            className='w-[1px] lg:h-[340px] md:h-[300px] h-[220px] bg-white/10 block absolute top-2/4 -translate-y-2/4 right-[-1px] -translate-x-2/4 
        '
          ></span>
          <Image
            src={'/star.svg'}
            alt='star'
            height={150}
            width={150}
            className='md:h-[200px] md:w-[200px]'
          />
        </div>
        <div className='z-[2] mt-5 px-4 md:px-0 flex flex-col md:items-start items-center '>
          <p className='text-lg md:text-xl lg:text-2xl font-medium max-w-[280px] md:max-w-[350px]'>
            Lorem ipsum dolor sit amet consectetur. At leo fermentum at lectus
            pellentesque purus hac.
          </p>
          <p className='text-[12px] md:text-sm text-white/50 max-w-[260px] md:max-w-[350px] mt-1'>
            Lorem ipsum dolor sit amet consectetur. At leo fermentum at lectus
            pellentesque purus hac.
          </p>
        </div>
      </div>
      <section className='md:mt-16 '>
        <TradingCardGrid />
      </section>
    </section>
  )
}
