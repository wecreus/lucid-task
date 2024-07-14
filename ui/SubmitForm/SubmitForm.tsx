"use client";
import { useFormState } from "react-dom";
import type { FormState } from "@/lib/definitions";
import { submitForm } from "@/lib/actions";
import styles from "./form.module.css";
import MultiSearchField from "@/ui/MultiSearchField/MultiSearchField";

const initialState: FormState = { message: "", errors: {} };

export default function SubmitForm() {
  const [state, formAction] = useFormState(submitForm, initialState);

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
