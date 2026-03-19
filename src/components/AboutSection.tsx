import { motion } from "framer-motion";
import { Compass, Zap, Target } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Architectural Expertise",
    description: "Architects with hands-on experience in residential design and construction.",
  },
  {
    icon: Zap,
    title: "Efficient Production",
    description: "Modern 3D workflows and AI-assisted tools for consistency and scalability.",
  },
  {
    icon: Target,
    title: "Marketing & Sales Focus",
    description: "Visuals designed to support approvals, campaigns and sales conversations.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl">
          <p className="font-mono-data text-sm text-primary tracking-wider uppercase mb-3">
            Why It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground text-balance">
            Built by architects. Optimized by technology. Focused on results.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            From individual home plans to full sales center experiences, we help teams communicate better and close with confidence.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="card-surface rounded-lg p-6"
            >
              <p.icon className="w-5 h-5 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Client logos marquee */}
        <div className="mt-20">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-6">
            Trusted by leading builders
          </p>
          <div className="overflow-hidden">
            <div className="flex animate-marquee gap-16 items-center">
              {["Pulte Homes", "DR Horton", "Creative Homes", "Elliott Homes", "Shaddock Homes", "Madden", "Pulte Homes", "DR Horton", "Creative Homes", "Elliott Homes", "Shaddock Homes", "Madden"].map(
                (name, i) => (
                  <span
                    key={`${name}-${i}`}
                    className="text-muted-foreground/40 text-lg font-semibold whitespace-nowrap"
                  >
                    {name}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
