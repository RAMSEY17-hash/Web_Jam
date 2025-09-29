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

const solidarite = [
    {
        title: "Croix-Rouge Égyptienne",
        image: "https://www.icrc.org/sites/default/files/styles/desktop_full/public/2024-02/jpeg-optimizer_V-P-LY-E-00391.JPG.webp?itok=GoeipgMp",
        description:
            "Organisation humanitaire active en Égypte, apportant une aide d’urgence, des soins de santé et un soutien aux populations vulnérables.",
    },
    {
        title: "Banque Alimentaire Égyptienne",
        image: "https://www.fondation-bel.org/wp-content/uploads/2021/09/efb-logo-en-n-scaled.jpg",
        description:
            "Programme qui lutte contre la faim et le gaspillage alimentaire en redistribuant des repas aux familles défavorisées.",
    },
    {
        title: "Resala Charity Organization",
        image: "https://assets.cairo360.com/app/uploads/2025/09/03/Misr-El-Kheir-scaled.jpeg",
        description:
            "Association caritative égyptienne offrant du soutien éducatif, médical et social à des millions de bénéficiaires.",
    },
    {
        title: "Misr El Kheir Foundation",
        image: "https://www.lg.com/content/dam/channel/wcms/eg_en/images/lg-story/lgxmisr_el_kheir_complete_the_second_phase_of_the_education_file_in_assiut/LGxMisr-El-Khair-complete-the-second-phase-of-the-education-file-in-Assiut.-PicM.jpg",
        description:
            "Fondation qui œuvre dans l’éducation, la santé, la recherche scientifique et le développement communautaire en Égypte.",
    },
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
                                <Card className="h-full">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Users className="h-6 w-6 text-primary" /> Richesse Culturelle
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="flex flex-col gap-6 h-full">
                                        <p className="text-muted-foreground">
                                            L’Égypte est un carrefour historique où se mêlent héritage pharaonique,
                                            influences coptes et culture islamique. Sa richesse culturelle se reflète
                                            dans les vêtements, la musique, la danse et les cérémonies traditionnelles.
                                        </p>

                                        <div className="flex flex-col gap-6 flex-1">
                                            {/* Tenues traditionnelles égyptiennes */}
                                            <div className="flex flex-col flex-1">
                                                <img
                                                    src="https://i.pinimg.com/736x/3d/85/35/3d8535679521797e3bb47033f99b90fb.jpg"
                                                    alt="Galabeya égyptienne"
                                                    className="rounded-lg object-cover h-full w-full"
                                                />
                                                <p className="text-sm text-muted-foreground font-semibold mt-2">Galabeya</p>
                                                <p className="text-xs text-muted-foreground">
                                                    Robe ample portée par les hommes et les femmes, souvent lors des fêtes et cérémonies.
                                                </p>
                                            </div>

                                            {/* Costumes de danse orientale */}
                                            <div className="flex flex-col flex-1">
                                                <img
                                                    src="https://plus.unsplash.com/premium_photo-1718737640367-e7f99db9bda4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                    alt="Costume de danse orientale égyptienne"
                                                    className="rounded-lg object-cover h-full w-full"
                                                />
                                                <p className="text-sm text-muted-foreground font-semibold mt-2">Costumes de danse orientale</p>
                                                <p className="text-xs text-muted-foreground">
                                                    Brillants et richement décorés, ils accompagnent la danse du ventre, emblématique de l’Égypte.
                                                </p>
                                            </div>

                                            {/* Tenues traditionnelles coptes */}
                                            <div className="flex flex-col flex-1">
                                                <img
                                                    src="https://i.la-croix.com/836x/smart/2023/05/05/1201266204/Messe-Paques-leglise-Samaan-Kharaz-Caire-Egypte-2014_0.jpg"
                                                    alt="Tenue traditionnelle copte"
                                                    className="rounded-lg object-cover h-full w-full"
                                                />
                                                <p className="text-sm text-muted-foreground font-semibold mt-2">Tenues coptes</p>
                                                <p className="text-xs text-muted-foreground">
                                                    Vêtements traditionnels colorés portés lors des cérémonies religieuses coptes.
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
                                                        title: "Papyrus peint",
                                                        image: "https://images.unsplash.com/photo-1722684526676-aee4b65b0af7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFBhcHlydXMlMjBwZWludGVneXB0ZXxlbnwwfHwwfHx8MA%3D%3D",
                                                    },
                                                    {
                                                        title: "Bijoux égyptiens",
                                                        image: "https://media.istockphoto.com/id/691272130/fr/photo/collection-souvenirs-dorient.webp?a=1&b=1&s=612x612&w=0&k=20&c=-yrKjtNckUN3997Ky1TcwXG9tqq8tap3CfqBHA9PIiY=",
                                                    },
                                                    {
                                                        title: "Sculptures en pierre",
                                                        image: "https://plus.unsplash.com/premium_photo-1661906977668-ece2c96385c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2N1bHB0dXJlcyUyMGVuJTIwcGllcnJlJTIwZWd5cHRlfGVufDB8fDB8fHww",
                                                    },
                                                ].map((item) => (
                                                    <div key={item.title}>
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            className="rounded-lg mb-2 h-48 w-full object-cover"
                                                        />
                                                        <p className="text-sm text-muted-foreground">{item.title}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Gastronomie */}
                                            <div className="space-y-2">
                                                <h4 className="font-semibold">Gastronomie</h4>
                                                {[
                                                    {
                                                        title: "Koshari",
                                                        image: "https://media.istockphoto.com/id/1491179618/fr/photo/plat-traditionnel-%C3%A9gyptien-kushary-ou-koushari.webp?a=1&b=1&s=612x612&w=0&k=20&c=yF1gfIgcwnxxv_jAyWH1xtzWi2JzOk3HfjqvULQwBcE=",
                                                    },
                                                    {
                                                        title: "Ful Medames",
                                                        image: "https://media.istockphoto.com/id/2228010311/fr/photo/vue-de-dessus-pour-les-f%C3%A8ves-%C3%A0-la-sauce-tahini.webp?a=1&b=1&s=612x612&w=0&k=20&c=0RS_pZEJILCp4dzykKOl-jQ6COD00fZTv5xh---gVCk=",
                                                    },
                                                    {
                                                        title: "Baklava égyptienne",
                                                        image: "https://media.istockphoto.com/id/1490913497/fr/photo/desserts-arabes.webp?a=1&b=1&s=612x612&w=0&k=20&c=enWiulGE26GJhNkT5T-oeqtmbSC59NcdazQpfd21pPA=",
                                                    },
                                                ].map((item) => (
                                                    <div key={item.title}>
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            className="rounded-lg mb-2 h-full w-full object-cover"
                                                        />
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
                            © {new Date().getFullYear()} Explorez l'Égypte avec nous
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
