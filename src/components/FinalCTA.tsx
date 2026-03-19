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
    <section id="contact" className="section-padding bg-foreground">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — CTA + contact info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="label-mono text-primary-foreground/40 mb-5">Get in Touch</div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold text-primary-foreground leading-[1.1] tracking-[-0.04em]">
              Start your next project.
            </h2>
            <p className="mt-6 text-[15px] text-primary-foreground/60 leading-[1.7] max-w-md font-light">
              Tell us about your project and we'll get back to you within
              24 hours with a tailored plan.
            </p>

            <div className="mt-14 flex flex-col gap-5">
              <a
                href="mailto:info@avs-renderings.com"
                className="flex items-center gap-4 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-[13px]">info@avs-renderings.com</span>
              </a>
              <a
                href="tel:+13028673810"
                className="flex items-center gap-4 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-[13px]">+1 (302) 867-3810</span>
              </a>
              <div className="flex items-center gap-4 text-primary-foreground/60">
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
            className="flex flex-col gap-5"
          >
            <div>
              <label className="label-mono text-primary-foreground/40 mb-2 block">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-b border-primary-foreground/15 text-[15px] text-primary-foreground placeholder:text-primary-foreground/25 focus:outline-none focus:border-primary-foreground/40 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="label-mono text-primary-foreground/40 mb-2 block">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-b border-primary-foreground/15 text-[15px] text-primary-foreground placeholder:text-primary-foreground/25 focus:outline-none focus:border-primary-foreground/40 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="label-mono text-primary-foreground/40 mb-2 block">
                Company <span className="normal-case tracking-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-b border-primary-foreground/15 text-[15px] text-primary-foreground placeholder:text-primary-foreground/25 focus:outline-none focus:border-primary-foreground/40 transition-colors"
                placeholder="Company name"
              />
            </div>
            <div>
              <label className="label-mono text-primary-foreground/40 mb-2 block">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-b border-primary-foreground/15 text-[15px] text-primary-foreground placeholder:text-primary-foreground/25 focus:outline-none focus:border-primary-foreground/40 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full py-4 text-[13px] font-medium bg-primary-foreground text-foreground rounded-full hover:bg-primary-foreground/90 transition-colors tracking-wide"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
