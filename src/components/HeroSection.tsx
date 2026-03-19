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
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
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
          className="font-display text-[clamp(3rem,7vw,6.5rem)] font-semibold text-foreground max-w-[16ch] leading-[1.02] tracking-[-0.045em]"
        >
          Sell homes before they're built.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-[17px] text-muted-foreground max-w-lg leading-relaxed font-light"
        >
          High-impact renderings, animations and interactive tools designed 
          to drive sales and marketing performance for builders and developers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/portfolio"
            className="px-8 py-3.5 text-[13px] font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/80 hover:shadow-[0_0_24px_hsl(210_100%_52%/0.3)] transition-all duration-300 tracking-wide"
          >
            View Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 text-[13px] font-medium border border-foreground/20 text-foreground rounded-full hover:border-primary hover:text-primary transition-all duration-300 tracking-wide"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
