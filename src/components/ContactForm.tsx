import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const PROJECT_TYPE_OPTIONS = [
  "Exterior Rendering",
  "Interior Rendering",
  "Animation",
  "Virtual Tour / 360",
  "Interactive Tool",
  "Multiple Services",
];
const SCOPE_OPTIONS = [
  "1–3 images",
  "4–10 images",
  "10+ images",
  "Full community / development",
];
const BUDGET_OPTIONS = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $7,000",
  "$7,000+",
];

const inputBase =
  "w-full px-4 py-3 bg-background/60 border border-border/60 rounded-lg text-[14px] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200";
const selectBase =
  "w-full px-4 py-3 bg-background/60 border border-border/60 rounded-lg text-[14px] text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200 appearance-none cursor-pointer";

const isValidEmail = (email: string) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!re.test(email)) return false;
  const disposable = ["mailinator.com", "guerrillamail.com", "tempmail.com", "throwaway.email", "yopmail.com"];
  const domain = email.split("@")[1]?.toLowerCase();
  return !disposable.includes(domain);
};

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    scope: "",
    budget: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!isValidEmail(form.email)) e.email = "Enter a valid email";
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
      projectType: form.projectType,
      services: form.scope,
      budget: form.budget,
      message: form.message,
    };

    const id = crypto.randomUUID();

    try {
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-notification",
          recipientEmail: "avsvisualization@gmail.com",
          idempotencyKey: `contact-notify-${id}`,
          templateData,
        },
      });

      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-confirmation",
          recipientEmail: form.email,
          idempotencyKey: `contact-confirm-${id}`,
          templateData: { name: form.name },
        },
      });

      toast.success("Your inquiry has been sent! Check your email for confirmation.");
      setForm({ name: "", email: "", company: "", projectType: "", scope: "", budget: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const set = (key: string, val: string) => {
    setForm((f) => ({ ...f, [key]: val }));
    if (errors[key]) setErrors((e) => { const n = { ...e }; delete n[key]; return n; });
  };

  const SelectField = ({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) => (
    <div className="relative">
      <label className="text-[12px] font-medium text-muted-foreground mb-1.5 block tracking-wide uppercase">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className={selectBase}>
        <option value="">Select...</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 bottom-3.5 w-4 h-4 text-muted-foreground/60 pointer-events-none" />
    </div>
  );

  return (
    <section id="contact-form" className="py-20 md:py-28 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-transparent to-card/30" />

      <div className="relative z-10 w-full max-w-[850px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="label-mono text-primary mb-4 text-lg">Get in Touch</div>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-semibold text-foreground leading-[1.1] tracking-[-0.03em]">
            Start Your Project
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] max-w-lg mx-auto text-secondary">
            Tell us what you need and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.08, duration: 0.55 }}
          className="rounded-2xl p-7 md:p-10 bg-card border border-border/40"
          style={{ boxShadow: "0 4px 32px -8px rgba(0,0,0,0.35)" }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Honeypot */}
            <input
              type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)}
              className="absolute opacity-0 pointer-events-none h-0 w-0" tabIndex={-1} autoComplete="off" aria-hidden="true"
            />

            {/* Section 1 – Contact */}
            <div className="flex flex-col gap-4">
              <p className="text-[11px] text-muted-foreground/50 tracking-widest uppercase">Contact</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] font-medium text-muted-foreground mb-1.5 block tracking-wide uppercase">Full Name *</label>
                  <input type="text" required value={form.name} onChange={(e) => set("name", e.target.value)} className={inputBase} placeholder="Your full name" />
                  {errors.name && <p className="text-destructive text-[11px] mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-[12px] font-medium text-muted-foreground mb-1.5 block tracking-wide uppercase">Email *</label>
                  <input type="email" required value={form.email} onChange={(e) => set("email", e.target.value)} className={inputBase} placeholder="you@company.com" />
                  {errors.email && <p className="text-destructive text-[11px] mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="text-[12px] font-medium text-muted-foreground mb-1.5 block tracking-wide uppercase">Company</label>
                <input type="text" value={form.company} onChange={(e) => set("company", e.target.value)} className={inputBase} placeholder="Company name (optional)" />
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border/40" />

            {/* Section 2 – Project Details */}
            <div className="flex flex-col gap-4">
              <p className="text-[11px] text-muted-foreground/50 tracking-widest uppercase">Project Details</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SelectField label="Project Type" value={form.projectType} onChange={(v) => set("projectType", v)} options={PROJECT_TYPE_OPTIONS} />
                <SelectField label="Project Scope" value={form.scope} onChange={(v) => set("scope", v)} options={SCOPE_OPTIONS} />
                <SelectField label="Budget Range" value={form.budget} onChange={(v) => set("budget", v)} options={BUDGET_OPTIONS} />
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border/40" />

            {/* Section 3 – Message */}
            <div>
              <label className="text-[12px] font-medium text-muted-foreground mb-1.5 block tracking-wide uppercase">Message</label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                className={`${inputBase} resize-none`}
                placeholder="Tell us about your project..."
              />
            </div>

            {/* CTA */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-1 text-[15px] font-semibold bg-primary text-primary-foreground rounded-xl hover:bg-primary/85 active:scale-[0.98] transition-all duration-200 tracking-wide disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{ paddingTop: "18px", paddingBottom: "18px" }}
            >
              {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
              {submitting ? "Sending..." : "Start My Project"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
