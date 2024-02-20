"use client";

import { PassrecProvider } from "@/providers/RecoverPass/recoverPass";
import { PropsWithChildren } from "react";

const ForgetPasswordLayout = ({ children }: PropsWithChildren) => {
  return <PassrecProvider>{children}</PassrecProvider>;
};

export default ForgetPasswordLayout;
