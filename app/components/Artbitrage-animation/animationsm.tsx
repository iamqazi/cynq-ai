'use client'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const ArtbitrageKeyFeaturesSM = () => {
  const sliderRef = useRef<SwiperRef | null>(null)

  const handlePrev = () => {
    sliderRef.current?.swiper?.slidePrev()
  }

  const handleNext = () => {
    sliderRef.current?.swiper?.slideNext()
  }

  const dummyData = [
   {
    heading: 'AI-Driven Arbitrage Opportunity Detection',
    text: 'The cryptocurrency market is highly fragmented, with different prices for the same asset ovarious blockchains and exchanges. CYNQAi’s AI continuously monitors thousands of trading pairs across centralized (CEX) and decentralized (DEX) exchanges, detecting price discrepancies that present profitable arbitrage opportunities.',
    points: [
      `Real-Time Price Scanning – AI constantly tracks price
     movements across multiple blockchains.`,
      `Liquidity & Slippage Analysis – AI ensures that trades
        execute with minimal price impact.`,
      `Multi-Chain Data Integration – Works across Ethereum,
    BSC, Solana, Avalanche, and Layer 2 networks.`,
    ],
  },
  {
   heading: 'Automated Execution & Gas Fee Optimization',
   text: 'One of the biggest challenges in arbitrage trading is execution speed—delays can cause price shifts, slippage, and unprofitable trades. CYNQAi’s AI bot executes transactions automatically within milliseconds, ensuring that orders are placed and settled instantly across chains. Additionally, AI optimizes gas fees and network congestion costs, selecting the most cost-effective route for trade execution.',
   points: [
     `High-Frequency Trading Execution – AI executes trades at lightning-fast speeds to capture price gaps.`,
     `Smart Contract-Based Automation – Eliminates manual trade execution delays.`,
     `AI-Optimized Gas Fee Reduction – AI routes transactions through the cheapest and fastest blockchain pathways.`,
   ],
  },
  {
   heading: 'Risk Management & Security Measures',
   text: 'TCrypto markets can be unpredictable, with risks such as front-running, slippage, and liquidity issues affecting arbitrage trades. CYNQAi’s AI-powered arbitrage bot analyzes real-time market conditions to mitigate risks before executing trades. Additionally, AI-powered smart contracts ensure secure and trustless arbitrage execution across multiple chains.',
   points: [
     `Slippage & Market Impact Prevention – AI ensures optimal trade sizing to avoid losses.`,
     `Front-Running Protection – AI monitors network activity to prevent bots from copying trade transactions.`,
     `Flash Loan Arbitrage Support – Executes zero-capital arbitrage opportunities using DeFi flash loans.`,
   ],
  },
   
    
  ]

  return (
    <div className=' pt-16 '>
      <div className='flex  items-center justify-between px-10'>
        <h2 className='lg:text-5xl md:text-4xl text-3xl sm:font-medium font-semibold text-white pb-10 max-w-[800px] sm:text-start text-center'>
          Key Features of the AI-Optimized Cross-Chain Arbitrage Bot
        </h2>
        <Image
          src={'/arbitragekey.svg'}
          alt='logo'
          height={300}
          width={300}
          className=' lg:w-[300px] md:w-[250px] w-[200px] sm:block hidden'
        />
      </div>
      <div className='relative w-full   px-5'>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className='!pb-8'
          ref={sliderRef}
          loop={true}
          navigation={false}
          style={{
            width: '100%',
            height: 'auto',
          }}
        >
          {dummyData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='overflow-hidden border z-[1] relative rounded-lg border-white/15 sm:text-sm text-[12px] leading-4'>
                <Image
                  src={'/bgforkeyfeature.png'}
                  fill
                  alt='background image'
                  className='absolute z-0 w-full h-full bg-center bg-cover'
                />
                <div className='absolute top-0 left-1.5 text-7xl sm:text-8xl text-white/15 font-bold'>
                  0{index + 1}
                </div>
                <div className='relative z-[1] sm:p-10 p-5 flex font-medium flex-col gap-2'>
                  <h3 className='text-white font-semibold heading-md'>
                    {item.heading}
                  </h3>
                  <p className='text-white/70'>{item.text}</p>
                  <ul className='text-white/70 list-disc pl-4'>
                    {item.points.map((point, ind) => (
                      <li key={ind}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='flex items-center justify-center gap-4 sm:mt-3'>
          <button
            className='flex h-[3.125rem] w-[3.125rem] cursor-pointer items-center justify-center rounded-full border border-white hover:bg-gray-100 transition-colors'
            onClick={handlePrev}
          >
            <ArrowLeft />
          </button>
          <button
            className='flex h-[3.125rem] w-[3.125rem] cursor-pointer items-center justify-center rounded-full border border-white bg-white hover:bg-gray-100 transition-colors'
            onClick={handleNext}
          >
            <ArrowRight className='text-black' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArtbitrageKeyFeaturesSM
