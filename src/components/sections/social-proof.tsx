"use client";

import { motion } from "framer-motion";
import { FlagIcon, ShieldCheckIcon, StarIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const MotionCard = motion.create(Card);

const testimonials = [
  {
    quote:
      "Eu tinha 200 produtos parados sem anúncio porque levava 40 minutos por item. Com o anuncia.ai, resolvi tudo em um final de semana. Já recuperei o investimento na primeira semana.",
    name: "Marcos Oliveira",
    role: "Seller no Mercado Livre · São Paulo",
    initials: "MO",
    gradient: "from-[#0f3194] to-[#4b53f8]",
    stars: 5,
  },
  {
    quote:
      "A gente gerencia 15 lojas de clientes diferentes. Antes, criar anúncios era um pesadelo de planilhas e briefings. Agora cada produto fica pronto em 30 segundos e os clientes adoram.",
    name: "Priya Santos",
    role: "Agência de e-commerce · Curitiba",
    initials: "PS",
    gradient: "from-[#4b53f8] to-[#818cf8]",
    stars: 5,
  },
  {
    quote:
      "Fui cético no começo, mas os títulos que a IA gera ranqueiam melhor que os meus. Minhas vendas na Shopee aumentaram 34% no primeiro mês.",
    name: "Rafael Mendes",
    role: "Loja de eletrônicos · Recife",
    initials: "RM",
    gradient: "from-[#0f3194] to-[#2d3ef6]",
    stars: 5,
  },
];

export function SocialProof() {
  return (
    <section className="relative py-28 px-5 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(75,83,248,0.05) 0%, transparent 60%)",
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
            O que dizem os sellers
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
            Quem usa{" "}
            <span className="gradient-text">não volta atrás</span>
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <MotionCard
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="relative gap-5"
            >
              {/* Gradient glow in corner */}
              <div
                className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 bg-gradient-to-br ${t.gradient} pointer-events-none`}
                style={{ filter: "blur(30px)" }}
              />

              <CardHeader className="gap-5">
                {/* Quote mark */}
                <div
                  className={`text-5xl font-black leading-none bg-gradient-to-br ${t.gradient}`}
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: "0.8",
                  }}
                >
                  &quot;
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(t.stars)].map((_, j) => (
                    <svg
                      key={j}
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="#FFB800"
                    >
                      <path d="M7 1l1.57 3.18L12 4.64 9.5 7.09l.59 3.41L7 8.75l-3.09 1.75.59-3.41L2 4.64l3.43-.46L7 1z" />
                    </svg>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.quote}
                </p>
              </CardContent>

              <CardFooter className="gap-3 border-t">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white bg-gradient-to-br ${t.gradient} flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </CardFooter>
            </MotionCard>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-14"
        >
          {[
            { icon: <StarIcon size={20} />, label: "4.9/5 média de avaliações" },
            { icon: <ShieldCheckIcon size={20} />, label: "Dados protegidos" },
            { icon: <FlagIcon size={20} />, label: "Feito para o mercado brasileiro" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2.5 text-muted-foreground text-sm"
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
