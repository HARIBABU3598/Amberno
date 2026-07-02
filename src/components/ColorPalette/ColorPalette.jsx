import "./ColorPalette.css";

function ColorPalette() {
  const colors = [
  { name: "Black", code: "#0b0b0b", text: "#ffffff" },
  { name: "Paper", code: "#f2f0eb", text: "#000000" },
  { name: "Stone", code: "#d8d2c8", text: "#000000" },
  { name: "Sage", code: "#aebea9", text: "#ffffff" },
  { name: "Sky", code: "#bdd3df", text: "#ffffff" },

  { name: "Sand", code: "#b6a28a", text: "#ffffff" },
  { name: "Charcoal", code: "#434348", text: "#ffffff" },
  { name: "Steel", code: "#8a96a5", text: "#ffffff" },
  { name: "Cream", code: "#e8e3d9", text: "#000000" },
  { name: "Dust Rose", code: "#d2a9b3", text: "#ffffff" },
];

  return (
    <section className="colorPalette">

      <div className="paletteHeader">
        <span>COLOUR STORY</span>
        <div className="paletteLine"></div>
      </div>

      <h2 className="paletteTitle">
  <span className="titleMain">
    EVERY COLOUR CHOSEN
    <br />
    FOR HOW IT LIVES,
  </span>

  <br />

  <span className="titleFade">
    NOT HOW IT SHOUTS.
  </span>
</h2>

     <div className="paletteGrid">
  {colors.map((color, index) => (
    <div
      key={index}
      className="colorCard"
      style={{
        background: color.code,
        color: color.text,
      }}
    >
      <span>{color.name}</span>
    </div>
  ))}
</div>

    </section>
  );
}

export default ColorPalette;