import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.02] to-transparent" />
        <div className="absolute bottom-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-[calc(100vh-80px)]">

        {/* Left: Text Content */}
        <div className="flex flex-col justify-center py-16 lg:py-0 lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="h-[1px] w-12 bg-primary block" />
            <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium">
              Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter mb-4 uppercase"
          >
            {PORTFOLIO_DATA.personal.name}
            <span className="text-primary">.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl font-display font-medium text-primary uppercase tracking-widest mb-6"
          >
            {PORTFOLIO_DATA.personal.role}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-muted-foreground font-light mb-10 max-w-lg leading-relaxed"
          >
            {PORTFOLIO_DATA.personal.tagline}
          </motion.p>

          {/* Specialties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {PORTFOLIO_DATA.specialties.map((s) => (
              <span key={s} className="text-xs border border-white/10 px-3 py-1.5 rounded-full text-muted-foreground uppercase tracking-widest">
                {s}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-6"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 group"
            >
              View Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              About Me
            </a>
          </motion.div>
        </div>

        {/* Right: Profile Photo */}
        <motion.div
          className="relative hidden lg:flex items-center justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Gold frame accent */}
          <div className="absolute top-8 right-8 w-[85%] h-[85%] border border-primary/20 rounded-2xl" />

          <div className="relative w-full max-w-[480px] aspect-[3/4] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10" />
            <img
              src={`${import.meta.env.BASE_URL}images/real/self_portert-01.png`}
              alt={PORTFOLIO_DATA.personal.fullName}
              className="w-full h-full object-cover object-top"
            />
            {/* Name overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-1">
                {PORTFOLIO_DATA.personal.location}
              </p>
              <p className="text-white/60 text-sm font-light">
                {PORTFOLIO_DATA.personal.role2}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <div className="glass-panel rounded-xl p-4 text-center min-w-[90px]">
              <p className="text-2xl font-display font-bold text-primary">15+</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">Years</p>
            </div>
            <div className="glass-panel rounded-xl p-4 text-center min-w-[90px]">
              <p className="text-2xl font-display font-bold text-primary">50+</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">Projects</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ top: ['-50%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
