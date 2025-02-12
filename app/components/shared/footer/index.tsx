'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname();

  const sitemapLinks = [
    { href: '/', label: 'Home' },
    { href: '/predictive-ai', label: 'Predictive Ai' },
    { href: '/ai-assistant', label: 'Ai Assistant' },
    { href: '/ai-arbitrage', label: 'Ai Arbitrage' },
    { href: '/ai-tax-tool', label: 'Ai Tax Tool' },
  ]

  const socialLinks = [
    { href: '#', src: '/mingcute.svg', alt: 'Mingcute Icon' },
    { href: '#', src: '/twitter.svg', alt: 'Twitter Icon' },
    { href: '#', src: '/telegram.svg', alt: 'Telegram Icon' },
    { href: '#', src: '/magic.svg', alt: 'Magic Icon' },
  ]

  return (
    <footer role='contentinfo'>
      <div className='bg-black border-y border-[#95959525] flex flex-col gap-5 p-10 pb-5 items-center text-center relative z-20 text-white/70 ' >
        {/* Logo */}
        <Link
          href='/'
          title='Go to homepage'
        >
          <Image
            src='/logo.png'
            width={190}
            height={50}
            alt='Cynq Ai Logo'
            priority
          />
        </Link>

        {/* section: Navigation links */}
        <nav aria-label='Footer Links'>
          <ul className=' flex flex-wrap justify-center gap-x-10 gap-y-5 font-normal text-sm text-nowrap'>
            {sitemapLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href ? 'text-[#4d4bdd]' : 'hover:text-[#4d4bdd]'
                  }
                  aria-current={pathname === link.href ? 'page' : undefined}
                  title={link.label}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className=' flex space-x-10 items-center'>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              title={social.alt}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image src={social.src} width={30} height={30} alt={social.alt} className='hover:scale-110 select-none' />
            </a>
          ))}
        </div>
      </div>

      {/* Footer bottom bar */}
      <aside className='py-3 px-5 flex justify-between flex-wrap gap-3 sm:text-base text-sm text-white/70'>
        <small className='sm:mx-0 mx-auto'>Cynqai © All rights reserved.</small>
        <small className='sm:mx-0 mx-auto'>
          <Link
            href='/terms-of-use'
            title='Terms and Conditions'
            className='hover:text-[#4d4bdd]'
          >
            Terms and Conditions
          </Link>{' '}
          /{' '}
          <Link
            href='/privacy-policy'
            title='Privacy Policy'
            className='hover:text-[#4d4bdd]'
          >
            Privacy Policy
          </Link>
        </small>
      </aside>
    </footer>
  )
}
