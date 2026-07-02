import "./Philosophy.css";
import tshirt from "../../assets/images/tshirt.png";

function Philosophy() {
  return (
    <section className="philosophy">

      <div className="philosophyLeft">

        <h2>
          NO GRAPHIC.
          <br />
          NO NOISE.
          <br />
          <span>JUST CLOTH.</span>
        </h2>

        <p className="philosophyDescription">
          AMBERNO isn't another graphic tee brand. It's built around quiet design, everyday wear, and clothing that becomes part of your life.
        </p>

        <div className="featureBox">
          <h4>No Graphics</h4>
          <p>The garment speaks through fabric.</p>
        </div>

        <div className="featureBox">
          <h4>Relaxed Fit</h4>
          <p>Built for daily comfort.</p>
        </div>

        <div className="featureBox">
          <h4>Muted Palette</h4>
          <p>Colours designed to age naturally.</p>
        </div>

        <div className="featureBox">
          <h4>Built Here</h4>
          <p>Made in Tamil Nadu, India.</p>
        </div>

      </div>

      <div className="philosophyRight">
        <img src={tshirt} alt="T-Shirt" />
      </div>

    </section>
  );
}

export default Philosophy;