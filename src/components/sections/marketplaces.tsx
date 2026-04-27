"use client";

import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MotionCard = motion.create(Card);

const marketplaces = [
  {
    name: "Mercado Livre",
    tagline: "Maior marketplace do Brasil",
    specs: ["Imagens 1200×1200px", "Título até 60 chars", "12 fotos máx."],
    bgColor: "#FFE600",
    textColor: "#333333",
    symbol: "ML",
    symbolFontSize: "text-2xl",
  },
  {
    name: "Shopee",
    tagline: "Crescendo forte no Brasil",
    specs: ["Imagens 1:1 mínimo", "Título até 120 chars", "9 fotos máx."],
    bgColor: "#EE4D2D",
    textColor: "#FFFFFF",
    symbol: "S",
    symbolFontSize: "text-3xl",
  },
  {
    name: "Amazon Brasil",
    tagline: "Marketplace global",
    specs: ["Imagens 1000px mínimo", "Título até 200 chars", "9 fotos máx."],
    bgColor: "#232F3E",
    textColor: "#FF9900",
    symbol: "a",
    symbolFontSize: "text-3xl font-serif italic",
  },
];

export function Marketplaces() {
  return (
    <section className="relative py-24 px-5 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(75,83,248,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4">
            Plataformas suportadas
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-4">
            Formatado para{" "}
            <span className="gradient-text">cada marketplace</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Não existe um formato que serve para todos. O anuncia.ai respeita as
            especificações de imagem, título e descrição de cada plataforma.
          </p>
        </motion.div>

        {/* Marketplace cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {marketplaces.map((mp, i) => (
            <MotionCard
              key={mp.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="gap-0 py-0 overflow-hidden"
            >
              <CardHeader
                className="flex flex-row items-center gap-3 px-6 py-5 rounded-t-2xl"
                style={{ background: mp.bgColor }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-black ${mp.symbolFontSize}`}
                  style={{ color: mp.textColor, background: "rgba(0,0,0,0.1)" }}
                >
                  {mp.symbol}
                </div>
                <div>
                  <CardTitle
                    className="font-bold text-base"
                    style={{ color: mp.textColor }}
                  >
                    {mp.name}
                  </CardTitle>
                  <CardDescription
                    className="text-xs opacity-70"
                    style={{ color: mp.textColor }}
                  >
                    {mp.tagline}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="px-6 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-3">
                  Especificações otimizadas
                </p>
                <ul className="space-y-2.5">
                  {mp.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(163,230,53,0.15)" }}
                      >
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M1.5 4L3 5.5L6.5 2"
                            stroke="#A3E635"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      {spec}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </MotionCard>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground/60 mt-8"
        >
          Mais plataformas em breve — OLX, Americanas e Magalu
        </motion.p>
      </div>
    </section>
  );
}
