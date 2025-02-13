'use client'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Nav from './Nav'
//icons
import { Menu } from 'lucide-react'
import { Button } from '@nextui-org/react'

const Header = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [optionOpen, setOptionOpen] = useState(false)
  return (
    <header
      className={`sticky top-0 bg-black w-full  z-50 py-4 sm:px-6 px-3 flex justify-between items-center border-b border-white/15 text-sm `}
    >
      <Link href='/' className='relative z-[1]'>
        <Image
          src={'/logo.svg'}
          alt='Cynq AI'
          width={150}
          height={50}
          className='bg-center bg-no-repeat bg-contain'
        />
      </Link>
      {sideBarOpen && (
        <div className='lg:hidden fixed w-screen h-screen top-0 left-0 bg-black/80  z-[60]'></div>
      )}
      <Nav sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      <div className=' ml-4 gap-4 flex items-center  relative z-[1]'>
        <div className='relative text-left lg:block hidden  '>
          <div>
            <button
              onClick={() => setOptionOpen(!optionOpen)}
              type='button'
              className='inline-flex w-fit items-center justify-center gap-x-1.5 rounded-md  p-2'
              id='menu-button'
              aria-expanded='true'
              aria-haspopup='true'
            >
              <ReactCountryFlag
                countryCode='US'
                svg
                style={{
                  width: '2em',
                  height: '2em',
                }}
                title='US'
              />
              <svg
                className='-mr-1 size-5 text-gray-400'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
                data-slot='icon'
              >
                <path
                  fill-rule='evenodd'
                  d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z'
                  clip-rule='evenodd'
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              optionOpen ? '' : 'hidden'
            } absolute z-10 mt-2.5 rounded-md border border-white/15 bg-black text-nowrap px-4 `}
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='menu-button'
            tabIndex={-1}
          >
            <div className='py-1' role='none'>
              <a
                href='#'
                className='block py-1 text-sm'
                role='menuitem'
                tabIndex={-1}
                id='menu-item-0'
              >
                <ReactCountryFlag
                  countryCode='US'
                  svg
                  style={{
                    width: '2em',
                    height: '2em',
                  }}
                  title='US'
                />
              </a>
              <a
                href='#'
                className='block py-1 text-sm'
                role='menuitem'
                tabIndex={-1}
                id='menu-item-0'
              >
                <ReactCountryFlag
                  countryCode='EU'
                  svg
                  style={{
                    width: '2em',
                    height: '2em',
                  }}
                  title='EU'
                />
              </a>
            </div>
          </div>
        </div>
        <Button className='lg:block hidden px-6 py-2 text-black rounded-lg transition-all duration-700 hover:rounded-sm bg-[#ffffff]'>
          Whitepaper
        </Button>
        <button
          onClick={() => setSideBarOpen(!sideBarOpen)}
          className=' lg:hidden text-[#7B15F8] hover:text-[#7B15F8]/50 text-3xl'
        >
          <Menu size={35} />
        </button>
      </div>
    </header>
  )
}

export default Header
