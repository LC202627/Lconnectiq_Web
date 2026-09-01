import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import BottomTabBar from "@/components/layout/BottomTabBar";

export default function SiteLayout() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col pb-[calc(68px+env(safe-area-inset-bottom))] md:pb-0">
      <SiteHeader />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <SiteFooter />
      <BottomTabBar />
    </div>
  );
}