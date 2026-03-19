import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { Link } from "react-router-dom";
import aboutImg from "@/assets/portfolio-aerial-1.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                About AVS
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Your visual partner for selling homes.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                AVS Renderings is a visual solutions company that helps home
                builders, residential developers and marketing teams sell
                projects faster and more effectively.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We go beyond creating beautiful renderings. We deliver strategic
                visual tools — from interactive site plans to cinematic
                animations — that integrate into your sales process and drive
                measurable results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="rounded-lg overflow-hidden aspect-[4/3]"
            >
              <img
                src={aboutImg}
                alt="AVS Renderings aerial visualization"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What makes us different
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Built by Architects",
                description:
                  "Our team has hands-on experience in residential design and construction, so we understand the details that matter to builders and buyers.",
              },
              {
                title: "Marketing-First Approach",
                description:
                  "We design visuals that support sales conversations, marketing campaigns and city approvals — not just portfolio pieces.",
              },
              {
                title: "Scalable & Consistent",
                description:
                  "Modern 3D workflows and AI-assisted tools allow us to maintain premium quality at scale, meeting tight deadlines without compromise.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Our Mission
            </p>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-snug max-w-3xl mx-auto">
              To help every builder and developer communicate their vision with
              clarity, precision and impact — before a single wall goes up.
            </h2>
            <div className="mt-10">
              <Link
                to="/contact"
                className="px-7 py-3.5 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                Work With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
};

export default About;
