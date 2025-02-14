import { cardData } from "@/app/types/data";

interface TradingCardProps {
  image: string;
  title: string;
}

export const TradingCard = ({ image }: TradingCardProps) => {
  return (
    <div
      className="rounded-2xl   p-6 flex flex-col h-[400px] w-[300px] items-center shadow-xl bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
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
