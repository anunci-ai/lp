"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GradientButton } from "./gradient-button";
import { ThemeSwitcher } from "./theme-switcher";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5 font-bold text-xl tracking-tight">
          <span className="text-foreground">anuncia</span>
          <span className="gradient-text">.ai</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Como Funciona", href: "#como-funciona" },
            { label: "Preços", href: "#precos" },
            { label: "FAQ", href: "#faq" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <GradientButton size="sm">
            Começar grátis
          </GradientButton>
        </div>
      </div>
    </motion.header>
  );
}
