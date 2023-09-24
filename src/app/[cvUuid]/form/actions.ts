"use server";
import { RedirectType, redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { ProfessionalExperiences } from "./professionalExperience/components/ProfessionalExperienceForm";
import { EducationData } from "./educationData/components/EducationDataForm";

const prisma = new PrismaClient();

export async function getPersonalData(cvUuid: string) {
  return prisma.personalInformation.findUnique({ where: { cvUuid } });
}

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
        create: {
          position: "",
          company: "",
          startDate: new Date(),
        },
      },
      education: {
        create: {
          degree: "",
          institution: "",
          graduationDate: new Date(),
        },
      },
    },
  });

  redirect(`form/professionalExperience`);
}

export async function getProfessionalExperiences(cvUuid: string) {
  return prisma.professionalExperience.findMany({
    where: {
      personalInfo: {
        cvUuid,
      },
    },
  });
}

export async function createProfessionalExperience(cvUuid: string) {
  return prisma.personalInformation.update({
    where: { cvUuid },
    data: {
      experiences: {
        create: {
          position: "",
          company: "",
          startDate: new Date(),
        },
      },
    },
  });
}

export async function bulkUpdateExperiences(
  formData: FormData,
  professionalExperiences: ProfessionalExperiences
) {
  const schema = z.object({
    position: z.string(),
    company: z.string(),
    startDate: z.string(),
    endDate: z.optional(z.string()),
  });

  const updatedExperiences = professionalExperiences.map((pe) => {
    const parsedData = schema.parse({
      position: formData.get(`${pe.id}-position`),
      company: formData.get(`${pe.id}-company`),
      startDate: formData.get(`${pe.id}-start-date`),
      endDate: formData.get(`${pe.id}-end-date`),
    });

    return {
      position: parsedData.position,
      company: parsedData.company,
      startDate: new Date(parsedData.startDate),
      endDate: new Date(parsedData.endDate ?? ""),
      id: pe.id,
    };
  });

  const updates = updatedExperiences.map((pe) =>
    prisma.professionalExperience.update({ where: { id: pe.id }, data: pe })
  );

  await Promise.allSettled(updates);
  redirect(`educationData`);
}

export async function getEducationData(cvUuid: string) {
  return prisma.education.findMany({
    where: {
      personalInfo: {
        cvUuid,
      },
    },
  });
}

export async function createEducationData(cvUuid: string) {
  return prisma.personalInformation.update({
    where: { cvUuid },
    data: {
      education: {
        create: {
          degree: "",
          institution: "",
          graduationDate: new Date(),
        },
      },
    },
  });
}

export async function bulkUpdateEducation(
  formData: FormData,
  educationData: EducationData
) {
  const schema = z.object({
    degree: z.string(),
    institution: z.string(),
    graduationDate: z.string(),
  });

  const updatedEducation = educationData.map((pe) => {
    const parsedData = schema.parse({
      degree: formData.get(`${pe.id}-degree`),
      institution: formData.get(`${pe.id}-institution`),
      graduationDate: formData.get(`${pe.id}-graduation-date`),
    });

    return {
      degree: parsedData.degree,
      institution: parsedData.institution,
      graduationDate: new Date(parsedData.graduationDate),
      id: pe.id,
    };
  });

  const updates = updatedEducation.map((pe) =>
    prisma.education.update({ where: { id: pe.id }, data: pe })
  );

  await Promise.allSettled(updates);
  redirect(`additionalData`);
}

export async function updateAdditionalData(formData: FormData, cvUuid: string) {
  const schema = z.object({
    hobbies: z.string(),
    shortPresentation: z.string(),
  });

  const parsedData = schema.parse({
    hobbies: formData.get("hobbies"),
    shortPresentation: formData.get("short-presentation"),
  });

  await prisma.personalInformation.update({
    where: { cvUuid },
    data: parsedData,
  });

  redirect(`/${cvUuid}/resume`);
}
