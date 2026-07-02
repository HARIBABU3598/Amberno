import "./Hero.css";
import heroImg from "../../assets/images/hero.png";
import logoIcon from "../../assets/images/Icon.png";
import wordMark from "../../assets/images/WordMark.png";

function Hero() {
  return (
    <section className="hero">

      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span>NEW COLLECTION DROPPING SOON</span>
        <span>NEW COLLECTION DROPPING SOON</span>
        <span>NEW COLLECTION DROPPING SOON</span>
        <span>NEW COLLECTION DROPPING SOON</span>
        <span>NEW COLLECTION DROPPING SOON</span>
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

        {/* Center Menu */}
        <div className="hero-nav-links">
          <a href="/">COLLECTION</a>
          <a href="/">COLOURS</a>
          <a href="/">ABOUT</a>
        </div>

        {/* Right Shop */}
        <div className="hero-shop">
          <span>SHOP</span>
          <div className="profile-circle"></div>
        </div>

      </nav>

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
        SCROLL
      </div>

      {/* Orange Strip */}
      <div className="bottom-accent"></div>

    </section>
  );
}

export default Hero;