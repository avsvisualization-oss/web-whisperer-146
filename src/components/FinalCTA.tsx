import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const FinalCTA = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    );
    window.location.href = `mailto:info@avs-renderings.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-28">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="label-mono text-primary mb-6">Get in Touch</div>
            <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold text-foreground leading-[1.05] tracking-[-0.04em]">
              Let's Build Something That Helps You Sell
            </h2>
            <p className="mt-7 text-[14px] text-muted-foreground leading-[1.8] max-w-md font-light">
              Tell us about your project and we'll help you present it in the most effective way.
            </p>

            <div className="mt-8 md:mt-16 flex flex-col gap-5 md:gap-6">
              <a
                href="mailto:info@avs-renderings.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-[13px]">info@avs-renderings.com</span>
              </a>
              <a
                href="tel:+13028673810"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Phone className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-[13px]">+1 (302) 867-3810</span>
              </a>
              <div className="flex items-center gap-4 text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-[13px]">1200 Ponce de Leon, St 703, Coral Gables FL 33134</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-secondary/50 rounded-2xl p-8 md:p-10 border border-border/50"
          >
            <div>
              <label className="label-mono text-muted-foreground mb-2.5 block">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-0 py-3.5 bg-transparent border-b border-border text-[15px] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="label-mono text-muted-foreground mb-2.5 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-0 py-3.5 bg-transparent border-b border-border text-[15px] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="label-mono text-muted-foreground mb-2.5 block">
                Company <span className="normal-case tracking-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full px-0 py-3.5 bg-transparent border-b border-border text-[15px] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors duration-300"
                placeholder="Company name"
              />
            </div>
            <div>
              <label className="label-mono text-muted-foreground mb-2.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-0 py-3.5 bg-transparent border-b border-border text-[15px] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <p className="mt-8 text-center text-[13px] text-muted-foreground/60 font-light tracking-wide">
              Let's start your next project
            </p>
            <button
              type="submit"
              className="mt-3 w-full py-5 text-[15px] font-semibold bg-primary text-primary-foreground rounded-full hover:bg-primary/80 hover:shadow-[0_0_50px_hsl(210_100%_52%/0.55)] hover:scale-[1.03] transition-all duration-300 tracking-wide"
            >
              Start a Project
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
