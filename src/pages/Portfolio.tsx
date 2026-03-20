import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import portfolioStreetScene01 from "@/assets/portfolio-street-scene-01.jpg";
import portfolioStreetScene02 from "@/assets/portfolio-street-scene-02.jpg";
import portfolioStreetScene03 from "@/assets/portfolio-street-scene-03.jpg";
import portfolioStreetScene04 from "@/assets/portfolio-street-scene-04.jpg";
import portfolioStreetScene05 from "@/assets/portfolio-street-scene-05.jpg";
import portfolioStreetScene13 from "@/assets/portfolio-street-scene-13.jpg";
import portfolioStreetScene14 from "@/assets/portfolio-street-scene-14.jpg";
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
import portfolioTownHome01 from "@/assets/portfolio-town-home-01.jpg";
import portfolioTownHome02 from "@/assets/portfolio-town-home-02.jpg";
import portfolioTownHome03 from "@/assets/portfolio-town-home-03.jpg";
import portfolioTownHome06 from "@/assets/portfolio-town-home-06.jpg";
import portfolioTownHome08 from "@/assets/portfolio-town-home-08.jpg";
import portfolioTownHome09 from "@/assets/portfolio-town-home-09.jpg";
import portfolioTownHome10 from "@/assets/portfolio-town-home-10.jpg";
import portfolioTownHome11 from "@/assets/portfolio-town-home-11.jpg";
import portfolioTownHome12 from "@/assets/portfolio-town-home-12.jpg";

const categories = ["All", "Exteriors", "Interiors", "Animations", "360 Walkthroughs", "Street Scenes", "Aerials"] as const;
type Category = (typeof categories)[number];

type ProjectType = "image" | "video" | "walkthrough" | "video-embed" | "360-embed";

interface Project {
  image: string;
  title: string;
  category: Exclude<Category, "All">;
  type: ProjectType;
  videoUrl?: string;
  walkthroughUrl?: string;
  embedUrl?: string;
}

const projects: Project[] = [
  // Exteriors - Single Family
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
  { image: portfolioSingleFamily13, title: "Single Family 13", category: "Exteriors", type: "image" },
  { image: portfolioSingleFamily14, title: "Single Family 14", category: "Exteriors", type: "image" },
  { image: portfolioSingleFamily15, title: "Single Family 15", category: "Exteriors", type: "image" },
  { image: portfolioSingleFamily16, title: "Single Family 16", category: "Exteriors", type: "image" },

  // Exteriors - Town Homes
  { image: portfolioTownHome01, title: "Town Home 01", category: "Exteriors", type: "image" },
  { image: portfolioTownHome02, title: "Town Home 02", category: "Exteriors", type: "image" },
  { image: portfolioTownHome03, title: "Town Home 03", category: "Exteriors", type: "image" },
  { image: portfolioTownHome06, title: "Town Home 06", category: "Exteriors", type: "image" },
  { image: portfolioTownHome08, title: "Town Home 08", category: "Exteriors", type: "image" },
  { image: portfolioTownHome09, title: "Town Home 09", category: "Exteriors", type: "image" },
  { image: portfolioTownHome10, title: "Town Home 10", category: "Exteriors", type: "image" },
  { image: portfolioTownHome11, title: "Town Home 11", category: "Exteriors", type: "image" },
  { image: portfolioTownHome12, title: "Town Home 12", category: "Exteriors", type: "image" },

  // Interiors
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

  // Street Scenes
  { image: portfolioStreetScene01, title: "Street Scene 01", category: "Street Scenes", type: "image" },
  { image: portfolioStreetScene02, title: "Street Scene 02", category: "Street Scenes", type: "image" },
  { image: portfolioStreetScene03, title: "Street Scene 03", category: "Street Scenes", type: "image" },
  { image: portfolioStreetScene04, title: "Street Scene 04", category: "Street Scenes", type: "image" },
  { image: portfolioStreetScene05, title: "Street Scene 05", category: "Street Scenes", type: "image" },
  { image: portfolioStreetScene13, title: "Street Scene 13", category: "Street Scenes", type: "image" },
  { image: portfolioStreetScene14, title: "Street Scene 14", category: "Street Scenes", type: "image" },

  // Aerials
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

  // Animation Embeds
  { image: "", title: "Animation 01", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/1098628348" },
  { image: "", title: "Animation 02", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/1175277607" },
  { image: "", title: "Animation 03", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/1132137539" },
  { image: "", title: "Animation 04", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/1141523635" },
  { image: "", title: "Animation 05", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/1175247875" },
  { image: "", title: "Animation 06", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/1175293460" },
  { image: "", title: "Animation 07", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/1169622799" },
  { image: "", title: "Animation 08", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/1168503087" },
  { image: "", title: "Animation 09", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/1168250391" },
  { image: "", title: "Animation 10", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/1148133455" },
  { image: "", title: "Animation 11", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/1168259589" },
  { image: "", title: "Animation 12", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/1098895117" },
  { image: "", title: "Animation 13", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/1092880102" },
  { image: "", title: "Animation 14", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/1092597367" },
  { image: "", title: "Animation 15", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/1092597424" },
  { image: "", title: "Animation 16", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/1085815238" },
  { image: "", title: "Animation 17", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/1067401088" },
  { image: "", title: "Animation 18", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/1047970627" },
  { image: "", title: "Animation 19", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/1047260833" },
  { image: "", title: "Animation 20", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/1017702646" },
  { image: "", title: "Animation 21", category: "Animations", type: "video-embed", embedUrl: "https://player.vimeo.com/video/996374199" },

  // 360 Walkthrough Embeds
  { image: "", title: "360 Tour 01", category: "360 Walkthroughs", type: "360-embed", embedUrl: "https://avsrenderings.viewin360.co/share/collection/7XF1M?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1" },
  { image: "", title: "360 Tour 02", category: "360 Walkthroughs", type: "360-embed", embedUrl: "https://avsrenderings.viewin360.co/share/collection/7F4yg?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1" },
  { image: "", title: "360 Tour 03", category: "360 Walkthroughs", type: "360-embed", embedUrl: "https://avsrenderings.viewin360.co/share/collection/7KXpP?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1" },
  { image: "", title: "360 Tour 04", category: "360 Walkthroughs", type: "360-embed", embedUrl: "https://avsrenderings.viewin360.co/share/collection/7FvDf?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1" },
  { image: "", title: "360 Tour 05", category: "360 Walkthroughs", type: "360-embed", embedUrl: "https://avsrenderings.viewin360.co/share/collection/7cV5m?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1" },
  { image: "", title: "360 Tour 06", category: "360 Walkthroughs", type: "360-embed", embedUrl: "https://avsrenderings.viewin360.co/share/collection/7csrm?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1" },
  { image: "", title: "360 Tour 07", category: "360 Walkthroughs", type: "360-embed", embedUrl: "https://avsrenderings.viewin360.co/share/collection/7XFQf?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1" },
  { image: "", title: "360 Tour 08", category: "360 Walkthroughs", type: "360-embed", embedUrl: "https://avsrenderings.viewin360.co/share/collection/7X1yY?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1" },
  { image: "", title: "360 Tour 09", category: "360 Walkthroughs", type: "360-embed", embedUrl: "https://avsrenderings.viewin360.co/share/collection/7c4vL?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1" },
  { image: "", title: "360 Tour 10", category: "360 Walkthroughs", type: "360-embed", embedUrl: "https://avsrenderings.viewin360.co/share/collection/7K5pq?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [videoModal, setVideoModal] = useState<string | null>(null);

  const filtered = activeCategory === "All"
    ? (() => {
        // Curated interleaved order for visual variety across all categories
        const categoryOrder: Exclude<Category, "All">[] = [
          "Exteriors", "Interiors", "Aerials", "Animations", "Street Scenes", "360 Walkthroughs"
        ];
        const buckets: Record<string, Project[]> = {};
        categoryOrder.forEach(c => { buckets[c] = projects.filter(p => p.category === c); });
        const indices: Record<string, number> = {};
        categoryOrder.forEach(c => { indices[c] = 0; });
        const result: Project[] = [];
        let remaining = projects.length;
        let catIdx = 0;
        while (remaining > 0) {
          const cat = categoryOrder[catIdx % categoryOrder.length];
          if (indices[cat] < buckets[cat].length) {
            result.push(buckets[cat][indices[cat]]);
            indices[cat]++;
            remaining--;
          }
          catIdx++;
          // Skip empty buckets
          if (categoryOrder.every(c => indices[c] >= buckets[c].length)) break;
        }
        return result;
      })()
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
                className={`group relative overflow-hidden rounded-lg aspect-[4/3] ${
                  project.type === "video-embed" || project.type === "360-embed" ? "" : "cursor-pointer"
                }`}
              >
                {/* Inline video embed */}
                {project.type === "video-embed" && project.embedUrl ? (
                  <iframe
                    src={project.embedUrl}
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allow="fullscreen; picture-in-picture"
                    allowFullScreen
                    title={project.title}
                    loading="lazy"
                  />
                ) : project.type === "360-embed" && project.embedUrl ? (
                  <iframe
                    src={project.embedUrl}
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allow="fullscreen; vr"
                    allowFullScreen
                    title={project.title}
                    loading="lazy"
                  />
                ) : (
                  <>
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
                  </>
                )}
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
