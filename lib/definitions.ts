export type FormState = {
  message: string;
  errors: {
    message?: string;
  };
}

export type MockData = {
  id: string;
  name: string;
  category: string;
  value: number | string;
}