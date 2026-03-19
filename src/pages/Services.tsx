import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Rocket, Users, Eye, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import exteriorImg from "@/assets/portfolio-exterior-1.jpg";
import interiorImg from "@/assets/portfolio-interior-1.jpg";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const useCases = [
  { icon: Rocket, title: "Launching new communities", desc: "Generate interest and pre-sales before construction begins" },
  { icon: Home, title: "Marketing pre-construction homes", desc: "Give buyers confidence with clear, realistic project visuals" },
  { icon: Users, title: "Supporting sales teams", desc: "Equip your team with tools that close deals faster" },
  { icon: Eye, title: "Helping buyers understand projects", desc: "Make complex plans simple with interactive exploration" },
];

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
            Visual tools designed to help you sell and launch projects faster
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            A complete system of visual solutions — from photorealistic renderings to interactive buyer experiences — built to accelerate real estate marketing and sales.
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
                Photorealistic visuals for marketing, approvals, and presentations.
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
            <motion.div custom={0} variants={fade} className="order-2 lg:order-1 rounded-xl overflow-hidden relative border border-border">
              <div className="aspect-video w-full">
                <iframe
                  src="https://player.vimeo.com/video/1168259589?background=1&autoplay=1&loop=1&muted=1"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allow="autoplay; fullscreen"
                  title="Cinematic animation preview"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/70 to-transparent p-6">
                <span className="label-mono text-primary/80">Cinematic Flythrough</span>
              </div>
            </motion.div>
            <motion.div custom={1} variants={fade} className="order-1 lg:order-2">
              <p className="label-mono text-primary mb-5">02 — Animations</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Cinematic storytelling that increases engagement
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Cinematic walkthroughs that bring projects to life and enhance buyer engagement.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Walkthrough */}
      <section className="relative py-48 md:py-56 lg:py-72 border-t border-primary/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-primary/[0.08] to-primary/[0.04]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="container-wide relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div custom={0} variants={fade} className="text-center mb-20">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase mb-6">
                Key Product
              </span>
              <p className="label-mono text-primary mb-5">03 — Walkthrough</p>
              <h2
                className="font-semibold text-foreground mb-8 leading-tight max-w-3xl mx-auto"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
              >
                Immersive 360 experiences that bring spaces to life
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Immersive 360 experiences that allow buyers to explore spaces before construction.
              </p>
            </motion.div>

            <motion.div custom={1} variants={fade} className="rounded-2xl overflow-hidden border border-primary/20 bg-card mb-20">
              <div className="aspect-[16/9] w-full">
                <iframe
                  src="https://my.matterport.com/show/?m=SxQL3iGyvPs&play=1"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  title="360 Virtual Walkthrough"
                  loading="lazy"
                  allow="fullscreen; xr-spatial-tracking"
                />
              </div>
              <div className="p-6 md:p-8 border-t border-border flex items-center justify-between">
                <div>
                  <p className="label-mono text-primary mb-1">Live 360 Tour</p>
                  <p className="text-sm text-muted-foreground font-light">
                    Explore a fully immersive walkthrough — navigate rooms, look around, and experience the space
                  </p>
                </div>
                <a
                  href="https://my.matterport.com/show/?m=SxQL3iGyvPs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full text-sm tracking-wide hover:bg-primary/80 hover:shadow-[0_0_20px_hsl(210_100%_52%/0.3)] transition-all duration-300"
                >
                  Open Walkthrough
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div custom={2} variants={fade} className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full text-sm tracking-wide hover:bg-primary/80 hover:shadow-[0_0_30px_hsl(210_100%_52%/0.35)] transition-all duration-300"
              >
                Explore Walkthrough Solutions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
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
                Produce visuals faster without compromising quality
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                AI-powered production that accelerates your timeline. Generate concepts in hours, iterate instantly, and get to market before the competition.
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

      {/* Use Cases */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div custom={0} variants={fade} className="text-center mb-20">
              <p className="label-mono text-primary mb-5">Real-World Applications</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
                How our solutions are used
              </h2>
            </motion.div>

            <motion.div custom={1} variants={fade} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((uc) => (
                <div key={uc.title} className="p-8 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors duration-500">
                  <uc.icon className="w-8 h-8 text-primary mb-5" />
                  <h3 className="text-foreground font-semibold text-lg mb-2">{uc.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 md:py-52 border-t border-border">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="font-semibold text-foreground mb-6 leading-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Let's build the right visual strategy for your next project
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
              Whether you need renderings, animations, or interactive tools — we'll help you find the right approach.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full text-sm tracking-wide hover:bg-primary/80 hover:shadow-[0_0_30px_hsl(210_100%_52%/0.35)] transition-all duration-300"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full text-sm tracking-wide hover:border-primary/40 hover:text-primary transition-all duration-300"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
