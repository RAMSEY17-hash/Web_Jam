import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ArrowLeft, MapPin, Camera, Users, Calendar, Building } from "lucide-react";
const asianCountries = [
    {
        name: "Chine",
        slug: "chine",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        description: "Grande Muraille, Cité Interdite, modernité",
        highlights: ["Grande Muraille", "Pékin", "Shanghai"]
    },
    {
        name: "Japon",
        slug: "japon",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        description: "Tradition et technologie, temples et gratte-ciels",
        highlights: ["Mont Fuji", "Tokyo", "Kyoto"]
    },
    {
        name: "Inde",
        slug: "inde",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        description: "Taj Mahal, diversité culturelle, spiritualité",
        highlights: ["Taj Mahal", "Delhi", "Rajasthan"]
    },
    {
        name: "Émirats Arabes Unis",
        slug: "emirats",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        description: "Dubaï futuriste, Abu Dhabi, luxe moderne",
        highlights: ["Burj Khalifa", "Dubaï", "Abu Dhabi"]
    },
    {
        name: "Corée du Sud",
        slug: "coree-sud",
        image: "https://media.istockphoto.com/id/849740668/fr/photo/vue-a%C3%A9rienne-de-la-ville-de-s%C3%A9oul-cor%C3%A9e-du-sud-la-nuit.webp?a=1&b=1&s=612x612&w=0&k=20&c=S4eI6XYVPvnQUQeZCREoLa9K2kYz0SgUyD9T6J7hvMk=",
        description: "K-pop, technologie, palais traditionnels",
        highlights: ["Séoul", "Busan", "Jeju"]
    },
    {
        name: "Corée du Nord",
        slug: "coree-nord",
        image: "https://images.unsplash.com/photo-1604359896927-0610b7a3a2be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29yJUMzJUE5ZSUyMGR1JTIwbm9yZHxlbnwwfHwwfHx8MA%3D%3D",
        description: "Mystères de Pyongyang, voyage unique",
        highlights: ["Pyongyang", "DMZ", "Paektu"]
    }
];
export default function Asie() {
    const [hoveredCountry, setHoveredCountry] = useState(null);
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx("header", { className: "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: _jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4", children: [_jsx("div", { className: "flex items-center gap-3", children: _jsxs(Link, { to: "/", className: "flex items-center gap-3 hover:opacity-80 transition-opacity", children: [_jsx(Globe, { className: "h-8 w-8 text-primary animate-pulse" }), _jsx("h1", { className: "text-xl font-bold", children: "Voyage & D\u00E9couverte" })] }) }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Link, { to: "/", children: _jsxs(Button, { variant: "ghost", size: "sm", children: [_jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }), "Retour"] }) }), _jsxs(Button, { size: "sm", children: [_jsx(Calendar, { className: "mr-2 h-4 w-4" }), "R\u00E9server"] })] })] }) }), _jsxs("section", { className: "relative h-[60vh] flex items-center justify-center overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
                            backgroundImage: "url('https://images.unsplash.com/photo-1535139262971-c51845709a48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXNpZXxlbnwwfHwwfHx8MA%3D%3D')"
                        } }), _jsx("div", { className: "absolute inset-0 bg-black/50" }), _jsxs("div", { className: "relative z-10 text-center text-white max-w-4xl mx-auto px-4", children: [_jsx("h1", { className: "text-4xl md:text-6xl font-extrabold mb-6", children: "\uD83C\uDF0F D\u00E9couvrez l'Asie" }), _jsx("p", { className: "text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto", children: "Un continent de contrastes saisissants o\u00F9 traditions mill\u00E9naires et modernit\u00E9 futuriste se c\u00F4toient harmonieusement." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsxs(Badge, { variant: "secondary", className: "bg-red-500/20 text-red-100 border-red-400/30", children: [_jsx(Building, { className: "w-4 h-4 mr-1" }), "Modernit\u00E9"] }), _jsxs(Badge, { variant: "secondary", className: "bg-yellow-500/20 text-yellow-100 border-yellow-400/30", children: [_jsx(MapPin, { className: "w-4 h-4 mr-1" }), "48 Pays"] }), _jsxs(Badge, { variant: "secondary", className: "bg-purple-500/20 text-purple-100 border-purple-400/30", children: [_jsx(Users, { className: "w-4 h-4 mr-1" }), "Traditions"] })] })] })] }), _jsx("section", { className: "py-12 bg-muted/30", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsx("h2", { className: "text-2xl font-bold mb-6", children: "Pourquoi choisir l'Asie ?" }), _jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "L'Asie fascine par ses paradoxes : des temples bouddhistes mill\u00E9naires aux gratte-ciels futuristes, des march\u00E9s traditionnels aux technologies de pointe. Chaque pays r\u00E9v\u00E8le une facette unique de ce continent immense, o\u00F9 spiritualit\u00E9, innovation et traditions ancestrales cr\u00E9ent une mosa\u00EFque culturelle extraordinaire." })] }) }) }), _jsx("section", { className: "py-16", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Destinations phares" }), _jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Explorez les merveilles asiatiques entre tradition et modernit\u00E9." })] }), _jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: asianCountries.map((country, index) => (_jsxs(Card, { className: "group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer", onMouseEnter: () => setHoveredCountry(index), onMouseLeave: () => setHoveredCountry(null), children: [_jsxs("div", { className: "relative h-48 overflow-hidden", children: [_jsx("img", { src: country.image, alt: country.name, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" }), _jsxs("div", { className: "absolute bottom-4 left-4 right-4", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-1", children: country.name }), _jsx("p", { className: "text-sm text-white/80", children: country.description })] })] }), _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "space-y-3", children: [_jsx("div", { className: "flex flex-wrap gap-1", children: country.highlights.map((highlight, idx) => (_jsx(Badge, { variant: "secondary", className: "text-xs", children: highlight }, idx))) }), _jsx(Button, { className: "w-full group-hover:bg-primary group-hover:text-white transition-colors", variant: hoveredCountry === index ? "default" : "outline", children: _jsxs(Link, { to: "#", className: "flex items-center justify-center w-full", children: ["Explorer ", country.name] }) })] }) })] }, country.name))) })] }) }), _jsx("section", { className: "py-16 bg-gradient-to-r from-red-50 to-yellow-50", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-6", style: { backgroundColor: "black" }, children: "\uD83C\uDF38 La Diversit\u00E9 Asiatique" }), _jsx("p", { className: "text-lg text-muted-foreground mb-8", children: "Un continent o\u00F9 coexistent 4,6 milliards d'habitants, des centaines de langues et des mill\u00E9naires d'histoire et d'innovations." }), _jsxs("div", { className: "grid md:grid-cols-4 gap-6", children: [_jsx(Card, { children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx("div", { className: "text-3xl mb-2", children: "\uD83C\uDFEF" }), _jsx("h3", { className: "font-bold mb-2", children: "Temples & Palais" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Architecture sacr\u00E9e mill\u00E9naire" })] }) }), _jsx(Card, { children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx("div", { className: "text-3xl mb-2", children: "\uD83C\uDFD9\uFE0F" }), _jsx("h3", { className: "font-bold mb-2", children: "M\u00E9galopoles" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Villes futuristes et dynamiques" })] }) }), _jsx(Card, { children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx("div", { className: "text-3xl mb-2", children: "\uD83C\uDF5C" }), _jsx("h3", { className: "font-bold mb-2", children: "Gastronomie" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Saveurs authentiques vari\u00E9es" })] }) }), _jsx(Card, { children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx("div", { className: "text-3xl mb-2", children: "\uD83E\uDDD8" }), _jsx("h3", { className: "font-bold mb-2", children: "Spiritualit\u00E9" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Philosophies et m\u00E9ditations" })] }) })] })] }) }) }), _jsx("section", { className: "py-16 bg-primary text-white", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Pr\u00EAt pour l'aventure asiatique ?" }), _jsx("p", { className: "text-xl mb-8 text-white/90 max-w-2xl mx-auto", children: "Des temples de Kyoto aux gratte-ciels de Singapour, l'Asie vous r\u00E9serve mille surprises." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { size: "lg", variant: "secondary", children: [_jsx(Calendar, { className: "mr-2 h-5 w-5" }), "Planifier mon voyage"] }), _jsxs(Button, { size: "lg", variant: "secondary", className: "bg-white/10 text-white hover:bg-white hover:text-primary", children: [_jsx(Camera, { className: "mr-2 h-5 w-5" }), "D\u00E9couvrir la galerie"] })] })] }) }), _jsx("footer", { className: "bg-background border-t py-8", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex flex-col items-center justify-between gap-4 md:flex-row", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Globe, { className: "h-6 w-6 text-primary" }), _jsx("span", { className: "font-bold", children: "Voyage & D\u00E9couverte" })] }), _jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u00A9 ", new Date().getFullYear(), " Voyage & D\u00E9couverte. Tous droits r\u00E9serv\u00E9s."] })] }) }) })] }));
}
