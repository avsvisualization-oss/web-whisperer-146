import { motion } from "framer-motion";
import { Monitor, Rotate3D, MapPin, MousePointerClick } from "lucide-react";
import portfolioSiteplan from "@/assets/portfolio-siteplan.jpg";
import portfolioInteractiveTour from "@/assets/portfolio-interactive-tour.jpg";
import portfolioVr from "@/assets/portfolio-vr.jpg";

const features = [
  {
    icon: Monitor,
    title: "Interactive Site Plans",
    description: "Clickable community maps with lot availability, pricing filters, and instant home plan selection for sales teams.",
  },
  {
    icon: MousePointerClick,
    title: "Interactive Facades & Floor Plans",
    description: "Let buyers customize elevations, colors, and options in real time — directly on your website.",
  },
  {
    icon: Rotate3D,
    title: "360° Virtual Tours",
    description: "Immersive walkthroughs compatible with VR headsets and web browsers. Explore every room before it's built.",
  },
  {
    icon: MapPin,
    title: "Community Experiences",
    description: "Combine aerial views, streetscapes, and amenity showcases into a single interactive sales presentation.",
  },
];

const showcase = [
  { image: portfolioSiteplan, label: "Interactive Site Plan" },
  { image: portfolioInteractiveTour, label: "Virtual Home Tour" },
  { image: portfolioVr, label: "360° VR Experience" },
];

const InteractiveSection = () => {
  return (
    <section id="interactive" className="py-24 md:py-32">
      <div className="container">
        <p className="font-mono-data text-sm text-primary tracking-wider uppercase mb-3">
          Interactive Content
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold text-foreground max-w-2xl text-balance">
          Engage buyers before breaking ground
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl">
          From interactive site plans to immersive virtual tours — tools that accelerate sales and reduce buyer uncertainty.
        </p>

        {/* Features grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-surface rounded-lg p-6 group hover:bg-secondary/50 transition-colors"
            >
              <feature.icon className="w-5 h-5 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Showcase images */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {showcase.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg card-surface aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="font-mono-data text-xs text-primary">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;
