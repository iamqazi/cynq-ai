'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import React from 'react'

const links = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Ai Arbitrage',
    link: '/ai-arbitrage',
  },
  {
    text: 'AI Tax Tool',
    link: '/ai-tax-Tool',
  },
  {
    text: 'Blog',
    link: '/blog',
  },
  {
    text: 'Contact Us',
    link: '/contact-us',
  },
]
type propType = {
  sideBarOpen: boolean
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Nav({ sideBarOpen, setSideBarOpen }: propType) {
  const PATHNAME = usePathname()
  const pathname = `/${PATHNAME.split('/')[1]}`
  return (
    <nav
      className={`${
        sideBarOpen
          ? 'transition-all duration-500'
          : '-translate-x-full md:translate-x-0'
      } z-[100] md:rounded-[100px] md:w-fit  sm:w-[50%] w-full md:static fixed md:h-fit h-screen top-0 left-0  backdrop-blur-3xl md:bg-transparent bg-black/70 md:p-0 sm:pl-6 py-4 px-3 md:border-none border-r border-white/15`}
    >
      <div className='flex justify-between items-center'>
        <Link className='md:hidden' href='/'>
          <Image
            src={'/logo.svg'}
            alt='Cynq AI'
            width={150}
            height={50}
            className='bg-center bg-no-repeat bg-contain'
          />
        </Link>
        <button
          className='md:hidden border border-[#4d4bdd]  rounded-2xl h-fit px-3 py-1 text-[#4d4bdd] hover:text-[#4d4bdd] '
          onClick={() => setSideBarOpen(!sideBarOpen)}
        >
          {'<< close'}
        </button>
      </div>
      <hr className='mt-4 border border-white/15 md:hidden' />

      <ul className='flex w-full md:m-0 my-6 md:flex-row flex-col md:border md:bg-black/60 border-white/15 md:rounded-[100px] md:gap-x-4 lg:gap-x-8 gap-y-4 text-white/70 py-2 px-4 text-nowrap'>
        {links.map((link, ind) => (
          <li key={ind}>
            <Link
              href={link.link}
              className={`${
                pathname == link.link
                  ? `text-[#4d4bdd]`
                  : 'hover:text-[#4d4bdd]/70'
              }`}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <Button className='xs:hidden block px-6 py-2 text-black rounded-lg transition-all duration-700 hover:rounded-sm w-full bg-[#ffffff]'>
        Whitepaper
      </Button>
    </nav>
  )
}
