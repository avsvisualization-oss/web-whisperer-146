import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Fast Turnaround",
    description: "Modern 3D workflows and AI-assisted tools deliver results on the tightest timelines.",
  },
  {
    number: "02",
    title: "Marketing-Driven",
    description: "Every visual is designed to support approvals, campaigns and sales conversations.",
  },
  {
    number: "03",
    title: "US Market Expertise",
    description: "Deep understanding of residential construction, buyer preferences and builder workflows.",
  },
  {
    number: "04",
    title: "Consistent Quality",
    description: "Scalable production that maintains the same high standard across every project.",
  },
];

const ValueSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="label-mono text-muted-foreground mb-5">Why AVS</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-foreground leading-[1.1] tracking-[-0.035em]">
              Built for how homes are actually sold today.
            </h2>
            <p className="mt-6 text-[15px] text-muted-foreground leading-[1.7] max-w-md">
              We don't just create beautiful images. We build visual systems that
              integrate into your sales process and help your team close faster.
            </p>
          </motion.div>

          {/* Right — grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="font-mono-data text-xs text-muted-foreground/50 mb-4">
                  {v.number}
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2 tracking-[-0.02em]">
                  {v.title}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-[1.7]">
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
