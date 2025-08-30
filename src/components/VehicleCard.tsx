import { Button } from "@/components/ui/button";
import { Car, Users, Luggage, Star } from "lucide-react";

interface Vehicle {
  name: string;
  seats: string;
  bags: string;
  badge: string;
  rating?: number;
  features?: string[];
}

interface VehicleCardProps {
  vehicle: Vehicle;
  onReserve?: () => void;
  onQuote?: () => void;
}

export const VehicleCard = ({ vehicle, onReserve, onQuote }: VehicleCardProps) => {
  return (
    <div className="rounded-2xl border bg-card hover-lift transition-smooth p-5 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <Car className="h-5 w-5 text-primary" />
          <h4 className="font-semibold text-lg">{vehicle.name}</h4>
        </div>
        <span className="text-xs rounded-full px-3 py-1 bg-muted font-medium">
          {vehicle.badge}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span>{vehicle.seats} places</span>
        </div>
        <div className="flex items-center gap-2">
          <Luggage className="h-4 w-4" />
          <span>{vehicle.bags} bagages</span>
        </div>
      </div>

      {vehicle.rating && (
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < vehicle.rating! ? 'text-yellow-400 fill-current' : 'text-gray-200'
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">{vehicle.rating}/5</span>
        </div>
      )}

      <div className="flex gap-2">
        <Button 
          variant="secondary" 
          size="sm" 
          className="flex-1"
          onClick={onReserve}
        >
          Réserver
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={onQuote}
        >
          Devis
        </Button>
      </div>
    </div>
  );
};