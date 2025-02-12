import Articles from '../components/article'
import FAQSection from '../components/faq'
import FutureOfAi from '../components/future-of-ai'
import { SecondaryHero } from '../components/hero-section'
import Footer from '../components/shared/footer'
import Navbar from '../components/shared/navbar'
import { TaxArticles } from '../types/data'

export default function AITaxTool() {
  return (
    <main className='bg-black'>
      <Navbar />
      <SecondaryHero
        text={
          'The CYNQAi AI-Based Crypto Tax Optimization Tool is an automated AI-driven system designed to track, analyze, and optimize crypto tax reporting across multiple exchanges, wallets, and blockchain networks.'
        }
        btnText='audit'
        heading='AI-Based Crypto <br/> /~*{~}Tax Optimization Tool{~}/~*'
      />
      <Articles articles={TaxArticles} heading='Say goodbye to manual tax calculations – Let AI handle your crypto taxes seamlessly!'  />
      <FAQSection />
      <FutureOfAi />
      <Footer />
    </main>
  )
}
