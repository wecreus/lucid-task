"use client";
import { useFormState } from "react-dom";
import type { FormState } from "@/lib/definitions";
import { submitForm } from "@/lib/actions";
import styles from "./form.module.css";

const initialState: FormState = { message: "", errors: {} };

export default function SubmitForm() {
  const [state, formAction] = useFormState(submitForm, initialState);

  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form}>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}
