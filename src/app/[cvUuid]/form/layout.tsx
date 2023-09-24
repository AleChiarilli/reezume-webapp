import React from "react";
import "./styles.css";
import Stepper from "./components/StepElement";

export default function CreateCVForm({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { cvUuid: string };
}) {
  return (
    <section className="flex flex-col h-screen w-full items-center overflow-scroll gradient-bg">
      <Stepper cvUuid={params.cvUuid} />
      <div className="flex flex-col mb-12">{children}</div>
    </section>
  );
}
