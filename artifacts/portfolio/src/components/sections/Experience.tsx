import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Experience() {
  return (
    <section className="py-24 md:py-40 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            Professional <span className="text-primary italic">Journey</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-16 mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 translate-y-2 z-10" />

              {/* Content */}
              <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                <div className="glass-panel p-8 rounded-2xl hover-elevate">
                  <span className="text-primary font-mono text-sm mb-2 block">{exp.period}</span>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-1">{exp.role}</h3>
                  <h4 className="text-muted-foreground text-lg mb-4">{exp.company}</h4>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
