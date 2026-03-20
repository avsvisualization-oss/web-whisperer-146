import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Share your plans", description: "Send us your blueprints, site plans or design references." },
  { number: "02", title: "We build the visuals", description: "Our team creates your renderings, tours or interactive tools." },
  { number: "03", title: "You review", description: "Collaborate with us through a streamlined feedback process." },
  { number: "04", title: "We deliver", description: "Receive final assets ready for marketing, sales and approvals." },
];

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-20"
        >
          <div className="label-mono text-primary mb-6">How We Work</div>
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,4rem)] font-semibold text-foreground tracking-[-0.04em]">
            Simple, efficient process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="font-mono-data text-4xl font-medium text-primary/25 mb-6">
                {step.number}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 tracking-[-0.02em]">
                {step.title}
              </h3>
              <p className="text-[13px] text-muted-foreground leading-[1.8] font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
