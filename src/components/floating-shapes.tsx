"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function FloatingShapes() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yFast = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const yMed = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Organic blob — top-right */}
      <motion.div
        style={{ y: yMed }}
        animate={{ rotate: [0, 12, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-[12%] right-[6%] w-32 md:w-44 opacity-25"
      >
        <svg viewBox="0 0 200 200" className="w-full h-auto">
          <defs>
            <linearGradient id="floatBlob1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0f3194" />
              <stop offset="100%" stopColor="#4b53f8" />
            </linearGradient>
          </defs>
          <path
            fill="url(#floatBlob1)"
            d="M44.7,-66.1C58.9,-58.4,72.1,-46.9,77.6,-32.6C83,-18.3,80.7,-1.1,75.1,13.6C69.5,28.4,60.6,40.7,49.2,52.2C37.7,63.7,23.7,74.4,7.5,76.9C-8.7,79.4,-26.9,73.5,-40.5,62.7C-54.1,51.9,-63.1,36.1,-69,18.6C-74.9,1,-77.7,-18.5,-71.7,-34.7C-65.7,-50.9,-50.9,-63.8,-35.1,-71.2C-19.3,-78.7,-2.5,-80.6,11.6,-77.9C25.7,-75.2,30.5,-73.7,44.7,-66.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>

      {/* Soft squircle — top-left */}
      <motion.div
        style={{
          y: yFast,
          background: "linear-gradient(135deg, #4b53f8, #818cf8)",
        }}
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-[18%] left-[5%] w-24 h-24 md:w-32 md:h-32 rounded-[42%] opacity-20 blur-[2px]"
      />

      {/* Ring outline — middle-left */}
      <motion.div
        style={{ y: ySlow }}
        animate={{ rotate: 360 }}
        transition={{ duration: 70, ease: "linear", repeat: Infinity }}
        className="absolute top-[58%] left-[8%] w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-[#4b53f8]/25"
      />

      {/* Triangle — middle-right */}
      <motion.div
        style={{ y: yFast }}
        animate={{ rotate: [0, -14, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-[48%] right-[10%] w-16 md:w-24 opacity-25"
      >
        <svg viewBox="0 0 100 100" className="w-full h-auto">
          <defs>
            <linearGradient id="floatTri" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0f3194" />
              <stop offset="100%" stopColor="#2d3ef6" />
            </linearGradient>
          </defs>
          <path d="M50 8 L92 88 L8 88 Z" fill="url(#floatTri)" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* Soft pill — bottom-left */}
      <motion.div
        style={{
          y: yMed,
          background:
            "linear-gradient(90deg, rgba(15,49,148,0.7), rgba(75,83,248,0.5))",
        }}
        animate={{ rotate: [0, 8, 0] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
        className="absolute bottom-[18%] left-[12%] w-20 h-7 md:w-28 md:h-10 rounded-full opacity-25 blur-[1px]"
      />

      {/* Dot cluster — bottom-right */}
      <motion.div
        style={{ y: ySlow }}
        animate={{ rotate: [0, 18, 0] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
        className="absolute bottom-[14%] right-[16%] w-14 h-14 md:w-16 md:h-16 opacity-60"
      >
        <span className="absolute top-0 left-0 w-2 h-2 rounded-full bg-[#4b53f8]" />
        <span className="absolute top-3 left-7 w-1.5 h-1.5 rounded-full bg-[#818cf8]" />
        <span className="absolute top-9 left-1 w-2.5 h-2.5 rounded-full bg-[#0f3194]" />
        <span className="absolute top-10 left-9 w-1.5 h-1.5 rounded-full bg-[#4b53f8]" />
      </motion.div>
    </div>
  );
}
