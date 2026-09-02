import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "@/components/shared/Logo";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
];

export default function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const isHome = location.pathname === "/";
  const showSolid = solid || !isHome;

  return (
    <header
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolid ? "bg-white shadow-[0_1px_0_rgba(35,37,56,0.08),0_6px_24px_rgba(35,37,56,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-7 h-[76px] flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <Logo
            className="h-10 w-[156px] -ml-3 transition-opacity duration-300 group-hover:opacity-90"
            inverted={!showSolid}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative text-sm font-medium py-1 transition-colors duration-300 group ${
                showSolid ? "text-navy hover:text-gold-deep" : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
              <span
                className={`absolute left-0 -bottom-0.5 h-[2px] w-0 group-hover:w-full transition-all duration-300 ${
                  showSolid ? "bg-gold-deep" : "bg-gold-soft"
                }`}
              />
            </Link>
          ))}
          <Link
            to="/contact"
            className={`inline-flex items-center gap-2 text-sm font-semibold rounded-sm border px-5 py-2.5 transition-all duration-300 ${
              showSolid
                ? "border-navy/15 text-navy hover:bg-navy hover:text-white hover:border-navy"
                : "border-white/40 text-white hover:bg-gold-soft hover:border-gold-soft hover:text-navy"
            }`}
          >
            Start a project
          </Link>
        </nav>

        <button
          className="md:hidden p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <X className={showSolid ? "text-navy" : "text-white"} size={24} />
          ) : (
            <Menu className={showSolid ? "text-navy" : "text-white"} size={24} />
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-5 flex flex-col gap-1">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-navy text-base font-medium py-3 border-b border-navy/10"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-semibold rounded-sm bg-navy text-white px-5 py-3"
          >
            Start a project <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </header>
  );
}