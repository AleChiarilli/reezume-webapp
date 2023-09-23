"use client";
import * as Form from "@radix-ui/react-form";

export default function professionalExperience() {
  return (
    <div className="flex flex-col justify-center align-middle">
      <div className="w-56 mt-5 text-white text-base font-normal leading-relaxed">
        Tell us about your work!
      </div>
      <div className="w-60 text-white text-xl font-bold">
        Professional experiences
      </div>
      <Form.Root>
        <Form.Field name="position" className="pt-6 pb-5">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Position
          </Form.Label>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-transparent shadow-white inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white"
              type="text"
              required
              placeholder="Project Manager"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="Company" className="pb-5">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Company
          </Form.Label>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-transparent shadow-white inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white"
              type="text"
              required
              placeholder="Hewlett-Packard"
            />
          </Form.Control>
        </Form.Field>
        <div className="flex justify-between">
          {" "}
          <Form.Field name="start-date" className="pb-2">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
              Start Date
            </Form.Label>
            <Form.Control asChild>
              <input
                className="box-border bg-transparent shadow-white inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white"
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
                className="box-border bg-transparent shadow-white inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white"
                type="date"
                required
              />
            </Form.Control>
          </Form.Field>
        </div>

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
    </div>
  );
}
