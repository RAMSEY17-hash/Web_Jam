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
        name: "Médina de Marrakech",
        location: { lat: 31.6295, lng: -7.9811 },
        description: "Cœur historique de la ville rouge, patrimoine mondial UNESCO",
        image: "https://images.unsplash.com/photo-1585213303814-2ca9c6bcb400?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8&ixlib=rb-4.0.3&q=60&w=3000"
    },
    {
        name: "Mosquée Hassan II",
        location: { lat: 33.6084, lng: -7.6325 },
        description: "Joyau architectural de Casablanca, minaret de 210 mètres face à l'Atlantique",
        image: "https://plus.unsplash.com/premium_photo-1697729724546-d3862b6fd294?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9zcXUlQzMlQTllJTIwSGFzc2FuJTIwaWl8ZW58MHx8MHx8fDA%3Ds"
    },
    {
        name: "Médina de Fès",
        location: { lat: 34.0631, lng: -4.9998 },
        description: "Plus ancienne université au monde et cité médiévale préservée",
        image: "https://images.unsplash.com/photo-1595932776104-6420686ec455?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZlcyUyMG1vcm9jY298ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000"
    }
];

const villes = [
    {
        name: "Marrakech",
        location: { lat: 31.6295, lng: -7.9811 },
        description: "Ville rouge impériale, porte du désert aux mille et une nuits",
        image: "https://plus.unsplash.com/premium_photo-1699531223630-6afc2189e899?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hcmFrZWNofGVufDB8fDB8fHww"
    },
    {
        name: "Casablanca",
        location: { lat: 33.5731, lng: -7.5898 },
        description: "Métropole économique moderne, entre tradition et modernité",
        image: "https://media.istockphoto.com/id/2164113218/fr/photo/residences-scene-at-african-side-of-the-strait-of-gibraltar-tangier-morocco.webp?a=1&b=1&s=612x612&w=0&k=20&c=U1DokIB6XtdRYh8_e7ZLxWdvR-k9LMwHLzwflvKRBmk="
    },
    {
        name: "Fès",
        location: { lat: 34.0181, lng: -5.0078 },
        description: "Capitale spirituelle et culturelle, berceau de l'artisanat marocain",
        image: "https://plus.unsplash.com/premium_photo-1697729887553-b0392581a691?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RiVDMyVBOHN8ZW58MHx8MHx8fDA%3D"
    }
];

const solidarite = [
    {
        title: "Croix-Rouge Marocaine",
        image: "https://www.chalon.fr/fileadmin/_processed_/6/e/csm_Maroc_b6af7b9a63.jpg",
        description:
            "Association humanitaire qui intervient dans les secours d’urgence, la santé, et l’assistance aux populations vulnérables à travers tout le Maroc.",
    },
    {
        title: "Fondation Mohammed V pour la Solidarité",
        image: "https://www.fh2mre.ma/wp-content/uploads/2021/06/Fondation_mohammed_v_pour_la_solidarite_logo.jpg",
        description:
            "Fondation œuvrant dans le développement social, l’éducation, l’insertion professionnelle et l’assistance humanitaire.",
    },
    {
        title: "Association Marocaine des Droits de l’Homme (AMDH)",
        image: "https://www.amdh.org.ma/bundles/Backend/assets/Contents/imageContent/d14cfebfb61c02ec2b4a8c67691eb984.jpg",
        description:
            "Organisation marocaine qui milite pour les droits humains, la justice sociale et la protection des plus démunis.",
    },
    {
        title: "Entraide Nationale",
        image: "https://lereporterexpress.ma/wp-content/uploads/2020/04/Entraide-Nat.jpg",
        description:
            "Institution publique qui appuie la protection sociale, la formation et l’intégration des personnes en situation de précarité.",
    },
];

export default function Maroc() {
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
                        backgroundImage: "url('https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <div className="flex justify-center gap-4 mb-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg"
                            alt="Drapeau du Maroc"
                            className="w-24 h-16 object-cover"
                        />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Maroc
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Royaume aux mille couleurs, entre Atlas et Sahara. Découvrez les médinas impériales,
                        l'art de vivre berbère et l'hospitalité légendaire marocaine.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Badge variant="secondary" className="bg-red-500/20 text-red-100 border-red-400/30">
                            <Mountain className="w-4 h-4 mr-1" />
                            Atlas
                        </Badge>
                        <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-100 border-yellow-400/30">
                            <Camera className="w-4 h-4 mr-1" />
                            Médinas
                        </Badge>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-100 border-green-400/30">
                            <Users className="w-4 h-4 mr-1" />
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
                                <Card className="h-full">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Users className="h-6 w-6 text-primary" /> Richesse Culturelle
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="flex flex-col gap-6 h-full">
                                        <p className="text-muted-foreground">
                                            Le Maroc est un pays multiculturel où se mêlent influences arabes, berbères et africaines.
                                            Sa culture se reflète dans les vêtements traditionnels, la musique, la danse et les cérémonies festives.
                                        </p>

                                        <div className="flex flex-col gap-6 flex-1">
                                            {/* Tenues traditionnelles berbères */}
                                            <div className="flex flex-col flex-1">
                                                <img
                                                    src="https://femmesdumaroc.com/wp-content/uploads/2019/06/18.jpg"
                                                    alt="Tenue traditionnelle berbère"
                                                    className="rounded-lg object-cover h-full w-full"
                                                />
                                                <p className="text-sm text-muted-foreground font-semibold mt-2">Tenues berbères</p>
                                                <p className="text-xs text-muted-foreground">
                                                    Robes colorées, brodées à la main, portées lors de mariages et fêtes traditionnelles.
                                                </p>
                                            </div>

                                            {/* Tenues traditionnelles marocaines */}
                                            <div className="flex flex-col flex-1">
                                                <img
                                                    src="https://hindboutik.com/wp-content/uploads/2025/05/djellaba-ivoire3.webp"
                                                    alt="Djellaba marocaine"
                                                    className="rounded-lg object-cover h-full w-full"
                                                />
                                                <p className="text-sm text-muted-foreground font-semibold mt-2">Djellaba</p>
                                                <p className="text-xs text-muted-foreground">
                                                    Longue robe ample portée par les hommes et les femmes, symbole de l'identité culturelle marocaine.
                                                </p>
                                            </div>

                                            {/* Tenues de danse traditionnelle */}
                                            <div className="flex flex-col flex-1">
                                                <img
                                                    src="https://imagedelivery.net/UpBbDZmjrt-WGPYbM3yOCA/26-morocco-article-932-what-you-need-to-know-about-oriental-dance-200509454465390842e28b07.18990354/w=469,h=313"
                                                    alt="Danseuse marocaine"
                                                    className="rounded-lg object-cover h-full w-full"
                                                />
                                                <p className="text-sm text-muted-foreground font-semibold mt-2">Costumes de danse traditionnelle</p>
                                                <p className="text-xs text-muted-foreground">
                                                    Vêtements colorés et richement décorés pour les danses populaires comme l’Ahidous et les danses du ventre.
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
                                                        title: "Poterie marocaine",
                                                        image: "https://images.unsplash.com/photo-1706794831005-e0cbae755fae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UG90ZXJpZSUyMG1hcm9jYWluZXxlbnwwfHwwfHx8MA%3D%3D",
                                                    },
                                                    {
                                                        title: "Tapis berbères",
                                                        image: "https://images.unsplash.com/flagged/photo-1595520356953-41f628be588c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGFwaXMlMjBiZXJiJUMzJUE4cmVzJTIwbWFyb2NhaW5lfGVufDB8fDB8fHww",
                                                    },
                                                    {
                                                        title: "Bijoux en argent",
                                                        image: "https://media.istockphoto.com/id/930564696/fr/photo/bijoux-en-argent-sur-une-b%C3%A2che-bleue-dans-la-rue-march%C3%A9-aux-puces.webp?a=1&b=1&s=612x612&w=0&k=20&c=6YgkaF_xhbILU26Q1j5AA2oDQ7DL7TYjmQz0v8HIajI=",
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
                                                        image: "https://media.istockphoto.com/id/1143191120/fr/photo/tajine-marocaine-traditionnelle-de-poulet-aux-fruits-secs-et-aux-%C3%A9pices.webp?a=1&b=1&s=612x612&w=0&k=20&c=wSyBLyyfQ_UakuI_cUqwsU0ClluycbJi-Ns3gSuopuE=",
                                                    },
                                                    {
                                                        title: "Tagine",
                                                        image: "https://images.unsplash.com/photo-1682370207954-c8a9cccaabb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGFnaW5lJTIwbWFyb2NhaW58ZW58MHx8MHx8fDA%3D",
                                                    },
                                                    {
                                                        title: "Pastilla",
                                                        image: "https://media.istockphoto.com/id/946267390/fr/photo/pastilla-marocaine-bsteeya.webp?a=1&b=1&s=612x612&w=0&k=20&c=R17PTqaZVPrSrZlvjou0rrdQvXW8-0grrdwDAJ1C64E=",
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
                                    <h3 className="text-2xl font-bold mb-4">Explorez le Maroc en Street View</h3>
                                    <p className="text-muted-foreground max-w-2xl mx-auto">
                                        Découvrez les monuments, villes et sites emblématiques du Maroc directement depuis votre navigateur
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
                                        <h4 className="text-xl font-bold mb-4">Monuments & Sites Historiques</h4>
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
                            © {new Date().getFullYear()} Explorez le Maroc avec nous
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}