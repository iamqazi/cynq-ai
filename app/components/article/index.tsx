'use client'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
//article type
import { articleType } from '@/app/types/types'

type propType = {
  heading: string
  articles: articleType[]
  benefitsText?: string
  benefits?: boolean
}
export default function Articles({
  heading,
  articles,
  benefitsText,
  benefits = false,
}: propType) {
  const [windowWidth, setWindowWidth] = useState<number>(0)

  useEffect(() => {
    // This code runs only on the client
    setWindowWidth(window.innerWidth)

    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [articleInd, setArticleInd] = useState<number>(0)
  return (
    <section className='relative flex flex-col items-center  text-white bg-black my-20 px-4 md:px-8 xl:px-16'>
      <h2 className='lg:text-5xl md:text-4xl text-3xl sm:font-medium font-semibold text-center text-white pb-10 max-w-[1000px]'>
        {heading}
      </h2>

      {benefits && (
        <div className='flex flex-col md:flex-row items-center gap-6 md:gap-[30px] text-center md:text-left my-6 sm:mb-14'>
          <div className='relative bg-[#160428] border border-white/15 p-4 md:px-[16px] md:py-[12px]  rounded-[20px] shadow-[0px_0px_150px_#9b4bfc] '>
            <Image
              src={'/star.svg'}
              alt='star'
              height={150}
              width={150}
              className='relative z-0 md:h-[200px] md:w-[200px]'
            />
          </div>
          {benefitsText && (
            <p className='z-[1] px-4 md:px-0 text-[16px] md:text-[20px] text-white max-w-[400px] md:max-w-[570px]'>
              {benefitsText}
            </p>
          )}
        </div>
      )}
      <div className='grid xl:grid-cols-[40%_1fr] sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-20 md:gap-10 lg:gap-20 xl:mx-20 lg:mx-10 sm:mx-0 mx-10 my-10 md:mb-20'>
        <article className='sticky top-[100px] sm:order-1 order-2 rounded-[20px] w-full border border-white/15 md:p-8 p-5 shadow-[0px_0px_100px_#9b4bfc54] h-fit transition-all'>
          {articles[articleInd].text}
        </article>
        <div className='sm:order-2 order-1 flex flex-col gap-5 md:gap-8'>
          {articles.map((article, ind) => {
            return (
              <a
                id={(ind === articles.length - 1) && windowWidth < 640 ? 'lastOption' : ''}
                href='#lastOption'
                key={ind}
                onClick={() => setArticleInd(ind)}
                className={`border-b pb-5 md:pb-8 heading-md flex items-center justify-between gap-5
           ${
             ind === articleInd
               ? 'text-[#9B4BFC]'
               : 'text-white hover:text-white/50 '
           } `}
              >
                {article.title}
                {ind === articleInd ? (
                  <ArrowRight className='text-white' size={40} />
                ) : (
                  <ArrowUpRight className='text-white' size={40} />
                )}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
