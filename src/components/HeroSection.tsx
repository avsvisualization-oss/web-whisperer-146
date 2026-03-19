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
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative container-wide pb-28 md:pb-36 pt-40">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="label-mono text-primary mb-8"
        >
          Visual Solutions for Home Builders
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(3.5rem,8vw,7.5rem)] font-semibold text-foreground max-w-[16ch] leading-[0.98] tracking-[-0.05em]"
        >
          Sell homes before they're built.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-[15px] text-muted-foreground max-w-md leading-relaxed font-light"
        >
          High-impact renderings, animations and interactive tools that
          drive sales and marketing performance for builders and developers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap gap-5"
        >
          <Link
            to="/portfolio"
            className="px-10 py-4 text-[13px] font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/80 hover:shadow-[0_0_30px_hsl(210_100%_52%/0.35)] transition-all duration-300 tracking-wide"
          >
            View Work
          </Link>
          <Link
            to="/contact"
            className="px-10 py-4 text-[13px] font-medium border border-foreground/15 text-foreground rounded-full hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(210_100%_52%/0.15)] transition-all duration-300 tracking-wide"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
