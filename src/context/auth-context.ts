import { useRouter } from "next/router";
import React, { ReactNode } from "react";

interface PrivateRouteProps {
  children?: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const router = useRouter();

  //   if (router.pathname === "/") {
  //     router.push("/dashboard");
  //   }
  return children;
};
