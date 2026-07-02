import "./Navbar.css";
import icon from "../../assets/images/Icon.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={icon} alt="Amberno" className="logo-icon" />
        <h2>AMBERNO</h2>
      </div>

      <ul className="nav-links">
        <li>COLLECTIONS</li>
        <li>SEASON 01</li>
        <li>ABOUT</li>
      </ul>

      <div className="cart">🛒</div>
    </nav>
  );
}

export default Navbar;