import { motion } from "framer-motion";

const clients = [
  { name: "Creative Homes", src: "/clients/creative-homes.jpg" },
  { name: "Davison", src: "/clients/davison.jpg" },
  { name: "DR Horton", src: "/clients/dr-horton.jpg" },
  { name: "Elliott Homes", src: "/clients/elliott.jpg" },
  { name: "Americans", src: "/clients/americans.jpg" },
  { name: "Hubt", src: "/clients/hubt.jpg" },
  { name: "Madden", src: "/clients/madden.jpg" },
  { name: "Pulte Homes", src: "/clients/pulte-homes.jpg" },
  { name: "Shaddock", src: "/clients/shaddoc.jpg" },
  { name: "House Plan Zone", src: "/clients/house-plan-zone.jpg" },
];

const TrustSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-12"
        >
          Trusted by builders and developers across the United States
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-12 md:gap-20 mb-16"
        >
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "50+", label: "Builder Partners" },
            { value: "8+", label: "Years in Market" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Logo marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee items-center gap-16">
            {[...clients, ...clients].map((client, i) => (
              <img
                key={`${client.name}-${i}`}
                src={client.src}
                alt={client.name}
                className="h-8 md:h-10 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
