import { motion } from "framer-motion";
import portfolioExterior from "@/assets/portfolio-exterior.jpg";
import portfolioInterior from "@/assets/portfolio-interior.jpg";
import portfolioAerial from "@/assets/portfolio-aerial.jpg";
import portfolioVr from "@/assets/portfolio-vr.jpg";

const projects = [
  {
    image: portfolioExterior,
    title: "Single-Family Renderings",
    category: "Exterior",
    tag: "Craftsman Series",
  },
  {
    image: portfolioInterior,
    title: "Interior Design Visualization",
    category: "Interior",
    tag: "Open Concept Living",
  },
  {
    image: portfolioAerial,
    title: "Aerial & Streetscape",
    category: "Aerial",
    tag: "Community Overview",
  },
  {
    image: portfolioVr,
    title: "360° Virtual Tour",
    category: "Interactive",
    tag: "Immersive VR",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-secondary/30">
      <div className="container">
        <p className="font-mono-data text-sm text-primary tracking-wider uppercase mb-3">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold text-foreground max-w-2xl text-balance">
          Discover Our Projects
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-lg card-surface aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)] group-hover:-translate-y-2">
                <span className="font-mono-data text-xs text-primary">{project.category}</span>
                <h3 className="text-lg font-semibold text-foreground mt-1">{project.title}</h3>
                <span className="inline-block mt-2 text-xs text-muted-foreground bg-secondary/80 px-2 py-0.5 rounded-sm font-mono-data">
                  {project.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
