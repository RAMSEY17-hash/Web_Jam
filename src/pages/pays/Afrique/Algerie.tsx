import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, ArrowLeft, Heart, Users, MapPin, Camera, Mountain, Calendar } from "lucide-react";
import StreetView from "@/components/StreetView.tsx";

const monuments = [
    {
        name: "Tassili n'Ajjer",
        location: { lat: 26.5735, lng: 9.8490 },
        description: "Parc national avec des peintures rupestres préhistoriques exceptionnelles",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    },
    {
        name: "Casbah d'Alger",
        location: { lat: 36.7849, lng: 3.0596 },
        description: "Citadelle historique inscrite au patrimoine mondial de l'UNESCO",
        image: "https://images.unsplash.com/photo-1740850121740-cd3c9b651697?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FzYmFoJTIwZCdBbGdlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Sahara Algérien",
        location: { lat: 23.4162, lng: 25.6628 },
        description: "Plus vaste désert chaud du monde, paysages lunaires et oasis",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    }
];

const villes = [
    {
        name: "Alger",
        location: { lat: 36.7372, lng: 3.0865 },
        description: "Capitale méditerranéenne, la 'Blanche' aux façades coloniales",
        image: "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWxnZXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Oran",
        location: { lat: 35.6969, lng: -0.6331 },
        description: "Ville portuaire, berceau du raï et centre culturel de l'ouest",
        image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    },
    {
        name: "Constantine",
        location: { lat: 36.3650, lng: 6.6147 },
        description: "Ville des ponts suspendus, ancienne Cirta romaine",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    }
];

export default function Algerie() {
    const [selectedLocation, setSelectedLocation] = useState(monuments[0]);

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
                        <Link to="/continent/afrique">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Retour Afrique
                            </Button>
                        </Link>
                        <Button size="sm">
                            <Calendar className="mr-2 h-4 w-4" />
                            Planifier
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')"
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <div className="flex justify-center gap-4 mb-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg"
                            alt="Drapeau de L'Algerie"
                            className="w-24 h-16 object-cover"
                        />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Algérie
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Plus grand pays d'Afrique, entre Méditerranée et Sahara.
                        Découvrez l'héritage berbère, l'architecture coloniale et les immensités désertiques.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-100 border-yellow-400/30">
                            <Mountain className="w-4 h-4 mr-1" />
                            Sahara
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-100 border-blue-400/30">
                            <MapPin className="w-4 h-4 mr-1" />
                            Méditerranée
                        </Badge>
                        <Badge variant="secondary" className="bg-orange-500/20 text-orange-100 border-orange-400/30">
                            <Camera className="w-4 h-4 mr-1" />
                            Berbères
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Tabs principales */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <Tabs defaultValue="culture" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-8">
                            <TabsTrigger value="culture" className="text-lg">
                                <Users className="mr-2 h-5 w-5" />
                                Culture & Diversité
                            </TabsTrigger>
                            <TabsTrigger value="solidarite" className="text-lg">
                                <Heart className="mr-2 h-5 w-5" />
                                Solidarité & Entraide
                            </TabsTrigger>
                            <TabsTrigger value="exploration" className="text-lg">
                                <MapPin className="mr-2 h-5 w-5" />
                                Exploration
                            </TabsTrigger>
                        </TabsList>

                        {/* Culture & Diversité */}
                        <TabsContent value="culture" className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Users className="h-6 w-6 text-primary" />
                                            Richesse Culturelle
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-muted-foreground">
                                            L'Algérie est un carrefour de civilisations, mélange harmonieux entre
                                            l'héritage berbère millénaire, l'influence arabe et les traces de la période coloniale française.
                                        </p>
                                        <div className="space-y-2">
                                            <Badge variant="outline">Arabe & Berbère (Tamazight)</Badge>
                                            <Badge variant="outline">Islam sunnite (99%)</Badge>
                                            <Badge variant="outline">Cultures Kabyles, Chaoui, Touareg</Badge>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Traditions & Artisanat</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <h4 className="font-semibold">Artisanat</h4>
                                                <ul className="text-sm space-y-1 text-muted-foreground">
                                                    <li>• Tapis de Ghardaïa</li>
                                                    <li>• Bijoux berbères en argent</li>
                                                    <li>• Poterie de Guellala</li>
                                                    <li>• Cuir maroquinier</li>
                                                </ul>
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="font-semibold">Gastronomie</h4>
                                                <ul className="text-sm space-y-1 text-muted-foreground">
                                                    <li>• Couscous</li>
                                                    <li>• Chorba frik</li>
                                                    <li>• Makroud</li>
                                                    <li>• Thé à la menthe</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        {/* Solidarité & Entraide */}
                        <TabsContent value="solidarite" className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Heart className="h-6 w-6 text-red-500" />
                                            Projets Humanitaires
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-3">
                                            <div className="p-3 bg-green-50 rounded-lg">
                                                <h4 className="font-semibold text-green-900">🌱 Reboisement du Tell</h4>
                                                <p className="text-sm text-green-700">Lutte contre la désertification et protection des forêts</p>
                                            </div>
                                            <div className="p-3 bg-blue-50 rounded-lg">
                                                <h4 className="font-semibold text-blue-900">📚 Alphabétisation rurale</h4>
                                                <p className="text-sm text-blue-700">Éducation des femmes dans les zones montagneuses</p>
                                            </div>
                                            <div className="p-3 bg-yellow-50 rounded-lg">
                                                <h4 className="font-semibold text-yellow-900">🏥 Soins dans le Sahara</h4>
                                                <p className="text-sm text-yellow-700">Caravanes médicales pour les nomades touaregs</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Échanges Culturels</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-muted-foreground">
                                            Participez aux échanges culturels avec les communautés locales :
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <Users className="h-4 w-4 mt-1 text-primary" />
                                                <span className="text-sm">Immersion chez les familles kabyles</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Heart className="h-4 w-4 mt-1 text-red-500" />
                                                <span className="text-sm">Ateliers de tissage traditionnel</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Globe className="h-4 w-4 mt-1 text-blue-500" />
                                                <span className="text-sm">Apprentissage de l'arabe dialectal</span>
                                            </li>
                                        </ul>
                                        <Button className="w-full mt-4">
                                            Rejoindre un projet
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        {/* Exploration */}
                        <TabsContent value="exploration" className="space-y-8">
                            <div className="space-y-6">
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold mb-4">Explorez l'Algérie en Street View</h3>
                                    <p className="text-muted-foreground max-w-2xl mx-auto">
                                        Découvrez les monuments, villes et sites emblématiques de l'Algérie directement depuis votre navigateur
                                    </p>

                                </div>

                                {/* Sélecteur de lieu */}
                                <div className="flex flex-wrap justify-center gap-2 mb-6">
                                    {[...monuments, ...villes].map((location, index) => (
                                        <Button
                                            key={location.name}
                                            variant={selectedLocation.name === location.name ? "default" : "outline"}
                                            onClick={() => setSelectedLocation(location)}
                                            size="sm"
                                        >
                                            {location.name}
                                        </Button>
                                    ))}
                                </div>

                                {/* Street View */}
                                <div className="grid lg:grid-cols-3 gap-6">
                                    <div className="lg:col-span-2">
                                        <StreetView
                                            location={selectedLocation.location}
                                            title={selectedLocation.name}
                                            className="h-full"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="text-lg">{selectedLocation.name}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <img
                                                    src={selectedLocation.image}
                                                    alt={selectedLocation.name}
                                                    className="w-full h-32 object-cover rounded-lg mb-3"
                                                />
                                                <p className="text-sm text-muted-foreground">
                                                    {selectedLocation.description}
                                                </p>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="text-lg">Coordonnées</CardTitle>
                                            </CardHeader>
                                            <CardContent className="text-sm">
                                                <p><strong>Latitude:</strong> {selectedLocation.location.lat}</p>
                                                <p><strong>Longitude:</strong> {selectedLocation.location.lng}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>

                                {/* Grille des lieux */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                                    <div className="md:col-span-2 lg:col-span-3">
                                        <h4 className="text-xl font-bold mb-4">Sites Historiques & Naturels</h4>
                                    </div>
                                    {monuments.map((monument) => (
                                        <Card key={monument.name} className="cursor-pointer hover:shadow-lg transition-shadow">
                                            <div
                                                onClick={() => setSelectedLocation(monument)}
                                                className="p-0"
                                            >
                                                <img
                                                    src={monument.image}
                                                    alt={monument.name}
                                                    className="w-full h-40 object-cover rounded-t-lg"
                                                />
                                                <CardContent className="p-4">
                                                    <h5 className="font-semibold mb-2">{monument.name}</h5>
                                                    <p className="text-sm text-muted-foreground">{monument.description}</p>
                                                </CardContent>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
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
                            © {new Date().getFullYear()} Explorez l'Algérie avec nous
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}