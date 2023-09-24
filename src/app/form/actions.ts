import { redirect } from 'next/navigation'

export default async function createPersonalData(formData: FormData) {
    console.log(formData.get("email"));
    redirect("/form/professionalExperience");
}
