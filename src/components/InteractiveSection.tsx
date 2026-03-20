import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, MousePointerClick, Eye, Users } from "lucide-react";
import siteplanImg from "@/assets/siteplan.jpg";

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
    <section className="relative overflow-hidden">
      {/* Main interactive content */}
      <div className="py-10 md:py-16 lg:py-20 bg-background relative">
        {/* Large accent glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/[0.04] rounded-full blur-[150px] pointer-events-none" />

        <div className="container-wide relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-20"
          >
            <div className="label-mono text-primary mb-8">Interactive Solutions</div>
            <h2 className="font-display text-[clamp(3.75rem,9vw,7rem)] font-semibold text-foreground max-w-5xl leading-[1.02] tracking-[-0.045em]">
              Interactive Tools<br />
              <span className="text-primary">That Help You Sell</span>
            </h2>
            <p className="mt-10 text-[16px] text-muted-foreground max-w-2xl leading-[1.9] font-light">
              Our interactive solutions are designed to support sales teams and improve buyer understanding.
            </p>
            <p className="mt-4 text-[16px] text-muted-foreground max-w-2xl leading-[1.9] font-light">
              From lot selection to community exploration, we create digital tools that make projects easier to understand, present, and sell.
            </p>
            <p className="mt-4 text-[16px] text-muted-foreground max-w-2xl leading-[1.9] font-light">
              Designed to support sales teams and improve buyer decision-making.
            </p>
            <p className="mt-4 text-[16px] text-muted-foreground max-w-2xl leading-[1.9] font-light">
              Used by sales teams to improve buyer understanding and speed up decision-making.
            </p>
          </motion.div>

          {/* Interactive Experience Embed — Large, prominent */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-24 relative rounded-2xl overflow-hidden border border-primary/20 bg-card max-w-7xl mx-auto"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="aspect-[16/9] w-full bg-[hsl(var(--secondary))]">
              <img
                src={siteplanImg}
                alt="Interactive Site Plan — Bay Pointe"
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 md:p-8 flex items-center justify-between border-t border-border">
              <div>
                <p className="label-mono text-primary mb-1">Live Interactive Experience</p>
                <p className="text-sm text-muted-foreground font-light">
                  Explore the community site plan — click lots, view details, navigate the neighborhood
                </p>
              </div>
              <a
                href="https://avs-interactive.com/avs/Interactive-Apps/siteplan/baypointe/20"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary text-[13px] font-medium rounded-full hover:bg-primary/10 transition-all duration-300"
              >
                Open Full Screen <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Comparison: Static vs Interactive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24"
          >
            {/* Static side */}
            <div className="relative rounded-2xl overflow-hidden border border-border/20 bg-secondary/40 p-12 flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="label-mono text-muted-foreground/50 mb-5">Traditional Approach</div>
                <h3 className="font-display text-3xl font-semibold text-muted-foreground/70 tracking-[-0.03em]">
                  Static Visuals
                </h3>
                <p className="mt-5 text-[14px] text-muted-foreground/60 leading-[1.9] font-light max-w-md">
                  Beautiful images that show what a project looks like — but buyers
                  can only see what you choose to show them. Limited engagement, limited conversion.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                <span className="text-[13px] text-muted-foreground/40 font-light">One perspective, limited engagement</span>
              </div>
            </div>

            {/* Interactive side */}
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 bg-primary/[0.06] p-12 flex flex-col justify-between min-h-[400px]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/15 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="relative">
                <div className="label-mono text-primary mb-5">The AVS Approach</div>
                <h3 className="font-display text-3xl font-semibold text-foreground tracking-[-0.03em]">
                  Interactive Experience
                </h3>
                <p className="mt-5 text-[14px] text-muted-foreground leading-[1.9] font-light max-w-md">
                  Buyers explore the project themselves — navigating site plans,
                  walking through homes, and understanding the full community.
                  Higher engagement, faster decisions.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-3 relative">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[13px] text-primary font-light">Full exploration, higher conversion</span>
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-7">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-xl font-semibold text-foreground tracking-[-0.02em]">
                  {b.title}
                </h4>
                <p className="mt-4 text-[13px] text-muted-foreground leading-[1.9] font-light">
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
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full font-medium text-[14px] tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_hsl(210_100%_52%/0.4)] hover:bg-primary/90"
            >
              Explore Interactive Solutions
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;
