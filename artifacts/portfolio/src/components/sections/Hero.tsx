import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      {/* Subtle decorative blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[15%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-primary/8 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[25vw] h-[25vw] rounded-full bg-primary/5 blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center py-16">

        {/* Left: Text Content */}
        <div className="flex flex-col justify-center lg:pr-16">
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
            className="text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter mb-4 uppercase text-foreground"
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
              <span key={s} className="text-xs border border-foreground/15 px-3 py-1.5 rounded-full text-muted-foreground uppercase tracking-widest hover:border-primary hover:text-primary transition-colors duration-200">
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
            <Link
              href="/work"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 group shadow-md"
            >
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              About Me
            </Link>
          </motion.div>
        </div>

        {/* Right: Profile Photo */}
        <motion.div
          className="relative hidden lg:flex items-center justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Frame accent */}
          <div className="absolute top-8 right-8 w-[85%] h-[85%] border border-primary/25 rounded-2xl" />

          <div className="relative w-full max-w-[480px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent z-10" />
            <img
              src={`${import.meta.env.BASE_URL}images/real/self_portert-01.png`}
              alt={PORTFOLIO_DATA.personal.fullName}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-1 font-medium">
                {PORTFOLIO_DATA.personal.location}
              </p>
              <p className="text-white/80 text-sm font-light">
                {PORTFOLIO_DATA.personal.role2}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <div className="glass-panel rounded-xl p-4 text-center min-w-[90px] shadow-md">
              <p className="text-2xl font-display font-bold text-primary">15+</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">Years</p>
            </div>
            <div className="glass-panel rounded-xl p-4 text-center min-w-[90px] shadow-md">
              <p className="text-2xl font-display font-bold text-primary">50+</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">Projects</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-foreground/15 overflow-hidden relative">
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
