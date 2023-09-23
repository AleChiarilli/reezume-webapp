import React from "react";
import "./styles.css";
import Stepper from "./components/StepElement";

export default function CreateCVForm({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col h-screen w-full items-center gradient-bg">
      <Stepper />
      <div className="flex flex-col">{children}</div>
    </section>
  );
}
