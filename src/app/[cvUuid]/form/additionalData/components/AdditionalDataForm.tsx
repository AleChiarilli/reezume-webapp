"use client";
import * as Form from "@radix-ui/react-form";
import { getPersonalData } from "../../actions";

export type PersonalData = Awaited<ReturnType<typeof getPersonalData>>;

export default function AdditionalDataForm({ data }: { data: PersonalData }) {
  return (
    <>
      <Form.Root>
        <Form.Field name="hobbies" className="pt-6 pb-5">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Hobbies
          </Form.Label>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-transparent shadow-white inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white"
              type="text"
              required
              placeholder="Reading, sports, movies..."
              defaultValue={data?.hobbies ?? ""}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="short-presentation" className="pb-5">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Short presentation
          </Form.Label>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-transparent shadow-white inline-flex h-[90px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white"
              type="text"
              required
              placeholder="What moves you on?"
              defaultValue={data?.summary ?? ""}
            />
          </Form.Control>
        </Form.Field>
        <div className="w-full flex justify-end">
          <Form.Submit asChild>
            <button className="box-border bg-violet-500 text-white shadow-blackA7 hover:bg-violet-400 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
              Done
            </button>
          </Form.Submit>
        </div>
      </Form.Root>
    </>
  );
}
