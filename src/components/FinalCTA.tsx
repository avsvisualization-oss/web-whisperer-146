import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bgImg from "@/assets/portfolio-aerial-4.jpg";

const FinalCTA = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative container-wide text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground max-w-3xl mx-auto leading-tight"
        >
          Let's bring your next project to life.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/contact"
            className="px-8 py-4 text-sm font-medium bg-primary-foreground text-foreground rounded-full hover:bg-primary-foreground/90 transition-colors"
          >
            Start a Project
          </Link>
          <a
            href="mailto:info@avs-renderings.com"
            className="px-8 py-4 text-sm font-medium border border-primary-foreground/40 text-primary-foreground rounded-full hover:bg-primary-foreground/10 transition-colors"
          >
            Book a Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
