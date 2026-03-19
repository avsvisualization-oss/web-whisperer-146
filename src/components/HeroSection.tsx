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
          alt="Premium architectural rendering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      </div>

      {/* Content */}
      <div className="relative container-wide pb-24 md:pb-32 pt-40">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="label-mono text-primary mb-6"
        >
          Visual Solutions for Home Builders
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-semibold text-foreground max-w-[18ch] leading-[1.05] tracking-[-0.04em]"
        >
          Visual tools that help you sell homes before they exist.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 text-[17px] text-muted-foreground max-w-xl leading-relaxed font-light"
        >
          We partner with builders and developers to create high-impact visuals
          that drive sales and marketing performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/portfolio"
            className="px-8 py-3.5 text-[13px] font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors tracking-wide"
          >
            View Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 text-[13px] font-medium border border-foreground/20 text-foreground rounded-full hover:bg-foreground/5 transition-colors tracking-wide"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
