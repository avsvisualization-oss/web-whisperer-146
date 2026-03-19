import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, MousePointerClick, Eye, Users, Play } from "lucide-react";
import siteplanImg from "@/assets/portfolio-siteplan.jpg";
import interactiveTourImg from "@/assets/portfolio-interactive-tour.jpg";
import vrImg from "@/assets/portfolio-vr.jpg";
import aerialImg from "@/assets/portfolio-aerial-2.jpg";

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
      {/* Cinematic "Wow" moment — full-width immersive visual */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={aerialImg}
          alt="Cinematic community aerial view"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.08] to-transparent" />

        {/* Floating play indicator for cinematic feel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-24 h-24 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30 cursor-pointer hover:bg-primary/30 hover:scale-110 transition-all duration-500">
            <Play className="w-8 h-8 text-primary ml-1" fill="hsl(210 100% 52% / 0.3)" />
          </div>
        </motion.div>

        {/* Overlay label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute bottom-16 left-0 right-0 text-center"
        >
          <div className="label-mono text-primary/80 mb-3">Experience the difference</div>
          <p className="text-[15px] text-foreground/70 font-light">
            Immersive walkthroughs that convert interest into action
          </p>
        </motion.div>
      </div>

      {/* Main interactive content */}
      <div className="py-40 md:py-52 lg:py-64 bg-background relative">
        {/* Large accent glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/[0.04] rounded-full blur-[150px] pointer-events-none" />

        <div className="container-wide relative">
          {/* Header — bigger, bolder */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-28"
          >
            <div className="label-mono text-primary mb-8">Interactive Solutions</div>
            <h2 className="font-display text-[clamp(3rem,7vw,5.5rem)] font-semibold text-foreground max-w-5xl leading-[1.02] tracking-[-0.045em]">
              Beyond renderings.<br />
              <span className="text-primary">A better way to sell.</span>
            </h2>
            <p className="mt-10 text-[16px] text-muted-foreground max-w-2xl leading-[1.9] font-light">
              Interactive tools help builders present, sell and communicate
              projects more effectively — improving conversion rates and
              giving buyers a deeper understanding before it's built.
            </p>
          </motion.div>

          {/* Comparison: Static vs Interactive — more visual weight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-32"
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

            {/* Interactive side — more contrast */}
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

          {/* Visual showcase — larger cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
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
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.05] transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="label-mono text-primary/80 mb-3 text-[11px]">{item.tag}</div>
                  <h3 className="font-display text-xl font-semibold text-foreground tracking-[-0.025em]">
                    {item.label}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits — bigger icons, more spacing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-7 group-hover:bg-primary/20 transition-colors duration-300">
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
