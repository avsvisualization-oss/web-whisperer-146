import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Sell Homes Faster",
    description: "Visuals designed to convert — helping sales teams close deals and hit targets before construction begins.",
  },
  {
    number: "02",
    title: "Launch Before Construction",
    description: "Start marketing and pre-selling with photo-realistic visuals long before breaking ground.",
  },
  {
    number: "03",
    title: "Improve Conversion Rates",
    description: "Every deliverable is optimized for campaigns, landing pages, and buyer engagement — driving measurable results.",
  },
  {
    number: "04",
    title: "Support Your Sales Team",
    description: "Reliable, scalable visual production your team can count on across hundreds of projects.",
  },
];

const ValueSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative">
      {/* Subtle top gradient for flow */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-secondary to-transparent pointer-events-none" />

      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-16 lg:gap-28">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="label-mono text-primary mb-6 text-lg">Why AVS</div>
            <h2 className="font-display text-[clamp(2.5rem,5.5vw,4rem)] font-semibold text-foreground leading-[1.05] tracking-[-0.04em]">
              Designed for marketing and sales teams.
            </h2>
            <p className="mt-8 text-[14px] leading-[1.8] max-w-md font-light text-muted-foreground">
              We don't just create beautiful images. We build visual tools that
              integrate into your sales process and improve marketing performance.
            </p>
          </motion.div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group"
              >
                <div className="font-mono-data mb-5 transition-colors duration-300 text-2xl text-primary">
                  {v.number}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 tracking-[-0.02em]">
                  {v.title}
                </h3>
                <p className="text-[13px] leading-[1.8] font-light text-secondary">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
