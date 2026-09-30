import { GraduationCap, UserRound } from "lucide-react";

const interns = [
  {
    name: "Rethabile Thatho",
    programme: "Bsc Honours in Computing(General) @Botho University",
    role: "Information Technology Intern",
    image: "/team1.jpeg",
  },
  {
    name: "Nkopane Mats'aba",
    programme: "Bsc Honours in Computing(Sofware Engineering) @Botho University",
    role: "Information Technology Intern",
    image: "/team2.jpeg",
  },
  {
    name: "Thapelo Mohasoa",
    programme: "Bsc Honours in Computing(Software Engineering) @Botho University",
     role: "Information Technology Intern",
    image: "/team3.jpeg",
  },
  {
    name: "Katleho Rantho",
     role: "Information Technology Intern",
    programme: "Bsc Honours in Computing(Network and Infrastructure Management) @Botho University",
    image: "/team4.jpeg",
  },
];

export default function Team() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">THE PEOPLE BEHIND THE WORK</div>
          <h1>
            Our <span>Team</span>
          </h1>
          <p>
            Meet the leadership and students contributing to the Dozen Brains
            workplace.
          </p>
        </div>
      </section>

      {/* CEO SECTION */}
      <section className="section">
        <div className="container">
          <div className="team-section-title">
            <div className="eyebrow">LEADERSHIP</div>
            <h2>
              Company <span>Leadership</span>
            </h2>
          </div>

          <article className="ceo-card">
            <div className="profile-photo">
              <img
                src="/milo1.jpeg"
                alt="Ntate Monamoli Mahlekele - Founder and CEO of Dozen Brains"
              />
            </div>

            <div className="ceo-info">
              <div className="eyebrow">FOUNDER & CEO</div>

              <h2>Ntate Monamoli Mahlekele</h2>

              <p>
                Founder and Chief Executive Officer of Dozen Brains,
                responsible for leading the company and its technology
                services.
              </p>

              <div className="profile-tags">
                <span>Leadership</span>
                <span>IT Services</span>
                <span>Technology</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CURRENT TEAM */}
      <section className="section soft-bg">
        <div className="container">
          <div className="team-section-title">
            <div className="eyebrow">CURRENT TEAM</div>

            <h2>
              Meet Our <span>Team Members</span>
            </h2>

            <p className="muted">
              Meet the current team members contributing to the work and
              development of Dozen Brains.
            </p>
          </div>

          <div className="intern-grid">
  {interns.map((intern, index) => (
    <article className="intern-card" key={index}>
      <div className="intern-photo">
        <img
          src={intern.image}
          alt={intern.name}
        />
      </div>

      <div className="intern-info">
        <span className="status">CURRENT TEAM MEMBER</span>

        <h3>{intern.name}</h3>

        <p className="intern-role">{intern.role}</p>

        <p>{intern.programme}</p>
      </div>
    </article>
  ))}
</div>
        </div>
      </section>

      {/* TEAM NOTE */}
      <section className="section">
        <div className="container alumni-note">
          <UserRound size={28} />

          <div>
            <h3>Growing together through technology</h3>

            <p>
              Dozen Brains brings together technical experience, practical
              learning and teamwork to provide technology services and develop
              future IT professionals.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}