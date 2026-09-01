import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Send } from "lucide-react";

const SERVICES = [
  "Construction Document Management",
  "Remote Project Engineering",
  "Procore Administration",
  "BIM & CAD Support",
  "Digital Productivity Services",
  "Workflow Automation",
  "Not sure, need a consultation",
];

const inputCls =
  "w-full bg-white/[0.06] border border-white/[0.16] rounded-sm px-3.5 py-3 text-white placeholder:text-white/40 text-[15px] transition-colors duration-200 focus:outline-none focus:border-gold-soft";

export default function ContactForm() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    company: "",
    email: "",
    service: "",
    message: "",
  });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.first_name || !form.last_name || !form.email || !form.message) return;
    setSubmitting(true);
    try {
      await base44.entities.ContactInquiry.create(form);
      setSent(true);
      setForm({ first_name: "", last_name: "", company: "", email: "", service: "", message: "" });
      toast({ title: "Inquiry sent", description: "We'll respond within one business day." });
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please email lc@lconnectiq.com directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/[0.05] border border-white/[0.16] rounded-sm p-8 md:p-9">
      <div className="grid grid-cols-2 gap-3.5 mb-4">
        <div>
          <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-white/60 mb-1.5">
            First name
          </label>
          <input required value={form.first_name} onChange={update("first_name")} className={inputCls} />
        </div>
        <div>
          <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-white/60 mb-1.5">
            Last name
          </label>
          <input required value={form.last_name} onChange={update("last_name")} className={inputCls} />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-white/60 mb-1.5">
          Company / organization
        </label>
        <input value={form.company} onChange={update("company")} className={inputCls} />
      </div>

      <div className="mb-4">
        <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-white/60 mb-1.5">
          Email address
        </label>
        <input type="email" required value={form.email} onChange={update("email")} className={inputCls} />
      </div>

      <div className="mb-4">
        <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-white/60 mb-1.5">
          Service needed
        </label>
        <select value={form.service} onChange={update("service")} className={inputCls}>
          <option value="" className="text-black">Select a service&hellip;</option>
          {SERVICES.map((s) => (
            <option key={s} value={s} className="text-black">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-5">
        <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-white/60 mb-1.5">
          Project details
        </label>
        <textarea
          required
          value={form.message}
          onChange={update("message")}
          rows={4}
          className={`${inputCls} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2.5 font-semibold text-[15px] rounded-sm bg-gold-soft text-navy px-7 py-3.5 transition-all duration-300 hover:bg-white disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending&hellip;
          </>
        ) : sent ? (
          <>Inquiry sent &#10003;</>
        ) : (
          <>
            Send project inquiry <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}