"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function FinalCTA() {
  return (
    <section className="relative py-28 px-5 overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,49,148,0.12) 0%, rgba(75,83,248,0.15) 40%, rgba(15,49,148,0.12) 100%)",
        }}
      />
      {/* Subtle grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Glowing orb — decorative */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(75,83,248,0.15) 0%, rgba(15,49,148,0.08) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-6">
            Comece agora
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-foreground leading-[1.05] mb-6">
            Pare de perder tempo{" "}
            <span className="gradient-text">escrevendo anúncios.</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Cada minuto que você gasta escrevendo título e descrição à mão é um
            minuto que poderia estar vendendo. Deixa a IA fazer o trabalho pesado.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="https://app.anunciaai.com/sign-in">
                Gerar meu primeiro anúncio grátis
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Button>
          </div>

          <p className="mt-5 text-sm text-muted-foreground/60">
            Sem cadastro · Sem cartão de crédito · Resultado em 30 segundos
          </p>
        </motion.div>

        {/* Social proof mini */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mt-12"
        >
          <div className="flex -space-x-2">
            {["MO", "PS", "RM", "CA", "JL"].map((initials, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-[10px] font-bold text-white"
                style={{
                  background: [
                    "linear-gradient(135deg, #0f3194, #4b53f8)",
                    "linear-gradient(135deg, #4b53f8, #818cf8)",
                    "linear-gradient(135deg, #0f3194, #2d3ef6)",
                    "linear-gradient(135deg, #2d3ef6, #4b53f8)",
                    "linear-gradient(135deg, #4b53f8, #0f3194)",
                  ][i],
                }}
              >
                {initials}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground/60">
            Mais de{" "}
            <span className="text-foreground/70 font-semibold">10.000 sellers</span>{" "}
            já usam o anuncia.ai
          </p>
        </motion.div>
      </div>
    </section>
  );
}
