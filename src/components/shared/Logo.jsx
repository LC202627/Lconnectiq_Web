import React from "react";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

const LOGO_URL =
  "https://media.base44.com/images/public/6a9705851490e4fe54db65e8/2db942727_LCQ-BRA-015LConnectiQlogo3840w4KtransparentR00071026.png";

export default function Logo({ className = "", inverted = false }) {
  return (
    <Image
      src={LOGO_URL}
      alt="LConnectiQ — Leadership. Intelligence. Connection."
      fittingType="fit"
      className={cn("block", inverted && "invert", className)}
    />
  );
}