'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useEffect } from 'react'

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

const ArtbitrageKeyFeaturesBg = ({ data = dummyData }) => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to('.dep-left', {
      top: 0,
      scrollTrigger: {
        trigger: '.dep-trigger',
        pin: true,
        start: 'top top',
        end: `+=${data.length * 600}px`,
        toggleActions: 'play none none reverse',
      },
    })

    const cards = document.querySelectorAll('.dep-card')

    cards.forEach((card, index) => {
      gsap.to(card, {
        top: 0,
        scrollTrigger: {
          trigger: card,
          start: 'bottom bottom',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            cards.forEach((aboveCard, aboveIndex) => {
              const offset = -(index - aboveIndex) * 50
              gsap.to(aboveCard, {
                y: offset,
              })
            })
          },
          onLeaveBack: () => {
            cards.forEach((aboveCard, aboveIndex) => {
              const offset = -(index - aboveIndex) * 50
              gsap.to(aboveCard, {
                y: offset,
              })
            })
          },
        },
      })
    })

    return () => {
      gsap.killTweensOf('.dep-left')
      cards.forEach((card) => gsap.killTweensOf(card))
    }
  }, [data.length])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='w-full max-w-[1440px] mx-auto mb-10'>
      <div className='dep-trigger flex flex-col h-[120vh] items-center overflow-hidden bg-black text-white relative z-[1]'>
        <div className='flex  items-center justify-between px-10'>
          <h2 className='lg:text-5xl md:text-4xl text-3xl sm:font-medium font-semibold text-white pb-10 max-w-[800px]'>
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
        <div className='container mx-auto px-4 md:px-6 flex flex-col items-center gap-x-[5rem] md:flex-row '>
          <div className='relative z-[1] w-full'>
            {data.map((item, index) => (
              <div
                key={index}
                className={`dep-card absolute flex w-full flex-col shadow-dev-card `}
                style={{
                  top: `${index * 40}rem`,
                }}
              >
                <div className='overflow-hidden border z-[1] relative rounded-lg border-white/15'>
                  <Image
                    src={'/bgforkeyfeature.png'}
                    fill
                    alt='background image'
                    className='absolute z-0 w-full h-full bg-center bg-cover'
                  />
                  <div className='absolute top-0 left-1.5 text-9xl text-white/15 font-bold'>
                    0{index + 1}
                  </div>
                  <div className='relative z-[1] p-10 flex font-medium flex-col gap-5'>
                    <h3 className='text-white font-semibold heading-lg'>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtbitrageKeyFeaturesBg
