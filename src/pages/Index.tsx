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
    const [hoveredContinent, setHoveredContinent] = useState<number | null>(null);

    // Rotation automatique des promos
    useState(() => {
        const interval = setInterval(() => {
            setCurrentPromo((prev) => (prev + 1) % promoOffers.length);
        }, 3000);
        return () => clearInterval(interval);
    });

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-3">
                        <img
                            src="logo.png"
                            alt="Voyage & Découverte"
                            className="h-16 w-20 animate-pulse"
                        />
                        <h1 className="text-xl font-bold">Voyage & Découverte</h1>
                    </div>

                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#continents">
                            <Button variant="ghost" size="sm">Destination</Button>
                        </a>

                        <Button variant="ghost" size="sm">Blog</Button>
                        <Button size="sm">
                            <Calendar className="mr-2 h-4 w-4" />
                            Réserver
                        </Button>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')"
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in">
                        Explorez le monde, une destination à la fois
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Découvrez des lieux uniques et vivez des aventures inoubliables.
                        Votre prochaine destination vous attend.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                            <MapPin className="mr-2 h-5 w-5" />
                            Commencer l'exploration
                        </Button>
                        <Button size="lg" variant="secondary" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                            <Star className="mr-2 h-5 w-5" />
                            Voir les avis
                        </Button>
                    </div>
                </div>
            </section>

            {/* Promo Banner */}
            <section className="py-8 bg-primary/10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">Découvrez nos offres exclusives de voyage !</h2>
                    <p className="text-muted-foreground mb-6">
                        Réservez maintenant et bénéficiez de réductions incroyables sur vos prochaines aventures.
                    </p>
                    <div className="relative">
                        <Badge
                            variant="default"
                            className="bg-primary text-white p-4 text-lg font-semibold animate-bounce"
                        >
                            {promoOffers[currentPromo]}
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Continents Section */}
            <section id="continents" className="py-16 bg-muted/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Choisissez votre continent</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Explorez les merveilles de chaque continent avec nos guides experts et découvrez des expériences authentiques.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {continents.map((continent, index) => (
                            <Card
                                key={continent.name}
                                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                                onMouseEnter={() => setHoveredContinent(index)}
                                onMouseLeave={() => setHoveredContinent(null)}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={continent.image}
                                        alt={continent.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-xl font-bold text-white mb-1">{continent.name}</h3>
                                        <p className="text-sm text-white/80">{continent.description}</p>
                                    </div>
                                    <Badge className="absolute top-4 right-4 bg-white/90 text-black">
                                        <Users className="w-3 h-3 mr-1" />
                                        {continent.countries} pays
                                    </Badge>
                                </div>

                                <CardContent className="p-4">
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-sm text-muted-foreground">Incontournables :</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {continent.highlights.map((highlight, idx) => (
                                                <Badge key={idx} variant="secondary" className="text-xs">
                                                    {highlight}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <Button
                                        className="w-full mt-4 group-hover:bg-primary group-hover:text-white transition-colors"
                                        variant={hoveredContinent === index ? "default" : "outline"}
                                        asChild
                                    >
                                        <Link to={`/continent/${continent.slug}`}>
                                            Explorer {continent.name}
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-primary text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold mb-2">05</div>
                            <div className="text-white/80">Continents</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">150+</div>
                            <div className="text-white/80">Destinations</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">50k+</div>
                            <div className="text-white/80">Voyageurs heureux</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">4.9</div>
                            <div className="text-white/80">Note moyenne</div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-background border-t py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Globe className="h-6 w-6 text-primary" />
                                <h3 className="font-bold">Voyage & Découverte</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                <em><strong>WAHMS</strong></em>, Votre partenaire de confiance pour des voyages inoubliables à travers un monde sans frontières.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Destinations</h4>
                            <div className="space-y-2 text-sm">
                                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Europe</a>
                                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Asie</a>
                                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Afrique</a>
                                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Amériques</a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Services</h4>
                            <div className="space-y-2 text-sm">
                                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Voyages organisés</a>
                                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Sur-mesure</a>
                                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Guides locaux</a>
                                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Assurance voyage</a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <div className="space-y-2 text-sm">
                                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
                                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">FAQ</a>
                                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Conditions</a>
                                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Confidentialité</a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} Voyage & Découverte. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}