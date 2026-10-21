"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import { Play, Pause, Volume2, VolumeX, ArrowRight, Film, Sparkles } from "lucide-react";

export interface VideoSample {
  id: string;
  src: string;
  title: string;
  category: "Reels & Shorts" | "Motion & VFX" | "Commercial & Brand";
  tag: string;
  desc: string;
  duration: string;
}

export const sampleVideos: VideoSample[] = [
  {
    id: "vid-1",
    src: "/videos/vid1.mp4",
    title: "High-Retention Social Reel",
    category: "Reels & Shorts",
    tag: "Viral Retention",
    desc: "Engineered with punchy pacing, synchronized audio beats, kinetic typography, and seamless zooms to maximize audience watch time.",
    duration: "0:24",
  },
  {
    id: "vid-2",
    src: "/videos/vid2.mp4",
    title: "Motion Graphics & Seamless Transitions",
    category: "Motion & VFX",
    tag: "Motion Design",
    desc: "Dynamic motion graphic title sequences, particle effects, and match cuts that elevate brand storytelling into high-production art.",
    duration: "0:20",
  },
  {
    id: "vid-3",
    src: "/videos/vid3.mp4",
    title: "Cinematic Brand Commercial",
    category: "Commercial & Brand",
    tag: "Cinematic",
    desc: "Graded with atmospheric cinematic tones, precision sound design, and narrative pacing crafted for commercial brand campaigns.",
    duration: "0:30",
  },
  {
    id: "vid-4",
    src: "/videos/vid4.mp4",
    title: "Fast-Paced Product Showcase",
    category: "Motion & VFX",
    tag: "Product Ad",
    desc: "Snappy multi-angle cuts, 3D motion callouts, and sound effects designed to drive high conversion rates across digital ads.",
    duration: "0:18",
  },
  {
    id: "vid-5",
    src: "/videos/vid5.mp4",
    title: "Color Grading & Mood Atmosphere",
    category: "Commercial & Brand",
    tag: "Color Master",
    desc: "Precision Rec.709 color correction, stylized film contrast curves, and dynamic skin tone preservation for a rich visual signature.",
    duration: "0:22",
  },
  {
    id: "vid-6",
    src: "/videos/vid6.mp4",
    title: "Viral Hook & Engagement Edit",
    category: "Reels & Shorts",
    tag: "Social Growth",
    desc: "Built around 3-second hook principles, sound-synced cuts, and dynamic text animations tailored for Instagram Reels and YouTube Shorts.",
    duration: "0:28",
  },
  {
    id: "vid-7",
    src: "/videos/vid7.mp4",
    title: "Creative Typography & Visual Rhythm",
    category: "Motion & VFX",
    tag: "Kinetic Type",
    desc: "Custom kinetic typography synced with auditory accents to communicate key messages with immediate visual impact.",
    duration: "0:20",
  },
  {
    id: "vid-8",
    src: "/videos/vid8.mp4",
    title: "Talking-Head & B-Roll Masterclass",
    category: "Reels & Shorts",
    tag: "Creator Reel",
    desc: "Clean audio mastering, ambient background music, strategic multi-cam cuts, and relevant B-roll insertions for professional creator videos.",
    duration: "0:25",
  },
];

const categories = ["All", "Reels & Shorts", "Motion & VFX", "Commercial & Brand"] as const;

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

function VideoCard({ video }: { video: VideoSample }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      style={{
        background: "rgba(20,20,20,0.85)",
        border: "1px solid rgba(255,255,255,0.12)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(137,233,0,0.5)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Video Container */}
      <div
        onClick={togglePlay}
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "135%", // 3:4 vertical aesthetic
          background: "#0c0c0c",
          cursor: "pointer",
          overflow: "hidden",
        }}
      >
        <video
          ref={videoRef}
          src={video.src}
          playsInline
          muted={isMuted}
          loop
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Ambient Top & Bottom Gradients */}
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
              background: "rgba(0,0,0,0.75)",
              border: "1px solid rgba(137,233,0,0.4)",
              padding: "3px 8px",
            }}
          >
            {video.tag}
          </span>

          <span
            style={{
              fontSize: 10,
              fontFamily: "monospace",
              color: "#ffffff",
              background: "rgba(0,0,0,0.65)",
              padding: "2px 6px",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            {video.duration}
          </span>
        </div>

        {/* Play / Pause Center Icon button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          aria-label={isPlaying ? "Pause video" : "Play video"}
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
            cursor: "pointer",
            transition: "all 0.25s",
            opacity: isPlaying ? 0.35 : 1,
            zIndex: 4,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = isPlaying ? "0.35" : "1")}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} style={{ marginLeft: 3 }} />}
        </button>

        {/* Bottom Audio Toggle Button */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            zIndex: 4,
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.7)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: isMuted ? "rgba(255,255,255,0.7)" : "#89E900",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#89E900")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
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
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, lineHeight: 1.6, fontWeight: 300 }}>
            {video.desc}
          </p>
        </div>

        <div style={{ marginTop: 16, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>
            Ready for Delivery
          </span>
          <button
            onClick={togglePlay}
            style={{
              background: "none",
              border: "none",
              color: "#89E900",
              fontSize: 10.5,
              fontFamily: "monospace",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            {isPlaying ? "Pause Preview" : "Play Reel →"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function VideoShowcase() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All"
    ? sampleVideos
    : sampleVideos.filter(v => v.category === filter);

  return (
    <section id="video-editing" style={{ padding: "120px 48px", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "rgba(22,22,22,0.85)", backdropFilter: "blur(2px)", pointerEvents: "none" }} />

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
            Creative &amp; Post-Production
          </span>
        </motion.div>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 44 }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, textTransform: "uppercase", color: "#ffffff", lineHeight: 1.05 }}>
              Video Editing &amp; Visual Storytelling
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, marginTop: 12, maxWidth: 680, lineHeight: 1.7, fontWeight: 300 }}>
              Engaging video content edited with precision — from fast-paced social media reels and viral shorts to cinematic commercials, motion graphics, and audio mastering.
            </p>
          </motion.div>

          {/* CTA to full video editing page */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/video-editing"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                background: "#89E900",
                color: "#222222",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#89E900";
              }}
            >
              Explore Full Video Studio <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Filter Pills */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}
        >
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              style={{
                padding: "8px 16px",
                fontSize: 10,
                fontFamily: "monospace",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s",
                background: filter === c ? "#89E900" : "rgba(34,34,34,0.6)",
                color: filter === c ? "#222222" : "#ffffff",
                border: filter === c ? "1px solid #89E900" : "1px solid rgba(255,255,255,0.25)",
                fontWeight: filter === c ? 700 : 400,
              }}
            >
              {c}
            </button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
          {filtered.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* Bottom Feature Strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: 48,
            padding: "24px 32px",
            background: "rgba(137,233,0,0.06)",
            border: "1px solid rgba(137,233,0,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 40, height: 40, background: "rgba(137,233,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Sparkles size={20} color="#89E900" />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, textTransform: "uppercase", color: "#ffffff", letterSpacing: "0.06em" }}>
                Need Custom Video Editing For Your Brand or Channel?
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 300, marginTop: 2 }}>
                We provide turnaround within 24–48 hours for reels, motion graphics, and YouTube podcasts.
              </div>
            </div>
          </div>

          <Link
            href="/video-editing"
            style={{
              padding: "10px 20px",
              border: "1px solid #89E900",
              color: "#89E900",
              fontFamily: "monospace",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#89E900";
              e.currentTarget.style.color = "#222222";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#89E900";
            }}
          >
            View Video Editing Page →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
