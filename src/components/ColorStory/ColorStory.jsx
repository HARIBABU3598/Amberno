import "./ColorStory.css";

function ColorStory() {
  return (
    <section className="color-story">

      <div className="story-header">
        <span>COLOUR PHILOSOPHY</span>
        <div className="story-line"></div>
      </div>

      <div className="story-content">

        <div className="story-left">
          <h2>
            EVERY COLOUR CHOSEN
            <br />
            FOR HOW IT LIVES,
            <br />
            NOT HOW IT SHOUTS.
          </h2>
        </div>

        <div className="story-right">
          <p>
            We work with muted shades that settle into daily life.
            Colours that feel familiar, age naturally, and remain
            timeless beyond seasonal trends.
          </p>
        </div>

      </div>

      <div className="palette-grid">

        <div className="palette-card beige">
          <span>SAND</span>
        </div>

        <div className="palette-card cream">
          <span>BONE</span>
        </div>

        <div className="palette-card olive">
          <span>OLIVE</span>
        </div>

        <div className="palette-card brown">
          <span>EARTH</span>
        </div>

        <div className="palette-card charcoal">
          <span>CHARCOAL</span>
        </div>

      </div>

    </section>
  );
}

export default ColorStory;