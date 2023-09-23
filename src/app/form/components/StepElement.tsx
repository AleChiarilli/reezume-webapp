"use client";
import React from "react";
import { usePathname } from "next/navigation";

function StepElement({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive: boolean;
}) {
  const styles =
    "w-12 h-12 py-3 bg-rose-400 rounded-[999px] border border-zinc-200 justify-center items-center inline-flex";

  return (
    <div className={`${styles} ${isActive ? "" : "bg-opacity-60"}`}>
      {children}
    </div>
  );
}

export default function Stepper() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between pt-36 w-72 text-white font-bold drop-shadow-lg">
      <StepElement isActive={pathname === "/form"}>1</StepElement>
      <StepElement isActive={pathname === "/form/professionalExperience"}>
        2
      </StepElement>
      <StepElement isActive={pathname === "/form/educationData"}>3</StepElement>
      <StepElement isActive={pathname === "/form/additionalData"}>
        4
      </StepElement>
    </div>
  );
}
