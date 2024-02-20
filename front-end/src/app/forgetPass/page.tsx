"use client";

import { ChangePassword } from "@/components/RePass/ChangePassword";
import { ConfirmOtp } from "@/components/RePass/ConfirmOtp";
import { SendOtp } from "@/components/RePass/SendOtp";
import { usePass } from "@/providers/RecoverPass/recoverPass";

export default function Page() {
  const { recoveryStep, setRecoveryStep } = usePass();

  console.log(recoveryStep);

  if (recoveryStep === 0) {
    return <SendOtp />;
  }

  if (recoveryStep === 1) {
    return <ConfirmOtp />;
  }

  if (recoveryStep === 2) {
    return <ChangePassword />;
  }

  return null;
}
