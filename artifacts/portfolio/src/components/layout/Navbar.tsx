import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { PORTFOLIO_DATA } from "@/lib/data";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

interface NavbarProps {
  activePage?: string;
}

export function Navbar({ activePage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location === "/" || location === "";
    return location.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary px-6 md:px-12",
        scrolled ? "py-3 shadow-lg shadow-primary/20" : "py-5"
      )}
    >
      {/* Thin top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/20" />

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-display font-bold tracking-tight text-white hover:text-white/80 transition-opacity"
        >
          {PORTFOLIO_DATA.personal.name.toUpperCase()}
          <span className="text-white/50">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium uppercase tracking-widest rounded-full transition-all duration-200",
                isActive(link.href)
                  ? "text-primary bg-white"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white p-2 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 pt-4 pb-2 border-t border-white/10 mt-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium uppercase tracking-widest transition-colors",
                    isActive(link.href)
                      ? "bg-white text-primary font-bold"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
