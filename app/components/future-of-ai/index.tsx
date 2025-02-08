import Image from 'next/image' 

export default function FutureOfAi() {
  return (
    <section
      aria-label='AI-Driven Decentralized Finance Section'
      className='py-20 '
    >
      <div className='container mx-auto px-4 max-w-6xl  '>
        <div className='relative border border-white/15 rounded-lg px-4 md:py-28 sm:py-20 pt-12 pb-2 text-center flex flex-col items-center shadow-[0px_0px_150px_#4A208A] overflow-clip '>
          <Image
            src='/future-of-ai-bg.png'
            alt='Decorative background'
            quality={75}
            fill
            objectFit='cover'
            priority
            className='absolute inset-0 z-[0]'
          />
          {/* Semantic heading structure */}
          <header className='sm:mb-8 mb-4 relative '>
            <h1 className=' md:text-5xl sm:text-4xl text-3xl font-medium  leading-tight sm:max-w-[60%] mx-auto '>
              The Future of AI-Driven 
              Decentralized Finance
            </h1>
          </header>

          {/* Email Form */}
          <form
            action='/submit-email'
            method='POST'
            className='sm:mt-6 mb-3 w-full max-w-md relative'
          >
            <div className='flex flex-col sm:flex-row gap-2 border border-white/15 rounded-lg p-1 '>
              <div className='flex-1 relative'>
                <label htmlFor='email-input' className='sr-only'>
                  Enter your email address
                </label>
                <input
                  id='email-input'
                  type='email'
                  name='email'
                  required
                  placeholder='Your email'
                  className='w-full px-3 py-2 bg-black/30  focus:outline-none '
                />
              </div>
              <button
                type='submit'
                className='transition-all duration-500 bg-white hover:bg-transparent border rounded-lg py-1.5 px-8 text-black hover:text-white  '
              >
                Sign up
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}
// import Link from 'next/link'

// export default function FutureOfAi() {
//   return (
//     <section className='py-20 '>
//       <div className=" lg:w-[70%] sm:w-[85%] sm:mx-auto mx-5 border border-white/15 rounded-lg  bg-[url('/future-of-ai-bg.png')]  bg-cover bg-no-repeat bg-center md:py-28 sm:py-20 py-14 text-center flex flex-col items-center shadow-[0px_0px_150px_#4A208A] sm:px-4 px-2 ">
//         <h1 className=' lg:text-5xl md:text-4xl sm:text-3xl text-2xl max-w-[500px]  font-medium'>
//           The Future of AI-Driven Decentralized Finance
//         </h1>
//         <form className='mt-8 border rounded-lg border-white/15 p-1 backdrop-blur-sm grid sm:grid-cols-[60%_40%] grid-cols-1 gap-y-2 sm:w-fit w-[90%]'>
//           <input type="text" placeholder='Your email' className='outline-none bg-transparent pl-3 py-1.5 sm:text-start text-center w-full' />
//           <Link href={'/sign-up'} className='transition-all duration-500 bg-white hover:bg-transparent border rounded-lg py-1.5 px-8 text-black hover:text-white  w-full'>
//           Sign up
//           </Link>
//         </form>
//       </div>
//     </section>
//   )
// }
