import { getPersonalData } from "../actions";
import AdditionalDataForm from "./components/AdditionalDataForm";

export default async function additionalData({
  params,
}: {
  params: { cvUuid: string };
}) {
  const data = await getPersonalData(params.cvUuid);

  return (
    <div className="flex flex-col justify-center align-middle">
      <div className="w-56 mt-5 text-white text-base font-normal leading-relaxed">
        Tell about the person behind the screen...
      </div>
      <AdditionalDataForm data={data} cvUuid={params.cvUuid} />
    </div>
  );
}
