import FAQSection from '../components/faq'
import FutureOfAi from '../components/future-of-ai'
import { SecondaryHero } from '../components/hero-section'
import Footer from '../components/shared/footer'
import Navbar from '../components/shared/navbar'

export default function AIAssistant() {
  return (
    <main className='bg-black'>
      <Navbar />
      <SecondaryHero
        text={
          'This AI-driven assistant operates 24/7, adapting to market conditions faster than human traders and eliminating emotional biases that often lead to poor trading decisions.'
        }
        btnText='audit'
        heading='AI-Powered <br/> /~*{~}Crypto Trading Assistant{~}/~*'
      />
      <p className='text-white/20 heading-md my-5 md:px-24 px-5'>
        <span className='text-white'>
          CYNQAi&apos;s AI-Powered Crypto Trading Assistant is a revolutionary
          automated trading system that
        </span>{' '}
        leverages machine learning, real-time market analysis, and AI-driven
        risk management to execute profitable, data-driven trades with
        precision. Unlike traditional trading bots that rely on fixed rules,
        CYNQAi&apos;s AI adapts to market conditions in real-time, ensuring traders
        maximize gains while minimizing risks.
      </p>
      <FAQSection />
      <FutureOfAi />
      <Footer />
    </main>
  )
}
