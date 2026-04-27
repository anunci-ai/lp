"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Posso testar antes de pagar?",
    answer:
      "Sim. O plano Grátis permite gerar até 3 anúncios completos sem cadastrar cartão de crédito. Você vê o resultado antes de decidir se quer continuar.",
  },
  {
    question: "Como a IA garante que o anúncio segue as regras do marketplace?",
    answer:
      "Cada plataforma tem suas próprias regras de imagem (dimensões, fundo, moldura), limites de caracteres no título e critérios de descrição. O anuncia.ai foi treinado com essas especificações e formata automaticamente cada output para o marketplace que você escolher.",
  },
  {
    question: "Funciona para qualquer categoria de produto?",
    answer:
      "A grande maioria das categorias é suportada — eletrônicos, moda, casa e jardim, beleza, alimentos, artesanato e mais. Produtos que exigem laudos técnicos especiais (como medicamentos) estão fora do escopo.",
  },
  {
    question: "Os anúncios são realmente otimizados para SEO dentro do marketplace?",
    answer:
      "Sim. A IA analisa palavras-chave com alto volume de busca dentro de cada plataforma, prioriza termos que compradores reais usam e posiciona as palavras-chave nos campos de maior peso algorítmico (título, primeiras linhas da descrição, tags).",
  },
  {
    question: "Meus dados e fotos ficam seguros?",
    answer:
      "As fotos são processadas em servidores seguros com criptografia em trânsito e em repouso. Não compartilhamos suas imagens com terceiros nem as usamos para treinar modelos sem consentimento explícito. Você pode solicitar a exclusão dos seus dados a qualquer momento.",
  },
  {
    question: "Posso editar o que a IA gerou?",
    answer:
      "Sempre. Todo o conteúdo gerado — imagens, título, descrição e tags — pode ser editado diretamente na plataforma antes de você copiar ou exportar. Pense no anuncia.ai como um ponto de partida excelente, não como algo gravado em pedra.",
  },
  {
    question: "E se a qualidade da minha foto for muito ruim?",
    answer:
      "A IA consegue trabalhar com fotos razoáveis tiradas de celular, mesmo sem iluminação profissional. Fotos muito escuras, com objeto cortado ou de resolução muito baixa podem gerar resultados piores — nesses casos, o sistema indica quais ajustes fazer antes de processar.",
  },
  {
    question: "Quanto tempo leva para gerar um anúncio completo?",
    answer:
      "Em média, 25 a 40 segundos para receber título, descrição, tags e as 3 imagens prontas. O tempo varia com a complexidade do produto e a carga do servidor, mas raramente passa de um minuto.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group text-muted-foreground"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
          {q}
        </span>
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
          style={{ background: isOpen ? "linear-gradient(135deg, #0f3194, #4b53f8)" : "var(--secondary)" }}
        >
          <motion.svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <path
              d="M2 4L6 8L10 4"
              stroke={isOpen ? "white" : "currentColor"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 px-5 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(124,58,237,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4">
            Dúvidas
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
            Perguntas{" "}
            <span className="gradient-text">frequentes</span>
          </h2>
        </motion.div>

        {/* FAQ list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65 }}
          className="glass-card rounded-2xl px-6 md:px-8"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.question}
              a={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground/70 mt-8"
        >
          Mais dúvidas?{" "}
          <a href="mailto:oi@anuncia.ai" className="gradient-text hover:opacity-80 transition-opacity">
            Fale com a gente
          </a>
        </motion.p>
      </div>
    </section>
  );
}
