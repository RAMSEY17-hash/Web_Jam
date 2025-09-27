import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, ArrowLeft, Heart, Users, MapPin, Camera, TreePine, Calendar } from "lucide-react";
import StreetView from "@/components/StreetView.tsx";

const monuments = [
    {
        name: "Parc National du Masai Mara",
        location: { lat: -1.4061, lng: 35.0078 },
        description: "Réserve animalière mondialement connue, théâtre de la grande migration",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    },
    {
        name: "Mont Kenya",
        location: { lat: -0.1521, lng: 37.3084 },
        description: "Deuxième plus haut sommet d'Afrique, patrimoine mondial UNESCO",
        image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vbnQlMjBrZW55YXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Parc National d'Amboseli",
        location: { lat: -2.6527, lng: 37.2606 },
        description: "Vue imprenable sur le Kilimandjaro et ses éléphants",
        image: "https://media.istockphoto.com/id/606224696/fr/photo/antilopes-et-z%C3%A8bres-au-kenya.webp?a=1&b=1&s=612x612&w=0&k=20&c=kYjVRH7-jZh5fnlCpRbHx24uV3CcTiuP3WRITwsEGM0="
    }
];

const villes = [
    {
        name: "Nairobi",
        location: { lat: -1.2921, lng: 36.8219 },
        description: "Capitale moderne surnommée la 'Green City in the Sun'",
        image: "https://images.unsplash.com/photo-1596005554384-d293674c91d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Mombasa",
        location: { lat: -4.0435, lng: 39.6682 },
        description: "Port historique de l'océan Indien, mélange de cultures swahilie et arabe",
        image: "https://media.istockphoto.com/id/1170775456/fr/photo/le-pont.webp?a=1&b=1&s=612x612&w=0&k=20&c=4rAvsibEbalA53TAvnze0ybudfUmytRflD5_I-mDfrI="
    },
    {
        name: "Kisumu",
        location: { lat: -0.0917, lng: 34.7680 },
        description: "Troisième plus grande ville, porte d'entrée du lac Victoria",
        image: "https://images.unsplash.com/photo-1691515380604-aa4717b4964f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lzdW11fGVufDB8fDB8fHww"
    }
];

export default function Kenya() {
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
                        backgroundImage: "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')"
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <div className="flex justify-center gap-4 mb-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg"
                            alt="Drapeau du Kenya"
                            className="w-24 h-16 object-cover"
                        />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Kenya
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Terre de safari et berceau de l'humanité. Découvrez la faune sauvage,
                        les cultures masaï et les paysages à couper le souffle.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Badge variant="secondary" className="bg-orange-500/20 text-orange-100 border-orange-400/30">
                            <Camera className="w-4 h-4 mr-1" />
                            Safari
                        </Badge>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-100 border-green-400/30">
                            <TreePine className="w-4 h-4 mr-1" />
                            Savane
                        </Badge>
                        <Badge variant="secondary" className="bg-red-500/20 text-red-100 border-red-400/30">
                            <Users className="w-4 h-4 mr-1" />
                            Masaï
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
                                            Le Kenya abrite plus de 40 groupes ethniques différents, chacun avec sa langue,
                                            ses traditions et sa culture unique. Berceau de l'humanité et terre de diversité.
                                        </p>
                                        <div className="space-y-2">
                                            <Badge variant="outline">Swahili & Anglais</Badge>
                                            <Badge variant="outline">Christianisme (80%)</Badge>
                                            <Badge variant="outline">Islam & Religions traditionnelles</Badge>
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
                                                    <li>• Sculptures sur bois Makonde</li>
                                                    <li>• Bijoux perles Masaï</li>
                                                    <li>• Textiles Kanga et Kitenge</li>
                                                    <li>• Paniers Kiondo</li>
                                                </ul>
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="font-semibold">Gastronomie</h4>
                                                <ul className="text-sm space-y-1 text-muted-foreground">
                                                    <li>• Ugali</li>
                                                    <li>• Nyama choma</li>
                                                    <li>• Pilau</li>
                                                    <li>• Thé chai</li>
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
                                                <h4 className="font-semibold text-green-900">🌱 Conservation de la faune</h4>
                                                <p className="text-sm text-green-700">Protection des éléphants et rhinocéros contre le braconnage</p>
                                            </div>
                                            <div className="p-3 bg-blue-50 rounded-lg">
                                                <h4 className="font-semibold text-blue-900">📚 Éducation des enfants Masaï</h4>
                                                <p className="text-sm text-blue-700">Écoles mobiles dans les communautés nomades</p>
                                            </div>
                                            <div className="p-3 bg-yellow-50 rounded-lg">
                                                <h4 className="font-semibold text-yellow-900">💧 Eau potable dans les bidonvilles</h4>
                                                <p className="text-sm text-yellow-700">Systèmes d'eau dans les quartiers informels de Nairobi</p>
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
                                                <span className="text-sm">Immersion dans les villages Masaï</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Heart className="h-4 w-4 mt-1 text-red-500" />
                                                <span className="text-sm">Ateliers d'artisanat traditionnel</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Globe className="h-4 w-4 mt-1 text-blue-500" />
                                                <span className="text-sm">Apprentissage du swahili</span>
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
                                    <h3 className="text-2xl font-bold mb-4">Explorez le Kenya en Street View</h3>
                                    <p className="text-muted-foreground max-w-2xl mx-auto">
                                        Découvrez les parcs nationaux, villes et sites emblématiques du Kenya directement depuis votre navigateur
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
                                        <h4 className="text-xl font-bold mb-4">Parcs Nationaux & Sites Naturels</h4>
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
                            © {new Date().getFullYear()} Explorez le Kenya avec nous
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}