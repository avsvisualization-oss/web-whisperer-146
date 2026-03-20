import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Check, Shield, Zap, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ROLE_OPTIONS = ["Home Builder", "Developer", "Architect", "Marketing Agency", "Other"];
const PROJECT_OPTIONS = ["Single Family", "Townhomes", "Community / Masterplan", "Marketing Package", "Interactive Tools"];
const SERVICE_OPTIONS = ["Exterior Renderings", "Interior Renderings", "Animations", "Interactive Tools", "360 Walkthrough"];
const TIMELINE_OPTIONS = ["ASAP", "2–4 weeks", "1–3 months", "Just exploring"];
const BUDGET_OPTIONS = ["$500 – $2,000", "$2,000 – $5,000", "$5,000 – $10,000", "$10,000+"];

const inputClass = "w-full px-0 py-3 bg-transparent border-b border-border text-[15px] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors";
const selectClass = "w-full px-0 py-3 bg-transparent border-b border-border text-[15px] text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer";

const isValidEmail = (email: string) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!re.test(email)) return false;
  const disposable = ["mailinator.com", "guerrillamail.com", "tempmail.com", "throwaway.email", "yopmail.com"];
  const domain = email.split("@")[1]?.toLowerCase();
  return !disposable.includes(domain);
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "", email: "", company: "", role: "", projectType: "",
    services: [] as string[], timeline: "", budget: "", message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact-form") {
      setTimeout(() => {
        document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);

  const toggleService = (s: string) => {
    setForm(f => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter(x => x !== s) : [...f.services, s],
    }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!isValidEmail(form.email)) e.email = "Enter a valid work email";
    if (!form.company.trim()) e.company = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (honeypot) return;
    if (!validate()) return;

    const lines = [
      `Name: ${form.name}`, `Email: ${form.email}`, `Company: ${form.company}`,
      form.role && `Role: ${form.role}`, form.projectType && `Project Type: ${form.projectType}`,
      form.services.length && `Services: ${form.services.join(", ")}`,
      form.timeline && `Timeline: ${form.timeline}`, form.budget && `Budget: ${form.budget}`,
      form.message && `\nMessage:\n${form.message}`,
    ].filter(Boolean).join("\n");

    const subject = encodeURIComponent(`Project inquiry from ${form.name} – ${form.company}`);
    const body = encodeURIComponent(lines);
    window.location.href = `mailto:info@avs-renderings.com?subject=${subject}&body=${body}`;
  };

  const set = (key: string, val: string) => {
    setForm(f => ({ ...f, [key]: val }));
    if (errors[key]) setErrors(e => { const n = { ...e }; delete n[key]; return n; });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section id="contact-form" className="pt-28 pb-16 md:pt-32 md:pb-20 relative flex items-start justify-center">
        {/* Background */}
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/10" />

        <div className="relative z-10 w-full max-w-[880px] mx-auto px-5">
          {/* Header above card */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <div className="label-mono text-primary mb-4">Contact</div>
            <h1 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-tight tracking-[-0.04em]">
              Get a Quote for Your Next Project
            </h1>
            <p className="mt-4 text-[15px] text-muted-foreground leading-[1.7] max-w-md mx-auto">
              Tell us about your project and we'll send you a clear proposal within 24 hours.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                <span className="text-[12px]">Trusted by 50+ builders</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Zap className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                <span className="text-[12px]">Fast turnaround</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Sparkles className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                <span className="text-[12px]">High-end visuals</span>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="rounded-3xl p-6 md:p-10"
            style={{ backgroundColor: 'hsl(220, 10%, 14%)', boxShadow: '0 8px 60px -12px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.3)' }}
          >
            <p className="text-center text-[11px] text-muted-foreground/40 mb-5 tracking-wide">Takes less than 30 seconds</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Honeypot */}
              <input type="text" name="website" value={honeypot} onChange={e => setHoneypot(e.target.value)}
                className="absolute opacity-0 pointer-events-none h-0 w-0" tabIndex={-1} autoComplete="off" aria-hidden="true" />

              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label-mono text-muted-foreground mb-1 block">Full Name *</label>
                  <input type="text" required value={form.name} onChange={e => set("name", e.target.value)}
                    className={inputClass} placeholder="Your full name" />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="label-mono text-muted-foreground mb-1 block">Work Email *</label>
                  <input type="email" required value={form.email} onChange={e => set("email", e.target.value)}
                    className={inputClass} placeholder="you@company.com" />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Row 2: Company */}
              <div>
                <label className="label-mono text-muted-foreground mb-1 block">Company Name *</label>
                <input type="text" required value={form.company} onChange={e => set("company", e.target.value)}
                  className={inputClass} placeholder="Company name" />
                {errors.company && <p className="text-destructive text-xs mt-1">{errors.company}</p>}
              </div>

              {/* Row 3: Role + Project Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="label-mono text-muted-foreground mb-1 block">What describes you?</label>
                  <select value={form.role} onChange={e => set("role", e.target.value)} className={selectClass}>
                    <option value="">Select...</option>
                    {ROLE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <ChevronDown className="absolute right-0 bottom-3.5 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
                <div className="relative">
                  <label className="label-mono text-muted-foreground mb-1 block">Project Type</label>
                  <select value={form.projectType} onChange={e => set("projectType", e.target.value)} className={selectClass}>
                    <option value="">Select...</option>
                    {PROJECT_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <ChevronDown className="absolute right-0 bottom-3.5 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Row 4: Timeline + Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="label-mono text-muted-foreground mb-1 block">Timeline</label>
                  <select value={form.timeline} onChange={e => set("timeline", e.target.value)} className={selectClass}>
                    <option value="">Select...</option>
                    {TIMELINE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <ChevronDown className="absolute right-0 bottom-3.5 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
                <div className="relative">
                  <label className="label-mono text-muted-foreground mb-1 block">Budget Range</label>
                  <select value={form.budget} onChange={e => set("budget", e.target.value)} className={selectClass}>
                    <option value="">Select...</option>
                    {BUDGET_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <ChevronDown className="absolute right-0 bottom-3.5 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Row 5: Services chips */}
              <div>
                <label className="label-mono text-muted-foreground mb-2 block">Services Needed</label>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_OPTIONS.map(s => {
                    const active = form.services.includes(s);
                    return (
                      <button key={s} type="button" onClick={() => toggleService(s)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[13px] border transition-colors duration-200 ${
                          active
                            ? "bg-primary/15 border-primary text-primary"
                            : "bg-transparent border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                        }`}>
                        {active && <Check className="w-3 h-3" />}
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 6: Message */}
              <div>
                <label className="label-mono text-muted-foreground mb-1 block text-xs">
                  Message <span className="normal-case tracking-normal">(optional)</span>
                </label>
                <textarea rows={2} value={form.message} onChange={e => set("message", e.target.value)}
                  className={`${inputClass} resize-none text-[13px]`} placeholder="Any additional details..." />
              </div>

              <button type="submit"
                className="w-full py-5 text-base font-semibold bg-primary text-primary-foreground rounded-full hover:bg-primary/90 active:scale-[0.97] transition-all mt-2 tracking-wide">
                Get My Quote
              </button>

              <p className="text-[11px] text-muted-foreground/40 text-center tracking-wide">
                Flexible payment options available — ACH, Wire and Credit Card
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
