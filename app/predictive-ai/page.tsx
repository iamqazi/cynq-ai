import FAQSection from '../components/faq'
import FutureOfAi from '../components/future-of-ai'
import { SecondaryHero } from '../components/hero-section'
import Footer from '../components/shared/footer'
import Navbar from '../components/shared/navbar'
import Articles from '../components/article'
// array of articles
import { keyBenefitsArticles } from '../types/data'




export default function PredictiveAi() {
  return (
    <main className='bg-black'>
      <Navbar />
      <SecondaryHero
        text={
          'The CYNQAi Decentralized Predictive AI is a groundbreaking AI-driven forecasting system that provides real-time crypto price predictions, market risk assessments, and investment insights.'
        }
        btnText='audit'
        heading='Decentralized /~*{~}Predictive AI<br/>{~}/~*for Crypto Predictions'
      />
      <p className='text-white/20 heading-md my-5 md:px-24 px-5'>
        <span className='text-white'>
          Unlike traditional data oracles that only relay historical and
          real-time data, CYNQAi&apos;s
        </span>{' '}
        AI-powered prediction engine analyzes on-chain transactions, social
        sentiment, liquidity movements, and technical indicators to forecast
        future price trends and market behaviors.
      </p>
      <Articles articles={keyBenefitsArticles} heading='Key Benefits of CYNQ’s Predictive AI' benefits={true} benefitsText='CYNQ&apos;s Decentralized Predictive AI is designed to enhance
            crypto trading, DeFi investment, DAO governance, and NFT markets by
            leveraging machine learning, real-time data processing, and
            blockchain analytics. Below are the core benefits that set CYNQ
            apart as a next-generation AI-powered predictive tool.' />
      <FAQSection />
      <FutureOfAi />
      <Footer />
    </main>
  )
}
