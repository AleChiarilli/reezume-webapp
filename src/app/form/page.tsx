import { getPersonalData } from "./actions";
import ClientPersonalDataForm from "./components/ClientPersonalDataForm";

export default async function GetStartedStep() {
  const personalData = await getPersonalData();

  return (
    <div className="flex flex-col justify-center align-middle">
      <div className="w-56 mt-5 text-white text-base font-normal leading-relaxed">
        Lets start with basics...
      </div>
      <div className="w-60 text-white text-xl font-bold">
        Personal information
      </div>
      <ClientPersonalDataForm personalData={personalData} />
    </div>
  );
}
