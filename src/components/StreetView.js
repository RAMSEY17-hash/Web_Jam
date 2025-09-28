import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
export default function StreetView({ location, title, className = "", heading = 0, pitch = 0, fov = 90 }) {
    const { lat, lng } = location;
    // URL iframe pour Google Street View
    const streetViewUrl = `https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v0!6m8!1m7!1sCAoSLEFGMVFpcE4tUXVUa0hld05mS2lTTVhZRG5UVVdYbXk4MWxkY1hPeFJkVnB3!2m2!1d${lat}!2d${lng}!3f${heading}!4f${pitch}!5f${fov}`;
    return (_jsx(Card, { className: `overflow-hidden ${className}`, children: _jsxs("div", { className: "relative", children: [title && (_jsxs("div", { className: "absolute top-4 left-4 z-10 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2", children: [_jsx(MapPin, { className: "w-4 h-4" }), title] })), _jsx("div", { className: "w-full h-64 md:h-80", children: _jsx("iframe", { src: streetViewUrl, width: "100%", height: "100%", style: { border: 0 }, allowFullScreen: true, loading: "lazy", title: title || "Street View" }) })] }) }));
}
