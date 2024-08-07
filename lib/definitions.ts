import { Mock } from "node:test";

export type FormState = {
  message: string;
  errors: {
    message?: string;
  };
  data?: string;
}

export type MockData = {
  id: string;
  name: string;
  category: string;
  value: number | string;
}