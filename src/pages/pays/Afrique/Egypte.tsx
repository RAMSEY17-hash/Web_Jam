import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, ArrowLeft, Heart, Users, MapPin, Camera, Pyramid, Calendar } from "lucide-react";
import StreetView from "@/components/StreetView.tsx";

const monuments = [
    {
        name: "Pyramides de Gizeh",
        location: { lat: 29.9792, lng: 31.1342 },
        description: "Les légendaires pyramides et le Sphinx, merveilles du monde antique",
        image: "https://plus.unsplash.com/premium_photo-1661891622579-bee76e28c304?q=80&w=1181&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Temple de Karnak",
        location: { lat: 25.7188, lng: 32.6573 },
        description: "Complexe de temples antiques dédiés aux dieux égyptiens",
        image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    },
    {
        name: "Vallée des Rois",
        location: { lat: 25.7402, lng: 32.6014 },
        description: "Nécropole royale avec les tombeaux des pharaons",
        image: "https://plus.unsplash.com/premium_photo-1692455903643-fbe3edb1cd18?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmFsbCVDMyVBOWUlMjBkZXMlMjByb2lzfGVufDB8fDB8fHww"
    }
];

const villes = [
    {
        name: "Le Caire",
        location: { lat: 30.0444, lng: 31.2357 },
        description: "Capitale historique au cœur de l'Égypte ancienne",
        image: "https://images.unsplash.com/photo-1626692880062-35c360fb6afc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGUlMjBjYWlyZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Alexandrie",
        location: { lat: 31.2001, lng: 29.9187 },
        description: "Perle de la Méditerranée, ancienne cité grecque",
        image: "https://images.unsplash.com/photo-1554072675-66db59dba46f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    },
    {
        name: "Louxor",
        location: { lat: 25.6872, lng: 32.6396 },
        description: "Ancienne Thèbes, musée à ciel ouvert",
        image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    }
];

export default function Egypte() {
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
                        backgroundImage: "url('https://images.unsplash.com/photo-1608546043931-6c9678ea9feb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <div className="flex justify-center gap-4 mb-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg"
                            alt="Drapeau de L'Egypte"
                            className="w-24 h-16 object-cover"
                        />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Égypte
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Terre des pharaons, berceau de l'une des plus anciennes civilisations du monde.
                        Découvrez les pyramides, le Nil et les trésors millénaires.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-100 border-yellow-400/30">
                            <Pyramid className="w-4 h-4 mr-1" />
                            Pharaons
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-100 border-blue-400/30">
                            <MapPin className="w-4 h-4 mr-1" />
                            Le Nil
                        </Badge>
                        <Badge variant="secondary" className="bg-orange-500/20 text-orange-100 border-orange-400/30">
                            <Camera className="w-4 h-4 mr-1" />
                            Désert
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
                                            L'Égypte est le berceau d'une civilisation millénaire qui fascine le monde entier.
                                            Des hiéroglyphes aux pyramides, chaque pierre raconte une histoire.
                                        </p>
                                        <div className="space-y-2">
                                            <Badge variant="outline">Langue Arabe</Badge>
                                            <Badge variant="outline">Islam (90%)</Badge>
                                            <Badge variant="outline">Christianisme Copte (10%)</Badge>
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
                                                    <li>• Papyrus traditionnel</li>
                                                    <li>• Bijoux en or et argent</li>
                                                    <li>• Tapis tissés à la main</li>
                                                    <li>• Poterie de Fustat</li>
                                                </ul>
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="font-semibold">Gastronomie</h4>
                                                <ul className="text-sm space-y-1 text-muted-foreground">
                                                    <li>• Ful medames</li>
                                                    <li>• Koshari</li>
                                                    <li>• Molokheya</li>
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
                                            <div className="p-3 bg-blue-50 rounded-lg">
                                                <h4 className="font-semibold text-blue-900">💧 Accès à l'eau potable</h4>
                                                <p className="text-sm text-blue-700">Projets de forage dans les villages ruraux du sud de l'Égypte</p>
                                            </div>
                                            <div className="p-3 bg-green-50 rounded-lg">
                                                <h4 className="font-semibold text-green-900">📚 Éducation pour tous</h4>
                                                <p className="text-sm text-green-700">Centres d'alphabétisation dans les zones reculées</p>
                                            </div>
                                            <div className="p-3 bg-yellow-50 rounded-lg">
                                                <h4 className="font-semibold text-yellow-900">🏥 Santé communautaire</h4>
                                                <p className="text-sm text-yellow-700">Cliniques mobiles dans le désert</p>
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
                                                <span className="text-sm">Familles d'accueil à Assouan</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Heart className="h-4 w-4 mt-1 text-red-500" />
                                                <span className="text-sm">Ateliers d'artisanat avec les femmes locales</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Globe className="h-4 w-4 mt-1 text-blue-500" />
                                                <span className="text-sm">Échange linguistique arabe-français</span>
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
                                    <h3 className="text-2xl font-bold mb-4">Explorez l'Égypte en Street View</h3>
                                    <p className="text-muted-foreground max-w-2xl mx-auto">
                                        Découvrez les monuments, villes et sites emblématiques de l'Égypte directement depuis votre navigateur
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
                                        <h4 className="text-xl font-bold mb-4">Monuments Historiques</h4>
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
                            © {new Date().getFullYear()} Explorez l'Égypte avec nous
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
