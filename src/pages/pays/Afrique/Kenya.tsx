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

const solidarite = [
    {
        title: "Croix-Rouge du Kenya",
        image: "https://www.i-resilience.com/wp-content/uploads/2014/07/IMG_20140213_140922.jpg",
        description:
            "Organisation humanitaire de premier plan au Kenya, active dans les secours d’urgence, la santé et les programmes de résilience communautaire.",
    },
    {
        title: "Shining Hope for Communities (SHOFCO)",
        image: "https://assets.citizen.digital/150696/conversions/IMG-20250425-WA0272%282%29-og_image.webp",
        description:
            "ONG kényane offrant des services d’éducation, de santé et de développement économique dans les bidonvilles de Nairobi et d’autres régions.",
    },
    {
        title: "Amref Health Africa",
        image: "https://pbs.twimg.com/media/Gbie73tXQAAdb8w.jpg:large",
        description:
            "Organisation de santé africaine née au Kenya, œuvrant dans l’accès aux soins, la formation médicale et la santé communautaire.",
    },
    {
        title: "Kenya Community Development Foundation (KCDF)",
        image: "https://media.licdn.com/dms/image/v2/D4E22AQF3B53zThT52g/feedshare-shrink_800/B4EZO_3mAMHkAo-/0/1734090843780?e=2147483647&v=beta&t=ekj60khsDKtSx8rWGjHEmS1MVK9o230MDt9kSYw5GfY",
        description:
            "Fondation qui soutient le développement communautaire durable, l’éducation et la réduction de la pauvreté au Kenya.",
    },
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
                                <Card className="h-full">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Users className="h-6 w-6 text-primary" /> Richesse Culturelle
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="flex flex-col gap-6 h-full">
                                        <p className="text-muted-foreground">
                                            Le Kenya est un pays multiculturel où cohabitent plus de 40 groupes ethniques.
                                            Sa richesse culturelle se reflète dans les vêtements traditionnels, les danses,
                                            la musique et les cérémonies rituelles.
                                        </p>

                                        <div className="flex flex-col gap-6 flex-1">
                                            {/* Exemple de tenues Maasai */}
                                            <div className="flex flex-col flex-1">
                                                <img
                                                    src="https://thumbs.dreamstime.com/z/masai-en-tenue-traditionnelle-color%C3%A9e-montrant-maasai-saut-danser-%C3%A0-la-tribu-locale-village-pr%C3%A8s-de-c%C3%A9l%C3%A8bre-destination-289849635.jpg"
                                                    alt="Tenue traditionnelle Maasai"
                                                    className="rounded-lg object-cover h-full w-full"
                                                />
                                                <p className="text-sm text-muted-foreground font-semibold mt-2">Tenues Maasai</p>
                                                <p className="text-xs text-muted-foreground">
                                                    Vêtements rouges distinctifs, perles colorées et bijoux élaborés portés lors des cérémonies traditionnelles.
                                                </p>
                                            </div>

                                            {/* Exemple de tenues Kikuyu */}
                                            <div className="flex flex-col flex-1">
                                                <img
                                                    src="https://c8.alamy.com/compfr/cn1b4r/les-kikuyu-gikuyu-danse-et-battre-le-tambour-aberdare-kenya-cn1b4r.jpg"
                                                    alt="Tenue traditionnelle Kikuyu"
                                                    className="rounded-lg object-cover h-full w-full"
                                                />
                                                <p className="text-sm text-muted-foreground font-semibold mt-2">Tenues Kikuyu</p>
                                                <p className="text-xs text-muted-foreground">
                                                    Robes colorées et coiffures traditionnelles, souvent accompagnées de colliers et bracelets en perles.
                                                </p>
                                            </div>

                                            {/* Exemple de tenues Samburu */}
                                            <div className="flex flex-col flex-1">
                                                <img
                                                    src="https://thumbs.dreamstime.com/b/femmes-traditionnelles-de-samburu-au-kenya-95731917.jpg"
                                                    alt="Tenue traditionnelle Samburu"
                                                    className="rounded-lg object-cover h-full w-full"
                                                />
                                                <p className="text-sm text-muted-foreground font-semibold mt-2">Tenues Samburu</p>
                                                <p className="text-xs text-muted-foreground">
                                                    Vêtements et ornements en perles, souvent rouges et bleus, caractéristiques du peuple Samburu.
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
                                                        title: "Perles Maasai",
                                                        image: "https://i.pinimg.com/736x/95/be/94/95be94b6dde4cb60231f3590281b2dcb.jpg",
                                                    },
                                                    {
                                                        title: "Sculptures en bois",
                                                        image: "https://c8.alamy.com/compfr/b57mr5/les-sculptures-sur-bois-sont-en-vente-dans-un-magasin-au-kenya-s-historique-ville-portuaire-de-mombasa-b57mr5.jpg",
                                                    },
                                                    {
                                                        title: "Tissus kitenge",
                                                        image: "https://d17a17kld06uk8.cloudfront.net/products/IUPWSH4/9ST4RIXR-default.jpg",
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

                                            {/* Gastronomie */}
                                            <div className="space-y-2">
                                                <h4 className="font-semibold">Gastronomie</h4>
                                                {[
                                                    {
                                                        title: "Ugali",
                                                        image: "https://www.voyagekenya.fr/cdn/ke-public/ugali.jpg",
                                                    },
                                                    {
                                                        title: "Nyama Choma",
                                                        image: "https://lowcarbafrica.com/wp-content/uploads/2022/10/Nyama-Choma-IG-1.jpg",
                                                    },
                                                    {
                                                        title: "Sukuma Wiki",
                                                        image: "https://kitchengatherings.com/wp-content/uploads/sukumawiki-kale-main.jpg",
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
                                                className="rounded-lg mb-2 h-full w-full object-cover"
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
                            © {new Date().getFullYear()} Explorez le Kenya avec nous
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}