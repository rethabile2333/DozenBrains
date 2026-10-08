import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/internships", "Internships"],
  ["/team", "Our Team"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">

        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img
            src="/db.jpeg"
            alt="DozenBrains Logo"
            className="brand-logo"
          />

          <span>
            DOZEN<span>BRAINS</span>
          </span>
        </Link>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            Get in Touch
          </Link>
        </nav>

      </div>
    </header>
  );
}
