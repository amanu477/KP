import { PORTFOLIO_DATA } from "@/lib/data";
import { Link } from "wouter";
import { Linkedin, Mail, ExternalLink } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kaleb-belete-1148935a/",
    icon: Linkedin,
    label: "LinkedIn Profile",
  },
  {
    name: "Email",
    url: "mailto:Kalebbelete42@gmail.com",
    icon: Mail,
    label: "Send Email",
  },
  {
    name: "Portfolio PDF",
    url: "https://indd.adobe.com/view/153401ce-d64e-4715-abb2-76c19349e127",
    icon: ExternalLink,
    label: "View Adobe Portfolio",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Main footer row */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">

          {/* Brand */}
          <div>
            <p className="font-display font-bold text-2xl tracking-tighter text-foreground mb-2">
              {PORTFOLIO_DATA.personal.name.toUpperCase()}
              <span className="text-primary">.</span>
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-[220px]">
              Creative Design & Production Lead based in Addis Ababa, Ethiopia.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium mb-5">Navigation</p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium mb-5">Connect</p>
            <ul className="flex flex-col gap-4">
              {SOCIAL_LINKS.map(({ name, url, icon: Icon, label }) => (
                <li key={name}>
                  <a
                    href={url}
                    target={url.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-sm text-foreground/70 group-hover:text-primary transition-colors font-medium">
                      {name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-foreground/8 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {currentYear} {PORTFOLIO_DATA.personal.fullName}. All Rights Reserved.</p>
          <p className="uppercase tracking-widest">Addis Ababa, Ethiopia</p>
        </div>

      </div>
    </footer>
  );
}
