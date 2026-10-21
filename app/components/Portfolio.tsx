"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const cats = [
  "All",
  "Industrial & Engineering",
  "EdTech & Learning",
  "Robotics & DeepTech",
  "E-Commerce",
  "Creative Platforms",
];

const projects = [
  {
    title: "Axis Engineering Innovations",
    cat: "Industrial & Engineering",
    year: "2024",
    status: "Live Production",
    url: "https://axis-engineeringinnovations.vercel.app/",
    desc: "Engineered a high-precision digital portal and interactive CAD catalog for Detron 4th & 5th axis CNC rotary table systems, custom workholding fixtures, and integration solutions across India.",
    tech: ["React", "Industrial UI", "Interactive Catalog", "Performance SEO"],
  },
  {
    title: "KOEN Medical Coding Training Institute",
    cat: "EdTech & Learning",
    year: "2024",
    status: "Live Production",
    url: "https://koen-medical-coding.vercel.app/",
    desc: "Full web platform build for an AAPC-licensed medical coding institute in Tamil Nadu. Includes course mega-menus, accreditation showcases, interactive inquiry modals, and mobile-optimized syllabus exploration.",
    tech: ["Next.js", "TailwindCSS", "AAPC Curriculum", "Lead Automation"],
  },
  {
    title: "Cogniza Career Launchpad",
    cat: "EdTech & Learning",
    year: "2024",
    status: "Live Production",
    url: "https://cogniza.in/",
    desc: "Scalable career training platform supporting 10,000+ student registrations. Features multi-domain internship tracks (AI/ML, Full Stack, VLSI, Pharma), university marquee integrations, and live lead forms.",
    tech: ["JavaScript", "Interactive UI", "Marquee Animations", "Google Forms API"],
  },
  {
    title: "Nakaza Automations LLP",
    cat: "Robotics & DeepTech",
    year: "2024",
    status: "Live Production",
    url: "https://www.nakazaautomations.online",
    desc: "Cutting-edge digital presence for a robotics and deep-tech firm. Features interactive 3D particle canvas, 60+ patent portfolio showcase, SIH hackathon accolades, and institutional partnership displays.",
    tech: ["Three.js", "GSAP Animations", "WebGL", "DeepTech Portfolio"],
  },
  {
    title: "Creative Work Holding Technology (CWH)",
    cat: "Industrial & Engineering",
    year: "2024",
    status: "Live Production",
    url: "https://cwhtech.in/",
    desc: "Modern industrial web portal for an authorized Clamptek partner. Features 400+ product catalog browsing, CAD downloads, hydraulic & pneumatic clamp specifications, and automated inquiry capture.",
    tech: ["Next.js", "Industrial Catalog", "CAD Integration", "Responsive Design"],
  },
  {
    title: "THUKIL | Minimal Editorial Clothing",
    cat: "E-Commerce",
    year: "2024",
    status: "Live Production",
    url: "https://clothing-ecommerce-kohl.vercel.app/",
    desc: "Editorial fashion storefront designed with minimalist luxury aesthetic. Features editorial typography, fluid micro-interactions, lookbook curation, and frictionless checkout pathways.",
    tech: ["React", "Vite", "TailwindCSS", "Editorial Lookbook"],
  },
  {
    title: "JC Tech — CAD, AI & EV Systems",
    cat: "EdTech & Learning",
    year: "2024",
    status: "Live Production",
    url: "https://j-c-tech-site.onrender.com/",
    desc: "Project-based engineering training and technical consulting portal. Built to deliver hands-on modules in CAD modeling, artificial intelligence workflows, and EV powertrain architecture.",
    tech: ["Next.js", "Engineering LMS", "Curriculum Grid", "Render Hosting"],
  },
  {
    title: "ArtNest Creative Platform",
    cat: "Creative Platforms",
    year: "2024",
    status: "Live Production",
    url: "https://share.google/YEen5LObpF6Jmt74z",
    desc: "Dynamic creative showcase and portfolio ecosystem connecting digital artists, creators, and visual storytellers through interactive exhibitions and media previews.",
    tech: ["Media Showcase", "Visual Galleries", "Modern UI", "Cloud Storage"],
  },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.cat === active);

  return (
    <section id="portfolio" style={{ padding: "120px 48px", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "rgba(34,34,34,0.55)", backdropFilter: "blur(2px)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 1 }}>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <div style={{ width: 8, height: 8, background: "#89E900" }} />
          <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#89E900" }}>Our Work</span>
        </motion.div>

        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, textTransform: "uppercase", color: "#ffffff", marginBottom: 24, lineHeight: 1.05 }}>
          Projects We&apos;ve Built &amp; Shipped
        </motion.h2>

        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.15 }}
          style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, maxWidth: 700, lineHeight: 1.7, fontWeight: 300, marginBottom: 40 }}>
          Explore live web applications, industrial portals, and digital platforms we engineered for real clients with measurable commercial impact. Click any project to visit its live production build.
        </motion.p>

        {/* Category Filters */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 48 }}>
          {cats.map(c => (
            <button key={c} onClick={() => setActive(c)}
              style={{
                padding: "8px 16px",
                fontSize: 10,
                fontFamily: "monospace",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s",
                background: active === c ? "#89E900" : "rgba(34,34,34,0.6)",
                color: active === c ? "#222222" : "#ffffff",
                border: active === c ? "1px solid #89E900" : "1px solid rgba(255,255,255,0.25)",
                fontWeight: active === c ? 700 : 400,
                backdropFilter: "blur(4px)",
              }}>
              {c}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 16 }}>
          {filtered.map((p, i) => (
            <motion.div key={p.title}
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              style={{
                background: "rgba(20,20,20,0.85)",
                border: "1px solid rgba(255,255,255,0.12)",
                padding: "32px 28px",
                transition: "all 0.3s ease",
                backdropFilter: "blur(6px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(137,233,0,0.08)";
                e.currentTarget.style.borderColor = "rgba(137,233,0,0.45)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(20,20,20,0.85)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.transform = "translateY(0)";
              }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
                  <span style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.18em", textTransform: "uppercase", color: "#89E900", border: "1px solid rgba(137,233,0,0.4)", padding: "3px 8px" }}>
                    {p.cat}
                  </span>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: "#89E900", border: "1px solid rgba(137,233,0,0.3)", padding: "3px 8px" }}>
                      ● {p.status}
                    </span>
                    <span style={{ fontSize: 11, fontFamily: "monospace", color: "rgba(255,255,255,0.5)" }}>{p.year}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: 19, fontWeight: 700, textTransform: "uppercase", color: "#ffffff", marginBottom: 12, letterSpacing: "0.03em", lineHeight: 1.25 }}>
                  {p.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13.5, lineHeight: 1.7, fontWeight: 300, marginBottom: 20 }}>
                  {p.desc}
                </p>
              </div>

              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                  {p.tech.map(t => (
                    <span key={t} style={{ fontSize: 9.5, fontFamily: "monospace", color: "#89E900", background: "rgba(137,233,0,0.08)", border: "1px solid rgba(137,233,0,0.2)", padding: "3px 8px" }}>
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 11,
                    fontFamily: "monospace",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#ffffff",
                    textDecoration: "none",
                    padding: "8px 14px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "rgba(34,34,34,0.5)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "#89E900";
                    e.currentTarget.style.color = "#222222";
                    e.currentTarget.style.borderColor = "#89E900";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(34,34,34,0.5)";
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                  }}
                >
                  Visit Live Production <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
