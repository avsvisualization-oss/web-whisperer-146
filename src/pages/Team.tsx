import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

const team = [
  {
    name: "Andrés Villegas",
    role: "Founder & Creative Director",
    description: "Architect with 10+ years of experience leading visual solutions for the US residential market.",
  },
  {
    name: "Carlos Mendez",
    role: "3D Lead Artist",
    description: "Specializes in photorealistic exterior and interior renderings for home builders.",
  },
  {
    name: "Sofia Rivera",
    role: "Interactive Developer",
    description: "Builds interactive site plans, facades and floor plan tools that empower sales teams.",
  },
  {
    name: "Daniel Torres",
    role: "Project Manager",
    description: "Ensures every project is delivered on time with clear communication and attention to detail.",
  },
  {
    name: "Maria Lopez",
    role: "Motion Designer",
    description: "Creates cinematic 3D animations and walkthroughs that bring communities to life.",
  },
  {
    name: "James Chen",
    role: "Business Development",
    description: "Connects AVS with builders and developers who want to elevate their marketing.",
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

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="container-wide">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground"
          >
            Meet the Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-xl"
          >
            The people behind every rendering, animation and interactive experience.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={item}
                className="p-8 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors"
              >
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
                  <span className="font-display text-lg font-bold text-muted-foreground">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Team;
