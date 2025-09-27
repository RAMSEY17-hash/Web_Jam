import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface StreetViewProps {
    location: {
        lat: number;
        lng: number;
    };
    title?: string;
    className?: string;
    heading?: number; // orientation optionnelle
    pitch?: number;   // inclinaison optionnelle
    fov?: number;     // champ de vision optionnel
}

export default function StreetView({ location, title, className = "", heading = 0, pitch = 0, fov = 90 }: StreetViewProps) {
    const { lat, lng } = location;

    // URL iframe pour Google Street View
    const streetViewUrl = `https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v0!6m8!1m7!1sCAoSLEFGMVFpcE4tUXVUa0hld05mS2lTTVhZRG5UVVdYbXk4MWxkY1hPeFJkVnB3!2m2!1d${lat}!2d${lng}!3f${heading}!4f${pitch}!5f${fov}`;

    return (
        <Card className={`overflow-hidden ${className}`}>
            <div className="relative">
                {title && (
                    <div className="absolute top-4 left-4 z-10 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {title}
                    </div>
                )}

                <div className="w-full h-64 md:h-80">
                    <iframe
                        src={streetViewUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title={title || "Street View"}
                    ></iframe>
                </div>
            </div>
        </Card>
    );
}
