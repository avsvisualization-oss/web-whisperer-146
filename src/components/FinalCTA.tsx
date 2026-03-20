import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-wide max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="label-mono text-primary mb-6">Get in Touch</div>
          <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold text-foreground leading-[1.05] tracking-[-0.04em]">
            Let's Build Something That Helps You Sell
          </h2>
          <p className="mt-7 text-[14px] text-muted-foreground leading-[1.8] max-w-md mx-auto font-light">
            Tell us about your project and we'll help you present it in the most effective way.
          </p>

          <a
            href="mailto:info@avs-renderings.com"
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full text-sm tracking-wide hover:bg-primary/80 hover:shadow-[0_0_30px_hsl(210_100%_52%/0.35)] active:scale-[0.97] transition-all duration-300"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </a>

          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <a href="mailto:info@avs-renderings.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
              <Mail className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
              <span className="text-[13px]">info@avs-renderings.com</span>
            </a>
            <a href="tel:+13028673810" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
              <Phone className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
              <span className="text-[13px]">+1 (302) 867-3810</span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
              <span className="text-[13px]">Coral Gables, FL</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
