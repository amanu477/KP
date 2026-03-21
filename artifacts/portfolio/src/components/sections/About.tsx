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
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700" />
              <img 
                src={`${import.meta.env.BASE_URL}images/profile.png`} 
                alt={PORTFOLIO_DATA.personal.fullName}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary rounded-full hidden md:block" />
          </motion.div>

          {/* Text Column */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
              Aesthetically <br /> Driven<span className="text-primary">.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-light mb-8 max-w-2xl">
              {PORTFOLIO_DATA.personal.bio}
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 mt-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Location</p>
                <p className="font-medium text-lg">{PORTFOLIO_DATA.personal.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Role</p>
                <p className="font-medium text-lg">{PORTFOLIO_DATA.personal.role}</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
