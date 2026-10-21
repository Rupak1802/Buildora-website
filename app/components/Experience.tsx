"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Users, Presentation, Award, BookOpen, X, Maximize2 } from "lucide-react";

interface ExperienceItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  aspect: string;
  description: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Academic Keynotes & CSE Technical Lectures",
    category: "Academic Keynote",
    location: "Department of Computer Science & Engineering",
    image: "/images/experience/seminar-talk.png",
    aspect: "3/4",
    description:
      "Addressing computer science & engineering students on building scalable AI architectures, algorithmic thinking, and bridging classroom theory with enterprise software engineering.",
    highlights: ["AI & Scalable Architecture", "Practical Systems Thinking", "Curriculum to Industry Gap"],
  },
  {
    id: "exp-2",
    title: "Large-Scale Campus Assemblies & Youth Mentorship",
    category: "Student Empowerment",
    location: "Campus Amphitheater & Assembly",
    image: "/images/experience/campus-address-1.png",
    aspect: "16/9",
    description:
      "Mentoring large student cohorts on engineering mindset, startup culture, and the discipline needed to build technological solutions that solve actual market problems.",
    highlights: ["Youth Leadership", "Startup Mindset", "50+ Active Cohort Attendees"],
  },
  {
    id: "exp-3",
    title: "Interactive Strategy Sessions & Hackathon Prep",
    category: "Interactive Cohort",
    location: "Collegiate Innovation Forum",
    image: "/images/experience/campus-address-2.png",
    aspect: "16/9",
    description:
      "Leading open interactive discussions breaking down hackathon strategies, rapid prototyping methodologies, and turning ambitious concepts into functional prototypes.",
    highlights: ["Rapid Prototyping", "Hackathon Methodologies", "Open Dialogue & Q&A"],
  },
  {
    id: "exp-4",
    title: "Hybrid Tech Masterclasses & Interactive Demos",
    category: "Executive Workshop",
    location: "Smart Digital Seminar Arena",
    image: "/images/experience/tech-keynote.png",
    aspect: "9/16",
    description:
      "Conducting hybrid interactive sessions with dual online and in-person participation, demonstrating automation pipelines, digital workflows, and modern product execution.",
    highlights: ["Hybrid Audience Delivery", "Live Product Workflows", "Modern Automation Demos"],
  },
];

const stats = [
  { icon: Users, number: "500+", label: "Students Mentored & Addressed" },
  { icon: Presentation, number: "15+", label: "Guest Lectures & Tech Sessions" },
  { icon: Award, number: "100%", label: "Real-World Practical Insights" },
  { icon: BookOpen, number: "4+", label: "Specialized Engineering Domains" },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

export default function Experience() {
  const [activeImage, setActiveImage] = useState<ExperienceItem | null>(null);

  return (
    <section id="experience" style={{ padding: "120px 48px", position: "relative" }}>
      {/* Background overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(24,24,24,0.72)", backdropFilter: "blur(2px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Section Pill */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}
        >
          <div style={{ width: 8, height: 8, background: "#89E900" }} />
          <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#89E900" }}>
            Knowledge &amp; Experiences
          </span>
        </motion.div>

        {/* Heading */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 54 }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, textTransform: "uppercase", color: "#ffffff", lineHeight: 1.05 }}>
              Imparting Knowledge.<br />Inspiring The Next Wave.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, marginTop: 14, maxWidth: 680, lineHeight: 1.7, fontWeight: 300 }}>
              Beyond building digital products, Rohithan regularly engages with academic departments, student assemblies, and engineering cohorts to share hands-on industry practices, startup thinking, and technology leadership.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(137,233,0,0.08)", border: "1px solid rgba(137,233,0,0.3)", padding: "10px 18px" }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#89E900" }} />
            <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff" }}>
              Active Campus &amp; Industry Speaker
            </span>
          </motion.div>
        </div>

        {/* Impact Stats Strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1, background: "rgba(255,255,255,0.08)", marginBottom: 56 }}>
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ background: "rgba(20,20,20,0.8)", padding: "28px 24px", backdropFilter: "blur(6px)" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(137,233,0,0.1)", border: "1px solid rgba(137,233,0,0.3)" }}>
                    <Icon size={16} color="#89E900" />
                  </div>
                  <div style={{ fontSize: 28, fontWeight: 700, color: "#ffffff", fontFamily: "monospace" }}>
                    {s.number}
                  </div>
                </div>
                <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
                  {s.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Experience Showcase Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              style={{
                background: "rgba(20,20,20,0.85)",
                border: "1px solid rgba(255,255,255,0.12)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(137,233,0,0.5)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.background = "rgba(28,32,24,0.92)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(20,20,20,0.85)";
              }}
            >
              {/* Image Frame with click-to-zoom */}
              <div
                onClick={() => setActiveImage(exp)}
                style={{
                  position: "relative",
                  width: "100%",
                  height: 280,
                  cursor: "pointer",
                  overflow: "hidden",
                  background: "#111111",
                }}
              >
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                    transition: "transform 0.5s ease",
                  }}
                  className="experience-card-img"
                />

                {/* Corner accent marks */}
                <div style={{ position: "absolute", top: 10, left: 10, width: 18, height: 18, borderTop: "2px solid #89E900", borderLeft: "2px solid #89E900", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: 10, right: 10, width: 18, height: 18, borderBottom: "2px solid #89E900", borderRight: "2px solid #89E900", pointerEvents: "none" }} />

                {/* Overlay gradient */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,20,20,0.9) 0%, rgba(20,20,20,0.2) 60%, transparent 100%)", pointerEvents: "none" }} />

                {/* Category Pill on top-right */}
                <div style={{ position: "absolute", top: 14, right: 14, zIndex: 2 }}>
                  <span style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.18em", textTransform: "uppercase", color: "#89E900", background: "rgba(20,20,20,0.85)", border: "1px solid rgba(137,233,0,0.4)", padding: "3px 8px", backdropFilter: "blur(4px)" }}>
                    {exp.category}
                  </span>
                </div>

                {/* Hover zoom icon badge */}
                <div style={{ position: "absolute", bottom: 14, right: 14, zIndex: 2, display: "flex", alignItems: "center", gap: 6, background: "rgba(0,0,0,0.6)", padding: "4px 8px", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <Maximize2 size={12} color="#89E900" />
                  <span style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff" }}>
                    Expand Photo
                  </span>
                </div>

                {/* Location at bottom-left of image */}
                <div style={{ position: "absolute", bottom: 14, left: 14, zIndex: 2 }}>
                  <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#ffffff", opacity: 0.85 }}>
                    📍 {exp.location}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: "28px 24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase", color: "#ffffff", letterSpacing: "0.03em", marginBottom: 12, lineHeight: 1.3 }}>
                    {exp.title}
                  </h3>

                  <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 14, lineHeight: 1.75, fontWeight: 300, marginBottom: 20 }}>
                    {exp.description}
                  </p>
                </div>

                {/* Highlights tags */}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 16 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        style={{
                          fontSize: 9.5,
                          fontFamily: "monospace",
                          color: "#89E900",
                          background: "rgba(137,233,0,0.08)",
                          border: "1px solid rgba(137,233,0,0.25)",
                          padding: "3px 8px",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Photo Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(10,10,10,0.92)",
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: 900,
                width: "100%",
                background: "#181818",
                border: "1px solid rgba(137,233,0,0.4)",
                padding: 16,
                boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  zIndex: 10,
                  width: 36,
                  height: 36,
                  background: "#222222",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#ffffff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#89E900";
                  e.currentTarget.style.color = "#89E900";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.color = "#ffffff";
                }}
              >
                <X size={18} />
              </button>

              {/* Modal Image */}
              <div style={{ position: "relative", width: "100%", height: "65vh", background: "#0a0a0a", marginBottom: 16 }}>
                <Image
                  src={activeImage.image}
                  alt={activeImage.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* Modal Caption */}
              <div style={{ padding: "8px 12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                  <span style={{ fontSize: 10, fontFamily: "monospace", letterSpacing: "0.2em", textTransform: "uppercase", color: "#89E900" }}>
                    {activeImage.category}
                  </span>
                  <span style={{ fontSize: 11, fontFamily: "monospace", color: "rgba(255,255,255,0.6)" }}>
                    📍 {activeImage.location}
                  </span>
                </div>
                <h4 style={{ fontSize: 20, fontWeight: 700, textTransform: "uppercase", color: "#ffffff", marginBottom: 6 }}>
                  {activeImage.title}
                </h4>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, lineHeight: 1.6, fontWeight: 300 }}>
                  {activeImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
