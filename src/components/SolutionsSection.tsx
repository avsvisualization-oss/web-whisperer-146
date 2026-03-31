import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";
import exteriorImg from "@/assets/portfolio-exterior-2.jpg";
import interiorImg from "@/assets/portfolio-interior-1.jpg";
import aerialImg from "@/assets/portfolio-aerial-1.jpg";
import walkthroughImg from "@/assets/portfolio-interior-2.jpg";

const solutions = [
  {
    title: "Exterior Renderings",
    description: "Photo-realistic visuals that drive buyer interest and accelerate pre-sales before ground breaks.",
    image: exteriorImg,
    featured: false,
    pricing: "Starting at $270",
  },
  {
    title: "Interior Renderings",
    description: "Lifestyle scenes that help buyers see themselves in the home — reducing hesitation and closing deals faster.",
    image: interiorImg,
    featured: false,
    pricing: "Starting at $290",
  },
  {
    title: "Animations & Motion",
    description: "Cinematic walkthroughs that boost engagement across every marketing channel and improve conversion rates.",
    image: aerialImg,
    featured: false,
    pricing: "Starting at $1,900",
  },
  {
    title: "360 Walkthrough",
    description: "Immersive 360 walkthrough experiences that allow buyers to explore homes before construction. Ideal for sales centers, marketing, and client presentations.",
    image: walkthroughImg,
    featured: true,
    label: "Sales Tool",
  },
];

const SolutionsSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-secondary relative">
      {/* Soft gradient transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-20"
        >
          <div className="label-mono text-primary mb-6 text-lg">What We Do</div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold text-foreground max-w-3xl leading-[1.05] tracking-[-0.04em]">
            Visual solutions designed for how homes are sold today.
          </h2>
          <p className="mt-7 max-w-xl leading-[1.8] font-light text-base text-popover-foreground">
            Every visual we create is built to support sales teams, improve conversion, and drive buyer engagement — not just to look good.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer ${
                sol.featured ? "ring-2 ring-primary/40 shadow-[0_0_40px_hsl(var(--primary)/0.15)]" : ""
              }`}
            >
              <OptimizedImage
                src={sol.image}
                alt={sol.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${
                sol.featured ? "from-background/95 via-background/50 to-primary/10" : "from-background/95 via-background/40 to-transparent"
              }`} />
              {sol.label && (
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/15 text-primary text-[10px] font-medium tracking-wider uppercase backdrop-blur-sm">
                    {sol.label}
                  </span>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className={`font-display text-sm sm:text-lg md:text-2xl font-semibold tracking-[-0.025em] ${
                      sol.featured ? "text-primary" : "text-foreground"
                    }`}>
                      {sol.title}
                    </h3>
                    <p className="mt-2 md:mt-3 text-[11px] sm:text-[13px] text-muted-foreground max-w-sm leading-relaxed font-light hidden sm:block">
                      {sol.description}
                    </p>
                    {sol.pricing && (
                      <p className="mt-2 text-[10px] sm:text-[11px] text-muted-foreground/60 font-light tracking-wide">
                        {sol.pricing}
                      </p>
                    )}
                  </div>
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-20 text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-primary hover:text-primary/80 transition-colors duration-300 tracking-wide"
          >
            View All Work
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>

      {/* Soft gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default SolutionsSection;
