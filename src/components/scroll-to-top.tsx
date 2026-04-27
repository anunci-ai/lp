"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#inicio"
      className={`fixed bottom-12 right-4 p-2.5  transition-all duration-500 ease-in-out hover:opacity-80 rounded-full bg-primary hover:scale-110 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <ChevronUp size={18} className="text-white" />
      <span className="sr-only">Scroll to the top of the page</span>
    </a>
  );
}