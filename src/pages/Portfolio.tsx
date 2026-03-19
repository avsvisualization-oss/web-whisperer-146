import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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
  description: string;
}

const projects: Project[] = [
  {
    image: portfolioExterior,
    title: "Craftsman Series Residence",
    category: "Exterior",
    tag: "Single-Family",
    description: "Marketing-ready exterior renderings highlighting architectural character and materials.",
  },
  {
    image: portfolioTownhouse,
    title: "Modern Townhouse Collection",
    category: "Exterior",
    tag: "Multi-Family",
    description: "Twilight renderings showcasing contemporary townhouse design with stone and wood cladding.",
  },
  {
    image: portfolioVilla,
    title: "Mediterranean Villa Estate",
    category: "Exterior",
    tag: "Luxury Residential",
    description: "Sunset pool-side visualization of a luxury Mediterranean-style villa.",
  },
  {
    image: portfolioCommercial,
    title: "Urban Glass Office Tower",
    category: "Exterior",
    tag: "Commercial",
    description: "Photorealistic commercial building rendering with reflective glass facade in urban context.",
  },
  {
    image: portfolioInterior,
    title: "Open Concept Living",
    category: "Interior",
    tag: "Living Room",
    description: "Warm, inviting interior visualization emphasizing open floor plans and natural light.",
  },
  {
    image: portfolioKitchen,
    title: "Luxury Kitchen Design",
    category: "Interior",
    tag: "Kitchen",
    description: "High-end kitchen rendering featuring marble countertops and custom cabinetry.",
  },
  {
    image: portfolioBedroom,
    title: "Penthouse Master Suite",
    category: "Interior",
    tag: "Bedroom",
    description: "Floor-to-ceiling windows with panoramic city views in a minimalist luxury bedroom.",
  },
  {
    image: portfolioAerial,
    title: "Community Overview",
    category: "Aerial",
    tag: "Streetscape",
    description: "Aerial perspective showing the community layout, landscaping, and amenity spaces.",
  },
  {
    image: portfolioMasterplan,
    title: "Residential Master Plan",
    category: "Aerial",
    tag: "Master Plan",
    description: "Bird's-eye visualization of a full residential development with parks and infrastructure.",
  },
  {
    image: portfolioVr,
    title: "360° Virtual Experience",
    category: "Interactive",
    tag: "VR Tour",
    description: "Fully immersive 360° virtual tour compatible with VR headsets and web browsers.",
  },
  {
    image: portfolioInteractiveTour,
    title: "Interactive Home Tour",
    category: "Interactive",
    tag: "Virtual Walkthrough",
    description: "Navigate through rooms with hotspots, floor plan overlays, and design options.",
  },
  {
    image: portfolioSiteplan,
    title: "Interactive Site Plan",
    category: "Interactive",
    tag: "Sales Tool",
    description: "Clickable community map with lot availability, pricing, and home plan selection.",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <p className="font-mono-data text-sm text-primary tracking-wider uppercase mb-3">
            Our Work
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold text-foreground max-w-3xl text-balance">
            Portfolio Gallery
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Explore our complete collection of architectural visualizations across exterior, interior, aerial, and interactive categories.
          </p>

          {/* Filter tabs */}
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-sm text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 font-mono-data text-xs opacity-70">
                    {projects.filter((p) => p.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <motion.div
            layout
            className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-lg card-surface aspect-[4/3] cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)] group-hover:-translate-y-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono-data text-xs text-primary">{project.category}</span>
                      <span className="text-border">·</span>
                      <span className="font-mono-data text-xs text-muted-foreground">{project.tag}</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Count */}
          <p className="mt-8 text-sm text-muted-foreground font-mono-data">
            Showing {filtered.length} of {projects.length} projects
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
