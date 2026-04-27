"use client";

import { motion } from "framer-motion";
import { AnimatedBlobs } from "@/components/animated-blobs";
import { BeforeAfter } from "@/components/before-after";
import { Button } from "../ui/button";
import Link from "next/link";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  },
};

const stats = [
  { value: "10k+", label: "anúncios gerados" },
  { value: "30s", label: "tempo médio" },
  { value: "3", label: "plataformas" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-5 overflow-hidden dot-grid">
      <AnimatedBlobs />

      {/* Top badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1 backdrop-blur-sm"
      >
        <span className="text-base">✨</span>
        <span className="text-xs font-medium text-muted-foreground">
          De foto a anúncio profissional em{" "}
          <span className="gradient-text font-semibold">30 segundos</span>
        </span>
      </motion.div>

      {/* Headline */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-5xl mx-auto"
      >
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6"
        >
          <span className="text-foreground">Crie anúncios SEO Friendly para marketplaces </span>
          <span className="gradient-text"> - com IA</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Você envia uma foto do seu produto. A IA gera 3 imagens prontas para
          marketplace, título otimizado para SEO, descrição persuasiva e todas as
          tags — tudo formatado para{" "}
          <span className="text-foreground/80">Mercado Livre, Shopee e Amazon</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
        >
          <Button size="lg" asChild>
            <Link href="https://app.anunciaai.com/sign-in">
              Gerar meu primeiro anúncio grátis
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.75 9h10.5M9.75 4.5L14.25 9l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Button>
          <Button size="lg" variant="ghost">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M7 6.5L12 9L7 11.5V6.5Z" fill="currentColor" />
            </svg>
            Ver demonstração
          </Button>
        </motion.div>

        <motion.p variants={item} className="text-sm text-muted-foreground/60">
          Sem cadastro. Sem cartão de crédito. Primeiro anúncio gratuito.
        </motion.p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex items-center gap-8 md:gap-14 mt-14 mb-12"
      >
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl md:text-4xl font-black gradient-text">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Before/After showcase */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="w-full max-w-3xl mx-auto"
      >
        <BeforeAfter />
        <p className="text-center text-xs text-muted-foreground/50 mt-3">
          Arraste para comparar — antes e depois do anuncia.ai
        </p>
      </motion.div>
    </section>
  );
}
