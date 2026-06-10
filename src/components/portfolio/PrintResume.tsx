import type { ContactInfo, ResumeTemplate } from "@/hooks/use-resume-data";
import { SKILLS, EXPERIENCE, PROJECTS, EDUCATION, CERTIFICATIONS } from "@/data/resume";

interface PrintResumeProps {
  contact: ContactInfo;
  template: ResumeTemplate;
}

const TEMPLATE_STYLES: Record<ResumeTemplate, {
  accent: string;
  headerBg: string;
  headerText: string;
  border: string;
  tag: string;
  label: string;
}> = {
  google: {
    accent: "#4285F4",
    headerBg: "#FFFFFF",
    headerText: "#202124",
    border: "#E8EAED",
    tag: "#E8F0FE",
    label: "#1A73E8",
  },
  nvidia: {
    accent: "#76B900",
    headerBg: "#1A1A1A",
    headerText: "#FFFFFF",
    border: "#2D2D2D",
    tag: "#1E2D0D",
    label: "#76B900",
  },
  microsoft: {
    accent: "#0078D4",
    headerBg: "#F3F2F1",
    headerText: "#323130",
    border: "#EDEBE9",
    tag: "#EFF6FC",
    label: "#0067B8",
  },
};

export default function PrintResume({ contact, template }: PrintResumeProps) {
  const s = TEMPLATE_STYLES[template];
  const isNvidia = template === "nvidia";

  return (
    <div
      id="print-resume-container"
      style={{
        fontFamily: "'Arial', 'Helvetica', sans-serif",
        fontSize: "10pt",
        lineHeight: "1.45",
        color: isNvidia ? "#E0E0E0" : "#333",
        backgroundColor: isNvidia ? "#111111" : "#FFFFFF",
        padding: "0",
        maxWidth: "800px",
      }}
    >
      {/* Header */}
      <div style={{
        backgroundColor: s.headerBg,
        color: s.headerText,
        padding: "20px 28px 16px",
        borderBottom: `3px solid ${s.accent}`,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
          <div>
            <h1 style={{ margin: 0, fontSize: "24pt", fontWeight: 700, letterSpacing: "-0.5px" }}>
              {contact.name}
            </h1>
            <div style={{ fontSize: "11pt", marginTop: "2px", color: s.accent, fontWeight: 600 }}>
              {contact.title || "Backend Software Engineer"}
            </div>
          </div>
          <div style={{ textAlign: "right", fontSize: "8.5pt", color: isNvidia ? "#AAA" : "#555" }}>
            <div>{contact.phone}</div>
            <div>{contact.email}</div>
            <div>{contact.linkedin}</div>
            <div>{contact.github}</div>
          </div>
        </div>
      </div>

      <div style={{ padding: "16px 28px" }}>
        {/* Summary */}
        <Section title="Summary" accent={s.accent} label={s.label} isNvidia={isNvidia} border={s.border}>
          <p style={{ margin: 0, fontSize: "9.5pt", color: isNvidia ? "#CCC" : "#444" }}>
            Backend Software Engineer with hands-on experience building production-grade REST APIs, full-stack applications,
            and cloud-integrated systems using Java, Spring Boot, React, and AWS. Delivered end-to-end features including Twilio
            voice/SMS integration, JWT authentication, and ML-powered dashboards. Strong foundation in DSA, system design, and Agile workflows.
          </p>
        </Section>

        {/* Skills */}
        <Section title="Technical Skills" accent={s.accent} label={s.label} isNvidia={isNvidia} border={s.border}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "9pt" }}>
            <tbody>
              {SKILLS.map((g) => (
                <tr key={g.category}>
                  <td style={{ padding: "2px 8px 2px 0", fontWeight: 700, whiteSpace: "nowrap", color: s.label, width: "110px", verticalAlign: "top" }}>
                    {g.category}
                  </td>
                  <td style={{ padding: "2px 0", color: isNvidia ? "#CCC" : "#444" }}>
                    {g.items.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* Experience */}
        <Section title="Experience" accent={s.accent} label={s.label} isNvidia={isNvidia} border={s.border}>
          {EXPERIENCE.map((exp) => (
            <div key={exp.role} style={{ marginBottom: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <div>
                  <span style={{ fontWeight: 700, fontSize: "10pt", color: isNvidia ? "#FFF" : "#111" }}>{exp.role}</span>
                  <span style={{ color: s.accent, fontWeight: 600, marginLeft: "6px", fontSize: "9.5pt" }}>
                    {exp.company}{exp.location ? `, ${exp.location}` : ""}
                  </span>
                </div>
                <span style={{ fontSize: "9pt", color: isNvidia ? "#999" : "#777", fontStyle: "italic" }}>{exp.period}</span>
              </div>
              <ul style={{ margin: "4px 0 0", paddingLeft: "16px" }}>
                {exp.bullets.map((b, bi) => (
                  <li key={bi} style={{ marginBottom: "2px", fontSize: "9pt", color: isNvidia ? "#CCC" : "#444" }}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        {/* Projects */}
        <Section title="Projects" accent={s.accent} label={s.label} isNvidia={isNvidia} border={s.border}>
          {PROJECTS.map((p) => (
            <div key={p.name} style={{ marginBottom: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <div>
                  <span style={{ fontWeight: 700, fontSize: "10pt", color: isNvidia ? "#FFF" : "#111" }}>{p.name}</span>
                  <span style={{ color: isNvidia ? "#AAA" : "#666", marginLeft: "6px", fontSize: "9pt" }}>— {p.subtitle}</span>
                </div>
                <span style={{ fontSize: "8.5pt", color: s.accent }}>{p.github.replace("https://", "")}</span>
              </div>
              <div style={{ fontSize: "8.5pt", color: isNvidia ? "#888" : "#888", fontStyle: "italic", marginBottom: "3px" }}>
                {p.tech.join(" · ")}
              </div>
              <ul style={{ margin: "2px 0 0", paddingLeft: "16px" }}>
                {p.bullets.map((b, bi) => (
                  <li key={bi} style={{ marginBottom: "2px", fontSize: "9pt", color: isNvidia ? "#CCC" : "#444" }}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        {/* Education & Certs */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 28px" }}>
          <Section title="Education" accent={s.accent} label={s.label} isNvidia={isNvidia} border={s.border}>
            <div style={{ fontWeight: 700, fontSize: "10pt", color: isNvidia ? "#FFF" : "#111" }}>{EDUCATION.degree}</div>
            <div style={{ color: s.label, fontSize: "9.5pt" }}>{EDUCATION.institution}</div>
            <div style={{ color: isNvidia ? "#999" : "#777", fontSize: "9pt" }}>{EDUCATION.period} · CGPA: {EDUCATION.cgpa}</div>
          </Section>
          <Section title="Certifications" accent={s.accent} label={s.label} isNvidia={isNvidia} border={s.border}>
            <ul style={{ margin: 0, paddingLeft: "14px" }}>
              {CERTIFICATIONS.map((c) => (
                <li key={c.name} style={{ fontSize: "9pt", marginBottom: "2px", color: isNvidia ? "#CCC" : "#444" }}>
                  <strong style={{ color: isNvidia ? "#EEE" : "#222" }}>{c.name}</strong> — {c.issuer}
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, accent, label, isNvidia, border, children }: {
  title: string;
  accent: string;
  label: string;
  isNvidia: boolean;
  border: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <h2 style={{
        fontSize: "11pt",
        fontWeight: 700,
        color: accent,
        textTransform: "uppercase",
        letterSpacing: "0.8px",
        borderBottom: `1.5px solid ${accent}`,
        paddingBottom: "3px",
        marginBottom: "8px",
        marginTop: 0,
      }}>
        {title}
      </h2>
      {children}
    </div>
  );
}
