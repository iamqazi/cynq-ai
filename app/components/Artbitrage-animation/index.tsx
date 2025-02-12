import ArtbitrageKeyFeaturesBg from "./animationbg";
import ArtbitrageKeyFeaturesSM from "./animationsm";

const ArbitrageKeyFeature = () => {
  return (
    <div className="z-[1] bg-black text-white relative w-full md:pt-16 py-8 mt-10">
      <div className="hidden md:block w-full">
        <ArtbitrageKeyFeaturesBg />
      </div>
      <div className="md:hidden w-full">
        <ArtbitrageKeyFeaturesSM />
      </div>
    </div>
  );
};

export default ArbitrageKeyFeature;
