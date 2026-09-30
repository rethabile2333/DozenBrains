import { Link } from "react-router-dom";
import { GraduationCap, Code2, Wrench, Network, ClipboardCheck, ArrowRight } from "lucide-react";

const areas = [
  [Code2, "Software & Web Development", "Build and support practical software projects and learn professional development workflows."],
  [Wrench, "Hardware & Repair", "Gain hands-on exposure to computer diagnostics, maintenance, repair and hardware support."],
  [Network, "IT & Networking", "Work with practical IT support, connectivity, systems and troubleshooting tasks."],
  [ClipboardCheck, "Professional Practice", "Learn documentation, teamwork, customer support, problem-solving and workplace discipline."],
];

export default function Internships() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">STUDENT DEVELOPMENT</div>
          <h1>Internships & <span>Workplace Attachment</span></h1>
          <p>Helping IT students bridge the gap between academic learning and practical workplace experience.</p>
        </div>
      </section>

      <section className="section">
        <div className="container internship-intro">
          <div className="internship-badge"><GraduationCap size={42} /></div>
          <div>
            <div className="eyebrow">FOR IT STUDENTS</div>
            <h2>Turn classroom knowledge into <span>real experience.</span></h2>
            <p>
              Dozen Brains provides internship and attachment opportunities for students
              from institutions such as Botho University, Limkokwing University of
              Creative Technology and the National University of Lesotho.
            </p>
            <p>
              Placements can expose students to software, hardware, programming,
              troubleshooting, documentation and other practical IT activities,
              depending on the placement requirements and available work.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-bg">
        <div className="container">
          <div className="section-heading centered">
            <div>
              <div className="eyebrow">WHAT INTERNS CAN LEARN</div>
              <h2>Practical skills for the <span>technology workplace.</span></h2>
            </div>
          </div>
          <div className="service-preview">
            {areas.map(([Icon, title, text]) => (
              <article className="service-card" key={title}>
                <div className="icon-box"><Icon /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container application-box">
          <div>
            <div className="eyebrow">INTERESTED?</div>
            <h2>Students can enquire about <span>available placements.</span></h2>
            <p>
              Placement availability, duration and requirements may vary. Contact the
              company with your institution, programme, attachment dates and required documentation.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary">Enquire About Attachment <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}