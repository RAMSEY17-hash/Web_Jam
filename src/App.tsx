import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DefaultProviders } from "./components/providers/default.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

// Pages continents
import Afrique from "./pages/continents/Afrique.tsx";
import AmeriqueNord from "./pages/continents/AmeriqueNord.tsx";
import AmeriqueSud from "./pages/continents/AmeriqueSud.tsx";
import Europe from "./pages/continents/Europe.tsx";
import Asie from "./pages/continents/Asie.tsx";
import Oceanie from "./pages/continents/Oceanie.tsx";

// Pages pays Afrique
import Egypte from "./pages/pays/afrique/Egypte.tsx";
import Maroc from "./pages/pays/afrique/Maroc.tsx";
import Algerie from "./pages/pays/afrique/Algerie.tsx";
import Kenya from "./pages/pays/afrique/Kenya.tsx";
import AfriqueSud from "./pages/pays/afrique/AfriqueSud.tsx";

export default function App() {
    return (
        <DefaultProviders>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />

                    {/* Continents */}
                    <Route path="/continent/afrique" element={<Afrique />} />
                    <Route path="/continent/amerique-nord" element={<AmeriqueNord />} />
                    <Route path="/continent/amerique-sud" element={<AmeriqueSud />} />
                    <Route path="/continent/europe" element={<Europe />} />
                    <Route path="/continent/asie" element={<Asie />} />
                    <Route path="/continent/oceanie" element={<Oceanie />} />

                    {/* Pays Afrique */}
                    <Route path="/pays/afrique/egypte" element={<Egypte />} />
                    <Route path="/pays/afrique/maroc" element={<Maroc />} />
                    <Route path="/pays/afrique/algerie" element={<Algerie />} />
                    <Route path="/pays/afrique/kenya" element={<Kenya />} />
                    <Route path="/pays/afrique/afrique-sud" element={<AfriqueSud />} />

                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </DefaultProviders>
    );
}