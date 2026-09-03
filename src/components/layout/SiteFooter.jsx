import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import Logo from "@/components/shared/Logo";

export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white/70 pt-14 pb-7">
      <div className="max-w-[1240px] mx-auto px-6 md:px-7">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-white/10">
          <div className="max-w-[42ch]">
            <Logo className="h-20 w-[300px] -ml-6" inverted />
            <p className="text-sm mt-5 text-white/55">
              Tallahassee, Florida
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-3 md:justify-end">
            <Link to="/about" className="text-sm hover:text-gold-soft transition-colors">About</Link>
            <Link to="/portfolio" className="text-sm hover:text-gold-soft transition-colors">Portfolio</Link>
            <Link to="/contact" className="text-sm hover:text-gold-soft transition-colors">Contact</Link>
            <Link to="/privacy" className="text-sm hover:text-gold-soft transition-colors">Privacy</Link>
            <Link to="/terms" className="text-sm hover:text-gold-soft transition-colors">Terms</Link>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
          <span className="text-xs">
            &copy; {new Date().getFullYear()} LConnectiQ, LLC
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