import { PORTFOLIO_DATA } from "@/lib/data";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-foreground/10 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-xl tracking-tighter text-foreground">
            {PORTFOLIO_DATA.personal.name.toUpperCase()}
            <span className="text-primary">.</span>
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            © {currentYear} All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-6">
          {PORTFOLIO_DATA.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
