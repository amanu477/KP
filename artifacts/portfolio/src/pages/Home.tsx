import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import { ArrowRight, Camera, Palette, BookOpen, Package, Lightbulb, Video } from "lucide-react";
import { Link } from "wouter";

const FEATURED_PROJECT_IDS = [1, 25, 13, 32];

const SPECIALTY_ICONS = [
  { name: "Branding", icon: Palette, desc: "Visual identities that make brands memorable" },
  { name: "Newsletter & Book Design", icon: BookOpen, desc: "Editorial layouts that tell stories clearly" },
  { name: "Packaging", icon: Package, desc: "Print & packaging design that stands out" },
  { name: "Illustration", icon: Lightbulb, desc: "Fine art & digital illustrations with impact" },
  { name: "Photography", icon: Camera, desc: "Award-winning documentary photography" },
  { name: "Videography", icon: Video, desc: "Campaign & documentary video production" },
];

function FeaturedWork() {
  const featured = PORTFOLIO_DATA.projects.filter((p) =>
    FEATURED_PROJECT_IDS.includes(p.id)
  );

  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center gap-4 mb-3">
              <span className="h-[1px] w-8 bg-primary block" />
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-medium">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
              Selected <span className="text-primary italic">Works</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group self-start md:self-auto"
          >
            View All Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-xl bg-card cursor-pointer ${
                i === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-[4/5]"
              }`}
            >
              <Link href="/work">
                <img
                  src={`${import.meta.env.BASE_URL}${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `${import.meta.env.BASE_URL}images/profile.png`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-white font-display font-bold text-lg leading-tight">{project.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatIDo() {
  return (
    <section className="py-20 md:py-28 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="h-[1px] w-8 bg-primary block" />
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-medium">Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            What I <span className="text-primary italic">Do</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SPECIALTY_ICONS.map(({ name, icon: Icon, desc }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-panel rounded-2xl p-8 group hover-elevate cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-[10px] text-primary uppercase tracking-[0.3em] font-medium mb-2 block">
                0{i + 1}
              </span>
              <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                {name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 border border-white/15 px-8 py-3.5 rounded-full text-sm font-medium uppercase tracking-widest text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
          >
            See All Skills
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function SkillsMarquee() {
  const skills = PORTFOLIO_DATA.skills.map((s) => s.name);
  const doubled = [...skills, ...skills];

  return (
    <section className="py-10 border-y border-white/5 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((skill, i) => (
          <span key={i} className="text-muted-foreground/40 text-sm font-medium uppercase tracking-widest flex-shrink-0 flex items-center gap-4">
            {skill}
            <span className="text-primary text-lg">·</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/20 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Background decorative ring */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-primary/10 pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border border-primary/10 pointer-events-none" />

          <div className="relative z-10">
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4">Available for projects</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[0.95]">
              Let's Create <br />
              <span className="text-primary italic">Something</span> <br />
              Together.
            </h2>
          </div>

          <div className="relative z-10 flex flex-col items-start gap-4">
            <p className="text-muted-foreground font-light max-w-xs leading-relaxed">
              15+ years crafting visual stories for the development sector, NGOs, and private clients across Ethiopia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 group"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/15 px-8 py-4 rounded-full text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground hover:border-white/30 transition-all duration-300"
              >
                About Me
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout activePage="home">
      <Hero />
      <SkillsMarquee />
      <FeaturedWork />
      <WhatIDo />
      <CTASection />
    </Layout>
  );
}
