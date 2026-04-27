"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

type BillingCycle = "mensal" | "anual";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MotionCard = motion.create(Card);

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
    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--muted)" }}>
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M2 2L6 6M6 2L2 6" stroke="var(--muted-foreground)" strokeWidth="1.5" strokeLinecap="round" />
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
          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-4">
            Simples e{" "}
            <span className="gradient-text">transparente</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
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
            className={`text-sm font-medium px-4 py-2 rounded-full transition-colors cursor-pointer ${billing === "mensal" ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            Mensal
          </button>
          <div
            className="relative w-12 h-6 rounded-full cursor-pointer"
            style={{ background: billing === "anual" ? "linear-gradient(135deg, #0f3194, #4b53f8)" : "var(--secondary)" }}
            onClick={() => setBilling(billing === "mensal" ? "anual" : "mensal")}
          >
            <div
              className="absolute top-1 w-4 h-4 rounded-full bg-background shadow transition-all"
              style={{ left: billing === "anual" ? "calc(100% - 20px)" : "4px" }}
            />
          </div>
          <button
            onClick={() => setBilling("anual")}
            className={`text-sm font-medium px-4 py-2 rounded-full transition-colors cursor-pointer flex items-center gap-2 ${billing === "anual" ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            Anual
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(163,230,53,0.2)", color: "#A3E635" }}>
              -20%
            </span>
          </button>
        </motion.div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-200 mx-auto">
          {plans.map((plan, i) => {
            const price = billing === "mensal" ? plan.priceMonthly : plan.priceAnnual;
            const allFeatures = [...plan.features, ...plan.disabledFeatures];

            if (plan.highlighted) {
              return (
                <MotionCard
                  key={plan.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className=""
                >
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="rounded-[19px] flex flex-col gap-5 bg-card">
                      <div className="flex items-end gap-1">
                        <span className="text-muted-foreground text-lg mb-1.5">R$</span>
                        <span className="text-5xl font-black text-foreground">{price}</span>
                        <span className="text-muted-foreground text-sm mb-2">/mês</span>
                      </div>

                      {billing === "anual" && price > 0 && (
                        <p className="text-xs text-muted-foreground/70 -mt-3">
                          cobrado anualmente — R${price * 12}/ano
                        </p>
                      )}

                      <Button>
                        {plan.cta}
                      </Button>

                      <ul className="space-y-3">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
                            <CheckIcon enabled={true} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
          
                </MotionCard>
              );
            }

            return (
              <MotionCard
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="glass-card"
              >
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col gap-5">
                  <div className="flex items-end gap-1">
                    {price === 0 ? (
                      <span className="text-5xl font-black text-foreground">Grátis</span>
                    ) : (
                      <>
                        <span className="text-muted-foreground text-lg mb-1.5">R$</span>
                        <span className="text-5xl font-black text-foreground">{price}</span>
                        <span className="text-muted-foreground text-sm mb-2">/mês</span>
                      </>
                    )}
                  </div>

                  {billing === "anual" && price > 0 && (
                    <p className="text-xs text-white/30 -mt-3">
                      cobrado anualmente — R${price * 12}/ano
                    </p>
                  )}

                  <Button variant="outline">
                    {plan.cta}
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckIcon enabled={true} />
                        {f}
                      </li>
                    ))}
                    {plan.disabledFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckIcon enabled={false} />
                        {f}
                      </li>
                    ))}
                  </ul>

                </CardContent>
              </MotionCard>
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
