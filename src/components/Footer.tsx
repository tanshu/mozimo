// components/Footer.js
"use client";

import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";

export default function Footer() {
  return (
    <>
      <div className="md:hidden">
        <MobileFooter />
      </div>
      <div className="hidden md:block">
        <DesktopFooter />
      </div>
    </>
  );
}
