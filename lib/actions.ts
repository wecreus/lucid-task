"use server";
import type { FormState } from "@/lib/definitions";


export async function submitForm(): Promise<FormState> {


  return {
    message: "success",
    errors: {}
  }
}