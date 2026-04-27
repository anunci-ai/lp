"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function BeforeSide() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
    >
      {/* Product — slightly off-center, casual angle */}
      <Image src="/product-before.jpg" alt="Foto Original" fill className="object-cover" />

      {/* Watermark / noise */}
      <div className="absolute bottom-4 left-4 text-[10px] font-mono text-amber-200/30 select-none">
        IMG_20240312_093421.jpg
      </div>

      {/* Label */}
      <div className="absolute top-4 left-8 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
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
      <div className="flex items-center justify-center flex-1 relative" style={{ background: "#f9f9f9" }}>
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
        <Image src="/product-after.png" alt="Foto gerada pela IA" fill className="object-contain" />
        </motion.div>
      </div>

      {/* Listing card — bottom 45% */}
      <div className="px-4 py-3 space-y-2" style={{ background: "#FFFFFF", borderTop: "1px solid #F0EEE8" }}>
        <p className="text-[11px] font-bold text-[#1A1A1A] leading-tight line-clamp-2">
          Garrafa Térmica Stanley 710ml Cinza Original | Conserva Quente e Frio
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
          {["Garrafa Térmica", "Stanley", "710ml", "garrafa conserva quente e frio", "stanley brasil"].map((tag) => (
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
      <div className="absolute top-4 right-8 flex items-center gap-1.5 bg-[#0B0B18]/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
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
