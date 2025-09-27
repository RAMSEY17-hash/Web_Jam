import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ArrowLeft, MapPin, Camera, Users, Calendar, Waves } from "lucide-react";

const oceaniaCountries = [
    {
        name: "Australie",
        slug: "australie",
        image: "https://plus.unsplash.com/premium_photo-1697730221799-f2aa87ab2c5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXVzdHJhbGllfGVufDB8fDB8fHww",
        description: "Sydney, Melbourne, Grande Barrière de Corail",
        highlights: ["Opéra Sydney", "Uluru", "Grande Barrière"]
    },
    {
        name: "Nouvelle-Zélande",
        slug: "nouvelle-zelande",
        image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bm91dmVsbGUlMjB6ZWxhbmRlfGVufDB8fDB8fHww",
        description: "Auckland, Queenstown, fjords spectaculaires",
        highlights: ["Milford Sound", "Queenstown", "Hobbiton"]
    }
];

export default function Oceanie() {
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
                        backgroundImage: "url('https://media.istockphoto.com/id/175543166/fr/photo/arriv%C3%A9e-au-paradis.webp?a=1&b=1&s=612x612&w=0&k=20&c=oK-nEttLQgbxP40vHjxKroqvpdfthN-YhYiwyNbzLn0=')"
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        🌊 Océanie
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Îles paradisiaques et aventures uniques au bout du monde.
                        Découvrez l'Australie sauvage et la Nouvelle-Zélande majestueuse.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-100 border-blue-400/30">
                            <Waves className="w-4 h-4 mr-1" />
                            Océan Pacifique
                        </Badge>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-100 border-green-400/30">
                            <MapPin className="w-4 h-4 mr-1" />
                            Nature Unique
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
                            Explorez les merveilles de l'Océanie.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                        {oceaniaCountries.map((country, index) => (
                            <Card
                                key={country.name}
                                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                                onMouseEnter={() => setHoveredCountry(index)}
                                onMouseLeave={() => setHoveredCountry(null)}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={country.image}
                                        alt={country.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-2xl font-bold text-white mb-1">{country.name}</h3>
                                        <p className="text-sm text-white/80">{country.description}</p>
                                    </div>

                                </div>

                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            {country.highlights.map((highlight, idx) => (
                                                <Badge key={idx} variant="secondary" className="text-sm">
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

            {/* Section spéciale Océanie */}
            <section className="py-16 bg-blue-50" >
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">🏝️ L'Océanie Unique</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Un continent insulaire aux paysages à couper le souffle et à la faune endémique exceptionnelle.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="text-3xl mb-2">🦘</div>
                                    <h3 className="font-bold mb-2">Faune Unique</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Kangourous, koalas et espèces endémiques
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="text-3xl mb-2">🏔️</div>
                                    <h3 className="font-bold mb-2">Paysages Épiques</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Fjords, déserts et montagnes
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="text-3xl mb-2">🤿</div>
                                    <h3 className="font-bold mb-2">Aventures Marines</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Plongée et sports aquatiques
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
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