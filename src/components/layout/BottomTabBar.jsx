import React from "react";
import { NavLink } from "react-router-dom";
import { Home, LayoutGrid, FolderOpen, Mail } from "lucide-react";

const TABS = [
  { to: "/", label: "Home", icon: Home },
  { to: "/services", label: "Services", icon: LayoutGrid },
  { to: "/portfolio", label: "Portfolio", icon: FolderOpen },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function BottomTabBar() {
  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-navy/10 flex select-none"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {TABS.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-center gap-1 py-2.5 transition-colors duration-200 ${
              isActive ? "text-gold-deep" : "text-ink-soft"
            }`
          }
        >
          <Icon size={20} />
          <span className="text-[10px] font-semibold tracking-wide">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}