import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ArrowLeft, MapPin, Users, Calendar } from "lucide-react";
const southAmericaCountries = [
    {
        name: "Colombie",
        slug: "colombie",
        image: "https://plus.unsplash.com/premium_photo-1697730030651-3a7aa391b9d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sb21iaWV8ZW58MHx8MHx8fDA%3D",
        description: "Carthagène, Bogotá, café et salsa",
        highlights: ["Carthagène", "Medellín", "Café"]
    },
    {
        name: "Argentine",
        slug: "argentine",
        image: "https://plus.unsplash.com/premium_photo-1697729901052-fe8900e24993?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJnZW50aW5lfGVufDB8fDB8fHww",
        description: "Buenos Aires, Patagonie, tango",
        highlights: ["Buenos Aires", "Patagonie", "Tango"]
    },
    {
        name: "Panama",
        slug: "panama",
        image: "https://images.unsplash.com/photo-1524544187526-2b2855b65f16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFuYW1hfGVufDB8fDB8fHww",
        description: "Canal de Panama, plages paradisiaques",
        highlights: ["Canal Panama", "San Blas", "Casco Viejo"]
    },
    {
        name: "Pérou",
        slug: "perou",
        image: "https://images.unsplash.com/photo-1415804941191-bc0c3bbac10d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcm91fGVufDB8fDB8fHww",
        description: "Machu Picchu, Lima, Andes",
        highlights: ["Machu Picchu", "Cusco", "Lima"]
    }
];
export default function AmeriqueSud() {
    const [hoveredCountry, setHoveredCountry] = useState(null);
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx("header", { className: "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: _jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4", children: [_jsx("div", { className: "flex items-center gap-3", children: _jsxs(Link, { to: "/", className: "flex items-center gap-3 hover:opacity-80 transition-opacity", children: [_jsx(Globe, { className: "h-8 w-8 text-primary animate-pulse" }), _jsx("h1", { className: "text-xl font-bold", children: "Voyage & D\u00E9couverte" })] }) }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Link, { to: "/", children: _jsxs(Button, { variant: "ghost", size: "sm", children: [_jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }), "Retour"] }) }), _jsxs(Button, { size: "sm", children: [_jsx(Calendar, { className: "mr-2 h-4 w-4" }), "R\u00E9server"] })] })] }) }), _jsxs("section", { className: "relative h-[60vh] flex items-center justify-center overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
                            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1697729955700-6004e5402a74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW1lcmlxdWUlMjBkdSUyMHN1ZHxlbnwwfHwwfHx8MA%3D%3D0')"
                        } }), _jsx("div", { className: "absolute inset-0 bg-black/50" }), _jsxs("div", { className: "relative z-10 text-center text-white max-w-4xl mx-auto px-4", children: [_jsx("h1", { className: "text-4xl md:text-6xl font-extrabold mb-6", children: "\uD83C\uDF0E Am\u00E9rique du Sud" }), _jsx("p", { className: "text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto", children: "Continent de passion et d'aventure, du Machu Picchu \u00E0 Rio, de l'Amazonie aux glaciers de Patagonie." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsxs(Badge, { variant: "secondary", className: "bg-green-500/20 text-green-100 border-green-400/30", children: [_jsx(MapPin, { className: "w-4 h-4 mr-1" }), "Amazonie"] }), _jsxs(Badge, { variant: "secondary", className: "bg-orange-500/20 text-orange-100 border-orange-400/30", children: [_jsx(Users, { className: "w-4 h-4 mr-1" }), "Culture Latino"] })] })] })] }), _jsx("section", { className: "py-16", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Destinations phares" }), _jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Explorez la richesse culturelle de l'Am\u00E9rique du Sud." })] }), _jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-2", children: southAmericaCountries.map((country, index) => (_jsxs(Card, { className: "group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer", onMouseEnter: () => setHoveredCountry(index), onMouseLeave: () => setHoveredCountry(null), children: [_jsxs("div", { className: "relative h-48 overflow-hidden", children: [_jsx("img", { src: country.image, alt: country.name, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" }), _jsxs("div", { className: "absolute bottom-4 left-4 right-4", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-1", children: country.name }), _jsx("p", { className: "text-sm text-white/80", children: country.description })] })] }), _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "space-y-3", children: [_jsx("div", { className: "flex flex-wrap gap-1", children: country.highlights.map((highlight, idx) => (_jsx(Badge, { variant: "secondary", className: "text-xs", children: highlight }, idx))) }), _jsxs(Button, { className: "w-full group-hover:bg-primary group-hover:text-white transition-colors", variant: hoveredCountry === index ? "default" : "outline", children: ["Explorer ", country.name] })] }) })] }, country.name))) })] }) }), _jsx("footer", { className: "bg-background border-t py-8", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex flex-col items-center justify-between gap-4 md:flex-row", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Globe, { className: "h-6 w-6 text-primary" }), _jsx("span", { className: "font-bold", children: "Voyage & D\u00E9couverte" })] }), _jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u00A9 ", new Date().getFullYear(), " Voyage & D\u00E9couverte. Tous droits r\u00E9serv\u00E9s."] })] }) }) })] }));
}
