import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Check, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ROLE_OPTIONS = ["Home Builder", "Developer", "Architect", "Marketing Agency", "Other"];
const PROJECT_OPTIONS = ["Single Family", "Townhomes", "Community / Masterplan", "Marketing Package", "Interactive Tools"];
const SERVICE_OPTIONS = ["Exterior Renderings", "Interior Renderings", "Animations", "Interactive Tools", "360 Walkthrough"];
const TIMELINE_OPTIONS = ["ASAP", "2–4 weeks", "1–3 months", "Just exploring"];
const BUDGET_OPTIONS = ["$500 – $2,000", "$2,000 – $5,000", "$5,000 – $10,000", "$10,000+"];

const inputBase = "w-full px-4 py-3 bg-background/60 border border-border/60 rounded-lg text-[14px] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200";
const selectBase = "w-full px-4 py-3 bg-background/60 border border-border/60 rounded-lg text-[14px] text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200 appearance-none cursor-pointer";

const isValidEmail = (email: string) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!re.test(email)) return false;
  const disposable = ["mailinator.com", "guerrillamail.com", "tempmail.com", "throwaway.email", "yopmail.com"];
  const domain = email.split("@")[1]?.toLowerCase();
  return !disposable.includes(domain);
};

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "", email: "", company: "", role: "", projectType: "",
    services: [] as string[], timeline: "", budget: "", message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

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

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (honeypot) return;
    if (!validate()) return;
    setSubmitting(true);

    const templateData = {
      name: form.name,
      email: form.email,
      company: form.company,
      role: form.role,
      projectType: form.projectType,
      services: form.services.join(", "),
      timeline: form.timeline,
      budget: form.budget,
      message: form.message,
    };

    const id = crypto.randomUUID();

    try {
      // Send notification to team
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-notification",
          recipientEmail: "avsvisualization@gmail.com",
          idempotencyKey: `contact-notify-${id}`,
          templateData,
        },
      });

      // Send auto-reply to user
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-confirmation",
          recipientEmail: form.email,
          idempotencyKey: `contact-confirm-${id}`,
          templateData: { name: form.name },
        },
      });

      toast.success("Your inquiry has been sent! Check your email for confirmation.");
      setForm({ name: "", email: "", company: "", role: "", projectType: "", services: [], timeline: "", budget: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const set = (key: string, val: string) => {
    setForm(f => ({ ...f, [key]: val }));
    if (errors[key]) setErrors(e => { const n = { ...e }; delete n[key]; return n; });
  };

  return (
    <section id="contact-form" className="py-20 md:py-28 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-transparent to-card/30" />

      <div className="relative z-10 w-full max-w-[850px] mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="label-mono text-primary mb-4">Get in Touch</div>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-semibold text-foreground leading-[1.1] tracking-[-0.03em]">
            Get a Quote for Your Next Project
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground leading-[1.7] max-w-lg mx-auto">
            Tell us about your project and we'll send you a clear proposal within 24 hours.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.08, duration: 0.55 }}
          className="rounded-2xl p-7 md:p-10 bg-card border border-border/40"
          style={{ boxShadow: '0 4px 32px -8px rgba(0,0,0,0.35)' }}
        >
          <p className="text-center text-[11px] text-muted-foreground/40 mb-6 tracking-widest uppercase">
            Takes less than 30 seconds
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Honeypot */}
            <input type="text" name="website" value={honeypot} onChange={e => setHoneypot(e.target.value)}
              className="absolute opacity-0 pointer-events-none h-0 w-0" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[12px] font-medium text-muted-foreground mb-1.5 block tracking-wide uppercase">Full Name *</label>
                <input type="text" required value={form.name} onChange={e => set("name", e.target.value)}
                  className={inputBase} placeholder="Your full name" />
                {errors.name && <p className="text-destructive text-[11px] mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-[12px] font-medium text-muted-foreground mb-1.5 block tracking-wide uppercase">Work Email *</label>
                <input type="email" required value={form.email} onChange={e => set("email", e.target.value)}
                  className={inputBase} placeholder="you@company.com" />
                {errors.email && <p className="text-destructive text-[11px] mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Row 2: Company */}
            <div>
              <label className="text-[12px] font-medium text-muted-foreground mb-1.5 block tracking-wide uppercase">Company Name *</label>
              <input type="text" required value={form.company} onChange={e => set("company", e.target.value)}
                className={inputBase} placeholder="Company name" />
              {errors.company && <p className="text-destructive text-[11px] mt-1">{errors.company}</p>}
            </div>

            {/* Row 3: Role + Project Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="text-[12px] font-medium text-muted-foreground mb-1.5 block tracking-wide uppercase">What best describes you?</label>
                <select value={form.role} onChange={e => set("role", e.target.value)} className={selectBase}>
                  <option value="">Select...</option>
                  {ROLE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
                <ChevronDown className="absolute right-3 bottom-3.5 w-4 h-4 text-muted-foreground/60 pointer-events-none" />
              </div>
              <div className="relative">
                <label className="text-[12px] font-medium text-muted-foreground mb-1.5 block tracking-wide uppercase">Project Type</label>
                <select value={form.projectType} onChange={e => set("projectType", e.target.value)} className={selectBase}>
                  <option value="">Select...</option>
                  {PROJECT_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
                <ChevronDown className="absolute right-3 bottom-3.5 w-4 h-4 text-muted-foreground/60 pointer-events-none" />
              </div>
            </div>

            {/* Row 4: Timeline + Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="text-[12px] font-medium text-muted-foreground mb-1.5 block tracking-wide uppercase">Project Timeline</label>
                <select value={form.timeline} onChange={e => set("timeline", e.target.value)} className={selectBase}>
                  <option value="">Select...</option>
                  {TIMELINE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
                <ChevronDown className="absolute right-3 bottom-3.5 w-4 h-4 text-muted-foreground/60 pointer-events-none" />
              </div>
              <div className="relative">
                <label className="text-[12px] font-medium text-muted-foreground mb-1.5 block tracking-wide uppercase">Budget Range</label>
                <select value={form.budget} onChange={e => set("budget", e.target.value)} className={selectBase}>
                  <option value="">Select...</option>
                  {BUDGET_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
                <ChevronDown className="absolute right-3 bottom-3.5 w-4 h-4 text-muted-foreground/60 pointer-events-none" />
              </div>
            </div>

            {/* Row 5: Services */}
            <div>
              <label className="text-[12px] font-medium text-muted-foreground mb-2 block tracking-wide uppercase">Services Needed</label>
              <div className="flex flex-wrap gap-2">
                {SERVICE_OPTIONS.map(s => {
                  const active = form.services.includes(s);
                  return (
                    <button key={s} type="button" onClick={() => toggleService(s)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] border transition-all duration-200 ${
                        active
                          ? "bg-primary/15 border-primary text-primary"
                          : "bg-background/40 border-border/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
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
              <label className="text-[12px] font-medium text-muted-foreground mb-1.5 block tracking-wide uppercase">
                Message <span className="normal-case tracking-normal text-muted-foreground/50">(optional)</span>
              </label>
              <textarea rows={2} value={form.message} onChange={e => set("message", e.target.value)}
                className={`${inputBase} resize-none`} placeholder="Any additional details..." />
            </div>

            {/* CTA */}
            <button type="submit" disabled={submitting}
              className="w-full py-4.5 mt-2 text-[15px] font-semibold bg-primary text-primary-foreground rounded-xl hover:bg-primary/85 active:scale-[0.98] transition-all duration-200 tracking-wide disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{ paddingTop: '18px', paddingBottom: '18px' }}>
              {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
              {submitting ? "Sending..." : "Get My Quote"}
            </button>

            <p className="text-[11px] text-muted-foreground/35 text-center tracking-wide mt-1">
              Flexible payment options available — ACH, Wire and Credit Card
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
