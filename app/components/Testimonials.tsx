"use client";
import { motion } from "framer-motion";
import { ExternalLink, Star, CheckCircle2 } from "lucide-react";

interface Testimonial {
  author: string;
  role: string;
  company: string;
  url: string;
  sector: string;
  stats: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    company: "Axis Engineering Innovations",
    author: "S. Senthil Kumar",
    role: "Managing Director",
    url: "https://axis-engineeringinnovations.vercel.app/",
    sector: "Industrial CNC & Workholding",
    stats: "Detron Taiwan Distributor",
    text: "Buildora engineered a high-precision digital portal and interactive catalog for our Detron 4th & 5th axis CNC rotary tables. Their execution speed, technical accuracy, and industrial-grade aesthetic elevated our client inquiries across India.",
  },
  {
    company: "KOEN Medical Coding Institute",
    author: "K. Ravichandran",
    role: "Academic Director",
    url: "https://koen-medical-coding.vercel.app/",
    sector: "Healthcare EdTech & AAPC",
    stats: "+65% Enrollment Growth",
    text: "Buildora built our complete digital learning and course platform from the ground up. From AAPC curriculum integration to high-converting student inquiry funnels, their work generated an immediate boost in enrollments and professional trust.",
  },
  {
    company: "Cogniza",
    author: "Dr. Vivek Murugan",
    role: "Head of Operations & Partnerships",
    url: "https://cogniza.in/",
    sector: "AI, Tech & Pharma Programs",
    stats: "10,000+ Students Scaled",
    text: "Handling over 10,000+ student registrations and diverse internship domains requires rock-solid architecture. Buildora delivered a seamless, dynamic web platform with lightning-fast load times and flawless partner integrations.",
  },
  {
    company: "Nakaza Automations LLP",
    author: "N. Ramachandran",
    role: "Founder & CEO · 4x SIH Champion",
    url: "https://www.nakazaautomations.online",
    sector: "Robotics, IoT & DeepTech",
    stats: "60+ Patents & Global Reach",
    text: "With 60+ patents and global research ties, we needed a digital identity that reflects our technological caliber. Buildora delivered an extraordinary 3D-integrated website that put Nakaza's robotic innovations on the international map.",
  },
  {
    company: "Creative Work Holding Technology (CWH)",
    author: "R. Sundar Raj",
    role: "Managing Director",
    url: "https://cwhtech.in/",
    sector: "Heavy Engineering & Hydraulics",
    stats: "Clamptek Authorized Partner",
    text: "As an authorized Clamptek partner supplying precision hydraulic and pneumatic clamps globally, we required an enterprise-grade digital catalog. Buildora's craftsmanship, responsiveness, and industrial focus were world-class.",
  },
  {
    company: "THUKIL",
    author: "Meera Krishnan",
    role: "Creative Director",
    url: "https://clothing-ecommerce-kohl.vercel.app/",
    sector: "Minimalist Editorial Fashion",
    stats: "3.2x Higher Engagement",
    text: "Buildora brought our minimalist editorial vision to life with fluid motion design, curated typography, and an effortless shopping flow. Our customer engagement and online sales transformed immediately upon launch.",
  },
  {
    company: "JC Tech",
    author: "J. Chandran",
    role: "Lead Engineering Consultant",
    url: "https://j-c-tech-site.onrender.com/",
    sector: "CAD, AI & EV Systems Training",
    stats: "Interactive LMS Platform",
    text: "Buildora transformed our engineering consulting and CAD/EV training modules into a sleek, interactive portal. The course discovery experience and live engagement tools have significantly simplified student onboarding.",
  },
  {
    company: "ArtNest",
    author: "Ananya Roy",
    role: "Co-Founder & Curator",
    url: "https://share.google/YEen5LObpF6Jmt74z",
    sector: "Creative Media & Art Showcase",
    stats: "Curated Global Exhibitions",
    text: "From rich visual galleries to smooth media interactions, Buildora understood the creative soul of ArtNest. They built a captivating digital platform that empowers artists and creators to showcase their craft effortlessly.",
  },
];

const clientLogos = [
  { name: "Axis Engineering", url: "https://axis-engineeringinnovations.vercel.app/" },
  { name: "KOEN Medical Coding", url: "https://koen-medical-coding.vercel.app/" },
  { name: "Cogniza", url: "https://cogniza.in/" },
  { name: "Nakaza Automations", url: "https://www.nakazaautomations.online" },
  { name: "CWH Tech", url: "https://cwhtech.in/" },
  { name: "THUKIL Apparel", url: "https://clothing-ecommerce-kohl.vercel.app/" },
  { name: "JC Tech", url: "https://j-c-tech-site.onrender.com/" },
  { name: "ArtNest", url: "https://share.google/YEen5LObpF6Jmt74z" },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "120px 48px", position: "relative" }}>
      {/* Background overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(20,20,20,0.78)", backdropFilter: "blur(2px)", pointerEvents: "none" }} />

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
            Proof of Impact
          </span>
        </motion.div>

        {/* Heading */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, textTransform: "uppercase", color: "#ffffff", lineHeight: 1.05 }}>
              Companies We&apos;ve Partnered With
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, marginTop: 12, maxWidth: 650, lineHeight: 1.7, fontWeight: 300 }}>
              From industrial engineering manufacturers and deep-tech robotics firms to e-commerce brands and healthcare institutions — here is what founders and leaders say about building with Buildora.
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
            <CheckCircle2 size={16} color="#89E900" />
            <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff" }}>
              8+ Verified Live Deployments
            </span>
          </motion.div>
        </div>

        {/* Live Client Brands Marquee / Quick Bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
            padding: "18px 0",
            marginBottom: 56,
            overflowX: "auto",
            display: "flex",
            gap: 16,
            scrollbarWidth: "none",
          }}
        >
          {clientLogos.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                background: "rgba(34,34,34,0.6)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: 11,
                fontFamily: "monospace",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#89E900";
                e.currentTarget.style.color = "#89E900";
                e.currentTarget.style.background = "rgba(137,233,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.background = "rgba(34,34,34,0.6)";
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#89E900" }} />
              {c.name}
              <ExternalLink size={12} style={{ opacity: 0.6 }} />
            </a>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 18 }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.company}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              style={{
                background: "rgba(22,22,22,0.85)",
                border: "1px solid rgba(255,255,255,0.12)",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backdropFilter: "blur(6px)",
                transition: "all 0.3s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(28,32,24,0.92)";
                e.currentTarget.style.borderColor = "rgba(137,233,0,0.5)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(22,22,22,0.85)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div>
                {/* Header row with Sector tag and Live link */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
                  <span
                    style={{
                      fontSize: 9,
                      fontFamily: "monospace",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#89E900",
                      border: "1px solid rgba(137,233,0,0.4)",
                      padding: "3px 8px",
                      background: "rgba(137,233,0,0.06)",
                    }}
                  >
                    {t.sector}
                  </span>

                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      fontSize: 10,
                      fontFamily: "monospace",
                      color: "#ffffff",
                      textDecoration: "none",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      borderBottom: "1px dotted rgba(255,255,255,0.4)",
                      paddingBottom: 2,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#89E900")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                  >
                    Live Site <ExternalLink size={10} />
                  </a>
                </div>

                {/* Company Name */}
                <h3 style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase", color: "#ffffff", letterSpacing: "0.04em", marginBottom: 12, lineHeight: 1.25 }}>
                  {t.company}
                </h3>

                {/* Stars & Metric tag */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 18 }}>
                  <div style={{ display: "flex", gap: 3 }}>
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} size={13} fill="#89E900" color="#89E900" />
                    ))}
                  </div>
                  <span style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em" }}>
                    {t.stats}
                  </span>
                </div>

                {/* Quote Text */}
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 13.5, lineHeight: 1.75, fontWeight: 300, marginBottom: 24, fontStyle: "normal" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 18 }}>
                <div style={{ fontWeight: 700, color: "#ffffff", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 3 }}>
                  {t.author}
                </div>
                <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#89E900" }}>
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
