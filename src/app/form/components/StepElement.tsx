"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function StepElement({
  children,
  isActive,
  onClick,
}: {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) {
  const styles =
    "hover:cursor-pointer w-12 h-12 py-3 bg-rose-400 rounded-[999px] border border-zinc-200 justify-center items-center inline-flex";

  return (
    <div
      onClick={onClick}
      className={`${styles} ${isActive ? "" : "bg-opacity-60"}`}
    >
      {children}
    </div>
  );
}

export default function Stepper() {
  const router = useRouter();
  const pathname = usePathname();

  const goToStepOne = () => router.push("/form");
  const goToStepTwo = () => router.push("/form/professionalExperience");
  const goToStepThree = () => router.push("/form/educationData");
  const goToStepFour = () => router.push("/form/additionalData");

  return (
    <div className="flex justify-between pt-36 w-72 text-white font-bold drop-shadow-lg">
      <StepElement onClick={goToStepOne} isActive={pathname === "/form"}>
        1
      </StepElement>
      <StepElement
        onClick={goToStepTwo}
        isActive={pathname === "/form/professionalExperience"}
      >
        2
      </StepElement>
      <StepElement
        onClick={goToStepThree}
        isActive={pathname === "/form/educationData"}
      >
        3
      </StepElement>
      <StepElement
        onClick={goToStepFour}
        isActive={pathname === "/form/additionalData"}
      >
        4
      </StepElement>
    </div>
  );
}
