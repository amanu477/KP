import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

          {/* Image Column */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700" />
              <img
                src={`${import.meta.env.BASE_URL}images/real/self_portert-011.png`}
                alt={PORTFOLIO_DATA.personal.fullName}
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/30 rounded-full hidden md:block" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-white/10 rounded-full hidden md:block" />
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-8 bg-primary block" />
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-medium">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
              Aesthetically <br /> Driven<span className="text-primary">.</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed font-light mb-6 max-w-2xl">
              {PORTFOLIO_DATA.personal.bio}
            </p>

            <p className="text-base text-muted-foreground leading-relaxed font-light mb-10 max-w-2xl">
              {PORTFOLIO_DATA.personal.bio2}
            </p>

            {/* Qualities */}
            <div className="flex flex-wrap gap-3 mb-10">
              {PORTFOLIO_DATA.qualities.map((q) => (
                <span key={q} className="text-xs bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full uppercase tracking-widest">
                  {q}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Location</p>
                <p className="font-medium">{PORTFOLIO_DATA.personal.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Role</p>
                <p className="font-medium">{PORTFOLIO_DATA.personal.role}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Experience</p>
                <p className="font-medium">15+ Years</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
