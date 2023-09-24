"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

function StepElement({
  children,
  isActive,
  href,
}: {
  children: React.ReactNode;
  isActive: boolean;
  href: string;
}) {
  const styles =
    "hover:cursor-pointer w-12 h-12 py-3 bg-rose-400 rounded-[999px] border border-zinc-200 justify-center items-center inline-flex";

  return (
    <Link
      href={href}
      className={`${styles} ${isActive ? "" : "bg-opacity-60"}`}
    >
      {children}
    </Link>
  );
}

export default function Stepper({ cvUuid }: { cvUuid: string }) {
  const pathname = usePathname();
  const basePath = `/${cvUuid}/form`;

  return (
    <div className="flex justify-between pt-36 w-72 text-white font-bold drop-shadow-lg">
      <StepElement href={basePath} isActive={pathname === basePath}>
        1
      </StepElement>
      <StepElement
        href={`${basePath}/professionalExperience`}
        isActive={pathname.includes(`${basePath}/professionalExperience`)}
      >
        2
      </StepElement>
      <StepElement
        href={`${basePath}/educationData`}
        isActive={pathname.includes(`${basePath}/educationData`)}
      >
        3
      </StepElement>
      <StepElement
        href={`${basePath}/additionalData`}
        isActive={pathname.includes(`${basePath}/additionalData`)}
      >
        4
      </StepElement>
    </div>
  );
}
