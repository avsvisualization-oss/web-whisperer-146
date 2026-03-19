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
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12 md:mb-16"
        >
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Featured Work
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Selected projects
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            View All <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs text-primary-foreground/70 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mt-1">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            View All <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
