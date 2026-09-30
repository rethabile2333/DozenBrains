import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">DOZEN<span>BRAINS</span></div>
          <p>
            Practical IT, software and hardware solutions for individuals,
            businesses and organisations, while helping IT students gain
            real-world workplace experience.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/internships">Internships</Link>
          <Link to="/team">Our Team</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <p><Phone size={15} /> <span>+266 5388 2100</span></p>
          <p><Mail size={15} /> <span>ntatemilobookings@gmail.com</span></p>
          <p><MapPin size={15} /> <span>Ha-Abia near Ha Motaung, Maseru, Lesotho</span></p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} Dozen Brains. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}