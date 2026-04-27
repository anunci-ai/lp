"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Envie uma foto",
    description:
      "Tire uma foto do produto com o celular, mesmo sem iluminação perfeita. Qualquer ângulo serve — a IA corrige tudo.",
    visual: <UploadMockup />,
    accent: "#0f3194",
  },
  {
    number: "02",
    title: "A IA faz o trabalho",
    description:
      "Em segundos, geramos 3 imagens com fundo branco, título SEO, descrição persuasiva e tags relevantes para o seu produto.",
    visual: <ProcessingMockup />,
    accent: "#2d3ef6",
  },
  {
    number: "03",
    title: "Publique no marketplace",
    description:
      "Copie e cole direto no Mercado Livre, Shopee ou Amazon. Tudo já formatado nas especificações de cada plataforma.",
    visual: <PublishMockup />,
    accent: "#4b53f8",
  },
];

function UploadMockup() {
  return (
    <div className="w-full h-40 rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-3 bg-muted/20">
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center"
        style={{ background: "rgba(15, 49, 148, 0.15)" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 16l4-4 4 4M12 12l4-4 4 4" stroke="#0f3194" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 20h16" stroke="#0f3194" strokeWidth="2" strokeLinecap="round" />
          <rect x="8" y="8" width="8" height="8" rx="1" stroke="#0f3194" strokeWidth="1.5" strokeDasharray="2 1.5" />
        </svg>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-foreground/70">Arraste a foto aqui</p>
        <p className="text-xs text-muted-foreground/60 mt-0.5">JPG, PNG ou HEIC até 20MB</p>
      </div>
    </div>
  );
}

function ProcessingMockup() {
  return (
    <div className="w-full h-40 rounded-xl bg-muted/20 border border-border flex flex-col items-center justify-center gap-3 relative overflow-hidden">
      {/* Spinning gradient ring */}
      <div className="relative w-14 h-14">
        <div
          className="absolute inset-0 rounded-full animate-spin-slow"
          style={{
            background: "conic-gradient(from 0deg, #0f3194, #2d3ef6, #4b53f8, transparent)",
            padding: "2px",
          }}
        >
          <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: "var(--card)" }}>
            <span className="text-xl">🤖</span>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-foreground/70">Processando…</p>
        <div className="flex gap-1 justify-center mt-2">
          {["Imagens", "Título", "Descrição", "Tags"].map((label) => (
            <span
              key={label}
              className="text-[9px] px-2 py-0.5 rounded-full border border-border text-muted-foreground/60"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PublishMockup() {
  return (
    <div className="w-full h-40 rounded-xl bg-muted/20 border border-border flex flex-col justify-between p-3">
      {/* Title preview */}
      <div>
        <div className="text-[10px] text-muted-foreground/60 mb-1">Título gerado</div>
        <div className="text-xs text-foreground/80 font-medium leading-snug">
          Caneca Térmica 500ml Inox Premium — Tampa e Alça Ergonômica
        </div>
      </div>
      {/* Marketplace buttons */}
      <div className="flex gap-2">
        {[
          { label: "Mercado Livre", color: "#FFE600", textColor: "#333" },
          { label: "Shopee", color: "#EE4D2D", textColor: "#fff" },
          { label: "Amazon", color: "#FF9900", textColor: "#232F3E" },
        ].map((m) => (
          <button
            key={m.label}
            className="flex-1 text-[9px] font-bold py-1.5 rounded-lg cursor-pointer transition-transform hover:scale-105"
            style={{ background: m.color, color: m.textColor }}
          >
            {m.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="relative py-28 px-5 overflow-hidden"
    >
      {/* Subtle bg gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(75,83,248,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4">
            Como funciona
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
            Três passos.{" "}
            <span className="gradient-text">Trinta segundos.</span>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-20 left-1/3 right-1/3 h-px"
            style={{ background: "linear-gradient(to right, #0f3194, #2d3ef6, #4b53f8)" }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-5"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span
                  className="text-5xl font-black leading-none"
                  style={{
                    background: `linear-gradient(135deg, ${step.accent}, rgba(${step.accent}, 0.4))`,
                    backgroundImage: `linear-gradient(135deg, ${step.accent} 0%, rgba(255,255,255,0.15) 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {step.number}
                </span>
                {/* Step indicator dot */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: `${step.accent}22`, border: `1px solid ${step.accent}44` }}
                >
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: step.accent }} />
                </div>
              </div>

              {/* Visual mockup */}
              {step.visual}

              {/* Text */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
