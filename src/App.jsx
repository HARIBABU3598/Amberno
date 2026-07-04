import { useState, useEffect } from "react";
import Home from "./pages/Home";
import logoIcon from "./assets/images/Icon.png";
import wordMark from "./assets/images/WordMark.png";
import "./App.css";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [fadePreloader, setFadePreloader] = useState(false);

  useEffect(() => {
    // Start fading out after 2 seconds
    const fadeTimeout = setTimeout(() => {
      setFadePreloader(true);
    }, 2000);

    // Completely unmount the preloader after the transition finishes (2.8 seconds)
    const removeTimeout = setTimeout(() => {
      setShowPreloader(false);
    }, 2800);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  return (
    <>
      {showPreloader && (
        <div className={`preloader ${fadePreloader ? "fade-out" : ""}`}>
          <div className="preloader-logo-wrap">
            <img src={logoIcon} alt="Logo Icon" className="preloader-icon" />
            <img src={wordMark} alt="Amberno" className="preloader-wordmark" />
          </div>
        </div>
      )}
      <div className={`main-app-content ${fadePreloader ? "loaded" : ""}`}>
        <Home />
      </div>
    </>
  );
}

export default App;