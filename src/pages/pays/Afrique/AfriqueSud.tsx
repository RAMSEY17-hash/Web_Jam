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
        name: "Table Mountain",
        location: { lat: -33.9628, lng: 18.4098 },
        description: "Montagne emblématique du Cap, l'une des sept nouvelles merveilles naturelles",
        image: "https://images.unsplash.com/photo-1696806589051-3a212a9cb2c4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGUlMjBtb3VudGFpbiUyMHNvdXRoJTIwYWZyaWNhfGVufDB8fDB8fHww"
    },
    {
        name: "Parc National Kruger",
        location: { lat: -23.9884, lng: 31.5547 },
        description: "Plus grande réserve animalière d'Afrique du Sud, Big Five garanti",
        image: "https://images.unsplash.com/photo-1729065910666-dea3df10a24c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyYyUyMG5hdGlvbmFsJTIwa3VyZ2VyfGVufDB8fDB8fHww"
    },
    {
        name: "Robben Island",
        location: { lat: -33.8067, lng: 18.3669 },
        description: "Île-prison où Nelson Mandela fut incarcéré, symbole de liberté",
        image: "https://images.unsplash.com/photo-1661112483600-bf3485542ec7?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const villes = [
    {
        name: "Le Cap",
        location: { lat: -33.9249, lng: 18.4241 },
        description: "Ville Mère aux paysages spectaculaires entre montagne et océan",
        image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGUlMjBjYXB8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Johannesburg",
        location: { lat: -26.2041, lng: 28.0473 },
        description: "Ville de l'or, capitale économique et berceau de la lutte contre l'apartheid",
        image: "https://plus.unsplash.com/premium_photo-1663133765719-5e7485c34d02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am9oYW5uZXNidXJnfGVufDB8fDB8fHww"
    },
    {
        name: "Durban",
        location: { lat: -29.8587, lng: 31.0218 },
        description: "Port cosmopolite de l'océan Indien, forte communauté indienne",
        image: "https://images.unsplash.com/photo-1610085347824-e7b734cbe552?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVyYmFuJTIwc291dGglMjBhZnJpY2F8ZW58MHx8MHx8fDA%3D"
    }
];

export default function AfriqueSud() {
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
                        backgroundImage: "url('https://images.unsplash.com/photo-1577948000111-9c970dfe3743?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')"
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <div className="flex justify-center gap-4 mb-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg"
                            alt="Drapeau de L'Afrique du Sud"
                            className="w-24 h-16 object-cover"
                        />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Afrique du Sud
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Nation arc-en-ciel aux paysages somptueux. Découvrez l'héritage de Mandela,
                        la faune exceptionnelle et la diversité culturelle unique.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Badge variant="secondary" className="bg-rainbow-500/20 text-yellow-100 border-yellow-400/30">
                            <Users className="w-4 h-4 mr-1" />
                            Rainbow Nation
                        </Badge>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-100 border-green-400/30">
                            <Camera className="w-4 h-4 mr-1" />
                            Big Five
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-100 border-blue-400/30">
                            <Mountain className="w-4 h-4 mr-1" />
                            Drakensberg
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
                                            L'Afrique du Sud est la "Nation arc-en-ciel" avec 11 langues officielles,
                                            un melting-pot unique où coexistent cultures africaines, européennes, asiatiques et métisses.
                                        </p>
                                        <div className="space-y-2">
                                            <Badge variant="outline">11 langues officielles</Badge>
                                            <Badge variant="outline">Christianisme (80%)</Badge>
                                            <Badge variant="outline">Cultures Zoulou, Xhosa, Afrikaaner</Badge>
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
                                                    <li>• Sculptures sur bois Zoulou</li>
                                                    <li>• Perles ndebele</li>
                                                    <li>• Poterie sotho</li>
                                                    <li>• Diamants et bijoux</li>
                                                </ul>
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="font-semibold">Gastronomie</h4>
                                                <ul className="text-sm space-y-1 text-muted-foreground">
                                                    <li>• Braai (barbecue)</li>
                                                    <li>• Bobotie</li>
                                                    <li>• Biltong</li>
                                                    <li>• Rooibos</li>
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
                                            <div className="p-3 bg-red-50 rounded-lg">
                                                <h4 className="font-semibold text-red-900">🏥 Lutte contre le VIH</h4>
                                                <p className="text-sm text-red-700">Centres de prévention et soins dans les townships</p>
                                            </div>
                                            <div className="p-3 bg-blue-50 rounded-lg">
                                                <h4 className="font-semibold text-blue-900">📚 Éducation post-apartheid</h4>
                                                <p className="text-sm text-blue-700">Écoles et bibliothèques dans les anciennes zones défavorisées</p>
                                            </div>
                                            <div className="p-3 bg-green-50 rounded-lg">
                                                <h4 className="font-semibold text-green-900">🌱 Développement rural</h4>
                                                <p className="text-sm text-green-700">Agriculture durable dans les zones rurales</p>
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
                                                <span className="text-sm">Immersion dans les townships</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Heart className="h-4 w-4 mt-1 text-red-500" />
                                                <span className="text-sm">Ateliers d'art traditionnel africain</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Globe className="h-4 w-4 mt-1 text-blue-500" />
                                                <span className="text-sm">Apprentissage zoulou ou xhosa</span>
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
                                    <h3 className="text-2xl font-bold mb-4">Explorez l'Afrique du Sud en Street View</h3>
                                    <p className="text-muted-foreground max-w-2xl mx-auto">
                                        Découvrez les monuments, villes et sites emblématiques de l'Afrique du Sud directement depuis votre navigateur
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
                                        <h4 className="text-xl font-bold mb-4">Sites Emblématiques</h4>
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
                            © {new Date().getFullYear()} Explorez l'Afrique du Sud avec nous
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}