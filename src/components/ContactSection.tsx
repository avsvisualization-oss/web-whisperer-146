import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Calendar } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@avs-renderings.com?subject=Quote Request from ${form.name}&body=${form.message}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="font-mono-data text-sm text-primary tracking-wider uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground text-balance">
              Let's bring your vision to life
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {[
                { icon: Phone, label: "+1 (302) 867-3810", href: "tel:+13028673810" },
                { icon: Mail, label: "info@avs-renderings.com", href: "mailto:info@avs-renderings.com" },
                { icon: Calendar, label: "Schedule a 30-min meeting", href: "https://avs-renderings.com//?p=4784" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <item.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right – form */}
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="card-surface rounded-lg p-8 flex flex-col gap-5"
          >
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-sm bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              Submit Request
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
