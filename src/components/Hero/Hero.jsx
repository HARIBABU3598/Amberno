import { useState } from "react";
import "./Hero.css";
import heroImg from "../../assets/images/hero.png";
import logoIcon from "../../assets/images/Icon.png";
import wordMark from "../../assets/images/WordMark.png";

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="hero">

      {/* Announcement Bar */}
      <div className="announcement-bar">
  <div className="marquee">
    <div className="marquee-content">
      <span>COLLECTION DROPPING SOON </span>
      <span>COLLECTION DROPPING SOON </span>
      <span>COLLECTION DROPPING SOON </span>
      <span>COLLECTION DROPPING SOON </span>
      <span>COLLECTION DROPPING SOON </span>

      {/* Duplicate for seamless loop */}
      <span>COLLECTION DROPPING SOON </span>
      <span>COLLECTION DROPPING SOON </span>
      <span>COLLECTION DROPPING SOON </span>
      <span>COLLECTION DROPPING SOON </span>
      <span>COLLECTION DROPPING SOON </span>
    </div>
  </div>
</div>

      {/* Hero Image */}
      <img src={heroImg} alt="Amberno" className="hero-img" />

      {/* Navbar */}
      <nav className="hero-navbar">

        {/* Left Logo */}
        <img
          src={wordMark}
          alt="Amberno"
          className="brand-name"
        />

        {/* Center Menu (Desktop) */}
        <div className="hero-nav-links">
          <a href="/">COLLECTION</a>
          <a href="/">COLOURS</a>
          <a href="/">ABOUT</a>
        </div>

        {/* Mobile Menu Toggler */}
        <button
          className={`mobile-menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Right Shop */}
        <div className="hero-shop">
          <span>SHOP</span>
          <div className="profile-circle"></div>
        </div>

      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="mobile-menu-links" onClick={(e) => e.stopPropagation()}>
          <a href="/" onClick={() => setIsMenuOpen(false)}>COLLECTION</a>
          <a href="/" onClick={() => setIsMenuOpen(false)}>COLOURS</a>
          <a href="/" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
          <a href="/" onClick={() => setIsMenuOpen(false)}>SHOP</a>
        </div>
      </div>

      {/* Main Heading */}
      <div className="hero-content">
        <h1>
          COLLECTIONS
          <br />
          DROPPING SOON
        </h1>
      </div>

      {/* Right Crown */}
      <img
        src={logoIcon}
        alt="Logo"
        className="floating-logo"
      />

      {/* Bottom Line */}
      <div className="hero-bottom">
        <div className="left-text">BUILT IN</div>

        <div className="center-line"></div>

        <div className="right-text">SILENCE.</div>
      </div>

      {/* Small Text */}
      <div className="hero-small-text">
        Solids only. Relaxed fit.
        <br />
        Made in Tamil Nadu, India.
      </div>

      {/* Scroll */}
      <div className="scroll-text">
        ↓
      </div>

      {/* Orange Strip */}
      <div className="bottom-accent"></div>

    </section>
  );
}

export default Hero;