import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <iframe
          src="https://player.vimeo.com/video/1168503087?background=1&autoplay=1&loop=1&muted=1&quality=720p"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-full"
          style={{ border: 0 }}
          allow="autoplay; fullscreen"
          title="Hero background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-wide pb-24 md:pb-32 pt-32">
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
          className="font-display text-[clamp(3.5rem,9vw,8.5rem)] font-semibold text-foreground max-w-[14ch] leading-[0.95] tracking-[-0.05em]"
        >
          Visuals and Interactive Tools Built to Help You Sell Homes Faster
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-[15px] text-muted-foreground max-w-md leading-relaxed font-light"
        >
          We help home builders and developers present projects with clarity, speed, and impact — from photorealistic renderings to interactive sales experiences.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6 text-[13px] text-muted-foreground/70 font-light tracking-wide"
        >
          Trusted by builders, developers, and marketing teams across the United States.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-wrap gap-5"
        >
          <Link
            to="/contact"
            className="px-10 py-4 text-[13px] font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/80 hover:shadow-[0_0_30px_hsl(210_100%_52%/0.35)] transition-all duration-300 tracking-wide"
          >
            Start a Project
          </Link>
          <Link
            to="/portfolio"
            className="px-10 py-4 text-[13px] font-medium border border-foreground/15 text-foreground rounded-full hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(210_100%_52%/0.15)] transition-all duration-300 tracking-wide"
          >
            View Portfolio
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-8 text-[13px] text-muted-foreground/60 font-light tracking-wide"
        >
          Built for home builders, developers, and marketing teams.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
