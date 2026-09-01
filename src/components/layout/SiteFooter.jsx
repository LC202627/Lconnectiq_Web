import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const SERVICES = [
  "Construction Document Management",
  "Remote Project Engineering",
  "Procore Administration",
  "BIM & CAD Support",
  "Digital Productivity Services",
  "Workflow Automation",
];

export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white/70 pt-16 md:pt-20 pb-7">
      <div className="max-w-[1240px] mx-auto px-6 md:px-7">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="text-2xl font-extrabold tracking-tight text-white">
              LConnecti<span className="text-gold-soft">Q</span>
            </div>
            <div className="text-xs font-semibold tracking-[0.14em] uppercase text-gold-soft mt-2.5">
              Leadership. Intelligence. Connection.
            </div>
            <p className="text-sm mt-4 max-w-[38ch]">
              Construction Support Services: document management, remote project engineering, Procore
              administration, BIM &amp; CAD support, digital productivity, and workflow automation.
              Tallahassee, Florida.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-white mb-4">What we do</h4>
            <div className="flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <Link key={s} to="/services" className="text-sm hover:text-gold-soft transition-colors">
                  {s}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-white mb-4">Company</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-sm hover:text-gold-soft transition-colors">About LConnectiQ</Link>
              <Link to="/portfolio" className="text-sm hover:text-gold-soft transition-colors">Portfolio</Link>
              <Link to="/contact" className="text-sm hover:text-gold-soft transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-white mb-4">Get in touch</h4>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:lc@lconnectiq.com" className="text-sm hover:text-gold-soft transition-colors">
                lc@lconnectiq.com
              </a>
              <Link to="/contact" className="text-sm hover:text-gold-soft transition-colors">Request a proposal</Link>
              <span className="text-sm">Tallahassee, Florida</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
          <span className="text-xs">
            &copy; {new Date().getFullYear()} LConnectiQ, LLC &middot;{" "}
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link> &middot;{" "}
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </span>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 border border-white/15 rounded-sm flex items-center justify-center hover:bg-gold-soft hover:border-gold-soft hover:text-navy transition-all duration-300"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:lc@lconnectiq.com"
              aria-label="Email"
              className="w-9 h-9 border border-white/15 rounded-sm flex items-center justify-center hover:bg-gold-soft hover:border-gold-soft hover:text-navy transition-all duration-300"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}