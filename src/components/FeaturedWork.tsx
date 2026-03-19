import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const exteriors = [
  {
    image: "https://www.dropbox.com/scl/fi/regu7ho7f2oee8e76ma9q/F_Coral-Street-Cam-01.png?raw=1",
    title: "Coral Street",
  },
  {
    image: "https://www.dropbox.com/scl/fi/zbqopnq9jp5c5y4hioszm/avs-ai-studio-generation-1-2.png?raw=1",
    title: "AVS AI Studio",
  },
  {
    image: "https://www.dropbox.com/scl/fi/v6ulwaowqobcybpxu7enh/dzmNa7JA.jpeg?raw=1",
    title: "Modern Residence",
  },
];

const interiors = [
  {
    image: "https://www.dropbox.com/scl/fi/qpda5gw3mcdxmu1lf9bb7/DelWebb-Maygrass-ENTRY03.png?raw=1",
    title: "Maygrass Entry",
  },
  {
    image: "https://www.dropbox.com/scl/fi/e1dylllyglyps3nfc0b8k/26-0175-abhp-009-00494-redwood_BEDROOM.jpg?raw=1",
    title: "Redwood Bedroom",
  },
  {
    image: "https://www.dropbox.com/scl/fi/fpdhjyczre7mwx6s09dv4/26-0175-abhp-009-00494-redwood_KITCHEN.jpg?raw=1",
    title: "Redwood Kitchen",
  },
];

const FeaturedWork = () => {
  return (
    <section className="py-40 md:py-52 lg:py-64 bg-secondary relative">
      {/* Flow gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />

      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-20 md:mb-28"
        >
          <div>
            <div className="label-mono text-primary mb-6">Featured Work</div>
            <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold text-foreground tracking-[-0.04em]">
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

        {/* Exteriors */}
        <div className="mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label-mono text-muted-foreground mb-8"
          >
            Exteriors
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {exteriors.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="label-mono text-primary mb-2">Exteriors</div>
                  <h3 className="font-display text-xl font-semibold text-foreground tracking-[-0.02em]">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interiors */}
        <div className="mt-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label-mono text-muted-foreground mb-8"
          >
            Interiors
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {interiors.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="label-mono text-primary mb-2">Interiors</div>
                  <h3 className="font-display text-xl font-semibold text-foreground tracking-[-0.02em]">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center md:hidden">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-primary tracking-wide"
          >
            View All <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Flow gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default FeaturedWork;
