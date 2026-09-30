import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Lightbulb, Users } from "lucide-react";

export default function About() {
  return (
    <>
      <PageHero />
      <section className="section">
        <div className="container about-grid">
          <div>
            <div className="eyebrow">ABOUT DOZEN BRAINS</div>
            <h2>Built around technology, <span>service and learning.</span></h2>
          </div>
          <div>
            <p className="lead">
              Dozen Brains is an IT company founded and led by <strong>Ntate Monamoli Mahlekele, CEO</strong>.
              The company provides practical technology services spanning software, computer hardware,
              programming, repair and technical support.
            </p>
            <p>
              Dozen Brains also supports IT students through internships and workplace attachments,
              helping learners turn classroom knowledge into practical skills.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-bg">
        <div className="container values-grid">
          <Value icon={Target} title="Mission" text="To provide practical, dependable technology services while helping develop capable IT professionals through hands-on experience." />
          <Value icon={Eye} title="Vision" text="To grow as a trusted technology company that connects technical services, innovation and skills development." />
          <Value icon={Lightbulb} title="Innovation" text="We encourage practical problem-solving, continuous learning and technology that addresses real needs." />
          <Value icon={Users} title="People" text="We value customers, learners and technical professionals as part of a growing technology community." />
        </div>
      </section>

      <section className="section">
        <div className="container split about-callout">
          <div>
            <div className="eyebrow">OUR APPROACH</div>
            <h2>Learn. Build. <span>Repair. Improve.</span></h2>
          </div>
          <div>
            <p>
              Our work can involve diagnosing a computer issue, repairing hardware,
              programming devices, developing software or supporting an IT student
              during workplace attachment.
            </p>
            <Link to="/internships" className="text-link">Learn about student opportunities <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Value({ icon: Icon, title, text }) {
  return (
    <article className="value-card">
      <div className="icon-box"><Icon /></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function PageHero() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="eyebrow">WHO WE ARE</div>
        <h1>About <span>Dozen Brains</span></h1>
        <p>Technology services and practical learning opportunities from a Lesotho-based IT company.</p>
      </div>
    </section>
  );
}