// Home.jsx

import Hero from "../components/Hero/Hero";
import CollectionSection from "../components/CollectionSection/CollectionSection";
import ColorPalette from "../components/ColorPalette/ColorPalette";
import Philosophy from "../components/Philosophy/Philosophy";
import QuoteSection from "../components/QuoteSection/QuoteSection";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <CollectionSection />
      <ColorPalette />
      <Philosophy />
      <QuoteSection />
      <Footer/>
    </>
  );
}

export default Home;