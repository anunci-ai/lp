"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      id="inicio"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
      className={`transition-all duration-300`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo */}
        <div className="flex flex-row items-center gap-12">
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
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-semibold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <Button asChild>
            <a href="https://app.anunciaai.com/" target="_blank" rel="noopener noreferrer">
              Começar grátis
            </a>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
