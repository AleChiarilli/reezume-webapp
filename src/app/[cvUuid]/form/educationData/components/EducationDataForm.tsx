"use client";
import * as Form from "@radix-ui/react-form";
import { getEducationData } from "../../actions";

export type EducationData = Awaited<ReturnType<typeof getEducationData>>;

export default function EducationDataForm({
  educationData,
  cvUuid,
}: {
  educationData: EducationData;
  cvUuid: string;
}) {
  return (
    <>
      <Form.Root>
        <Form.Field name="title" className="pt-6 pb-5">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Title
          </Form.Label>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-transparent shadow-white inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white"
              type="text"
              required
              placeholder="Degree, bachelor, certificates... "
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="institution" className="pb-5">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Institution
          </Form.Label>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-transparent shadow-white inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white"
              type="text"
              required
              placeholder="University of Florida"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="start-date" className="pb-2">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Start Date
          </Form.Label>
          <Form.Control asChild>
            <input
              className="box-border bg-transparent shadow-white inline-flex w-full h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white"
              type="date"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="end-date" className="pb-5">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            End Date
          </Form.Label>
          <Form.Control asChild>
            <input
              className="box-border bg-transparent shadow-white inline-flex w-full h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white"
              type="date"
              required
            />
          </Form.Control>
        </Form.Field>
        {/* éste button no está dentro del form.submit */}
        <div className="flex justify-between">
          <button className="box-border bg-gray-400 text-white shadow-blackA7 hover:bg-gray-300 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
            Add another
          </button>
          <Form.Submit asChild>
            <button className="box-border bg-violet-500 text-white shadow-blackA7 hover:bg-violet-400 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
              Next
            </button>
          </Form.Submit>
        </div>
      </Form.Root>
    </>
  );
}
