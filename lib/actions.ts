"use server";
import type { FormState } from "@/lib/definitions";

export async function submitForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const total = Number(formData.get("total"));

  return {
    message: "success",
    errors: {},
    data: String(total),
  };
}
