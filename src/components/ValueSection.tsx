import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Sell Homes Faster",
    description: "Visuals designed to convert — helping sales teams close deals before construction begins.",
  },
  {
    number: "02",
    title: "Launch Before Construction",
    description: "Start marketing and pre-selling with photo-realistic visuals long before breaking ground.",
  },
  {
    number: "03",
    title: "Marketing-Ready Output",
    description: "Every deliverable is optimized for campaigns, brochures, websites and social media from day one.",
  },
  {
    number: "04",
    title: "Built for Scale",
    description: "Consistent quality across hundreds of projects — reliable production your team can count on.",
  },
];

const ValueSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="label-mono text-primary mb-6">Why AVS</div>
            <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-semibold text-foreground leading-[1.05] tracking-[-0.04em]">
              Designed for marketing and sales teams.
            </h2>
            <p className="mt-7 text-[14px] text-muted-foreground leading-[1.8] max-w-md">
              We don't just create beautiful images. We build visual tools that
              integrate into your sales process and improve marketing performance.
            </p>
          </motion.div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-14">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group"
              >
                <div className="font-mono-data text-sm text-primary/40 mb-5 group-hover:text-primary/70 transition-colors duration-300">
                  {v.number}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3 tracking-[-0.02em]">
                  {v.title}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-[1.8]">
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
