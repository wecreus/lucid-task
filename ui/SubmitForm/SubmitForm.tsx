"use client";
import { useFormState } from "react-dom";
import type { FormState } from "@/lib/definitions";
import { submitForm } from "@/lib/actions";
import styles from "./form.module.css";
import MultiSearchField from "@/ui/MultiSearchField/MultiSearchField";
import { useEffect } from "react";

const initialState: FormState = { message: "", errors: {} };

export default function SubmitForm() {
  const [state, formAction] = useFormState(submitForm, initialState);

  // useEffect(() => {
  //   if(state.message === "success") {
  //     alert("server received: " + String(state.data));
  //   }
  // }, [state]);
  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form}>
        <MultiSearchField />
        <div className={styles.controls}>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
