import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ArrowLeft, MapPin, Camera, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
const africanCountries = [
    {
        name: "Égypte",
        slug: "egypte",
        image: "https://plus.unsplash.com/premium_photo-1664303467567-17891a27998a?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Pyramides de Gizeh, croisière sur le Nil",
        highlights: ["Pyramides", "Le Caire", "Luxor"]
    },
    {
        name: "Maroc",
        slug: "maroc",
        image: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Marrakech, désert du Sahara, Atlas",
        highlights: ["Marrakech", "Sahara", "Fès"]
    },
    {
        name: "Algérie",
        slug: "algerie",
        image: "https://plus.unsplash.com/premium_photo-1697730020118-46dffe1c5b8c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Sahara, Kabylie, patrimoine berbère",
        highlights: ["Alger", "Sahara", "Tassili"]
    },
    {
        name: "Kenya",
        slug: "kenya",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        description: "Safari dans le Masai Mara, observation des Big Five",
        highlights: ["Safari", "Masai Mara", "Kilimandjaro"]
    },
    {
        name: "Afrique du Sud",
        slug: "afrique-sud",
        image: "https://images.unsplash.com/photo-1526749837599-b4eba9fd855e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Cape Town, route des jardins, safaris",
        highlights: ["Cape Town", "Kruger", "Route des jardins"]
    }
];
export default function Afrique() {
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx("header", { className: "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: _jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4", children: [_jsx("div", { className: "flex items-center gap-3", children: _jsxs(Link, { to: "/", className: "flex items-center gap-3 hover:opacity-80 transition-opacity", children: [_jsx(Globe, { className: "h-8 w-8 text-primary animate-pulse" }), _jsx("h1", { className: "text-xl font-bold", children: "Voyage & D\u00E9couverte" })] }) }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Link, { to: "/", children: _jsxs(Button, { variant: "ghost", size: "sm", children: [_jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }), "Retour"] }) }), _jsxs(Button, { size: "sm", children: [_jsx(Calendar, { className: "mr-2 h-4 w-4" }), "R\u00E9server"] })] })] }) }), _jsxs("section", { className: "relative h-[60vh] flex items-center justify-center overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
                            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661936361131-c421746dcd0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWZyaXF1ZXxlbnwwfHwwfHx8MA%3D%3D')"
                        } }), _jsx("div", { className: "absolute inset-0 bg-black/50" }), _jsxs("div", { className: "relative z-10 text-center text-white max-w-4xl mx-auto px-4", children: [_jsx("h1", { className: "text-4xl md:text-6xl font-extrabold mb-6", children: "D\u00E9couvrez l'Afrique" }), _jsx("p", { className: "text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto", children: "Un continent aux mille visages : safaris inoubliables, d\u00E9serts mystiques, cultures authentiques et une faune exceptionnelle vous attendent." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsxs(Badge, { variant: "secondary", className: "bg-orange-500/20 text-orange-100 border-orange-400/30", children: [_jsx(Camera, { className: "w-4 h-4 mr-1" }), "Safari"] }), _jsxs(Badge, { variant: "secondary", className: "bg-yellow-500/20 text-yellow-100 border-yellow-400/30", children: [_jsx(MapPin, { className: "w-4 h-4 mr-1" }), "54 Pays"] }), _jsxs(Badge, { variant: "secondary", className: "bg-green-500/20 text-green-100 border-green-400/30", children: [_jsx(Users, { className: "w-4 h-4 mr-1" }), "Cultures Riches"] })] })] })] }), _jsx("section", { className: "py-12 bg-muted/30", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsx("h2", { className: "text-2xl font-bold mb-6", children: "Pourquoi choisir l'Afrique ?" }), _jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "L'Afrique offre des exp\u00E9riences de voyage uniques au monde. Des safaris extraordinaires dans la savane kenyan aux myst\u00E8res des pyramides \u00E9gyptiennes, en passant par les souks color\u00E9s du Maroc et les plages paradisiaques de Zanzibar. Chaque pays r\u00E9v\u00E8le ses propres tr\u00E9sors, sa culture unique et son hospitalit\u00E9 l\u00E9gendaire." })] }) }) }), _jsx("section", { className: "py-16", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Destinations phares" }), _jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Explorez les destinations les plus fascinantes d'Afrique avec nos circuits sur-mesure." })] }), _jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: africanCountries.map((country, index) => (_jsxs(Card, { className: "group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer", children: [_jsxs("div", { className: "relative h-48 overflow-hidden", children: [_jsx("img", { src: country.image, alt: country.name, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" }), _jsxs("div", { className: "absolute bottom-4 left-4 right-4", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-1", children: country.name }), _jsx("p", { className: "text-sm text-white/80", children: country.description })] })] }), _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "space-y-3", children: [_jsx("div", { className: "flex flex-wrap gap-1", children: country.highlights.map((highlight, idx) => (_jsx(Badge, { variant: "secondary", className: "text-xs", children: highlight }, idx))) }), _jsx(Button, { className: "w-full", children: _jsxs(Link, { to: `/pays/afrique/${country.slug}`, className: "flex items-center justify-center w-full", children: ["Explorer ", country.name] }) })] }) })] }, country.name))) })] }) }), _jsx("section", { className: "py-16 bg-primary text-white", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Pr\u00EAt pour l'aventure africaine ?" }), _jsx("p", { className: "text-xl mb-8 text-white/90 max-w-2xl mx-auto", children: "Nos experts vous accompagnent pour cr\u00E9er le voyage de vos r\u00EAves en Afrique." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { size: "lg", variant: "secondary", children: [_jsx(Calendar, { className: "mr-2 h-5 w-5" }), "R\u00E9server maintenant"] }), _jsxs(Button, { size: "lg", variant: "secondary", className: "bg-white/10 text-white hover:bg-white hover:text-primary", children: [_jsx(Camera, { className: "mr-2 h-5 w-5" }), "Voir la galerie"] })] })] }) }), _jsx("footer", { className: "bg-background border-t py-8", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex flex-col items-center justify-between gap-4 md:flex-row", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Globe, { className: "h-6 w-6 text-primary" }), _jsx("span", { className: "font-bold", children: "Voyage & D\u00E9couverte" })] }), _jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u00A9 ", new Date().getFullYear(), " Voyage & D\u00E9couverte. Tous droits r\u00E9serv\u00E9s."] })] }) }) })] }));
}
