import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, MousePointerClick, Eye, Users } from "lucide-react";
import siteplanImg from "@/assets/portfolio-siteplan.jpg";
import interactiveTourImg from "@/assets/portfolio-interactive-tour.jpg";
import vrImg from "@/assets/portfolio-vr.jpg";

const benefits = [
  {
    icon: MousePointerClick,
    title: "Faster buyer decisions",
    description: "Buyers explore projects on their own terms, building confidence and reducing sales cycles.",
  },
  {
    icon: Eye,
    title: "Clearer project understanding",
    description: "Interactive tools communicate scale, layout and community design better than any static image.",
  },
  {
    icon: Users,
    title: "Stronger sales presentations",
    description: "Give your sales team a powerful tool that engages buyers and drives conversions on-site.",
  },
];

const InteractiveSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-wide relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="label-mono text-primary mb-6">Interactive Solutions</div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold text-foreground max-w-4xl leading-[1.05] tracking-[-0.04em]">
            Beyond renderings.<br />
            <span className="text-primary">A better way to sell.</span>
          </h2>
          <p className="mt-8 text-[15px] text-muted-foreground max-w-2xl leading-[1.8] font-light">
            Interactive tools help builders and developers present, sell and communicate
            projects more effectively — giving buyers a deeper understanding of
            what's being built, before it's built.
          </p>
        </motion.div>

        {/* Comparison: Static vs Interactive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24"
        >
          {/* Static side */}
          <div className="relative rounded-xl overflow-hidden border border-border/30 bg-secondary/50 p-10 flex flex-col justify-between min-h-[360px]">
            <div>
              <div className="label-mono text-muted-foreground/60 mb-4">Traditional Approach</div>
              <h3 className="font-display text-2xl font-semibold text-muted-foreground tracking-[-0.025em]">
                Static Visuals
              </h3>
              <p className="mt-4 text-[14px] text-muted-foreground/70 leading-[1.8] font-light max-w-md">
                Beautiful images that show what a project looks like — but buyers
                can only see what you choose to show them.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              <span className="text-[13px] text-muted-foreground/50 font-light">One perspective, limited engagement</span>
            </div>
          </div>

          {/* Interactive side */}
          <div className="relative rounded-xl overflow-hidden border border-primary/20 bg-primary/[0.04] p-10 flex flex-col justify-between min-h-[360px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
            <div>
              <div className="label-mono text-primary mb-4">The AVS Approach</div>
              <h3 className="font-display text-2xl font-semibold text-foreground tracking-[-0.025em]">
                Interactive Experience
              </h3>
              <p className="mt-4 text-[14px] text-muted-foreground leading-[1.8] font-light max-w-md">
                Buyers explore the project themselves — navigating site plans,
                walking through homes, and understanding the full community
                before it's built.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[13px] text-primary font-light">Full exploration, higher engagement</span>
            </div>
          </div>
        </motion.div>

        {/* Visual showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          {[
            { img: siteplanImg, label: "Interactive Site Plans", tag: "Sales Tool" },
            { img: interactiveTourImg, label: "Virtual Home Tours", tag: "Buyer Experience" },
            { img: vrImg, label: "360° Experiences", tag: "Immersive" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="label-mono text-primary/70 mb-2 text-[11px]">{item.tag}</div>
                <h3 className="font-display text-xl font-semibold text-foreground tracking-[-0.025em]">
                  {item.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-display text-lg font-semibold text-foreground tracking-[-0.02em]">
                {b.title}
              </h4>
              <p className="mt-3 text-[13px] text-muted-foreground leading-[1.8] font-light">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium text-[14px] tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_hsl(210_100%_52%/0.35)] hover:bg-primary/90"
          >
            Explore Interactive Solutions
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveSection;
