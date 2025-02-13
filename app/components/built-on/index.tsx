import Image from 'next/image'

export default function BuiltOn() {
  type builtOn = {
    src: string
    name: string
  }
  const builtOnArray: builtOn[] = [
    {
      src: '/chatgpt.svg',
      name: 'chatgpt',
    },
    {
      src: '/gemini.svg',
      name: 'gemini',
    },
    {
      src: '/polygon.svg',
      name: 'polygon',
    },
    {
      src: '/binance.svg',
      name: 'binance',
    },
    {
      src: '/v.svg',
      name: 'v',
    },
    {
      src: '/optimism.svg',
      name: 'optimism',
    },
    {
      src: '/ethereum.svg',
      name: 'ethereum',
    },
    {
      src: '/gradientlogo.svg',
      name: 'gradientlogo',
    },
    {
      src: '/helmet.svg',
      name: 'helmet',
    },
    {
      src: '/swirl.svg',
      name: 'swirl',
    },
    {
      src: '/honey.svg',
      name: 'honey',
    },
    {
      src: '/python.svg',
      name: 'python',
    },
    {
      src: '/z.svg',
      name: 'z',
    },
    {
      src: '/html.svg',
      name: 'html',
    },
    {
      src: '/css.svg',
      name: 'css',
    },
    {
      src: '/bootstrap.svg',
      name: 'bootstrap',
    },
    {
      src: '/js.svg',
      name: 'js',
    },
    {
      src: '/react.svg',
      name: 'react',
    },
    {
      src: '/fox.svg',
      name: 'fox',
    },
    {
      src: '/mwjs.svg',
      name: 'mwjs',
    },
    {
      src: '/invertZ.svg',
      name: 'invertZ',
    },
    {
      src: '/Golang.svg',
      name: 'Golang',
    },
  ]
  return (
    <section className='text-white md:mb-24 mt-10 sm:px-10 px-5'>
      <h1 className='faq-item lg:text-5xl md:text-4xl text-3xl font-medium text-center '>
        Built On
      </h1>
      <article className='flex flex-wrap items-center justify-center md:gap-8 sm:gap-5 gap-3 sm:mt-14 mt-6 lg:px-20 sm:px-10 px-5'>
        {builtOnArray.map((item, ind) => (
          <div
            key={ind}
            className='relative z-[1] lg:max-w-[75px] md:max-w-[60px] sm:max-w-[50px]  xs:max-w-[40px] max-w-[30px] md:hover:scale-110 transition-all
            md:hover:-translate-y-3
            md:hover:after:opacity-100
            after:opacity-0
            after:absolute after:w-[80%] after:h-[80%] after:left-2/4 after:top-2/4 after:-translate-x-2/4 after:-translate-y-2/4
            after:bg-[#9B4BFC]
            after:shadow-[0px_0px_50px_#9B4BFC]
            after:rounded-[50%]
            after:z-[-1]
            '
          >
            <Image
              src={item.src}
              alt={item.name}
              width={75}
              height={75}
              className='select-none  bg-no-repeat bg-center bg-cover'
            />
          </div>
        ))}
      </article>
    </section>
  )
}
