import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Experience() {
  return (
    <section className="py-16 md:py-24 px-6 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[1px] w-8 bg-primary block" />
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-medium">Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            Professional <span className="text-primary italic">Journey</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-foreground/15" />

          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative flex gap-8 md:gap-16 mb-12 last:mb-0 pl-8 md:pl-24"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-8 top-6 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 z-10 shadow-sm" />

              <div className="glass-panel p-8 rounded-2xl hover-elevate w-full">
                <span className="text-primary font-mono text-sm mb-3 block font-medium">{exp.period}</span>
                <h3 className="text-2xl font-display font-bold text-foreground mb-1">{exp.role}</h3>
                <h4 className="text-muted-foreground text-base mb-4">{exp.company}</h4>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
