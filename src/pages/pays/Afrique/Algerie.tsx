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


const solidarite = [
    {
        title: "Croix-Rouge Algérienne",
        image: "https://lechodalgerie.dz/wp-content/uploads/2019/05/CRA-Ooredoo.jpg",
        description:
            "Organisation humanitaire nationale qui intervient dans les secours d’urgence, l’aide médicale et le soutien aux populations vulnérables.",
    },
    {
        title: "Croissant-Rouge Algérien",
        image: "https://radioalgerie.dz/news/sites/default/files/field/image/croissant-bon.jpg",
        description:
            "Institution de solidarité nationale, active dans l’assistance humanitaire, la santé, et la gestion des catastrophes.",
    },
    {
        title: "Fondation Ness El Khir",
        image: "https://dia-algerie.com/wp-content/uploads/2025/03/Photo-Ooredoo-accompagne-Ness-El-Khir-pour-la-circoncision-1.jpg",
        description:
            "Association caritative algérienne qui développe des programmes de solidarité, d’entraide sociale et de développement durable.",
    },
    {
        title: "SOS Villages d’Enfants Algérie",
        image: "https://www.cscec.dz/uploads/20180606213531/f1200x800.jpg",
        description:
            "Organisation œuvrant pour la protection, l’accueil et l’accompagnement des enfants privés de soutien parental.",
    },
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
                        backgroundImage: "url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')"
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <div className="flex justify-center gap-4 mb-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg"
                            alt="Drapeau de l'Algérie"
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
                            Culture berbère
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
                                <Card className="h-full">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Users className="h-6 w-6 text-primary" /> Richesse Culturelle
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="flex flex-col gap-6 h-full">
                                        <p className="text-muted-foreground">
                                            L'Algérie est un carrefour de civilisations où se mêlent traditions berbères, influences arabes et héritage
                                            méditerranéen. La diversité culturelle se reflète dans les vêtements, la musique et les cérémonies.
                                        </p>

                                        <div className="flex flex-col gap-6 flex-1">
                                            {/* Exemple de tenues Kabyles */}
                                            <div className="flex flex-col flex-1">
                                                <img
                                                    src="https://i.pinimg.com/originals/f0/b8/ee/f0b8eeb8978419534e30157f491a3ae6.jpg"
                                                    alt="Tenue traditionnelle Kabyle"
                                                    className="rounded-lg object-cover h-full w-full"
                                                />
                                                <p className="text-sm text-muted-foreground font-semibold mt-2">Tenues Kabyles</p>
                                                <p className="text-xs text-muted-foreground">
                                                    Robes colorées ornées de broderies et de bijoux en argent, portées lors des fêtes et mariages.
                                                </p>
                                            </div>

                                            {/* Exemple de tenues Touaregs */}
                                            <div className="flex flex-col flex-1">
                                                <img
                                                    src="https://c8.alamy.com/compfr/2ewrr5p/femmes-traditionnelles-vetues-de-tuareg-oasis-de-timia-air-mountains-niger-afrique-2ewrr5p.jpg"
                                                    alt="Tenue traditionnelle Touareg"
                                                    className="rounded-lg object-cover h-full w-full"
                                                />
                                                <p className="text-sm text-muted-foreground font-semibold mt-2">Tenues Touaregs</p>
                                                <p className="text-xs text-muted-foreground">
                                                    Le chèche indigo et les habits amples protègent du soleil du désert et reflètent l’identité nomade du Sahara.
                                                </p>
                                            </div>

                                            {/* Exemple de tenues Chaouies */}
                                            <div className="flex flex-col flex-1">
                                                <img
                                                    src="https://i.etsystatic.com/19159385/r/il/a5971a/5823581037/il_1080xN.5823581037_mpds.jpg"
                                                    alt="Tenue traditionnelle Chaouie"
                                                    className="rounded-lg object-cover h-full w-full"
                                                />
                                                <p className="text-sm text-muted-foreground font-semibold mt-2">Tenues Chaouies</p>
                                                <p className="text-xs text-muted-foreground">
                                                    Vêtements traditionnels des Aurès, souvent colorés et accompagnés de bijoux en argent martelé.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>


                                <Card>
                                    <CardHeader>
                                        <CardTitle>Traditions & Artisanat</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-4">
                                            {/* Artisanat */}
                                            <div className="space-y-2">
                                                <h4 className="font-semibold">Artisanat</h4>
                                                {[
                                                    {
                                                        title: "Poterie de Kabylie",
                                                        image: "https://i.ytimg.com/vi/JaMN1KOUNaE/maxresdefault.jpg",
                                                    },
                                                    {
                                                        title: "Tapis du Sahara",
                                                        image: "https://lartisan-algerien.com/wp-content/uploads/2023/02/20230106_172701-1-rotated.jpg",
                                                    },
                                                    {
                                                        title: "Bijoux en argent berbères",
                                                        image: "https://i.pinimg.com/736x/01/47/51/014751cd4affa7b32f4c437bf65abebe.jpg",
                                                    },
                                                ].map((item) => (
                                                    <div key={item.title}>
                                                        <img src={item.image} alt={item.title} className="rounded-lg mb-2 h-full w-full object-cover" />
                                                        <p className="text-sm text-muted-foreground">{item.title}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Gastronomie */}
                                            <div className="space-y-2">
                                                <h4 className="font-semibold">Gastronomie</h4>
                                                {[
                                                    {
                                                        title: "Couscous",
                                                        image: "https://www.cuisineactuelle.fr/imgre/fit/~1~cac~2018~09~25~4bd9191d-9895-43e4-b5a8-3dbbc4f00606.jpeg/555x312/quality/80/crop-from/center/couscous-algerien-facile.jpeg",
                                                    },
                                                    {
                                                        title: "Chorba algérienne",
                                                        image: "https://media.istockphoto.com/id/1367497454/fr/photo/soupe-traditionnelle-chorba-frik-%C3%A0-base-dagneau-de-freekeh-et-de-l%C3%A9gumes-en-gros-plan-dans.webp?a=1&b=1&s=612x612&w=0&k=20&c=f8tty_kYxeHUcUV7d3EQpvbaz7COlpaupAnj2n9ZA_w=",
                                                    },
                                                    {
                                                        title: "Makroud",
                                                        image: "https://media.istockphoto.com/id/1388971774/fr/photo/makrout-frit-semoule-alg%C3%A9rienne-dattes-et-bonbons-au-miel-nourriture-sucr%C3%A9e-traditionnelle.webp?a=1&b=1&s=612x612&w=0&k=20&c=BzBk5w9ig0By3mE8cHZhLpP0GsddrDMtPzUmto9beXM=",
                                                    },
                                                ].map((item) => (
                                                    <div key={item.title}>
                                                        <img src={item.image} alt={item.title} className="rounded-lg mb-2 h-full w-full object-cover" />
                                                        <p className="text-sm text-muted-foreground">{item.title}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                            </div>
                        </TabsContent>

                        {/* Solidarité & Entraide */}
                        <TabsContent value="solidarite" className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                {solidarite.map((item) => (
                                    <Card key={item.title}>
                                        <CardHeader>
                                            <CardTitle>{item.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="rounded-lg mb-2"
                                            />
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
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
                                                    className="w-full h-48 object-cover rounded-lg mb-3"
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
                                                    className="w-full h-full object-cover rounded-t-lg"
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
                            © {new Date().getFullYear()} Explorez l'Algérie avec Voyage & Découverte
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
