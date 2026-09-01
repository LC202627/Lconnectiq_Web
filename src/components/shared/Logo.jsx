import React from "react";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

const LOGO_URL =
  "https://media.base44.com/images/public/6a9705851490e4fe54db65e8/ef37d4487_LCQ-BRA-012LConnectiQlogo2400wtransparentR00071026.png";

export default function Logo({ className = "" }) {
  return (
    <Image
      src={LOGO_URL}
      alt="LConnectiQ — Leadership. Intelligence. Connection."
      fittingType="fit"
      className={cn("block bg-black rounded-md", className)}
    />
  );
}