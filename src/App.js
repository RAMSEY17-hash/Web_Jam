import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
import Egypte from "./pages/pays/Afrique/Egypte.tsx";
import Maroc from "./pages/pays/Afrique/Maroc.tsx";
import Algerie from "./pages/pays/Afrique/Algerie.tsx";
import Kenya from "./pages/pays/Afrique/Kenya.tsx";
import AfriqueSud from "./pages/pays/Afrique/AfriqueSud.tsx";
export default function App() {
    return (_jsx(DefaultProviders, { children: _jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Index, {}) }), _jsx(Route, { path: "/continent/afrique", element: _jsx(Afrique, {}) }), _jsx(Route, { path: "/continent/amerique-nord", element: _jsx(AmeriqueNord, {}) }), _jsx(Route, { path: "/continent/amerique-sud", element: _jsx(AmeriqueSud, {}) }), _jsx(Route, { path: "/continent/europe", element: _jsx(Europe, {}) }), _jsx(Route, { path: "/continent/asie", element: _jsx(Asie, {}) }), _jsx(Route, { path: "/continent/oceanie", element: _jsx(Oceanie, {}) }), _jsx(Route, { path: "/pays/afrique/egypte", element: _jsx(Egypte, {}) }), _jsx(Route, { path: "/pays/afrique/maroc", element: _jsx(Maroc, {}) }), _jsx(Route, { path: "/pays/afrique/algerie", element: _jsx(Algerie, {}) }), _jsx(Route, { path: "/pays/afrique/kenya", element: _jsx(Kenya, {}) }), _jsx(Route, { path: "/pays/afrique/afrique-sud", element: _jsx(AfriqueSud, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }) }));
}
