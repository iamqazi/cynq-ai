import { cardData } from "@/app/types/data";
import Image from "next/image";

interface TradingCardProps {
  image: string;
  title: string;
}

export const TradingCard = ({ image, title }: TradingCardProps) => {
  return (
    <div className="rounded-2xl border-[1px] border-white/15 bg-[#8C45FF1C] p-5 flex flex-col items-center shadow-xl">
      <div className="relative w-[238px] h-[238px] mb-6">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain w-[238px] h-[238px]"
          priority
        />
      </div>
      <h2 className="text-white text-[26px] font-[500] leading-[30px] text-center mb-3">
        {title}
      </h2>
    </div>
  );
};

export const TradingCardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
      {cardData.map((card) => (
        <TradingCard key={card.title} image={card.image} title={card.title} />
      ))}
    </div>
  );
};
