import ArtbitrageKeyFeaturesBg from './animationbg'
import ArtbitrageKeyFeaturesSM from './animationsm'

const ArbitrageKeyFeature = () => {
  return (
    <div className='z-[1] max-w-[1440px] mx-auto bg-black text-white relative w-full md:pt-16 py-8 2xl:mt-0 2xl:pt-0 mt-10'>
      <div className='hidden lg:block 2xl:hidden  w-full'>
        <ArtbitrageKeyFeaturesBg />
      </div>
      <div className='lg:hidden 2xl:block w-full'>
        <ArtbitrageKeyFeaturesSM />
      </div>
    </div>
  )
}

export default ArbitrageKeyFeature
