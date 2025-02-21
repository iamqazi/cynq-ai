"use client";
import { Button } from "@nextui-org/react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/utils/cn";

type GradientButtonProps = {
  text: string;
  borderRadius?: string;
  iconLeft?: LucideIcon;
};

export default function GradientButton({
  text,
  borderRadius = "8px",
  iconLeft: IconLeft,
}: GradientButtonProps) {
  return (
    <Button
      style={{ borderRadius: borderRadius ?? "8px" }}
      className={cn(
        "relative flex items-center justify-center gap-2 px-4 py-2 text-white font-medium",
        "bg-gradient-to-b from-[#11BBFF] to-[#7D15FB] "
      )}
    >
      {IconLeft && <IconLeft className="w-5 h-5" />}
      {text}
    </Button>
  );
}
