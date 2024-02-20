import React from "react";
import { AuthProvider } from "./AuthProviders/AuthProvider";
import { PassrecProvider } from "./RecoverPass/recoverPass";

type MainProviderProps = {
  children: React.ReactNode;
};

export const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <AuthProvider>
      <PassrecProvider>{children}</PassrecProvider>
    </AuthProvider>
  );
};
