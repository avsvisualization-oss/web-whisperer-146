import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import siteplanImg from "@/assets/siteplan.jpg";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const AutoplayVideo = ({ src, className }: { src: string; className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!shouldLoad) setShouldLoad(true);
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.2, rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="w-full h-full">
      {shouldLoad ? (
        <video
          ref={videoRef}
          className={className}
          muted
          loop
          playsInline
          preload="none"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className={`${className} bg-secondary/60`} />
      )}
    </div>
  );
};

const Interactive = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-52 md:pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container-wide relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="label-mono text-primary mb-6"
          >
            Interactive Tools
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-semibold text-foreground leading-[1.05] max-w-4xl mb-8"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Interactive experiences that help sell communities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            From interactive site plans to virtual tours — give buyers the tools to explore your community on their own terms.
          </motion.p>
        </div>
      </section>

      {/* Interactive Site Plan */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div custom={0} variants={fade}>
              <p className="label-mono text-primary mb-5">01 — Interactive Site Plans</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                The most effective way to explore and sell communities
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
                Give buyers an interactive experience that builds confidence and drives decisions. Equip your sales team with tools that shorten the path to close.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground">
                  Site Plans
                </span>
                <span className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground">
                  Floor Plans
                </span>
                <span className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground">
                  Lot Selection
                </span>
              </div>
            </motion.div>
            <motion.div custom={1} variants={fade} className="rounded-xl overflow-hidden border border-border">
              <div className="aspect-video w-full">
                <AutoplayVideo
                  src="/videos/Interactive_Site_Plan_1.mp4"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Floor Plans */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div custom={0} variants={fade} className="order-2 lg:order-1 rounded-xl overflow-hidden border border-border">
              <div className="aspect-video w-full">
                <AutoplayVideo
                  src="/videos/Interactive_Floor_plans.mp4"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div custom={1} variants={fade} className="order-1 lg:order-2">
              <p className="label-mono text-primary mb-5">06 — Interactive Floor Plans</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Navigate floor plans with interactive detail
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Let buyers explore room layouts, dimensions, and configurations interactively — making it easy to envision how each space fits their lifestyle.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Exterior Design Tool */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div custom={0} variants={fade} className="order-2 lg:order-1 rounded-xl overflow-hidden border border-border">
              <div className="aspect-video w-full">
                <AutoplayVideo
                  src="/videos/Exterior_Design_Tool.mp4"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div custom={1} variants={fade} className="order-1 lg:order-2">
              <p className="label-mono text-primary mb-5">03 — Exterior Design Tool</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Visualize exterior options in real time
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Empower buyers to customize and preview exterior finishes, materials, and color schemes — helping them see their future home before it's built.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overlap Tool */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div custom={0} variants={fade}>
              <p className="label-mono text-primary mb-5">04 — Overlap Tool</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Compare designs with precision overlays
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Layer and compare renderings side by side to evaluate design options, revisions, and material choices with clarity and confidence.
              </p>
            </motion.div>
            <motion.div custom={1} variants={fade} className="rounded-xl overflow-hidden border border-border">
              <div className="aspect-video w-full">
                <AutoplayVideo
                  src="/videos/Overl_lap_Tool.mp4"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interior Design Tool */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div custom={0} variants={fade} className="order-2 lg:order-1 rounded-xl overflow-hidden border border-border">
              <div className="aspect-video w-full">
                <AutoplayVideo
                  src="/videos/Interior_Design_Tool.mp4"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div custom={1} variants={fade} className="order-1 lg:order-2">
              <p className="label-mono text-primary mb-5">05 — Interior Design Tool</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Explore interior finishes and layouts
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Let buyers personalize interior spaces — from flooring and cabinetry to paint colors and fixtures — creating a home that feels uniquely theirs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 360 Walkthrough */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div custom={0} variants={fade} className="order-2 lg:order-1 rounded-xl overflow-hidden border border-border">
              <div className="aspect-video w-full">
                <iframe
                  src="https://avsrenderings.viewin360.co/share/collection/7XF1M?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  title="360 Virtual Walkthrough"
                  loading="lazy"
                  allow="fullscreen; xr-spatial-tracking"
                />
              </div>
            </motion.div>
            <motion.div custom={1} variants={fade} className="order-1 lg:order-2">
              <p className="label-mono text-primary mb-5">02 — Virtual Tours</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Immersive 360 experiences that bring spaces to life
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Allow buyers and stakeholders to explore spaces interactively before construction. Walk through rooms, look around, and experience the space as if you were there.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 md:py-40 lg:py-52 border-t border-border">
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
              Ready to give your buyers a better experience?
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
              Let's build interactive tools that help your team sell smarter and close faster.
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

export default Interactive;
