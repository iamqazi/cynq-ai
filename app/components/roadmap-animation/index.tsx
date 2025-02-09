import DevelopmentProcessLg from "./roadmap-lg";
import DevelopmentProcessSm from "./roadmap-sm";

const DevelopmentProcess = () => {
  return (
    <div className="bg-black text-white relative w-full py-16">
      <div className="hidden md:block w-full">
        <DevelopmentProcessLg />
      </div>
      <div className="md:hidden w-full">
        <DevelopmentProcessSm />
      </div>
    </div>
  );
};

export default DevelopmentProcess;
