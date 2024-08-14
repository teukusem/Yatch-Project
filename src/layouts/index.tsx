import { Head, NavigationBar } from "@/components";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children, ...props }: LayoutProps) {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
