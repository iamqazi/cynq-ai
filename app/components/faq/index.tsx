'use client'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

interface FAQItem {
  id: string
  question: string
  ans: string
}

const FAQsArray: FAQItem[] = [
  {
    id: '9199',
    question: 'How can your strategies be customized for my needs?',
    ans: 'Repellendus quisquam explicabo facere, saepe eveniet in natus. Magni in alias reiciendis consequatur sequi.',
  },
  {
    id: '9198',
    question: 'How can your strategies be customized for my needs?',
    ans: 'Repellendus quisquam explicabo facere, saepe eveniet in natus. Magni in alias reiciendis consequatur sequi.Repellendus quisquam explicabo facere, saepe eveniet in natus. Magni in alias reiciendis consequatur sequi.',
  },
  {
    id: '9197',
    question: 'How can your strategies be customized for my needs?',
    ans: 'Repellendus quisquam explicabo facere, saepe eveniet in natus. Magni in alias.',
  },
  {
    id: '9196',
    question: 'How can your strategies be customized for my needs?',
    ans: 'Repellendus quisquam explicabo facere, saepe eveniet in natus. Magni in alias reiciendis consequatur sequi.Repellendus quisquam explicabo facere, saepe eveniet in natus. Magni in alias reiciendis consequatur sequi.Repellendus quisquam explicabo facere, saepe eveniet in natus. Magni in alias reiciendis consequatur sequi.',
  },
  {
    id: '9195',
    question: 'How can your strategies be customized for my needs?',
    ans: 'Repellendus quisquam explicabo facere, saepe eveniet in natus. Magni in alias reiciendis consequatur sequi.Repellendus quisquam explicabo facere, saepe eveniet.',
  },
]

const FAQSection: React.FC = () => {
  const faqRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!faqRef.current) return

    // Select all the FAQ items within our section
    const faqItems = faqRef.current.querySelectorAll('.faq-item')

    // Animate each item from opacity 0 and y offset to full opacity and original position
    gsap.fromTo(
      faqItems,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: faqRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  return (
    <section
      ref={faqRef}
      className='mx-auto max-w-[800px] sm:my-14 my-8 px-2 sm:px-5 '
      aria-label='Frequently Asked Questions'
    >
      {/* Section Title */}
      <h1 className='lg:text-5xl md:text-4xl text-3xl font-medium text-center'>
        FAQ
      </h1>

      {/* FAQ Items */}
      <div className='flex flex-col sm:px-10 px-5 gap-3 my-5 md:my-10'>
        {FAQsArray.map((FAQ) => (
          <Question key={FAQ.id} {...FAQ} />
        ))}
      </div>
    </section>
  )
}

interface QuestionProps {
  id: string
  question: string
  ans: string
}

export function Question({ id, question, ans }: QuestionProps) {
  const [opened, setOpened] = useState<boolean>(false)
  const [height, setHeight] = useState<number>(0)
  const answerRef = useRef<HTMLParagraphElement>(null)

  // Calculate and update the height of the answer content when opened or when content changes
  useEffect(() => {
    if (answerRef.current) {
      const calculatedHeight = Math.ceil(
        answerRef.current.getBoundingClientRect().height + 40
      )
      setHeight(calculatedHeight)
    }
  }, [ans, opened])

  return (
    <article className='faq-item bg-gradient-to-br from-[#190D2E] to-[#000000] border border-[#333333] rounded-lg overflow-hidden'>
      <header
        className='grid grid-cols-[1fr_45px] md:grid-cols-[1fr_65px] pl-3 sm:pl-6'
        id={`faq-question-${id}`}
      >
        {/* Use a heading element for the question */}
        <h2 className='p-4 pl-0 text-sm md:text-base text-white/70'>
          {question}
        </h2>
        <button
          onClick={() => setOpened((prev) => !prev)}
          className='flex justify-center items-center relative'
          aria-expanded={opened}
          aria-controls={`faq-answer-${id}`}
          aria-label={`Toggle answer for: ${question}`}
        >
          {/* Horizontal Bar */}
          <span
            aria-hidden='true'
            className='transition-all duration-500 w-[12px] md:w-[18px] h-[1px] block bg-[#A3A5A6] group-hover:bg-[#d4d5d5]'
          ></span>
          {/* Vertical Bar */}
          <span
            aria-hidden='true'
            className={`absolute transition-all duration-500 w-[12px] md:w-[18px] h-[1px] bg-[#A3A5A6] group-hover:bg-[#d4d5d5] ${
              opened ? 'bg-[#d4d5d5]' : 'rotate-90'
            }`}
          ></span>
        </button>
      </header>

      <section
        id={`faq-answer-${id}`}
        role='region'
        aria-labelledby={`faq-question-${id}`}
        className='transition-all overflow-hidden'
        style={{
          height: opened ? `${height}px` : '0px',
          transitionDuration: `${500 + height * 2}ms`,
        }}
      >
        <p
          ref={answerRef}
          className='pl-3 sm:pl-6 pr-6 md:w-[90%] font-thin text-sm md:text-base text-white/70'
        >
          Ans. {ans}
        </p>
      </section>
    </article>
  )
}

export default FAQSection
