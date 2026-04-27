"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

function BeforeSide() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #2A1A0A 0%, #1E1208 50%, #120C04 100%)",
      }}
    >
      {/* Simulated messy surface / background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 80%, rgba(120, 70, 20, 0.6) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(180, 100, 30, 0.4) 0%, transparent 50%)
          `,
        }}
      />

      {/* Product — slightly off-center, casual angle */}
      <motion.div
        initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
        animate={{ rotate: -4, scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative"
        style={{ transform: "rotate(-4deg) translateX(-20px)" }}
      >
        {/* The mug */}
        <svg width="140" height="160" viewBox="0 0 140 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Body */}
          <rect x="20" y="30" width="90" height="110" rx="8" fill="#C8A882" />
          <rect x="20" y="30" width="90" height="110" rx="8" fill="url(#mugShading)" />
          {/* Handle */}
          <path
            d="M110 60 Q145 60 145 90 Q145 120 110 120"
            stroke="#A08060"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
          />
          {/* Rim */}
          <ellipse cx="65" cy="30" rx="45" ry="8" fill="#D4B896" />
          {/* Coffee surface */}
          <ellipse cx="65" cy="30" rx="38" ry="6" fill="#4A2C10" />
          {/* Shadow at bottom */}
          <ellipse cx="65" cy="145" rx="50" ry="8" fill="rgba(0,0,0,0.4)" />
          <defs>
            <linearGradient id="mugShading" x1="20" y1="30" x2="110" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
            </linearGradient>
          </defs>
        </svg>
        {/* Messy background bits */}
        <div className="absolute -bottom-4 -left-8 w-20 h-3 bg-[#3A2510] rounded opacity-60" />
        <div className="absolute top-8 -right-12 w-16 h-2 bg-[#2E1E0A] rounded opacity-40" />
      </motion.div>

      {/* Watermark / noise */}
      <div className="absolute bottom-4 left-4 text-[10px] font-mono text-amber-200/30 select-none">
        IMG_20240312_093421.jpg
      </div>

      {/* Label */}
      <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
        <div className="w-2 h-2 rounded-full bg-orange-400" />
        <span className="text-[11px] font-semibold text-white/70 uppercase tracking-wider">Foto original</span>
      </div>
    </div>
  );
}

function AfterSide() {
  return (
    <div className="absolute inset-0 flex flex-col" style={{ background: "#F8F7F5" }}>
      {/* Product image area — top 55% */}
      <div className="flex items-center justify-center flex-1 relative" style={{ background: "#FFFFFF" }}>
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <svg width="130" height="150" viewBox="0 0 140 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="30" width="90" height="110" rx="8" fill="#C8A882" />
            <rect x="20" y="30" width="90" height="110" rx="8" fill="url(#mugShadingClean)" />
            <path d="M110 60 Q145 60 145 90 Q145 120 110 120" stroke="#A08060" strokeWidth="12" fill="none" strokeLinecap="round" />
            <ellipse cx="65" cy="30" rx="45" ry="8" fill="#D4B896" />
            <ellipse cx="65" cy="30" rx="38" ry="6" fill="#4A2C10" />
            <ellipse cx="65" cy="145" rx="50" ry="5" fill="rgba(0,0,0,0.08)" />
            <defs>
              <linearGradient id="mugShadingClean" x1="20" y1="30" x2="110" y2="140" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.15)" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Marketplace badge top-right */}
        <div className="absolute top-3 right-3 flex gap-1.5">
          <div className="bg-[#FFE600] text-[#333] text-[9px] font-black px-2 py-0.5 rounded-full">ML</div>
          <div className="bg-[#EE4D2D] text-white text-[9px] font-black px-2 py-0.5 rounded-full">S</div>
          <div className="bg-[#232F3E] text-[#FF9900] text-[9px] font-black px-2 py-0.5 rounded-full">a</div>
        </div>
      </div>

      {/* Listing card — bottom 45% */}
      <div className="px-4 py-3 space-y-2" style={{ background: "#FFFFFF", borderTop: "1px solid #F0EEE8" }}>
        <p className="text-[11px] font-bold text-[#1A1A1A] leading-tight line-clamp-2">
          Caneca Cerâmica Premium 350ml — Tampa Inclusa, Fundo Anti-deslizante
        </p>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="10" height="10" viewBox="0 0 10 10" fill="#FFB800">
              <path d="M5 1l1.12 2.27L9 3.64 7 5.59l.47 2.75L5 7l-2.47 1.34L3 5.59 1 3.64l2.88-.37L5 1z" />
            </svg>
          ))}
          <span className="text-[10px] text-[#888] ml-1">4.9 (247 avaliações)</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {["caneca", "cerâmica", "premium", "350ml", "tampa"].map((tag) => (
            <span key={tag} className="bg-[#F0F0F0] text-[#555] text-[9px] px-2 py-0.5 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 pt-1">
          <div className="h-1.5 w-1.5 rounded-full" style={{ background: "linear-gradient(135deg, #0f3194, #4b53f8)" }} />
          <span className="text-[10px] font-semibold" style={{ background: "linear-gradient(135deg, #0f3194, #4b53f8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Gerado por anuncia.ai
          </span>
        </div>
      </div>

      {/* Label */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#0B0B18]/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
        <div className="w-2 h-2 rounded-full" style={{ background: "linear-gradient(135deg, #0f3194, #4b53f8)" }} />
        <span className="text-[11px] font-semibold text-white uppercase tracking-wider">anuncia.ai</span>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  const [position, setPosition] = useState(15);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animated reveal on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const start = 15;
      const end = 48;
      const duration = 1400;
      const startTime = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setPosition(start + (end - start) * eased);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    setPosition(Math.max(5, Math.min(95, (x / rect.width) * 100)));
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: MouseEvent) => updatePosition(e.clientX);
    const onUp = () => setIsDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden select-none cursor-ew-resize shadow-2xl"
      style={{ height: 420 }}
      onMouseDown={() => setIsDragging(true)}
      onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
      onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
    >
      {/* Before layer */}
      <BeforeSide />

      {/* After layer — clipped */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <AfterSide />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/80 shadow-lg"
        style={{ left: `${position}%`, transition: isDragging ? "none" : undefined }}
      >
        {/* Handle circle */}
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center gap-0.5">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 4L2 8L5 12M11 4L14 8L11 12" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Gradient glow on divider */}
      <div
        className="absolute top-0 bottom-0 w-12 pointer-events-none"
        style={{
          left: `calc(${position}% - 24px)`,
          background: "linear-gradient(to right, transparent, rgba(232,57,158,0.15), transparent)",
        }}
      />
    </div>
  );
}
