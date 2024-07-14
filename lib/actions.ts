"use server";
import type { FormState } from "@/lib/definitions";

export async function submitForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {


  return {
    message: "success",
    errors: {},
  };
}
