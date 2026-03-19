import { motion } from "framer-motion";

const clientNames = [
  "Pulte Homes",
  "DR Horton",
  "Creative Homes",
  "Elliott Homes",
  "Shaddock Homes",
  "Madden Home Design",
  "Davison Homes",
  "House Plan Zone",
  "Great American Homes",
];

const TrustSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background relative">
      <div className="container-wide">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-24 md:gap-36 mb-20"
        >
          {[
            { value: "10,000+", label: "Projects Completed" },
            { value: "72", label: "Builder Partners" },
            { value: "15+", label: "Years in the Industry" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono-data text-5xl md:text-7xl font-medium text-primary tracking-tight">
                {stat.value}
              </div>
              <div className="label-mono text-muted-foreground mt-5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border/50 mb-16" />

        {/* Trust statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="label-mono text-muted-foreground text-center mb-16">
            Trusted by builders and developers across the United States
          </p>

          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 max-w-4xl mx-auto">
            {clientNames.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="font-display text-lg font-medium text-muted-foreground/50 hover:text-primary transition-colors duration-300 cursor-default"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
