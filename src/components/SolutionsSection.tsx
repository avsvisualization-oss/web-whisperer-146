import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import exteriorImg from "@/assets/portfolio-exterior-2.jpg";
import interiorImg from "@/assets/portfolio-interior-1.jpg";
import aerialImg from "@/assets/portfolio-aerial-1.jpg";
import interactiveImg from "@/assets/portfolio-siteplan.jpg";

const solutions = [
  {
    title: "Exterior Visuals",
    description: "Photo-realistic renderings that showcase architectural character and drive buyer interest.",
    image: exteriorImg,
  },
  {
    title: "Interior Experiences",
    description: "Detailed spaces that help buyers envision living in the home before it's built.",
    image: interiorImg,
  },
  {
    title: "Aerial & Streetscapes",
    description: "Community-scale visuals that communicate scale, context and neighborhood impact.",
    image: aerialImg,
  },
  {
    title: "Interactive Tools",
    description: "Site plans, facade selectors and floor plans that empower sales teams.",
    image: interactiveImg,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0, 1] } },
};

const SolutionsSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground max-w-2xl leading-tight">
            Visual solutions built for how homes are sold today.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {solutions.map((sol) => (
            <motion.div
              key={sol.title}
              variants={item}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
            >
              <img
                src={sol.image}
                alt={sol.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-primary-foreground">
                      {sol.title}
                    </h3>
                    <p className="mt-2 text-sm text-primary-foreground/70 max-w-sm">
                      {sol.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            View All Work
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
