import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Skills() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-8 bg-primary block" />
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-medium">Skills</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
              Expertise & <br />
              <span className="text-primary italic">Capabilities</span>
            </h1>
            <p className="text-muted-foreground font-light text-lg mb-12 max-w-md leading-relaxed">
              A comprehensive toolkit combining structural design thinking with deep technical execution to create memorable experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              {["Adobe Suite", "Creative", "Production"].map((cat) => (
                <div key={cat} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{cat}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            {PORTFOLIO_DATA.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group"
              >
                <div className="flex justify-between items-end mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[10px] text-muted-foreground border border-foreground/15 px-2 py-0.5 rounded-full">
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-xs text-primary font-mono font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-0.5 w-full bg-foreground/10 relative overflow-hidden rounded-full">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 0.2 + (index * 0.06), ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
