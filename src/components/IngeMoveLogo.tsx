import { cn } from "@/lib/utils";

interface IngeMoveLogoProps {
  className?: string;
  showText?: boolean;
}

export const IngeMoveLogo = ({ className, showText = true }: IngeMoveLogoProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative">
        <div className="h-10 w-10 rounded-full gradient-hero flex items-center justify-center text-white font-bold text-lg shadow-medium">
          IM
        </div>
        <div className="absolute -top-1 -right-1 h-3 w-3 bg-success rounded-full animate-pulse-glow" />
      </div>
      {showText && (
        <div className="leading-tight">
          <p className="font-bold text-lg text-foreground">IngeMove</p>
          <p className="text-xs text-muted-foreground font-medium">Ingénierie & Mobilité</p>
        </div>
      )}
    </div>
  );
};