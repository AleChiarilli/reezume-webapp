"use server";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

export async function createPersonalData(formData: FormData, cvUuid: string) {
  const schema = z.object({
    name: z.string(),
    cvUuid: z.string(),
    profession: z.string(),
    location: z.string(),
    email: z.string(),
    phoneNumber: z.string(),
    summary: z.string(),
  });

  const prisma = new PrismaClient();

  const parsedForm = schema.parse({
    name: formData.get("name"),
    cvUuid,
    profession: formData.get("profession"),
    location: formData.get("location"),
    email: formData.get("email"),
    phoneNumber: formData.get("phone-number"),
    summary: formData.get("summary"),
  });

  await prisma.personalInformation.upsert({
    where: {
      cvUuid,
    },
    update: {
      ...parsedForm,
    },
    create: {
      ...parsedForm,
      experiences: {
        createMany: {
          data: [
            {
              title: "",
              company: "",
              startDate: new Date(),
            },
          ],
        },
      },
    },
  });

  redirect(`form/professionalExperience`);
}

export async function getPersonalData(cvUuid: string) {
  const prisma = new PrismaClient();
  return prisma.personalInformation.findUnique({ where: { cvUuid } });
}

export async function getProfessionalExperiences(cvUuid: string) {
  const prisma = new PrismaClient();
  return prisma.professionalExperience.findMany({
    where: {
      personalInfo: {
        cvUuid,
      },
    },
  });
}
