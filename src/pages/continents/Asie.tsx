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

            {/* Hero Section Asie */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1535139262971-c51845709a48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXNpZXxlbnwwfHwwfHx8MA%3D%3D')"
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        🌏 Découvrez l'Asie
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Un continent de contrastes saisissants où traditions millénaires
                        et modernité futuriste se côtoient harmonieusement.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Badge variant="secondary" className="bg-red-500/20 text-red-100 border-red-400/30">
                            <Building className="w-4 h-4 mr-1" />
                            Modernité
                        </Badge>
                        <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-100 border-yellow-400/30">
                            <MapPin className="w-4 h-4 mr-1" />
                            48 Pays
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-500/20 text-purple-100 border-purple-400/30">
                            <Users className="w-4 h-4 mr-1" />
                            Traditions
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section className="py-12 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-6">Pourquoi choisir l'Asie ?</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            L'Asie fascine par ses paradoxes : des temples bouddhistes millénaires aux gratte-ciels futuristes,
                            des marchés traditionnels aux technologies de pointe. Chaque pays révèle une facette unique de ce
                            continent immense, où spiritualité, innovation et traditions ancestrales créent une mosaïque culturelle extraordinaire.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pays asiatiques */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Destinations phares</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Explorez les merveilles asiatiques entre tradition et modernité.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {asianCountries.map((country, index) => (
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

            {/* Section Diversité Asiatique */}
            <section className="py-16 bg-gradient-to-r from-red-50 to-yellow-50" >
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6" style={{ backgroundColor: "black" }}>🌸 La Diversité Asiatique</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Un continent où coexistent 4,6 milliards d'habitants, des centaines de langues
                            et des millénaires d'histoire et d'innovations.
                        </p>
                        <div className="grid md:grid-cols-4 gap-6">
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="text-3xl mb-2">🏯</div>
                                    <h3 className="font-bold mb-2">Temples & Palais</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Architecture sacrée millénaire
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="text-3xl mb-2">🏙️</div>
                                    <h3 className="font-bold mb-2">Mégalopoles</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Villes futuristes et dynamiques
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="text-3xl mb-2">🍜</div>
                                    <h3 className="font-bold mb-2">Gastronomie</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Saveurs authentiques variées
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="text-3xl mb-2">🧘</div>
                                    <h3 className="font-bold mb-2">Spiritualité</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Philosophies et méditations
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
                    <h2 className="text-3xl font-bold mb-4">Prêt pour l'aventure asiatique ?</h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Des temples de Kyoto aux gratte-ciels de Singapour, l'Asie vous réserve mille surprises.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary">
                            <Calendar className="mr-2 h-5 w-5" />
                            Planifier mon voyage
                        </Button>
                        <Button size="lg" variant="secondary" className="bg-white/10 text-white hover:bg-white hover:text-primary">
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