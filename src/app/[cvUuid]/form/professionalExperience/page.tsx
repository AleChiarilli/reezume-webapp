import { getProfessionalExperiences } from "../actions";
import ProfessionalExperienceForm from "./components/ProfessionalExperienceForm";

export default async function ProfessionalExperience({
  params,
}: {
  params: { cvUuid: string };
}) {
  const professionalExperiences = await getProfessionalExperiences(
    params.cvUuid
  );

  return (
    <div className="flex flex-col justify-center align-middle">
      <div className="w-56 mt-5 text-white text-base font-normal leading-relaxed">
        Tell us about your work!
      </div>
      <div className="w-60 text-white text-xl font-bold">
        Professional experiences
      </div>
      <ProfessionalExperienceForm
        professionalExperiences={professionalExperiences}
        cvUuid={params.cvUuid}
      />
    </div>
  );
}
