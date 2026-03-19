import { motion } from "framer-motion";
import { Zap, Target, Globe, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Modern 3D workflows and AI-assisted tools deliver results on tight timelines.",
  },
  {
    icon: Target,
    title: "Marketing-Driven",
    description: "Every visual is designed to support approvals, campaigns and sales conversations.",
  },
  {
    icon: Globe,
    title: "US Market Expertise",
    description: "Deep understanding of residential construction, buyer preferences and builder workflows.",
  },
  {
    icon: TrendingUp,
    title: "Consistent Quality",
    description: "Scalable production that maintains the same high standard across every project.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ValueSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Why AVS
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Built for how homes are actually sold today.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              We don't just create beautiful images. We build visual systems that
              integrate into your sales process and help your team close faster.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={item}>
                <v.icon className="w-5 h-5 text-foreground mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
