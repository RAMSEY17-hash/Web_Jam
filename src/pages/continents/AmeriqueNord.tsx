import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ArrowLeft, MapPin, Camera, Users, Calendar, Building2 } from "lucide-react";

const northAmericaCountries = [
    {
        name: "États-Unis",
        slug: "usa",
        image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        description: "New York, Los Angeles, Grand Canyon",
        highlights: ["Times Square", "Hollywood", "Yellowstone"]
    },
    {
        name: "Canada",
        slug: "canada",
        image: "https://images.unsplash.com/photo-1519832979-6fa011b87667?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhbmFkYXxlbnwwfHwwfHx8MA%3D%3D",
        description: "Toronto, Vancouver, nature sauvage",
        highlights: ["Chutes Niagara", "Banff", "Québec"]
    }
];

export default function AmeriqueNord() {
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
                        backgroundImage: "url('https://images.unsplash.com/photo-1582893002994-c0228d8b414a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtZXJpcXVlJTIwZHUlMjBub3JkfGVufDB8fDB8fHww')"
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        🌎 Amérique du Nord
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Terre de liberté et d'innovation, des gratte-ciels de Manhattan
                        aux parcs nationaux canadiens.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-100 border-blue-400/30">
                            <Building2 className="w-4 h-4 mr-1" />
                            Modernité
                        </Badge>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-100 border-green-400/30">
                            <MapPin className="w-4 h-4 mr-1" />
                            Nature Sauvage
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
                            Explorez la diversité de l'Amérique du Nord.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                        {northAmericaCountries.map((country, index) => (
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

            {/* Section Amérique du Nord */}
            <section className="py-16 bg-blue-50" style={{ backgroundColor: "lightblue" }}>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">🍁 Amérique du Nord</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Explorez la diversité de l’Amérique du Nord, des paysages majestueux aux villes vibrantes et aux cultures variées.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="font-bold mb-2">3 Pays Principaux</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Canada, États-Unis et Mexique avec leurs cultures uniques
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Globe className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="font-bold mb-2">Paysages Variés</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Montagnes, forêts, déserts et plages magnifiques
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Camera className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <h3 className="font-bold mb-2">Sites et Monuments</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Parcs nationaux, sites historiques et attractions célèbres
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action - Amérique du Nord */}
            <section className="py-16 bg-teal-700 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Prêt pour l'aventure nord-américaine ?</h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Des gratte-ciels de New York aux paysages naturels du Canada, partez explorer l’Amérique du Nord.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary">
                            <Calendar className="mr-2 h-5 w-5" />
                            Planifier mon voyage
                        </Button>
                        <Button size="lg" variant="secondary" className="bg-white/10 text-white hover:bg-white hover:text-teal-700">
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