import { useRouter } from "next/navigation";
import EducationDataForm from "./components/EducationDataForm";

export default function AdditionalData() {
  return (
    <div className="flex flex-col justify-center align-middle">
      <div className="w-56 mt-5 text-white text-base font-normal leading-relaxed">
        What about your academics
      </div>
      <div className="w-60 text-white text-xl font-bold">Formation</div>
      <EducationDataForm />
    </div>
  );
}
