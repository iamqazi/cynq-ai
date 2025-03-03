import { useTranslations } from "next-intl";

interface TradingCardProps {
  image: string;
  title: string;
}

interface CardData {
  image: string;
  title: string;
}

export const TradingCard = ({ image, title }: TradingCardProps) => {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col h-[400px] w-[318px] justify-end items-center shadow-xl bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <p className="text-[26px] font-[500] leading-[28px] max-w-[280px] text-white text-center ">
        {title}
      </p>
    </div>
  );
};

export const TradingCardGrid = () => {
  const t = useTranslations("");

  const cardData: CardData[] = [
    {
      image: "/ones.png",
      title: t("card1"),
    },
    {
      image: "/twos.png",
      title: t("card2"),
    },
    {
      image: "/threes.png",
      title: t("card3"),
    },
    {
      image: "/fours.png",
      title: t("card4"),
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 xl:grid-cols-4  gap-4  xl:max-w-[1340px] w-full ">
      {cardData.map((card) => (
        <TradingCard key={card.title} image={card.image} title={card.title} />
      ))}
    </div>
  );
};
