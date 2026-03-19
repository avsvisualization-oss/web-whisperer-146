import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import exteriorImg from "@/assets/portfolio-exterior-2.jpg";
import interiorImg from "@/assets/portfolio-interior-1.jpg";
import aerialImg from "@/assets/portfolio-aerial-1.jpg";

const solutions = [
  {
    title: "Exterior Renderings",
    description: "Photo-realistic visuals that showcase curb appeal and drive buyer interest before ground breaks.",
    image: exteriorImg,
  },
  {
    title: "Interior Renderings",
    description: "Detailed lifestyle scenes that help buyers envision living in the home and accelerate decisions.",
    image: interiorImg,
  },
  {
    title: "Animations & Motion",
    description: "Cinematic animations that bring projects to life and enhance marketing impact across every channel.",
    image: aerialImg,
  },
];

const SolutionsSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="label-mono text-primary mb-5">What We Do</div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold text-foreground max-w-3xl leading-[1.1] tracking-[-0.035em]">
            Visual solutions designed for how homes are sold today.
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground max-w-xl leading-[1.7] font-light">
            Every visual we create is built to support sales teams, marketing campaigns, and buyer engagement — not just to look good.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-md aspect-[3/4] cursor-pointer"
            >
              <img
                src={sol.image}
                alt={sol.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground tracking-[-0.02em]">
                      {sol.title}
                    </h3>
                    <p className="mt-2 text-[13px] text-muted-foreground max-w-sm leading-relaxed font-light">
                      {sol.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
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
          className="mt-14 text-center"
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
    </section>
  );
};

export default SolutionsSection;
