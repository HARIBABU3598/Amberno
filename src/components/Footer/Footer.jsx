import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footerContent">

        {/* Left */}
        <div className="footerBrand">
          <h2>AMBERNO</h2>
          <p>BUILT IN SILENCE</p>
        </div>

        {/* Center */}
        <div className="footerLinks">
          <h4>COLLECTIONS</h4>

          <a href="#">The Daily Tee</a>
          <a href="#">The Void Hoodie</a>
          <a href="#">The Easy Trouser</a>
          <a href="#">The Overshirt</a>
        </div>

        {/* Right */}
        <div className="footerContact">
          <h4>CONTACT</h4>

          <p>team@amberno.in</p>
          <p>@amberno.in</p>
          <p>@amberno</p>
          <p>+91 99400 67818</p>
        </div>

      </div>

      <div className="footerBottom">

        <p>
          © 2026 AMBERNO. Made in Tamil Nadu, India.
        </p>

        <button
          className="backToTop"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Back to top ↑
        </button>

      </div>

    </footer>
  );
}

export default Footer;