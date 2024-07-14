import { create } from "zustand";

type FormulaStoreType = {
  total: number
  set: (payload: number) => void
}

const useFormulaStore = create<FormulaStoreType>()((set) => ({
  total: 0,
  set: (payload: number) => set((state: any) => ({ total: payload })),
}));

export default useFormulaStore;
