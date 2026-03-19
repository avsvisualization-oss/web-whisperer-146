import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Share your plans", description: "Send us your blueprints, site plans or design references." },
  { number: "02", title: "We build the visuals", description: "Our team creates your renderings, tours or interactive tools." },
  { number: "03", title: "You review", description: "Collaborate with us through a streamlined feedback process." },
  { number: "04", title: "We deliver", description: "Receive final assets ready for marketing, sales and approvals." },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="label-mono text-muted-foreground mb-5">How We Work</div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-foreground tracking-[-0.035em]">
            Simple, efficient process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="font-mono-data text-3xl font-medium text-border mb-5">
                {step.number}
              </div>
              <h3 className="font-display text-base font-semibold text-foreground mb-2 tracking-[-0.02em]">
                {step.title}
              </h3>
              <p className="text-[13px] text-muted-foreground leading-[1.7]">
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
