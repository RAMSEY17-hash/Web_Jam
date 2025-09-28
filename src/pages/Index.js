import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, MapPin, Star, Calendar, Users, ArrowRight } from "lucide-react";
const continents = [
    {
        name: "Afrique",
        slug: "afrique",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        description: "Safaris, déserts et cultures authentiques",
        countries: 54,
        highlights: ["Safari au Kenya", "Pyramides d'Égypte", "Victoria Falls"]
    },
    {
        name: "Amérique du Nord",
        slug: "amerique-nord",
        image: "https://media.istockphoto.com/id/1136437406/fr/photo/horizon-de-san-francisco-avec-le-pont-doakland-bay-au-coucher-du-soleil-californie-usa.webp?a=1&b=1&s=612x612&w=0&k=20&c=SZL6F-GCNp2z7ktbsAHLNaGa2SkEjAS4lTsxLsT7u-Y=",
        description: "Gratte-ciels, parcs nationaux et diversité",
        countries: 23,
        highlights: ["Grand Canyon", "Times Square", "Chutes du Niagara"]
    },
    {
        name: "Amérique du Sud",
        slug: "amerique-sud",
        image: "https://images.unsplash.com/photo-1619546952812-520e98064a52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1lcmlxdWUlMjBkdSUyMHN1ZHxlbnwwfHwwfHx8MA%3D%3D",
        description: "Machu Picchu, Amazonie et passion latino",
        countries: 12,
        highlights: ["Machu Picchu", "Rio de Janeiro", "Patagonie"]
    },
    {
        name: "Europe",
        slug: "europe",
        image: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXVyb3BlfGVufDB8fDB8fHww",
        description: "Histoire, art et architecture légendaire",
        countries: 44,
        highlights: ["Tour Eiffel", "Colisée", "Santorin"]
    },
    {
        name: "Asie",
        slug: "asie",
        image: "https://plus.unsplash.com/premium_photo-1661878434394-7f7e3d032b2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXNpZXxlbnwwfHwwfHx8MA%3D%3D",
        description: "Temples anciens et modernité futuriste",
        countries: 48,
        highlights: ["Grande Muraille", "Mont Fuji", "Taj Mahal"]
    },
    {
        name: "Océanie",
        slug: "oceanie",
        image: "https://media.istockphoto.com/id/1172291314/fr/photo/bora-bora-image-drone-a%C3%A9rien-de-voyage-paradis-de-vacances-et-bungalows-sur-leau.webp?a=1&b=1&s=612x612&w=0&k=20&c=PvgB_CBC028gE__2-KApYXxYrm6nsi2NdD9IRetmiSI=",
        description: "Îles paradisiaques et aventures uniques",
        countries: 14,
        highlights: ["Grande Barrière", "Opéra de Sydney", "Milford Sound"]
    }
];
const promoOffers = [
    "🌴 Safari en Afrique - 20% de réduction !",
    "🏔️ Trek au Népal - Offre spéciale !",
    "🏖️ Îles Maldives - Séjour de rêve !",
    "🎋 Japon au printemps - Cerisiers en fleurs !"
];
export default function Index() {
    const [currentPromo, setCurrentPromo] = useState(0);
    const [hoveredContinent, setHoveredContinent] = useState(null);
    // Rotation automatique des promos
    useState(() => {
        const interval = setInterval(() => {
            setCurrentPromo((prev) => (prev + 1) % promoOffers.length);
        }, 3000);
        return () => clearInterval(interval);
    });
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx("header", { className: "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: _jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("img", { src: "logo.png", alt: "Voyage & D\u00E9couverte", className: "h-16 w-20 animate-pulse" }), _jsx("h1", { className: "text-xl font-bold", children: "Voyage & D\u00E9couverte" })] }), _jsxs("nav", { className: "hidden md:flex items-center gap-6", children: [_jsx("a", { href: "#continents", children: _jsx(Button, { variant: "ghost", size: "sm", children: "Destination" }) }), _jsx(Button, { variant: "ghost", size: "sm", children: "Blog" }), _jsxs(Button, { size: "sm", children: [_jsx(Calendar, { className: "mr-2 h-4 w-4" }), "R\u00E9server"] })] })] }) }), _jsxs("section", { className: "relative h-[70vh] flex items-center justify-center overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-cover bg-center bg-fixed", style: {
                            backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')"
                        } }), _jsx("div", { className: "absolute inset-0 bg-black/50" }), _jsxs("div", { className: "relative z-10 text-center text-white max-w-4xl mx-auto px-4", children: [_jsx("h1", { className: "text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in", children: "Explorez le monde, une destination \u00E0 la fois" }), _jsx("p", { className: "text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto", children: "D\u00E9couvrez des lieux uniques et vivez des aventures inoubliables. Votre prochaine destination vous attend." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsxs(Button, { size: "lg", className: "bg-primary hover:bg-primary/90 text-white", children: [_jsx(MapPin, { className: "mr-2 h-5 w-5" }), "Commencer l'exploration"] }), _jsxs(Button, { size: "lg", variant: "secondary", className: "bg-white/10 border-white/30 text-white hover:bg-white/20", children: [_jsx(Star, { className: "mr-2 h-5 w-5" }), "Voir les avis"] })] })] })] }), _jsx("section", { className: "py-8 bg-primary/10", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "D\u00E9couvrez nos offres exclusives de voyage !" }), _jsx("p", { className: "text-muted-foreground mb-6", children: "R\u00E9servez maintenant et b\u00E9n\u00E9ficiez de r\u00E9ductions incroyables sur vos prochaines aventures." }), _jsx("div", { className: "relative", children: _jsx(Badge, { variant: "default", className: "bg-primary text-white p-4 text-lg font-semibold animate-bounce", children: promoOffers[currentPromo] }) })] }) }), _jsx("section", { id: "continents", className: "py-16 bg-muted/50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Choisissez votre continent" }), _jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Explorez les merveilles de chaque continent avec nos guides experts et d\u00E9couvrez des exp\u00E9riences authentiques." })] }), _jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: continents.map((continent, index) => (_jsxs(Card, { className: "group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer", onMouseEnter: () => setHoveredContinent(index), onMouseLeave: () => setHoveredContinent(null), children: [_jsxs("div", { className: "relative h-64 overflow-hidden", children: [_jsx("img", { src: continent.image, alt: continent.name, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" }), _jsxs("div", { className: "absolute bottom-4 left-4 right-4", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-1", children: continent.name }), _jsx("p", { className: "text-sm text-white/80", children: continent.description })] }), _jsxs(Badge, { className: "absolute top-4 right-4 bg-white/90 text-black", children: [_jsx(Users, { className: "w-3 h-3 mr-1" }), continent.countries, " pays"] })] }), _jsxs(CardContent, { className: "p-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-semibold text-sm text-muted-foreground", children: "Incontournables :" }), _jsx("div", { className: "flex flex-wrap gap-1", children: continent.highlights.map((highlight, idx) => (_jsx(Badge, { variant: "secondary", className: "text-xs", children: highlight }, idx))) })] }), _jsx(Button, { className: "w-full mt-4 group-hover:bg-primary group-hover:text-white transition-colors", variant: hoveredContinent === index ? "default" : "outline", asChild: true, children: _jsxs(Link, { to: `/continent/${continent.slug}`, children: ["Explorer ", continent.name, _jsx(ArrowRight, { className: "ml-2 h-4 w-4" })] }) })] })] }, continent.name))) })] }) }), _jsx("section", { className: "py-16 bg-primary text-white", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: [_jsxs("div", { children: [_jsx("div", { className: "text-3xl font-bold mb-2", children: "05" }), _jsx("div", { className: "text-white/80", children: "Continents" })] }), _jsxs("div", { children: [_jsx("div", { className: "text-3xl font-bold mb-2", children: "150+" }), _jsx("div", { className: "text-white/80", children: "Destinations" })] }), _jsxs("div", { children: [_jsx("div", { className: "text-3xl font-bold mb-2", children: "50k+" }), _jsx("div", { className: "text-white/80", children: "Voyageurs heureux" })] }), _jsxs("div", { children: [_jsx("div", { className: "text-3xl font-bold mb-2", children: "4.9" }), _jsx("div", { className: "text-white/80", children: "Note moyenne" })] })] }) }) }), _jsx("footer", { className: "bg-background border-t py-12", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "grid md:grid-cols-4 gap-8", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2 mb-4", children: [_jsx(Globe, { className: "h-6 w-6 text-primary" }), _jsx("h3", { className: "font-bold", children: "Voyage & D\u00E9couverte" })] }), _jsxs("p", { className: "text-sm text-muted-foreground", children: [_jsx("em", { children: _jsx("strong", { children: "WAHMS" }) }), ", Votre partenaire de confiance pour des voyages inoubliables \u00E0 travers un monde sans fronti\u00E8res."] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-4", children: "Destinations" }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsx("a", { href: "#", className: "block text-muted-foreground hover:text-primary transition-colors", children: "Europe" }), _jsx("a", { href: "#", className: "block text-muted-foreground hover:text-primary transition-colors", children: "Asie" }), _jsx("a", { href: "#", className: "block text-muted-foreground hover:text-primary transition-colors", children: "Afrique" }), _jsx("a", { href: "#", className: "block text-muted-foreground hover:text-primary transition-colors", children: "Am\u00E9riques" })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-4", children: "Services" }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsx("a", { href: "#", className: "block text-muted-foreground hover:text-primary transition-colors", children: "Voyages organis\u00E9s" }), _jsx("a", { href: "#", className: "block text-muted-foreground hover:text-primary transition-colors", children: "Sur-mesure" }), _jsx("a", { href: "#", className: "block text-muted-foreground hover:text-primary transition-colors", children: "Guides locaux" }), _jsx("a", { href: "#", className: "block text-muted-foreground hover:text-primary transition-colors", children: "Assurance voyage" })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-4", children: "Support" }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsx("a", { href: "#", className: "block text-muted-foreground hover:text-primary transition-colors", children: "Contact" }), _jsx("a", { href: "#", className: "block text-muted-foreground hover:text-primary transition-colors", children: "FAQ" }), _jsx("a", { href: "#", className: "block text-muted-foreground hover:text-primary transition-colors", children: "Conditions" }), _jsx("a", { href: "#", className: "block text-muted-foreground hover:text-primary transition-colors", children: "Confidentialit\u00E9" })] })] })] }), _jsx("div", { className: "border-t mt-8 pt-8 text-center text-sm text-muted-foreground", children: _jsxs("p", { children: ["\u00A9 ", new Date().getFullYear(), " Voyage & D\u00E9couverte. Tous droits r\u00E9serv\u00E9s."] }) })] }) })] }));
}
