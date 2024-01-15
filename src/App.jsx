import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import About from "./pages/About";
import Guide from "./pages/Guide";
import Offer from "./pages/Offer";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/HomePage";
import SiteLayout from "./components/SiteLayout";
function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SiteLayout />}>
            <Route index element={<Homepage />} />
            <Route path="strona-glowna" element={<Homepage />} />
            <Route path="o-mnie" element={<About />} />
            <Route path="poradnik" element={<Guide />} />
            <Route path="oferta" element={<Offer />} />
            <Route path="galeria" element={<Gallery />} />
            <Route path="kontakt" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
