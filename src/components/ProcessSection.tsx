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
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            How We Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Simple, efficient process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <div className="font-display text-4xl font-bold text-border mb-4">
                {step.number}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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
