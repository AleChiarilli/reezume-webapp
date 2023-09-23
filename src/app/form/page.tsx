"use client";
import * as Form from "@radix-ui/react-form";

export default function GetStartedStep() {
  return (
    <div className="flex flex-col justify-center align-middle">
      <div className="w-56 mt-5 text-white text-base font-normal leading-relaxed">
        Let´s start with basics...
      </div>
      <div className="w-60 text-white text-xl font-bold">
        Personal information
      </div>
      <Form.Root>
        <Form.Field name="name" className="pt-6 pb-5">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Name
          </Form.Label>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-transparent shadow-white inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white"
              type="name"
              required
              placeholder="John Doe"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="profession">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Profession
          </Form.Label>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-transparent shadow-white inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white"
              type="profession"
              required
              placeholder="Web developer"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="name" className="py-5">
          <Form.Label className="text-[15px] font-medium leading-[35px]  text-white">
            About you
          </Form.Label>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-transparent shadow-white inline-flex h-[90px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white"
              type="name"
              required
              placeholder="Little bio"
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="box-border w-full bg-violet-500 text-white shadow-blackA7 hover:bg-violet-400 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
            Next
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
