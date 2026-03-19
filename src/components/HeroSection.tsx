import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/portfolio-exterior-1.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Premium architectural rendering of a modern residential community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/10" />
      </div>

      {/* Content */}
      <div className="relative container-wide pb-20 md:pb-28 pt-40">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground max-w-4xl leading-[1.05] text-balance"
        >
          Visual tools that help you sell homes before they exist.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0, 1] }}
          className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed"
        >
          We partner with builders and developers to create high-impact visuals
          that drive sales and marketing performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0, 1] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/portfolio"
            className="px-7 py-3.5 text-sm font-medium bg-primary-foreground text-foreground rounded-full hover:bg-primary-foreground/90 transition-colors"
          >
            View Work
          </Link>
          <Link
            to="/contact"
            className="px-7 py-3.5 text-sm font-medium border border-primary-foreground/40 text-primary-foreground rounded-full hover:bg-primary-foreground/10 transition-colors"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
