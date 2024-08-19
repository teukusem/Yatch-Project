import React, { ReactNode } from "react";

interface LayoutNoNavbarProps {
  children: ReactNode;
}

function LayoutNoNavbar({ children, ...props }: LayoutNoNavbarProps) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

export default LayoutNoNavbar;
