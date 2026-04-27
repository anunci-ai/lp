"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/gradient-button";

type BillingCycle = "mensal" | "anual";

const plans = [
  {
    name: "Grátis",
    description: "Para testar e experimentar",
    priceMonthly: 0,
    priceAnnual: 0,
    cta: "Começar grátis",
    ctaVariant: "outline" as const,
    highlighted: false,
    features: [
      "3 anúncios por mês",
      "1 imagem gerada por anúncio",
      "Título e descrição básicos",
      "Mercado Livre apenas",
      "Marca d'água nas imagens",
    ],
    disabledFeatures: ["Sem marca d'água", "Exportação em lote", "Suporte prioritário"],
  },
  {
    name: "Pro",
    badge: "Mais popular",
    description: "Para sellers ativos",
    priceMonthly: 97,
    priceAnnual: 77,
    cta: "Assinar Pro",
    ctaVariant: "gradient" as const,
    highlighted: true,
    features: [
      "100 anúncios por mês",
      "3 imagens por anúncio",
      "Título SEO + descrição persuasiva",
      "Mercado Livre, Shopee e Amazon",
      "Sem marca d'água",
      "Tags e palavras-chave",
      "Histórico de anúncios",
    ],
    disabledFeatures: ["Suporte prioritário"],
  },
  {
    name: "Agência",
    description: "Para quem gerencia múltiplos sellers",
    priceMonthly: 247,
    priceAnnual: 197,
    cta: "Falar com equipe",
    ctaVariant: "outline" as const,
    highlighted: false,
    features: [
      "Anúncios ilimitados",
      "3 imagens por anúncio",
      "Múltiplas contas de seller",
      "Todos os marketplaces",
      "Exportação em lote (CSV/Excel)",
      "API de integração",
      "Suporte prioritário via WhatsApp",
      "Relatórios de desempenho",
    ],
    disabledFeatures: [],
  },
];

function CheckIcon({ enabled }: { enabled: boolean }) {
  if (enabled) {
    return (
      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(163,230,53,0.15)" }}>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path d="M1.5 4L3 5.5L6.5 2" stroke="#A3E635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  return (
    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.04)" }}>
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M2 2L6 6M6 2L2 6" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>("mensal");

  return (
    <section id="precos" className="relative py-28 px-5 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(232,57,158,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4">
            Preços
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Simples e{" "}
            <span className="gradient-text">transparente</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Comece grátis. Escale quando precisar.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setBilling("mensal")}
            className={`text-sm font-medium px-4 py-2 rounded-full transition-colors cursor-pointer ${billing === "mensal" ? "bg-white/10 text-white" : "text-white/40 hover:text-white/60"}`}
          >
            Mensal
          </button>
          <div
            className="relative w-12 h-6 rounded-full cursor-pointer"
            style={{ background: billing === "anual" ? "linear-gradient(135deg, #0f3194, #4b53f8)" : "rgba(255,255,255,0.1)" }}
            onClick={() => setBilling(billing === "mensal" ? "anual" : "mensal")}
          >
            <div
              className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all"
              style={{ left: billing === "anual" ? "calc(100% - 20px)" : "4px" }}
            />
          </div>
          <button
            onClick={() => setBilling("anual")}
            className={`text-sm font-medium px-4 py-2 rounded-full transition-colors cursor-pointer flex items-center gap-2 ${billing === "anual" ? "bg-white/10 text-white" : "text-white/40 hover:text-white/60"}`}
          >
            Anual
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(163,230,53,0.2)", color: "#A3E635" }}>
              -20%
            </span>
          </button>
        </motion.div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => {
            const price = billing === "mensal" ? plan.priceMonthly : plan.priceAnnual;
            const allFeatures = [...plan.features, ...plan.disabledFeatures];

            if (plan.highlighted) {
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="gradient-border-card md:-mt-4 md:pb-4 relative"
                >
                  {/* Popular badge */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <div className="shimmer-btn text-white text-[11px] font-bold px-4 py-1 rounded-full whitespace-nowrap">
                      ✦ {plan.badge}
                    </div>
                  </div>

                  <div className="rounded-[19px] p-7 flex flex-col gap-5" style={{ background: "#0B0B18" }}>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                      <p className="text-sm text-white/40">{plan.description}</p>
                    </div>

                    <div className="flex items-end gap-1">
                      <span className="text-white/40 text-lg mb-1.5">R$</span>
                      <span className="text-5xl font-black text-white">{price}</span>
                      <span className="text-white/40 text-sm mb-2">/mês</span>
                    </div>

                    {billing === "anual" && price > 0 && (
                      <p className="text-xs text-white/30 -mt-3">
                        cobrado anualmente — R${price * 12}/ano
                      </p>
                    )}

                    <GradientButton size="md" variant={plan.ctaVariant} className="w-full justify-center">
                      {plan.cta}
                    </GradientButton>

                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                          <CheckIcon enabled={true} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="glass-card rounded-2xl p-7 flex flex-col gap-5"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-white/40">{plan.description}</p>
                </div>

                <div className="flex items-end gap-1">
                  {price === 0 ? (
                    <span className="text-5xl font-black text-white">Grátis</span>
                  ) : (
                    <>
                      <span className="text-white/40 text-lg mb-1.5">R$</span>
                      <span className="text-5xl font-black text-white">{price}</span>
                      <span className="text-white/40 text-sm mb-2">/mês</span>
                    </>
                  )}
                </div>

                {billing === "anual" && price > 0 && (
                  <p className="text-xs text-white/30 -mt-3">
                    cobrado anualmente — R${price * 12}/ano
                  </p>
                )}

                <GradientButton size="md" variant={plan.ctaVariant} className="w-full justify-center">
                  {plan.cta}
                </GradientButton>

                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                      <CheckIcon enabled={true} />
                      {f}
                    </li>
                  ))}
                  {plan.disabledFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/25">
                      <CheckIcon enabled={false} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-white/25 mt-8"
        >
          Cancele quando quiser. Sem taxas de cancelamento. Pagamento via Pix, cartão ou boleto.
        </motion.p>
      </div>
    </section>
  );
}
