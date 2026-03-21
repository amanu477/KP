import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
              Expertise & <br />
              <span className="text-primary italic">Capabilities</span>
            </h2>
            <p className="text-muted-foreground font-light text-lg mb-12 max-w-md leading-relaxed">
              A comprehensive toolkit combining structural design thinking with deep technical execution to create memorable experiences.
            </p>
          </motion.div>

          <div className="flex flex-col gap-8">
            {PORTFOLIO_DATA.skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-medium uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-0.5 w-full bg-white/10 relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
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
