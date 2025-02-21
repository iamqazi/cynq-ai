import React from "react";
import Image from "next/image";

type AnimatedBorderBoxProps = {
  imageSrc: string;
  imageAlt?: string;
};

const AnimatedBorderBox: React.FC<AnimatedBorderBoxProps> = ({
  imageSrc,
  imageAlt = "Image in animated border box",
}) => {
  return (
    <div className="relative h-48 w-full">
      <div className="animated-border-box h-full w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover rounded-[0.625rem]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <style jsx>{`
        .animated-border-box {
          position: relative;
          border-radius: 0.625rem;
          overflow: hidden;
        }

        .animated-border-box:before {
          content: "";
          z-index: 1;
          position: absolute;
          width: 150%;
          height: 150%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(0deg);
          background-repeat: no-repeat;
          background-position: 0 0;
          background-image: conic-gradient(
            rgba(0, 0, 0, 0),
            #d3ffca,
            rgba(0, 0, 0, 0) 25%
          );
          animation: rotate 4s linear infinite;
          pointer-events: none;
        }

        @keyframes rotate {
          100% {
            transform: translate(-50%, -50%) rotate(1turn);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBorderBox;
