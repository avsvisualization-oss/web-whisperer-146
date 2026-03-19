import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import portfolioExterior from "@/assets/portfolio-exterior.jpg";
import portfolioInterior from "@/assets/portfolio-interior.jpg";
import portfolioAerial from "@/assets/portfolio-aerial.jpg";
import portfolioVr from "@/assets/portfolio-vr.jpg";
import portfolioTownhouse from "@/assets/portfolio-townhouse.jpg";
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";
import portfolioBedroom from "@/assets/portfolio-bedroom.jpg";
import portfolioMasterplan from "@/assets/portfolio-masterplan.jpg";
import portfolioCommercial from "@/assets/portfolio-commercial.jpg";
import portfolioInteractiveTour from "@/assets/portfolio-interactive-tour.jpg";
import portfolioSiteplan from "@/assets/portfolio-siteplan.jpg";
import portfolioVilla from "@/assets/portfolio-villa.jpg";

const categories = ["All", "Exterior", "Interior", "Aerial", "Interactive"] as const;
type Category = (typeof categories)[number];

interface Project {
  image: string;
  title: string;
  category: Exclude<Category, "All">;
  tag: string;
}

const projects: Project[] = [
  { image: portfolioExterior, title: "Craftsman Series Residence", category: "Exterior", tag: "Single-Family" },
  { image: portfolioTownhouse, title: "Modern Townhouse Collection", category: "Exterior", tag: "Multi-Family" },
  { image: portfolioVilla, title: "Mediterranean Villa Estate", category: "Exterior", tag: "Luxury" },
  { image: portfolioCommercial, title: "Urban Glass Office Tower", category: "Exterior", tag: "Commercial" },
  { image: portfolioInterior, title: "Open Concept Living", category: "Interior", tag: "Living Room" },
  { image: portfolioKitchen, title: "Luxury Kitchen Design", category: "Interior", tag: "Kitchen" },
  { image: portfolioBedroom, title: "Penthouse Master Suite", category: "Interior", tag: "Bedroom" },
  { image: portfolioAerial, title: "Community Overview", category: "Aerial", tag: "Streetscape" },
  { image: portfolioMasterplan, title: "Residential Master Plan", category: "Aerial", tag: "Master Plan" },
  { image: portfolioVr, title: "360° Virtual Experience", category: "Interactive", tag: "VR Tour" },
  { image: portfolioInteractiveTour, title: "Interactive Home Tour", category: "Interactive", tag: "Walkthrough" },
  { image: portfolioSiteplan, title: "Interactive Site Plan", category: "Interactive", tag: "Sales Tool" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="label-mono text-primary mb-5"
          >
            Our Work
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.04em]"
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-[15px] text-muted-foreground max-w-xl"
          >
            A curated selection of our work for builders, developers and marketing teams.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <div className="container-wide mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-[13px] font-medium rounded-full transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 font-mono-data text-[11px] opacity-60">
                  {projects.filter((p) => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container-wide pb-24">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightbox(i)}
                className="group relative overflow-hidden rounded-md aspect-[4/3] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono-data text-[11px] text-primary">{project.category}</span>
                    <span className="text-muted-foreground/30">·</span>
                    <span className="font-mono-data text-[11px] text-muted-foreground">{project.tag}</span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-8 text-[13px] text-muted-foreground font-mono-data">
          Showing {filtered.length} of {projects.length} projects
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightbox]?.image}
                alt={filtered[lightbox]?.title}
                className="w-full h-full object-contain rounded-md"
              />
              <div className="mt-4 text-center">
                <span className="label-mono text-primary">{filtered[lightbox]?.category}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-2">
                  {filtered[lightbox]?.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Portfolio;
