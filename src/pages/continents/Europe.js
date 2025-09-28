import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ArrowLeft, MapPin, Camera, Users, Calendar } from "lucide-react";
const europeanCountries = [
    {
        name: "France",
        slug: "france",
        image: "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJhbmNlfGVufDB8fDB8fHww",
        description: "Paris, châteaux de la Loire, Côte d'Azur",
        highlights: ["Tour Eiffel", "Louvre", "Versailles"]
    },
    {
        name: "Italie",
        slug: "italie",
        image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        description: "Rome antique, Venise romantique, Toscane",
        highlights: ["Colisée", "Vatican", "Venise"]
    },
    {
        name: "Espagne",
        slug: "espagne",
        image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        description: "Barcelone, Madrid, Andalousie",
        highlights: ["Sagrada Familia", "Alhambra", "Prado"]
    },
    {
        name: "Royaume-Uni",
        slug: "royaume-uni",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        description: "Londres, Écosse, pays de Galles",
        highlights: ["Big Ben", "Buckingham", "Édimbourg"]
    },
    {
        name: "Allemagne",
        slug: "allemagne",
        image: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWxsZW1hZ25lfGVufDB8fDB8fHww",
        description: "Berlin, Bavière, châteaux romantiques",
        highlights: ["Neuschwanstein", "Berlin", "Munich"]
    },
    {
        name: "Russie",
        slug: "russie",
        image: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cnVzc2llfGVufDB8fDB8fHww",
        description: "Moscou, Saint-Pétersbourg, Trans-Sibérien",
        highlights: ["Kremlin", "Hermitage", "Place Rouge"]
    }
];
export default function Europe() {
    const [hoveredCountry, setHoveredCountry] = useState(null);
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx("header", { className: "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: _jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4", children: [_jsx("div", { className: "flex items-center gap-3", children: _jsxs(Link, { to: "/", className: "flex items-center gap-3 hover:opacity-80 transition-opacity", children: [_jsx(Globe, { className: "h-8 w-8 text-primary animate-pulse" }), _jsx("h1", { className: "text-xl font-bold", children: "Voyage & D\u00E9couverte" })] }) }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Link, { to: "/", children: _jsxs(Button, { variant: "ghost", size: "sm", children: [_jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }), "Retour"] }) }), _jsxs(Button, { size: "sm", children: [_jsx(Calendar, { className: "mr-2 h-4 w-4" }), "R\u00E9server"] })] })] }) }), _jsxs("section", { className: "relative h-[60vh] flex items-center justify-center overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
                            backgroundImage: "url('https://images.unsplash.com/photo-1473951574080-01fe45ec8643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RXVyb3BlfGVufDB8fDB8fHww')"
                        } }), _jsx("div", { className: "absolute inset-0 bg-black/50" }), _jsxs("div", { className: "relative z-10 text-center text-white max-w-4xl mx-auto px-4", children: [_jsx("h1", { className: "text-4xl md:text-6xl font-extrabold mb-6", children: "D\u00E9couvrez l'Europe" }), _jsx("p", { className: "text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto", children: "Un continent riche en histoire, art et culture. Des ch\u00E2teaux romantiques aux capitales cosmopolites, explorez la diversit\u00E9 europ\u00E9enne." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsxs(Badge, { variant: "secondary", className: "bg-blue-500/20 text-blue-100 border-blue-400/30", children: [_jsx(Camera, { className: "w-4 h-4 mr-1" }), "Art & Culture"] }), _jsxs(Badge, { variant: "secondary", className: "bg-green-500/20 text-green-100 border-green-400/30", children: [_jsx(MapPin, { className: "w-4 h-4 mr-1" }), "44 Pays"] }), _jsxs(Badge, { variant: "secondary", className: "bg-purple-500/20 text-purple-100 border-purple-400/30", children: [_jsx(Users, { className: "w-4 h-4 mr-1" }), "Histoire Mill\u00E9naire"] })] })] })] }), _jsx("section", { className: "py-12 bg-muted/30", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsx("h2", { className: "text-2xl font-bold mb-6", children: "Pourquoi choisir l'Europe ?" }), _jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "L'Europe offre une diversit\u00E9 culturelle exceptionnelle dans un espace relativement restreint. Chaque pays r\u00E9v\u00E8le son patrimoine unique : des mus\u00E9es du Louvre aux canaux de Venise, des fjords norv\u00E9giens aux plages grecques. L'art, l'histoire et la gastronomie se m\u00EAlent pour cr\u00E9er des exp\u00E9riences de voyage inoubliables." })] }) }) }), _jsx("section", { className: "py-16", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Destinations phares" }), _jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Explorez les plus belles destinations europ\u00E9ennes avec nos circuits culturels et historiques." })] }), _jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: europeanCountries.map((country, index) => (_jsxs(Card, { className: "group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer", onMouseEnter: () => setHoveredCountry(index), onMouseLeave: () => setHoveredCountry(null), children: [_jsxs("div", { className: "relative h-48 overflow-hidden", children: [_jsx("img", { src: country.image, alt: country.name, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" }), _jsxs("div", { className: "absolute bottom-4 left-4 right-4", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-1", children: country.name }), _jsx("p", { className: "text-sm text-white/80", children: country.description })] })] }), _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "space-y-3", children: [_jsx("div", { className: "flex flex-wrap gap-1", children: country.highlights.map((highlight, idx) => (_jsx(Badge, { variant: "secondary", className: "text-xs", children: highlight }, idx))) }), _jsx(Button, { className: "w-full group-hover:bg-primary group-hover:text-white transition-colors", variant: hoveredCountry === index ? "default" : "outline", children: _jsxs(Link, { to: "#", className: "flex items-center justify-center w-full", children: ["Explorer ", country.name] }) })] }) })] }, country.name))) })] }) }), _jsx("section", { className: "py-16 bg-blue-50", style: { backgroundColor: "gray" }, children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-6", children: "L'Union Europ\u00E9enne" }), _jsx("p", { className: "text-lg text-muted-foreground mb-8", children: "D\u00E9couvrez l'unit\u00E9 dans la diversit\u00E9 : 27 pays unis par des valeurs communes tout en pr\u00E9servant leur identit\u00E9 culturelle unique." }), _jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [_jsx(Card, { children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Users, { className: "w-8 h-8 text-blue-600" }) }), _jsx("h3", { className: "font-bold mb-2", children: "27 Pays Membres" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Une mosa\u00EFque de cultures, langues et traditions" })] }) }), _jsx(Card, { children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx("div", { className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Globe, { className: "w-8 h-8 text-green-600" }) }), _jsx("h3", { className: "font-bold mb-2", children: "Libre Circulation" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Voyagez librement avec un seul document" })] }) }), _jsx(Card, { children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx("div", { className: "w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Camera, { className: "w-8 h-8 text-purple-600" }) }), _jsx("h3", { className: "font-bold mb-2", children: "Patrimoine UNESCO" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Plus de 500 sites class\u00E9s au patrimoine mondial" })] }) })] })] }) }) }), _jsx("section", { className: "py-16 bg-primary text-white", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Pr\u00EAt pour l'aventure europ\u00E9enne ?" }), _jsx("p", { className: "text-xl mb-8 text-white/90 max-w-2xl mx-auto", children: "De l'art renaissance italien aux fjords norv\u00E9giens, l'Europe vous attend." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { size: "lg", variant: "secondary", children: [_jsx(Calendar, { className: "mr-2 h-5 w-5" }), "Planifier mon voyage"] }), _jsxs(Button, { size: "lg", variant: "secondary", className: "bg-white/10 text-white hover:bg-white hover:text-primary", children: [_jsx(Camera, { className: "mr-2 h-5 w-5" }), "Voir la galerie"] })] })] }) }), _jsx("footer", { className: "bg-background border-t py-8", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex flex-col items-center justify-between gap-4 md:flex-row", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Globe, { className: "h-6 w-6 text-primary" }), _jsx("span", { className: "font-bold", children: "Voyage & D\u00E9couverte" })] }), _jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u00A9 ", new Date().getFullYear(), " Voyage & D\u00E9couverte. Tous droits r\u00E9serv\u00E9s."] })] }) }) })] }));
}
