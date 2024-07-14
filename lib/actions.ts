"use server";
import type { FormState } from "@/lib/definitions";


export async function submitForm(prevState: FormState, formState: FormData): Promise<FormState> {
  console.log(formState);

  return {
    message: "success",
    errors: {},
  }
}