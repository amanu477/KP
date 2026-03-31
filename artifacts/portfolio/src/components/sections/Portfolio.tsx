import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA, CATEGORIES } from "@/lib/data";
import { Maximize2, X, ExternalLink, Play, BookOpen } from "lucide-react";
import { PdfSlider } from "@/components/ui/PdfSlider";

type Project = typeof PORTFOLIO_DATA.projects[0] & { pdfUrl?: string };

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = (PORTFOLIO_DATA.projects as Project[]).filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  const isPdf = (project: Project) => !!(project as { pdfUrl?: string }).pdfUrl;

  return (
    <section className="py-16 md:py-24 px-6 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[1px] w-8 bg-primary block" />
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-medium">Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
              Selected <span className="text-primary italic">Works</span>
            </h1>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-sm"
                    : "border border-foreground/15 hover:border-primary/40 text-muted-foreground hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-card cursor-pointer shadow-sm"
                onClick={() => setSelectedProject(project)}
              >
                {isPdf(project) && project.image ? (
                  /* PDF project with a cover image — show the image + badge */
                  <>
                    <img
                      src={`${import.meta.env.BASE_URL}${project.image}`}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `${import.meta.env.BASE_URL}images/profile.png`;
                      }}
                    />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                      <span className="inline-flex items-center gap-2 bg-primary/90 text-white text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                        <BookOpen className="w-3.5 h-3.5" /> Read Book
                      </span>
                    </div>
                  </>
                ) : isPdf(project) ? (
                  /* PDF project without an image — generic book card */
                  <div className="w-full h-full bg-gradient-to-br from-primary/90 to-primary/60 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-6 shadow-lg">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-3">
                      Book Design
                    </p>
                    <div className="mt-auto pt-6">
                      <span className="inline-flex items-center gap-2 text-white/80 text-xs uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full">
                        <BookOpen className="w-3.5 h-3.5" /> Read Book
                      </span>
                    </div>
                  </div>
                ) : (
                  <img
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `${import.meta.env.BASE_URL}images/profile.png`;
                    }}
                  />
                )}

                {project.category === "Videography" && (
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center shadow-md">
                    <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                  </div>
                )}

                {!isPdf(project) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">
                        {project.category} — {project.year}
                      </span>
                      <h3 className="text-xl font-display font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/70 text-sm line-clamp-2">{project.description}</p>

                      <div className="mt-5 flex items-center gap-3">
                        <span className="flex items-center gap-1.5 text-white text-xs font-medium uppercase tracking-widest">
                          <Maximize2 className="w-3.5 h-3.5" /> View
                        </span>
                        {project.videoUrl && (
                          <span className="flex items-center gap-1.5 text-primary text-xs font-medium uppercase tracking-widest">
                            <ExternalLink className="w-3.5 h-3.5" /> Video Source
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* PDF Slider */}
      <AnimatePresence>
        {selectedProject && isPdf(selectedProject) && (
          <PdfSlider
            pdfUrl={`${import.meta.env.BASE_URL}${(selectedProject as { pdfUrl?: string }).pdfUrl}`}
            title={selectedProject.title}
            description={selectedProject.description}
            year={selectedProject.year}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Regular Image Lightbox */}
      <AnimatePresence>
        {selectedProject && !isPdf(selectedProject) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedProject(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
              onClick={() => setSelectedProject(null)}
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-w-5xl w-full flex flex-col md:flex-row gap-8 items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-1 max-h-[80vh] overflow-hidden rounded-xl">
                <img
                  src={`${import.meta.env.BASE_URL}${selectedProject.image}`}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain rounded-xl shadow-2xl"
                />
              </div>

              <div className="md:w-72 flex-shrink-0 text-left">
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3 block">
                  {selectedProject.category} — {selectedProject.year}
                </span>
                <h3 className="text-2xl font-display font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8">{selectedProject.description}</p>

                {selectedProject.videoUrl && (
                  <a
                    href={selectedProject.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-primary/90 transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Play className="w-4 h-4 fill-current" />
                    View Video Source
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
