import React from "react";
import { AuthProvider } from "./AuthProviders/AuthProvider";
import { BannerProvider } from "./FoodModalProvider";
import { DrawProvider } from "./DrawBar/DrawBar";
import { PassrecProvider } from "./RecoverPass/recoverPass";

type MainProviderProps = {
  children: React.ReactNode;
};

export const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <BannerProvider>
      <AuthProvider>
        <DrawProvider>{children} </DrawProvider>
      </AuthProvider>
    </BannerProvider>
  );
};
