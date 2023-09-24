"use server";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

export async function createPersonalData(formData: FormData) {
  const schema = z.object({
    name: z.string(),
    profession: z.string(),
    location: z.string(),
    email: z.string(),
    phoneNumber: z.string(),
    summary: z.string(),
  });

  const prisma = new PrismaClient();

  const parsedForm = schema.parse({
    name: formData.get("name"),
    profession: formData.get("profession"),
    location: formData.get("location"),
    email: formData.get("email"),
    phoneNumber: formData.get("phone-number"),
    summary: formData.get("summary"),
  });

  await prisma.personalInformation.create({ data: parsedForm });

  redirect("/form/professionalExperience");
}

export async function getPersonalData() {
  const prisma = new PrismaClient();
  return prisma.personalInformation.findFirst();
}
