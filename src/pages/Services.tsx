import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import exteriorImg from "@/assets/portfolio-exterior-1.jpg";
import interiorImg from "@/assets/portfolio-interior-1.jpg";
import aerialImg from "@/assets/portfolio-aerial-1.jpg";
import interactiveImg from "@/assets/portfolio-interactive-tour.jpg";
import siteplanImg from "@/assets/portfolio-siteplan.jpg";
import vrImg from "@/assets/portfolio-vr.jpg";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-28 md:pt-52 md:pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container-wide relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="label-mono text-primary mb-6"
          >
            Our Solutions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-semibold text-foreground leading-[1.05] max-w-4xl mb-8"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Visual solutions built for real estate marketing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            From renderings to interactive tools, we help builders and developers present and sell projects more effectively.
          </motion.p>
        </div>
      </section>

      {/* 1. Renderings */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div custom={0} variants={fade}>
              <p className="label-mono text-primary mb-5">01 — Renderings</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Visuals that sell before the first brick is laid
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
                Clear, realistic visuals that communicate design and drive interest. Help buyers see the finished product and make faster decisions.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground">
                  Exterior Renderings
                </span>
                <span className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground">
                  Interior Renderings
                </span>
              </div>
            </motion.div>
            <motion.div custom={1} variants={fade} className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img src={exteriorImg} alt="Exterior rendering" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-lg overflow-hidden mt-8">
                <img src={interiorImg} alt="Interior rendering" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Animations */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div custom={0} variants={fade} className="order-2 lg:order-1 aspect-video rounded-lg overflow-hidden relative">
              <img src={aerialImg} alt="Cinematic animation" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="label-mono text-primary/80">Cinematic Flythrough</span>
              </div>
            </motion.div>
            <motion.div custom={1} variants={fade} className="order-1 lg:order-2">
              <p className="label-mono text-primary mb-5">02 — Animations</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Bring projects to life before construction
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Cinematic animations that enhance marketing impact. Launch campaigns, impress stakeholders, and generate interest with immersive video content.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Interactive — Prominent */}
      <section className="relative py-40 md:py-52 lg:py-64 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-primary/[0.06] to-primary/[0.03]" />
        <div className="container-wide relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div custom={0} variants={fade} className="text-center mb-16">
              <p className="label-mono text-primary mb-5">03 — Interactive</p>
              <h2
                className="font-semibold text-foreground mb-6 leading-tight max-w-3xl mx-auto"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
              >
                A better way to explore and sell communities
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                Interactive tools that improve how buyers explore and understand your projects. Support sales teams, increase engagement, and close faster.
              </p>
            </motion.div>

            <motion.div custom={1} variants={fade} className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                { img: siteplanImg, label: "Interactive Site Plans", desc: "Navigate lots, pricing and availability in real time" },
                { img: interactiveImg, label: "Virtual Tours", desc: "Walk through homes before they're built" },
                { img: vrImg, label: "360° Experiences", desc: "Immersive exploration from any device" },
              ].map((item) => (
                <div key={item.label} className="group relative rounded-xl overflow-hidden border border-primary/10 bg-card">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-foreground font-semibold text-lg mb-1">{item.label}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div custom={2} variants={fade} className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full text-sm tracking-wide hover:bg-primary/80 hover:shadow-[0_0_30px_hsl(210_100%_52%/0.35)] transition-all duration-300"
              >
                Explore Interactive Solutions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. AI Visuals */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div custom={0} variants={fade}>
              <div className="flex items-center gap-3 mb-5">
                <p className="label-mono text-primary">04 — AI Visuals</p>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-medium tracking-wider uppercase flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> New
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Scale your visual production with AI
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Fast, scalable visual production powered by AI technology. Generate concepts, iterate faster, and reduce time to market without sacrificing quality.
              </p>
            </motion.div>
            <motion.div custom={1} variants={fade} className="relative aspect-video rounded-xl overflow-hidden border border-border bg-card flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative text-center p-8">
                <Sparkles className="w-10 h-10 text-primary/40 mx-auto mb-4" />
                <p className="text-muted-foreground text-sm">AI-generated visual preview</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 border-t border-border">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Ready to elevate your project marketing?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Let's discuss how the right visual strategy can help you sell faster.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full text-sm tracking-wide hover:bg-primary/80 hover:shadow-[0_0_30px_hsl(210_100%_52%/0.35)] transition-all duration-300"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
