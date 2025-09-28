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

            {/* Hero Section Europe */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1473951574080-01fe45ec8643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RXVyb3BlfGVufDB8fDB8fHww')"
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Découvrez l'Europe
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Un continent riche en histoire, art et culture. Des châteaux romantiques
                        aux capitales cosmopolites, explorez la diversité européenne.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-100 border-blue-400/30">
                            <Camera className="w-4 h-4 mr-1" />
                            Art & Culture
                        </Badge>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-100 border-green-400/30">
                            <MapPin className="w-4 h-4 mr-1" />
                            44 Pays
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-500/20 text-purple-100 border-purple-400/30">
                            <Users className="w-4 h-4 mr-1" />
                            Histoire Millénaire
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section className="py-12 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-6">Pourquoi choisir l'Europe ?</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            L'Europe offre une diversité culturelle exceptionnelle dans un espace relativement restreint.
                            Chaque pays révèle son patrimoine unique : des musées du Louvre aux canaux de Venise,
                            des fjords norvégiens aux plages grecques. L'art, l'histoire et la gastronomie se mêlent
                            pour créer des expériences de voyage inoubliables.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pays européens */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Destinations phares</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Explorez les plus belles destinations européennes avec nos circuits culturels et historiques.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {europeanCountries.map((country, index) => (
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
                                            <Link to="#" className="flex items-center justify-center w-full">
                                                Explorer {country.name}
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Union Européenne */}
            <section className="py-16 bg-blue-50"  style={{ backgroundColor: "gray" }}>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">🗼L'Union Européenne</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Découvrez l'unité dans la diversité : 27 pays unis par des valeurs communes
                            tout en préservant leur identité culturelle unique.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="font-bold mb-2">27 Pays Membres</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Une mosaïque de cultures, langues et traditions
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Globe className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="font-bold mb-2">Libre Circulation</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Voyagez librement avec un seul document
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Camera className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <h3 className="font-bold mb-2">Patrimoine UNESCO</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Plus de 500 sites classés au patrimoine mondial
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Prêt pour l'aventure européenne ?</h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        De l'art renaissance italien aux fjords norvégiens, l'Europe vous attend.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary">
                            <Calendar className="mr-2 h-5 w-5" />
                            Planifier mon voyage
                        </Button>
                        <Button size="lg" variant="secondary" className="bg-white/10 text-white hover:bg-white hover:text-primary">
                            <Camera className="mr-2 h-5 w-5" />
                            Voir la galerie
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