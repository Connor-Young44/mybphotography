import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="navbar-logo">
        <img
          src="ChatGPT Image Jul 30, 2025, 09_47_41 AM.png"
          alt="Maartje Young-Braam Photography Logo"
          style={{
            height: "90px",
            width: "auto",
            display: "block",
            objectFit: "contain",
          }}
        />
      </div>
      <div
        className="navbar-hamburger"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
        aria-expanded={open}
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === "Enter" || e.key === " ") setOpen((prev) => !prev);
        }}
      >
        <span />
        <span />
        <span />
      </div>
      <ul
        className={open ? "navbar-mobile-open" : ""}
        onClick={() => setOpen(false)}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
