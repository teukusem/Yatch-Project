import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";

interface PrivateRouteProps {
  children?: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const router = useRouter();

  // useEffect(() => {
  //   if (router.pathname === "/") {
  //     router.push("/dashboard");
  //   }
  // }, [router]);

  return children;
};
