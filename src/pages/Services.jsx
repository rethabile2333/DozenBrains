import { Code2, Wrench, Cpu, Database, Settings, Laptop, Network, ShieldCheck } from "lucide-react";

const services = [
  ["Software Development & Programming", "Custom software, websites, programming projects, troubleshooting and software support.", Code2],
  ["Computer Repair & Maintenance", "Computer diagnostics, operating-system support, maintenance, upgrades and troubleshooting.", Wrench],
  ["Hardware Services", "Hardware installation, component replacement, upgrades and general computer hardware support.", Cpu],
  ["Computer Box Repair & Programming", "Box-related repair, cloning and programming services for supported devices and equipment.", Settings],
  ["Cloning & System Setup", "System cloning, software installation, configuration and deployment support.", Database],
  ["IT Technical Support", "Practical assistance with computers, software, connectivity and day-to-day technology problems.", Laptop],
  ["Networking & Connectivity", "Basic network setup, troubleshooting and connectivity support for homes, offices and small organisations.", Network],
  ["Technology Security Support", "Basic security-minded setup, system hygiene, access controls and troubleshooting support.", ShieldCheck],
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">OUR SERVICES</div>
          <h1>Technology services that <span>solve problems.</span></h1>
          <p>Practical support across software, hardware, programming, repair and IT systems.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map(([title, text, Icon]) => (
              <article className="big-service-card" key={title}>
                <div className="service-number">0{services.indexOf(services.find(s => s[0] === title)) + 1}</div>
                <div className="icon-box"><Icon /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="notice">
            <strong>Service note:</strong> Specific box/device programming and repair work depends on the equipment,
            model and fault. Contact Dozen Brains for an assessment before any repair or programming work.
          </div>
        </div>
      </section>
    </>
  );
}