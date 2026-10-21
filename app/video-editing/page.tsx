"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  CheckCircle2,
  Sparkles,
  Layers,
  Palette,
  Music,
  Share2,
  MessageCircle,
  Clock,
  Zap,
} from "lucide-react";
import BuildoraLogo from "../components/Logo";
import { sampleVideos, VideoSample } from "../components/VideoShowcase";

const videoTools = [
  { name: "Adobe Premiere Pro", role: "Timeline & Narrative Editing" },
  { name: "After Effects", role: "Kinetic Typography & VFX" },
  { name: "DaVinci Resolve Studio", role: "Cinematic Color Grading" },
  { name: "Logic Pro / Audition", role: "Sound Design & Master Audio" },
  { name: "Blender 3D", role: "3D Motion Elements" },
];

const capabilities = [
  {
    num: "01",
    title: "Retention Pacing & Viral Hooks",
    desc: "Every second counts. We design the first 3 seconds to capture undivided attention and pace the entire cut with dynamic zooms, pattern interrupts, and rhythmic cadence.",
    tags: ["3-Sec Hook", "Pattern Interrupts", "Retention Curves"],
  },
  {
    num: "02",
    title: "Motion Graphics & Kinetic Typography",
    desc: "Custom animated typography, on-brand graphics, lower thirds, and seamless match cuts that guide the viewer’s eye effortlessly through the story.",
    tags: ["Custom Fonts", "Subtitles", "3D Callouts"],
  },
  {
    num: "03",
    title: "Cinematic Color Grading & LUTs",
    desc: "From moody commercial contrast to clean vibrant lifestyle looks, we ensure natural skin tones, deep blacks, and consistent color science across multi-camera shoots.",
    tags: ["Rec.709", "Film Emulation", "HDR Grading"],
  },
  {
    num: "04",
    title: "Bespoke Sound Design & SFX",
    desc: "High-impact whooshes, risers, sub-bass hits, and beat-synchronized audio cuts that turn flat footage into an immersive sensory experience.",
    tags: ["Foley & SFX", "Voice Mastering", "BGM Ducking"],
  },
  {
    num: "05",
    title: "Multi-Platform Mastering",
    desc: "Optimized export settings for Instagram Reels (9:16), YouTube Shorts, TikTok, YouTube 4K (16:9), and paid advertising networks with zero compression loss.",
    tags: ["9:16 Reels", "16:9 4K", "1:1 Square Ads"],
  },
  {
    num: "06",
    title: "Commercial & Corporate Storytelling",
    desc: "Long-form founder interviews, client testimonials, and product demo reels edited with professional poise and compelling narrative structure.",
    tags: ["Brand Films", "Interviews", "B-Roll Insertion"],
  },
];

const workflow = [
  {
    step: "01",
    title: "Footage Ingestion & Briefing",
    desc: "Send your raw clips, voice recordings, and creative brief. We organize, synchronize, and analyze the footage for narrative gold.",
  },
  {
    step: "02",
    title: "The Assembly & Retention Cut",
    desc: "We build the timeline, cutting pauses, eliminating filler, and locking in the storytelling rhythm and emotional pacing.",
  },
  {
    step: "03",
    title: "Motion Graphics & Visuals",
    desc: "Layering custom animations, animated subtitles, iconography, zooms, and transitional effects tailored to your brand.",
  },
  {
    step: "04",
    title: "Color Science & Sound Design",
    desc: "Precision color grading, vocal audio mastering, ambient sound design, and impact sound effects for maximum immersion.",
  },
  {
    step: "05",
    title: "Review & Fast Delivery",
    desc: "Receive the high-resolution master file within 24 to 48 hours with easy iteration rounds until you are 100% satisfied.",
  },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

export default function VideoEditingPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [modalVideo, setModalVideo] = useState<VideoSample | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [mutedVideoId, setMutedVideoId] = useState<string | null>(null);

  const filteredVideos = activeCategory === "All"
    ? sampleVideos
    : sampleVideos.filter(v => v.category === activeCategory);

  return (
    <div style={{ background: "#181818", minHeight: "100vh", color: "#ffffff", position: "relative" }}>

      {/* Top Floating Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(24,24,24,0.92)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
          padding: "16px 36px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "monospace",
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#ffffff",
              textDecoration: "none",
              padding: "6px 12px",
              border: "1px solid rgba(255,255,255,0.2)",
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
            <ArrowLeft size={13} /> Back to Buildora
          </Link>

          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <BuildoraLogo variant="mark" height={28} />
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <a
            href="https://wa.me/916299580783?text=Hi%20Rohithan,%20I%20am%20interested%20in%20Buildora's%20Video%20Editing%20services!"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 16px",
              background: "rgba(137,233,0,0.12)",
              border: "1px solid rgba(137,233,0,0.4)",
              color: "#89E900",
              fontFamily: "monospace",
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#89E900";
              e.currentTarget.style.color = "#222222";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(137,233,0,0.12)";
              e.currentTarget.style.color = "#89E900";
            }}
          >
            <MessageCircle size={13} /> Chat on WhatsApp
          </a>

          <a
            href="#inquire"
            style={{
              padding: "8px 20px",
              background: "#89E900",
              color: "#222222",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#89E900")}
          >
            Book an Edit
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ padding: "90px 48px 60px", position: "relative", overflow: "hidden" }}>
        {/* Glow & grid background */}
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 900, height: 400, background: "radial-gradient(ellipse at center, rgba(137,233,0,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(137,233,0,0.08)", border: "1px solid rgba(137,233,0,0.3)", padding: "6px 14px", marginBottom: 24 }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#89E900" }} />
            <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#89E900" }}>
              Buildora Creative Post-Production Studio
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: "clamp(36px, 5.5vw, 68px)",
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 1.05,
              letterSpacing: "0.02em",
              marginBottom: 24,
            }}
          >
            Video Editing Built To<br />
            <span style={{ color: "#89E900" }}>Stop The Scroll &amp; Convert</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "clamp(16px, 1.8vw, 19px)",
              maxWidth: 750,
              lineHeight: 1.7,
              fontWeight: 300,
              marginBottom: 44,
            }}
          >
            We transform raw video recordings into cinematic, high-retention stories. Featuring kinetic typography, precision audio soundscapes, match-cut transitions, and viral pacing engineered for modern digital audiences.
          </motion.p>

          {/* Quick Metrics Bar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 1,
              background: "rgba(255,255,255,0.1)",
              maxWidth: 960,
              marginBottom: 20,
            }}
          >
            {[
              { num: "24–48h", label: "Turnaround Time" },
              { num: "8+", label: "Sample Edits Live" },
              { num: "4K 60fps", label: "Mastering Quality" },
              { num: "9:16 & 16:9", label: "Platform Ready" },
            ].map((m) => (
              <div key={m.label} style={{ background: "rgba(24,24,24,0.9)", padding: "20px 22px" }}>
                <div style={{ fontSize: 24, fontWeight: 700, color: "#89E900", fontFamily: "monospace", marginBottom: 4 }}>
                  {m.num}
                </div>
                <div style={{ fontSize: 10, fontFamily: "monospace", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)" }}>
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Video Showcase Gallery */}
      <section style={{ padding: "40px 48px 100px", maxWidth: 1180, margin: "0 auto", position: "relative" }}>

        {/* Section title & Category filters */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 36, borderBottom: "1px solid rgba(255,255,255,0.12)", paddingBottom: 20 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <Sparkles size={14} color="#89E900" />
              <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#89E900" }}>
                Active Production Reel
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, textTransform: "uppercase", color: "#ffffff" }}>
              Sample Video Edits &amp; Works
            </h2>
          </div>

          {/* Filter Pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["All", "Reels & Shorts", "Motion & VFX", "Commercial & Brand"].map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                style={{
                  padding: "8px 16px",
                  fontSize: 10.5,
                  fontFamily: "monospace",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  background: activeCategory === c ? "#89E900" : "rgba(34,34,34,0.6)",
                  color: activeCategory === c ? "#222222" : "#ffffff",
                  border: activeCategory === c ? "1px solid #89E900" : "1px solid rgba(255,255,255,0.2)",
                  fontWeight: activeCategory === c ? 700 : 400,
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Video Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 24 }}>
          {filteredVideos.map((video, idx) => {
            const isPlaying = playingVideoId === video.id;
            const isMuted = mutedVideoId !== video.id;

            return (
              <motion.div
                key={video.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                style={{
                  background: "rgba(24,24,24,0.95)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(137,233,0,0.6)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Video Screen Container */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingTop: "140%", // 9:14 reel aspect ratio
                    background: "#080808",
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                  onClick={() => {
                    const vid = document.getElementById(`video-${video.id}`) as HTMLVideoElement;
                    if (!vid) return;
                    if (isPlaying) {
                      vid.pause();
                      setPlayingVideoId(null);
                    } else {
                      vid.play();
                      setPlayingVideoId(video.id);
                    }
                  }}
                >
                  <video
                    id={`video-${video.id}`}
                    src={video.src}
                    playsInline
                    muted={isMuted}
                    loop
                    onPlay={() => setPlayingVideoId(video.id)}
                    onPause={() => {
                      if (playingVideoId === video.id) setPlayingVideoId(null);
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* Gradient Accents */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 60, background: "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)", pointerEvents: "none" }} />

                  {/* Top Badges */}
                  <div style={{ position: "absolute", top: 12, left: 12, right: 12, display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 3 }}>
                    <span
                      style={{
                        fontSize: 9,
                        fontFamily: "monospace",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#89E900",
                        background: "rgba(10,10,10,0.85)",
                        border: "1px solid rgba(137,233,0,0.4)",
                        padding: "3px 8px",
                      }}
                    >
                      {video.tag}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalVideo(video);
                      }}
                      title="Open Theater View"
                      style={{
                        background: "rgba(10,10,10,0.75)",
                        border: "1px solid rgba(255,255,255,0.25)",
                        color: "#ffffff",
                        padding: "4px 8px",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        cursor: "pointer",
                        fontSize: 9,
                        fontFamily: "monospace",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#89E900";
                        e.currentTarget.style.color = "#89E900";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                        e.currentTarget.style.color = "#ffffff";
                      }}
                    >
                      <Maximize2 size={11} /> Theater
                    </button>
                  </div>

                  {/* Center Play Button */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: isPlaying ? "rgba(0,0,0,0.3)" : "rgba(137,233,0,0.9)",
                      border: `1px solid ${isPlaying ? "rgba(255,255,255,0.2)" : "#89E900"}`,
                      color: isPlaying ? "#ffffff" : "#222222",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.25s",
                      opacity: isPlaying ? 0.35 : 1,
                      zIndex: 4,
                    }}
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} style={{ marginLeft: 3 }} />}
                  </div>

                  {/* Audio Toggle */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const vid = document.getElementById(`video-${video.id}`) as HTMLVideoElement;
                      if (!vid) return;
                      if (isMuted) {
                        vid.muted = false;
                        setMutedVideoId(video.id);
                      } else {
                        vid.muted = true;
                        setMutedVideoId(null);
                      }
                    }}
                    style={{
                      position: "absolute",
                      bottom: 12,
                      right: 12,
                      zIndex: 4,
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "rgba(0,0,0,0.75)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      color: isMuted ? "rgba(255,255,255,0.7)" : "#89E900",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </button>
                </div>

                {/* Card Info */}
                <div style={{ padding: "20px 18px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontFamily: "monospace", fontSize: 9.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "#89E900", marginBottom: 6 }}>
                      {video.category}
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase", color: "#ffffff", letterSpacing: "0.03em", marginBottom: 8, lineHeight: 1.25 }}>
                      {video.title}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 13, lineHeight: 1.6, fontWeight: 300 }}>
                      {video.desc}
                    </p>
                  </div>

                  <div style={{ marginTop: 18, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 14, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.5)" }}>
                      Full HD / 4K Master
                    </span>
                    <button
                      onClick={() => setModalVideo(video)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#89E900",
                        fontSize: 10.5,
                        fontFamily: "monospace",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      Watch Fullscreen ↗
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Production Stack & Capabilities */}
      <section style={{ padding: "80px 48px", background: "rgba(20,20,20,0.85)", borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <Layers size={14} color="#89E900" />
              <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#89E900" }}>
                What We Master
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, textTransform: "uppercase", color: "#ffffff" }}>
              Comprehensive Editing Capabilities
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
            {capabilities.map((c) => (
              <div
                key={c.num}
                style={{
                  background: "rgba(26,26,26,0.9)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontFamily: "monospace", fontSize: 12, color: "#89E900", marginBottom: 12 }}>
                    {c.num}
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, textTransform: "uppercase", color: "#ffffff", marginBottom: 10, letterSpacing: "0.03em" }}>
                    {c.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13.5, lineHeight: 1.7, fontWeight: 300, marginBottom: 18 }}>
                    {c.desc}
                  </p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 12 }}>
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 9,
                        fontFamily: "monospace",
                        color: "#89E900",
                        background: "rgba(137,233,0,0.08)",
                        border: "1px solid rgba(137,233,0,0.25)",
                        padding: "2px 7px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Software Stack Bar */}
          <div style={{ marginTop: 48, padding: "28px 32px", background: "rgba(34,34,34,0.45)", border: "1px solid rgba(255,255,255,0.14)" }}>
            <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>
              Production Software &amp; Tooling Suite
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
              {videoTools.map((tool) => (
                <div key={tool.name} style={{ borderLeft: "2px solid #89E900", paddingLeft: 12 }}>
                  <div style={{ fontWeight: 700, fontSize: 13, textTransform: "uppercase", color: "#ffffff" }}>
                    {tool.name}
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontFamily: "monospace", marginTop: 2 }}>
                    {tool.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Production Workflow */}
      <section style={{ padding: "100px 48px", maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <Zap size={14} color="#89E900" />
            <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#89E900" }}>
              How We Work
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, textTransform: "uppercase", color: "#ffffff" }}>
            From Raw Footage to Viral Masterpiece
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, background: "rgba(255,255,255,0.12)" }}>
          {workflow.map((w) => (
            <div key={w.step} style={{ background: "rgba(24,24,24,0.95)", padding: "32px 24px" }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "#89E900", fontFamily: "monospace", marginBottom: 12 }}>
                {w.step}
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, textTransform: "uppercase", color: "#ffffff", marginBottom: 10 }}>
                {w.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, lineHeight: 1.65, fontWeight: 300 }}>
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking & Inquiry CTA Section */}
      <section id="inquire" style={{ padding: "80px 48px 120px", background: "rgba(20,20,20,0.85)", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(137,233,0,0.1)", border: "1px solid rgba(137,233,0,0.3)", padding: "6px 16px", marginBottom: 20 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#89E900" }} />
            <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#89E900" }}>
              Ready To Level Up Your Content?
            </span>
          </div>

          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, textTransform: "uppercase", color: "#ffffff", marginBottom: 18, lineHeight: 1.1 }}>
            Let&apos;s Build Your Next High-Impact Video
          </h2>

          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, lineHeight: 1.7, fontWeight: 300, maxWidth: 640, margin: "0 auto 36px" }}>
            Whether you need a monthly batch of reels for your personal brand or a full-scale commercial cut for your product launch, we deliver rapid turnarounds with uncompromising quality.
          </p>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: 40 }}>
            <a
              href="https://wa.me/916299580783?text=Hi%20Rohithan,%20I%20would%20like%20to%20discuss%20a%20video%20editing%20project%20with%20Buildora!"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 32px",
                background: "#89E900",
                color: "#222222",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#89E900")}
            >
              <MessageCircle size={15} /> WhatsApp Direct (+91 6299 580 783)
            </a>

            <a
              href="mailto:rohithanfreelance@gmail.com?subject=Video%20Editing%20Project%20Inquiry%20-%20Buildora"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 28px",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#ffffff",
                fontFamily: "monospace",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#89E900";
                e.currentTarget.style.color = "#89E900";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              Email rohithanfreelance@gmail.com
            </a>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", color: "rgba(255,255,255,0.6)", fontFamily: "monospace", fontSize: 11 }}>
            <span>✓ 24-48 Hour Turnaround</span>
            <span>✓ Unlimited Revisions on First Order</span>
            <span>✓ High-Bitrate 4K Master Files</span>
          </div>
        </div>
      </section>

      {/* Theater View Modal */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalVideo(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(10,10,10,0.95)",
              backdropFilter: "blur(14px)",
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
                maxWidth: 480,
                width: "100%",
                background: "#181818",
                border: "1px solid rgba(137,233,0,0.5)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.9)",
                overflow: "hidden",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setModalVideo(null)}
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  zIndex: 20,
                  width: 36,
                  height: 36,
                  background: "rgba(0,0,0,0.75)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#ffffff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={18} />
              </button>

              {/* Video Player */}
              <div style={{ position: "relative", width: "100%", paddingTop: "140%", background: "#050505" }}>
                <video
                  src={modalVideo.src}
                  controls
                  autoPlay
                  playsInline
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Caption & details */}
              <div style={{ padding: "20px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <span style={{ fontSize: 9.5, fontFamily: "monospace", letterSpacing: "0.2em", textTransform: "uppercase", color: "#89E900" }}>
                    {modalVideo.tag}
                  </span>
                  <span style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.5)" }}>
                    Duration: {modalVideo.duration}
                  </span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase", color: "#ffffff", marginBottom: 6 }}>
                  {modalVideo.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, lineHeight: 1.6, fontWeight: 300 }}>
                  {modalVideo.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
