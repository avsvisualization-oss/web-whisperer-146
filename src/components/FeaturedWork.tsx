import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import img1 from "@/assets/portfolio-exterior-3.jpg";
import img2 from "@/assets/portfolio-interior-2.jpg";
import img3 from "@/assets/portfolio-aerial-3.jpg";

const projects = [
  { image: img1, category: "Exteriors", title: "Powell Residence" },
  { image: img2, category: "Interiors", title: "The Elms Kitchen" },
  { image: img3, category: "Aerials", title: "Community Aerial" },
];

const FeaturedWork = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-14 md:mb-20"
        >
          <div>
            <div className="label-mono text-primary mb-5">Featured Work</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-foreground tracking-[-0.035em]">
              Selected projects
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="hidden md:inline-flex items-center gap-2 text-[13px] font-medium text-primary hover:text-primary/80 transition-colors duration-300 tracking-wide"
          >
            View All <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-md aspect-[3/4] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="label-mono text-primary mb-1.5">
                  {project.category}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground tracking-[-0.02em]">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-primary tracking-wide"
          >
            View All <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
