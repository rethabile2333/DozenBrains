import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cpu,
  Code2,
  Wrench,
  GraduationCap,
  ShieldCheck,
  Zap,
  Globe2,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Software & Programming",
    text: "Web applications, programming support, software setup and technology solutions.",
  },
  {
    icon: Wrench,
    title: "Computer Repair",
    text: "Diagnostics, troubleshooting, maintenance, upgrades and practical hardware support.",
  },
  {
    icon: Cpu,
    title: "Hardware & Box Programming",
    text: "Computer hardware services, box repair, cloning and programming support.",
  },
  {
    icon: GraduationCap,
    title: "IT Internships",
    text: "Hands-on workplace exposure for students studying IT, computing and related fields.",
  },
];

export default function Home() {
  return (
    <>
      {/* =========================================
          HERO
      ========================================= */}
      <section className="hero">

        {/* Animated background */}
        <div className="hero-grid"></div>

        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>


        <div className="container hero-container">

          {/* LEFT SIDE */}
          <div className="hero-content">

            <div className="hero-badge">
              <span className="badge-dot"></span>
              IT • SOFTWARE • HARDWARE • TRAINING
            </div>

            <h1>
              Building Digital Solutions.
              <span> Developing Future Talent.</span>
            </h1>

            <p className="hero-description">
              DozenBrains delivers practical IT, software and hardware
              solutions while creating opportunities for the next generation
              of technology professionals.
            </p>

            <div className="hero-buttons">

              <Link to="/contact" className="hero-btn primary">
                Get Started
                <ArrowRight size={19} />
              </Link>

              <Link to="/services" className="hero-btn secondary">
                Explore Services
              </Link>

            </div>

            <div className="hero-stats">

              <div className="hero-stat">
                <strong>IT</strong>
                <span>Solutions</span>
              </div>

              <div className="stat-line"></div>

              <div className="hero-stat">
                <strong>SW</strong>
                <span>Development</span>
              </div>

              <div className="stat-line"></div>

              <div className="hero-stat">
                <strong>HW</strong>
                <span>Support</span>
              </div>

              <div className="stat-line"></div>

              <div className="hero-stat">
                <strong>IT</strong>
                <span>Training</span>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="hero-visual">

            <div className="tech-circle circle-one"></div>
            <div className="tech-circle circle-two"></div>
            <div className="tech-circle circle-three"></div>

            <div className="logo-container">

              <div className="logo-ring ring-one"></div>
              <div className="logo-ring ring-two"></div>

              <div className="logo-card">

                <div className="logo-shine"></div>

                <img
                  src="/db.jpeg"
                  alt="DozenBrains Logo"
                  className="hero-logo"
                />

                <div className="logo-label">
                  <span>DOZEN</span>BRAINS
                </div>

                <div className="logo-status">
                  <span></span>
                  INNOVATING THE FUTURE
                </div>

              </div>

            </div>

            {/* Orbit dots */}
            <span className="orbit-dot dot-one"></span>
            <span className="orbit-dot dot-two"></span>
            <span className="orbit-dot dot-three"></span>
            <span className="orbit-dot dot-four"></span>

          </div>

        </div>

        <div className="scroll-explore">
  <div className="scroll-mouse">
    <span className="scroll-wheel"></span>
  </div>

  <span>Scroll to Explore</span>
</div>

      </section>


      {/* =========================================
          SERVICES PREVIEW
      ========================================= */}
      <section className="section">

        <div className="container">

          <div className="section-heading">

            <div>
              <div className="eyebrow">
                WHAT WE DO
              </div>

              <h2>
                One technology partner.
                <br />
                <span>Multiple solutions.</span>
              </h2>
            </div>

            <p>
              From fixing a computer to building software and developing
              practical IT skills, DozenBrains brings technical services
              together under one roof.
            </p>

          </div>

          <div className="service-preview">

            {highlights.map(({ icon: Icon, title, text }) => (

              <article
                className="service-card"
                key={title}
              >

                <div className="icon-box">
                  <Icon />
                </div>

                <h3>{title}</h3>

                <p>{text}</p>

                <Link to="/services">
                  Learn more
                  <ArrowRight size={16} />
                </Link>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          WHY DOZENBRAINS
      ========================================= */}
      <section className="dark-section">

        <div className="container split">

          <div>

            <div className="eyebrow">
              WHY DOZENBRAINS
            </div>

            <h2>
              Practical technology.
              <br />
              <span>Real-world experience.</span>
            </h2>

          </div>

          <div className="feature-list">

            <div>
              <ShieldCheck />

              <div>
                <h3>Problem-solving first</h3>

                <p>
                  We focus on diagnosing the real problem and
                  delivering a practical solution.
                </p>
              </div>
            </div>


            <div>
              <Zap />

              <div>
                <h3>Hands-on approach</h3>

                <p>
                  Our work combines technical knowledge with
                  practical implementation and repair.
                </p>
              </div>
            </div>


            <div>
              <GraduationCap />

              <div>
                <h3>Developing future talent</h3>

                <p>
                  Internships give students an opportunity to
                  connect academic learning with workplace practice.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CONTACT CTA
      ========================================= */}
      <section className="cta-section">

        <div className="container cta">

          <div>

            <div className="eyebrow">
              LET'S WORK TOGETHER
            </div>

            <h2>
              Have a technology problem?
            </h2>

            <p>
              Talk to DozenBrains about your IT, software
              or hardware needs.
            </p>

          </div>

          <Link
            to="/contact"
            className="btn btn-primary"
          >
            Contact DozenBrains
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </>
  );
}
