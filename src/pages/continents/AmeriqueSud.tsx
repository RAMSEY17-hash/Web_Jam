import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ArrowLeft, MapPin, Camera, Users, Calendar } from "lucide-react";

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
    const [hoveredCountry, setHoveredCountry] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-3">
                        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <Globe className="h-8 w-8 text-primary animate-pulse" />
                            <h1 className="text-xl font-bold">Voyage & Découverte</h1>
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Retour
                            </Button>
                        </Link>
                        <Button size="sm">
                            <Calendar className="mr-2 h-4 w-4" />
                            Réserver
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1697729955700-6004e5402a74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW1lcmlxdWUlMjBkdSUyMHN1ZHxlbnwwfHwwfHx8MA%3D%3D0')"
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        🌎 Amérique du Sud
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Continent de passion et d'aventure, du Machu Picchu à Rio,
                        de l'Amazonie aux glaciers de Patagonie.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Badge variant="secondary" className="bg-green-500/20 text-green-100 border-green-400/30">
                            <MapPin className="w-4 h-4 mr-1" />
                            Amazonie
                        </Badge>
                        <Badge variant="secondary" className="bg-orange-500/20 text-orange-100 border-orange-400/30">
                            <Users className="w-4 h-4 mr-1" />
                            Culture Latino
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Pays */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Destinations phares</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Explorez la richesse culturelle de l'Amérique du Sud.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                        {southAmericaCountries.map((country, index) => (
                            <Card
                                key={country.name}
                                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                                onMouseEnter={() => setHoveredCountry(index)}
                                onMouseLeave={() => setHoveredCountry(null)}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={country.image}
                                        alt={country.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-xl font-bold text-white mb-1">{country.name}</h3>
                                        <p className="text-sm text-white/80">{country.description}</p>
                                    </div>

                                </div>

                                <CardContent className="p-4">
                                    <div className="space-y-3">
                                        <div className="flex flex-wrap gap-1">
                                            {country.highlights.map((highlight, idx) => (
                                                <Badge key={idx} variant="secondary" className="text-xs">
                                                    {highlight}
                                                </Badge>
                                            ))}
                                        </div>

                                        <Button
                                            className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                                            variant={hoveredCountry === index ? "default" : "outline"}
                                        >
                                            Explorer {country.name}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Amérique du Sud */}
            <section className="py-16 bg-red-50" style={{ backgroundColor: "mistyrose" }}>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-black">🌎 Amérique du Sud</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Découvrez l’Amérique du Sud, un continent de paysages impressionnants, de cultures vibrantes et de biodiversité exceptionnelle.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="w-8 h-8 text-red-600" />
                                    </div>
                                    <h3 className="font-bold mb-2">12 Pays Principaux</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Brésil, Argentine, Colombie et plus encore avec leurs cultures uniques
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Globe className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="font-bold mb-2">Diversité Naturelle</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Forêts tropicales, montagnes, pampas et plages exotiques
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Camera className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <h3 className="font-bold mb-2">Sites et Patrimoine</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Ruines anciennes, villes coloniales et trésors naturels
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action - Amérique du Sud */}
            <section className="py-16 bg-red-700 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Prêt pour l'aventure sud-américaine ?</h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Explorez l’Amazonie, les Andes et les villes colorées de l’Amérique du Sud.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary">
                            <Calendar className="mr-2 h-5 w-5" />
                            Planifier mon voyage
                        </Button>
                        <Button size="lg" variant="secondary" className="bg-white/10 text-white hover:bg-white hover:text-red-700">
                            <Camera className="mr-2 h-5 w-5" />
                            Découvrir la galerie
                        </Button>
                    </div>
                </div>
            </section>



            {/* Footer */}
            <footer className="bg-background border-t py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div className="flex items-center gap-2">
                            <Globe className="h-6 w-6 text-primary" />
                            <span className="font-bold">Voyage & Découverte</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Voyage & Découverte. Tous droits réservés.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}