import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
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
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Start a project
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-md">
                Tell us about your project and we'll get back to you within 24
                hours with a tailored plan.
              </p>

              <div className="mt-12 flex flex-col gap-6">
                <a
                  href="mailto:info@avs-renderings.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm">info@avs-renderings.com</span>
                </a>
                <a
                  href="tel:+13028673810"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm">+1 (302) 867-3810</span>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <MapPin className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm">1200 Ponce de Leon, St 703, Coral Gables FL 33134</span>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <div>
                <label className="block text-xs font-medium text-foreground mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-2 uppercase tracking-wider">
                  Company
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20"
                  placeholder="Company name (optional)"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors mt-2"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
