import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Send, Check } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const SERVICES = [
  "Construction Document Management",
  "Remote Project Engineering",
  "Procore & Construction Technology",
  "BIM, CAD & Drafting",
  "Project Controls & Reporting",
  "Workflow & Process Improvement",
  "Not sure, need a consultation",
];

const inputCls =
  "w-full bg-white/[0.10] border border-white/[0.24] rounded-sm px-3.5 py-3 text-white placeholder:text-white/70 text-[15px] transition-colors duration-200 focus:outline-none focus:border-[#9a8200]";

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
        description: "Please email info@lconnectiq.com directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className="bg-white/[0.05] border border-white/[0.16] rounded-sm p-8 md:p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[#9a8200] text-navy flex items-center justify-center mx-auto">
          <Check size={28} />
        </div>
        <h3 className="text-white font-bold text-2xl mt-5">Inquiry sent</h3>
        <p className="text-white text-[15px] mt-2.5 max-w-[42ch] mx-auto leading-relaxed">
          Thanks. We&apos;ll respond within one business day with a clear scope, defined deliverables,
          and no ambiguity about what we do and don&apos;t cover.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-gold-soft hover:text-white transition-colors"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/[0.05] border border-white/[0.16] rounded-sm p-8 md:p-9">
      <div className="grid grid-cols-2 gap-3.5 mb-4">
        <div>
          <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-white/90 mb-1.5">
            First name
          </label>
          <input required value={form.first_name} onChange={update("first_name")} className={inputCls} />
        </div>
        <div>
          <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-white/90 mb-1.5">
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
        <Select value={form.service} onValueChange={(v) => setForm((f) => ({ ...f, service: v }))}>
          <SelectTrigger className={`${inputCls} h-auto py-3 data-[placeholder]:text-white/70`}>
            <SelectValue placeholder="Select a service…" />
          </SelectTrigger>
          <SelectContent className="max-h-72">
            {SERVICES.map((s) => (
              <SelectItem key={s} value={s} className="text-navy">
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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

      <p className="text-[12px] text-white/80 mb-5 leading-relaxed">
        We use your details only to respond to this inquiry. See our{" "}
        <a href="/privacy" className="text-gold-soft hover:text-white transition-colors underline">
          privacy policy
        </a>
        .
      </p>

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2.5 font-semibold text-[15px] rounded-sm bg-[#9a8200] text-navy px-7 py-3.5 transition-all duration-300 hover:bg-white disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send project inquiry <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}