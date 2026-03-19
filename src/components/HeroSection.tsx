import { motion } from "framer-motion";
import heroImg from "@/assets/hero-rendering.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury housing development architectural rendering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container h-full flex flex-col justify-end pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono-data text-sm text-primary mb-4 tracking-wider uppercase"
        >
          Architectural Visualization Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground max-w-3xl leading-[1.05] text-balance"
        >
          High-quality renderings built to support{" "}
          <span className="gradient-text-accent">marketing & sales</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 text-lg text-muted-foreground max-w-xl"
        >
          We create virtual tours, interactive tools and 3D renderings for home builders, home plan designers and marketing agencies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="#services"
            className="px-6 py-3 rounded-sm bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            Services
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-sm border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 flex gap-10 md:gap-16"
        >
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "50+", label: "Builder Partners" },
            { value: "8+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-mono-data text-2xl md:text-3xl font-semibold text-foreground">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
