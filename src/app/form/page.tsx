"use client";
import * as Form from "@radix-ui/react-form";
import { useRouter } from "next/navigation";

export default function GetStartedStep() {
  const router = useRouter();
  const navigateToProfessionalExperience = () =>
    router.push("form/professionalExperience");

  return (
    <div className="flex flex-col justify-center align-middle">
      <div className="w-56 mt-5 text-white text-base font-normal leading-relaxed">
        Lets start with basics...
      </div>
      <div className="w-60 text-white text-xl font-bold">
        Personal information
      </div>
      <Form.Root>
        <Form.Field name="name" className="pt-6 2">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Name
          </Form.Label>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-transparent shadow-white inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white"
              type="text"
              required
              placeholder="John Doe"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="profession" className="2">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Profession
          </Form.Label>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-transparent shadow-white inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white"
              type="text"
              required
              placeholder="Web developer"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="location" className="2">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Location
          </Form.Label>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-transparent shadow-white inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white"
              type="text"
              required
              placeholder="Madrid"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="email" className="2">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Email
          </Form.Label>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-transparent shadow-white inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white"
              type="email"
              required
              placeholder="example@gmail.es"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="phone-number" className="2">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Phone number
          </Form.Label>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-transparent shadow-white inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white"
              type="number"
              required
              placeholder="1-234-56789"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="about" className="py-3">
          <Form.Label className="text-[15px] font-medium leading-[35px]  text-white">
            About you
          </Form.Label>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-transparent shadow-white inline-flex h-[60px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white"
              type="text"
              required
              placeholder="Little bio"
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button
            onClick={navigateToProfessionalExperience}
            className="box-border w-full bg-violet-500 text-white shadow-blackA7 hover:bg-violet-400 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
          >
            Next
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
