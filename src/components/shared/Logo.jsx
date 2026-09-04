import React from "react";
import { cn } from "@/lib/utils";

// Full-resolution 4K transparent PNG — served as-is (no downscaling transform)
// so the mark stays razor-sharp at every size, including the scaled-up splash.
const LOGO_URL =
  "https://media.base44.com/images/public/6a9705851490e4fe54db65e8/2db942727_LCQ-BRA-015LConnectiQlogo3840w4KtransparentR00071026.png";

export default function Logo({ className = "", inverted = false }) {
  return (
    <img
      src={LOGO_URL}
      alt="LConnectiQ"
      loading="eager"
      decoding="async"
      draggable={false}
      className={cn("block object-contain", inverted && "invert", className)}
    />
  );
}
