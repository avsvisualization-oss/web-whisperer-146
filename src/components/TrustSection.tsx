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
          className="flex flex-wrap justify-center gap-20 md:gap-32 mb-24"
        >
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "50+", label: "Builder Partners" },
            { value: "8+", label: "Years in Market" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono-data text-5xl md:text-6xl font-medium text-primary tracking-tight">
                {stat.value}
              </div>
              <div className="label-mono text-muted-foreground mt-4">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border mb-20" />

        {/* Trust statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="label-mono text-muted-foreground text-center mb-14">
            Trusted by builders and developers across the United States
          </p>

          <div className="flex flex-wrap justify-center gap-x-16 gap-y-7 max-w-4xl mx-auto">
            {clientNames.map((name) => (
              <span
                key={name}
                className="font-display text-base font-medium text-muted-foreground/50 hover:text-primary transition-colors duration-300 cursor-default"
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
