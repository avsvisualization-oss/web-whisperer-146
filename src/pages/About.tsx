import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import imgIgnacio from "@/assets/team/ignacio.png";
import imgNatacha from "@/assets/team/natacha.jpg";
import imgGabriel from "@/assets/team/gabriel.jpg";
import imgMike from "@/assets/team/mike.jpg";
import imgMatias from "@/assets/team/matias.png";
import imgFabian from "@/assets/team/fabian.png";
import imgMilena from "@/assets/team/milena.png";
import imgAgustina from "@/assets/team/agustina.png";
import imgNati from "@/assets/team/nati.jpg";
import imgAbril from "@/assets/team/abril.jpg";

const differentiators = [
  "Built for production scale, not one-off projects",
  "Fast turnaround with consistent, reliable quality",
  "Deep understanding of real estate marketing workflows",
  "Solutions designed to support sales, marketing, and approvals",
];

const stats = [
  { value: "10,000+", label: "Projects Completed" },
  { value: "72", label: "Builder Partners" },
  { value: "15+", label: "Years in the Industry" },
];

const steps = [
  { number: "01", text: "You share plans, references, or marketing goals" },
  { number: "02", text: "We develop accurate and market-ready content" },
  { number: "03", text: "You review and refine" },
  { number: "04", text: "Final assets ready for marketing and sales" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="label-mono text-primary mb-5">About AVS</div>
            <h1 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-tight tracking-[-0.04em] text-balance">
              We help home builders sell faster with high-impact marketing solutions.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-16 md:pb-20">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-5"
          >
            <p className="text-[15px] text-muted-foreground leading-[1.8]">
              We are AVS Works LLC, a U.S.-based company focused on marketing solutions for residential real estate.
            </p>
            <p className="text-[15px] text-muted-foreground leading-[1.8]">
              Our team brings together experience in architecture, construction, real estate, and marketing — allowing us to understand not just how projects are designed, but how they are positioned and sold.
            </p>
            <p className="text-[15px] text-muted-foreground leading-[1.8]">
              We work with home builders, developers, and marketing teams across the United States.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="label-mono text-primary mb-5">What Sets Us Apart</div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground tracking-[-0.035em]">
              What makes us different
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-md bg-background/50 border border-border/50"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                <p className="text-[14px] text-foreground/90 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-20 md:gap-32"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono-data text-4xl md:text-6xl font-medium text-primary tracking-tight">
                  {stat.value}
                </div>
                <div className="label-mono text-muted-foreground mt-4">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="label-mono text-primary mb-5">Process</div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground tracking-[-0.035em]">
              How we work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-mono-data text-3xl font-medium text-primary/30 mb-3">
                  {step.number}
                </div>
                <p className="text-[14px] text-foreground/80 leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground tracking-[-0.035em] mb-8">
              Ready to get started?
            </h2>
            <Link
              to="/#contact-form"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-[13px] font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors tracking-wide"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
};

export default About;
