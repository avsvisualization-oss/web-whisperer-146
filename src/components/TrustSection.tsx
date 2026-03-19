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
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-16 md:gap-24 mb-20"
        >
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "50+", label: "Builder Partners" },
            { value: "8+", label: "Years in Market" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono-data text-3xl md:text-4xl font-medium text-foreground tracking-tight">
                {stat.value}
              </div>
              <div className="label-mono text-muted-foreground mt-3">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border mb-16" />

        {/* Client names */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="label-mono text-muted-foreground text-center mb-12">
            Trusted by builders and developers across the United States
          </p>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-5 max-w-4xl mx-auto">
            {clientNames.map((name) => (
              <span
                key={name}
                className="font-display text-[15px] font-medium text-muted-foreground/70 hover:text-foreground transition-colors duration-300 cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
