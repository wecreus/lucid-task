"use client";
import { useFormState } from "react-dom";
import type { FormState } from "@/lib/definitions";
import { submitForm } from "@/lib/actions";
import styles from "./form.module.css";
import MultiSearchField from "@/ui/MultiSearchField/MultiSearchField";
import { useEffect } from "react";
import useFormulaStore from "@/lib/store"; 

const initialState: FormState = { message: "", errors: {} };

export default function SubmitForm() {
  const [state, formAction] = useFormState(submitForm, initialState);
  const { total } = useFormulaStore();

  useEffect(() => {
    if(state.message === "success") {
      alert("server received: " + state.data);
    }
  }, [state]);
  return (
    <div className={styles.container}>
      Total: {total}
      <form action={formAction} className={styles.form}>
        <MultiSearchField />
        <input type="hidden" name="total" value={total} />
        <div className={styles.controls}>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
