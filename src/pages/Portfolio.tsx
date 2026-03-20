import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import portfolioExterior from "@/assets/portfolio-exterior.jpg";
import portfolioExterior1 from "@/assets/portfolio-exterior-1.jpg";
import portfolioExterior2 from "@/assets/portfolio-exterior-2.jpg";
import portfolioExterior3 from "@/assets/portfolio-exterior-3.jpg";
import portfolioExterior4 from "@/assets/portfolio-exterior-4.jpg";
import portfolioTownhouse from "@/assets/portfolio-townhouse.jpg";
import portfolioVilla from "@/assets/portfolio-villa.jpg";
import portfolioCommercial from "@/assets/portfolio-commercial.jpg";
import portfolioInterior from "@/assets/portfolio-interior.jpg";
import portfolioInterior1 from "@/assets/portfolio-interior-1.jpg";
import portfolioInterior2 from "@/assets/portfolio-interior-2.jpg";
import portfolioInterior3 from "@/assets/portfolio-interior-3.jpg";
import portfolioInterior4 from "@/assets/portfolio-interior-4.jpg";
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";
import portfolioBedroom from "@/assets/portfolio-bedroom.jpg";
import portfolioStreet1 from "@/assets/portfolio-street-1.jpg";
import portfolioAerial from "@/assets/portfolio-aerial.jpg";
import portfolioAerial1 from "@/assets/portfolio-aerial-1.jpg";
import portfolioAerial2 from "@/assets/portfolio-aerial-2.jpg";
import portfolioAerial3 from "@/assets/portfolio-aerial-3.jpg";
import portfolioAerial4 from "@/assets/portfolio-aerial-4.jpg";
import portfolioAerial01 from "@/assets/portfolio-aerial-01.jpg";
import portfolioAerial02 from "@/assets/portfolio-aerial-02.jpg";
import portfolioAerial03 from "@/assets/portfolio-aerial-03.jpg";
import portfolioAerial04 from "@/assets/portfolio-aerial-04.jpg";
import portfolioAerial05 from "@/assets/portfolio-aerial-05.jpg";
import portfolioAerial05b from "@/assets/portfolio-aerial-05b.jpg";
import portfolioAerial06 from "@/assets/portfolio-aerial-06.jpg";
import portfolioAerial07 from "@/assets/portfolio-aerial-07.jpg";
import portfolioAerial08 from "@/assets/portfolio-aerial-08.jpg";
import portfolioAerial09 from "@/assets/portfolio-aerial-09.jpg";
import portfolioAerial10 from "@/assets/portfolio-aerial-10.jpg";
import portfolioAerial11 from "@/assets/portfolio-aerial-11.jpg";
import portfolioAerial12 from "@/assets/portfolio-aerial-12.jpg";
import portfolioAerial13 from "@/assets/portfolio-aerial-13.jpg";
import portfolioAerial14 from "@/assets/portfolio-aerial-14.jpg";
import portfolioInterior01 from "@/assets/portfolio-interior-01.jpg";
import portfolioInterior02 from "@/assets/portfolio-interior-02.jpg";
import portfolioInterior03 from "@/assets/portfolio-interior-03.jpg";
import portfolioInterior04 from "@/assets/portfolio-interior-04.jpg";
import portfolioInterior05 from "@/assets/portfolio-interior-05.jpg";
import portfolioInterior06 from "@/assets/portfolio-interior-06.jpg";
import portfolioInterior07 from "@/assets/portfolio-interior-07.jpg";
import portfolioInterior08 from "@/assets/portfolio-interior-08.jpg";
import portfolioInterior09 from "@/assets/portfolio-interior-09.jpg";
import portfolioInterior10 from "@/assets/portfolio-interior-10.jpg";
import portfolioInterior11 from "@/assets/portfolio-interior-11.jpg";
import portfolioInterior12 from "@/assets/portfolio-interior-12.jpg";
import portfolioInterior13 from "@/assets/portfolio-interior-13.jpg";
import portfolioInterior14 from "@/assets/portfolio-interior-14.jpg";
import portfolioInterior15 from "@/assets/portfolio-interior-15.jpg";
import portfolioInterior16 from "@/assets/portfolio-interior-16.jpg";
import portfolioInterior17 from "@/assets/portfolio-interior-17.jpg";
import portfolioInterior18 from "@/assets/portfolio-interior-18.jpg";
import portfolioInterior19 from "@/assets/portfolio-interior-19.jpg";
import portfolioInterior20 from "@/assets/portfolio-interior-20.jpg";
import portfolioInterior21 from "@/assets/portfolio-interior-21.jpg";
import portfolioInterior22 from "@/assets/portfolio-interior-22.jpg";
import portfolioInterior23 from "@/assets/portfolio-interior-23.jpg";
import portfolioInterior24 from "@/assets/portfolio-interior-24.jpg";
import portfolioMasterplan from "@/assets/portfolio-masterplan.jpg";
import portfolioClubhouse1 from "@/assets/portfolio-clubhouse-1.jpg";
import portfolioAmenities1 from "@/assets/portfolio-amenities-1.jpg";
import portfolioInteractiveTour from "@/assets/portfolio-interactive-tour.jpg";
import portfolioVR from "@/assets/portfolio-vr.jpg";
import portfolioSiteplan from "@/assets/portfolio-siteplan.jpg";
import portfolioSingleFamily01 from "@/assets/portfolio-single-family-01.jpg";
import portfolioSingleFamily02 from "@/assets/portfolio-single-family-02.jpg";
import portfolioSingleFamily03 from "@/assets/portfolio-single-family-03.jpg";
import portfolioSingleFamily04 from "@/assets/portfolio-single-family-04.jpg";
import portfolioSingleFamily05 from "@/assets/portfolio-single-family-05.jpg";
import portfolioSingleFamily06 from "@/assets/portfolio-single-family-06.jpg";
import portfolioSingleFamily07 from "@/assets/portfolio-single-family-07.jpg";
import portfolioSingleFamily08 from "@/assets/portfolio-single-family-08.jpg";
import portfolioSingleFamily09 from "@/assets/portfolio-single-family-09.jpg";
import portfolioSingleFamily10 from "@/assets/portfolio-single-family-10b.jpg";
import portfolioSingleFamily13 from "@/assets/portfolio-single-family-13.jpg";
import portfolioSingleFamily14 from "@/assets/portfolio-single-family-14.jpg";
import portfolioSingleFamily15 from "@/assets/portfolio-single-family-15.jpg";
import portfolioSingleFamily16 from "@/assets/portfolio-single-family-16.jpg";

const categories = ["All", "Exteriors", "Interiors", "Animations", "360 Walkthroughs", "Street Scenes", "Aerials", "Clubhouse", "Amenities"] as const;
type Category = (typeof categories)[number];

type ProjectType = "image" | "video" | "walkthrough";

interface Project {
  image: string;
  title: string;
  category: Exclude<Category, "All">;
  type: ProjectType;
  videoUrl?: string;
  walkthroughUrl?: string;
}

const projects: Project[] = [
  // Exteriors
  { image: portfolioExterior, title: "Craftsman Series Residence", category: "Exteriors", type: "image" },
  { image: portfolioExterior1, title: "Modern Elevation", category: "Exteriors", type: "image" },
  { image: portfolioExterior2, title: "Contemporary Home", category: "Exteriors", type: "image" },
  { image: portfolioExterior3, title: "Traditional Estate", category: "Exteriors", type: "image" },
  { image: portfolioExterior4, title: "Luxury Façade", category: "Exteriors", type: "image" },
  { image: portfolioTownhouse, title: "Modern Townhouse Collection", category: "Exteriors", type: "image" },
  { image: portfolioVilla, title: "Mediterranean Villa Estate", category: "Exteriors", type: "image" },
  { image: portfolioCommercial, title: "Urban Glass Office Tower", category: "Exteriors", type: "image" },

  // Interiors
  { image: portfolioInterior, title: "Open Concept Living", category: "Interiors", type: "image" },
  { image: portfolioInterior1, title: "Modern Living Room", category: "Interiors", type: "image" },
  { image: portfolioInterior2, title: "Dining Experience", category: "Interiors", type: "image" },
  { image: portfolioInterior3, title: "Family Room", category: "Interiors", type: "image" },
  { image: portfolioInterior4, title: "Master Bathroom", category: "Interiors", type: "image" },
  { image: portfolioKitchen, title: "Luxury Kitchen Design", category: "Interiors", type: "image" },
  { image: portfolioBedroom, title: "Penthouse Master Suite", category: "Interiors", type: "image" },
  { image: portfolioInterior01, title: "Spa Bathroom Retreat", category: "Interiors", type: "image" },
  { image: portfolioInterior02, title: "Vaulted Ceiling Bedroom", category: "Interiors", type: "image" },
  { image: portfolioInterior03, title: "Contemporary Dining Room", category: "Interiors", type: "image" },
  { image: portfolioInterior04, title: "Marble Butler's Pantry", category: "Interiors", type: "image" },
  { image: portfolioInterior05, title: "Fireplace Living Room", category: "Interiors", type: "image" },
  { image: portfolioInterior06, title: "Sunlit Great Room", category: "Interiors", type: "image" },
  { image: portfolioInterior07, title: "Designer Shower Suite", category: "Interiors", type: "image" },
  { image: portfolioInterior08, title: "Elegant Dining & Kitchen", category: "Interiors", type: "image" },
  { image: portfolioInterior09, title: "Double Vanity Bathroom", category: "Interiors", type: "image" },
  { image: portfolioInterior10, title: "Master Bedroom Suite", category: "Interiors", type: "image" },
  { image: portfolioInterior11, title: "Gourmet Kitchen Island", category: "Interiors", type: "image" },
  { image: portfolioInterior12, title: "Open Concept Family Room", category: "Interiors", type: "image" },
  { image: portfolioInterior13, title: "Gold Accent Master Bath", category: "Interiors", type: "image" },
  { image: portfolioInterior14, title: "Walnut Kitchen Design", category: "Interiors", type: "image" },
  { image: portfolioInterior15, title: "Foyer Sitting Area", category: "Interiors", type: "image" },
  { image: portfolioInterior16, title: "Vaulted Living & Kitchen", category: "Interiors", type: "image" },
  { image: portfolioInterior17, title: "Farmhouse Dining Room", category: "Interiors", type: "image" },
  { image: portfolioInterior18, title: "Guest Bedroom Suite", category: "Interiors", type: "image" },
  { image: portfolioInterior19, title: "Rustic Master Retreat", category: "Interiors", type: "image" },
  { image: portfolioInterior20, title: "Coastal Kitchen Design", category: "Interiors", type: "image" },
  { image: portfolioInterior21, title: "Modern Home Office", category: "Interiors", type: "image" },
  { image: portfolioInterior22, title: "Sage Study Room", category: "Interiors", type: "image" },
  { image: portfolioInterior23, title: "Rustic Executive Office", category: "Interiors", type: "image" },
  { image: portfolioInterior24, title: "Navy Blue Study", category: "Interiors", type: "image" },

  // Animations
  { image: portfolioAerial1, title: "Community Flythrough", category: "Animations", type: "video", videoUrl: "https://player.vimeo.com/video/1168259589" },
  { image: portfolioExterior2, title: "Exterior Walkthrough Animation", category: "Animations", type: "video", videoUrl: "https://player.vimeo.com/video/1168503087" },
  { image: portfolioInterior1, title: "Interior Cinematic Tour", category: "Animations", type: "video", videoUrl: "https://player.vimeo.com/video/1168259589" },

  // 360 Walkthroughs
  { image: portfolioInteractiveTour, title: "Bay Pointe Community Tour", category: "360 Walkthroughs", type: "walkthrough", walkthroughUrl: "https://my.matterport.com/show/?m=SxQL3iGyvPs" },
  { image: portfolioVR, title: "Model Home Virtual Tour", category: "360 Walkthroughs", type: "walkthrough", walkthroughUrl: "https://my.matterport.com/show/?m=SxQL3iGyvPs" },
  { image: portfolioSiteplan, title: "Interactive Site Plan", category: "360 Walkthroughs", type: "walkthrough", walkthroughUrl: "https://avs-interactive.com/avs/Interactive-Apps/siteplan/baypointe/20" },

  // Street Scenes
  { image: portfolioStreet1, title: "Community Streetscape", category: "Street Scenes", type: "image" },

  // Aerials
  { image: portfolioAerial, title: "Community Overview", category: "Aerials", type: "image" },
  { image: portfolioAerial1, title: "Development Aerial View", category: "Aerials", type: "image" },
  { image: portfolioAerial2, title: "Neighborhood Plan", category: "Aerials", type: "image" },
  { image: portfolioAerial3, title: "Residential Community", category: "Aerials", type: "image" },
  { image: portfolioAerial4, title: "Master-Planned Overview", category: "Aerials", type: "image" },
  { image: portfolioMasterplan, title: "Residential Master Plan", category: "Aerials", type: "image" },
  { image: portfolioAerial01, title: "Lakefront Community Aerial", category: "Aerials", type: "image" },
  { image: portfolioAerial02, title: "Suburban Development Aerial", category: "Aerials", type: "image" },
  { image: portfolioAerial03, title: "Autumn Townhome Community", category: "Aerials", type: "image" },
  { image: portfolioAerial04, title: "Resort Clubhouse at Sunset", category: "Aerials", type: "image" },
  { image: portfolioAerial05b, title: "Mixed-Use Residential Building", category: "Aerials", type: "image" },
  { image: portfolioAerial05, title: "Modern Townhome Streetview", category: "Aerials", type: "image" },
  { image: portfolioAerial06, title: "Luxury Resort Amenities", category: "Aerials", type: "image" },
  { image: portfolioAerial07, title: "Lakeside Residential Community", category: "Aerials", type: "image" },
  { image: portfolioAerial08, title: "Community Pool & Recreation", category: "Aerials", type: "image" },
  { image: portfolioAerial09, title: "Amenity Center Overview", category: "Aerials", type: "image" },
  { image: portfolioAerial10, title: "Waterfront Residential Aerial", category: "Aerials", type: "image" },
  { image: portfolioAerial11, title: "Clubhouse & Sports Complex", category: "Aerials", type: "image" },
  { image: portfolioAerial12, title: "Modern Urban Townhomes", category: "Aerials", type: "image" },
  { image: portfolioAerial13, title: "Multi-Family Residential", category: "Aerials", type: "image" },
  { image: portfolioAerial14, title: "Urban Mixed-Use Development", category: "Aerials", type: "image" },

  // Clubhouse
  { image: portfolioClubhouse1, title: "Community Clubhouse", category: "Clubhouse", type: "image" },

  // Amenities
  { image: portfolioAmenities1, title: "Community Amenities", category: "Amenities", type: "image" },

  // Single Family
  { image: portfolioSingleFamily01, title: "Single Family 01", category: "Exteriors", type: "image" },
  { image: portfolioSingleFamily02, title: "Single Family 02", category: "Exteriors", type: "image" },
  { image: portfolioSingleFamily03, title: "Single Family 03", category: "Exteriors", type: "image" },
  { image: portfolioSingleFamily04, title: "Single Family 04", category: "Exteriors", type: "image" },
  { image: portfolioSingleFamily05, title: "Single Family 05", category: "Exteriors", type: "image" },
  { image: portfolioSingleFamily06, title: "Single Family 06", category: "Exteriors", type: "image" },
  { image: portfolioSingleFamily07, title: "Single Family 07", category: "Exteriors", type: "image" },
  { image: portfolioSingleFamily08, title: "Single Family 08", category: "Exteriors", type: "image" },
  { image: portfolioSingleFamily09, title: "Single Family 09", category: "Exteriors", type: "image" },
  { image: portfolioSingleFamily10, title: "Single Family 10", category: "Exteriors", type: "image" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [videoModal, setVideoModal] = useState<string | null>(null);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const handleCardClick = (project: Project, index: number) => {
    if (project.type === "video" && project.videoUrl) {
      setVideoModal(project.videoUrl);
    } else if (project.type === "walkthrough" && project.walkthroughUrl) {
      window.open(project.walkthroughUrl, "_blank", "noopener,noreferrer");
    } else {
      setLightbox(index);
    }
  };

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
            Selected work designed to support marketing, approvals, and sales for home builders and developers.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <div className="container-wide mb-12">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 text-[12px] sm:text-[13px] font-medium rounded-full transition-colors ${
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
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleCardClick(project, i)}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />

                {/* Video play overlay */}
                {project.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border/50 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-primary ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                )}

                {/* Walkthrough overlay */}
                {project.type === "walkthrough" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="px-5 py-2.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-[13px] font-medium text-foreground">Open Walkthrough</span>
                      <ArrowUpRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="font-mono-data text-[11px] text-primary">{project.category}</span>
                  <h3 className="text-base font-semibold text-foreground mt-1">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-8 text-[13px] text-muted-foreground font-mono-data">
          Showing {filtered.length} of {projects.length} projects
        </p>
      </div>

      {/* Image Lightbox */}
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

      {/* Video Modal */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setVideoModal(null)}
          >
            <button
              onClick={() => setVideoModal(null)}
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
                <iframe
                  src={`${videoModal}?autoplay=1`}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allow="autoplay; fullscreen"
                  title="Video playback"
                />
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
