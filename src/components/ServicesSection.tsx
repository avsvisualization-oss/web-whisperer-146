import { motion } from "framer-motion";
import { Monitor, Rotate3D, Layers, Camera, Cpu, Home } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Interactive Content",
    subtitle: "Sales & Marketing",
    description: "Interactive site plans, facades, and floor plans that help sales teams present communities and options with clarity.",
  },
  {
    icon: Rotate3D,
    title: "360° Virtual Tours",
    subtitle: "Immersive Experiences",
    description: "Indoor and outdoor experiences that allow buyers to explore properties remotely and enhance online sales presentations.",
  },
  {
    icon: Layers,
    title: "Before & After",
    subtitle: "City Approvals",
    description: "Side-by-side visual comparisons that support city approvals and stakeholder presentations.",
  },
  {
    icon: Camera,
    title: "3D Animations",
    subtitle: "Walkthroughs",
    description: "Cinematic 3D animations that showcase spatial flow, design intent, and lifestyle before construction begins.",
  },
  {
    icon: Cpu,
    title: "AI Visualizations",
    subtitle: "Coming Soon",
    description: "AI-powered visualizations that accelerate concept development and unlock new creative possibilities.",
  },
  {
    icon: Home,
    title: "Exterior & Interior",
    subtitle: "Renderings",
    description: "High-quality, marketing-ready renderings that highlight architectural character, materials, and design details.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0, 0, 1] as const } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <p className="font-mono-data text-sm text-primary tracking-wider uppercase mb-3">
          What We Do
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold text-foreground max-w-2xl text-balance">
          End-to-end visualization services
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl">
          For home builders, home plan designers and marketing agencies.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="card-surface rounded-lg p-6 group hover:bg-secondary/50 transition-colors"
            >
              <service.icon className="w-5 h-5 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="font-mono-data text-xs text-primary mt-0.5">{service.subtitle}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
