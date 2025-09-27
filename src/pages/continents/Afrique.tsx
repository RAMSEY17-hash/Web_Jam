import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

            {/* Hero Section Afrique */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661936361131-c421746dcd0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWZyaXF1ZXxlbnwwfHwwfHx8MA%3D%3D')"
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Découvrez l'Afrique
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Un continent aux mille visages : safaris inoubliables, déserts mystiques,
                        cultures authentiques et une faune exceptionnelle vous attendent.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Badge variant="secondary" className="bg-orange-500/20 text-orange-100 border-orange-400/30">
                            <Camera className="w-4 h-4 mr-1" />
                            Safari
                        </Badge>
                        <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-100 border-yellow-400/30">
                            <MapPin className="w-4 h-4 mr-1" />
                            54 Pays
                        </Badge>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-100 border-green-400/30">
                            <Users className="w-4 h-4 mr-1" />
                            Cultures Riches
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section className="py-12 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-6">Pourquoi choisir l'Afrique ?</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            L'Afrique offre des expériences de voyage uniques au monde. Des safaris extraordinaires dans la savane kenyan
                            aux mystères des pyramides égyptiennes, en passant par les souks colorés du Maroc et les plages paradisiaques
                            de Zanzibar. Chaque pays révèle ses propres trésors, sa culture unique et son hospitalité légendaire.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pays africains */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Destinations phares</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Explorez les destinations les plus fascinantes d'Afrique avec nos circuits sur-mesure.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {africanCountries.map((country, index) => (
                            <Card key={country.name} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
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

                                        <Button className="w-full">
                                            <Link to={`/pays/afrique/${country.slug}`} className="flex items-center justify-center w-full">
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

            {/* Call to Action */}
            <section className="py-16 bg-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Prêt pour l'aventure africaine ?</h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Nos experts vous accompagnent pour créer le voyage de vos rêves en Afrique.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary">
                            <Calendar className="mr-2 h-5 w-5" />
                            Réserver maintenant
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