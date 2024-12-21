import { create } from "zustand";

export interface CounterStore {
  counter: number;
  increment: () => void;
  decrement: () => void;
  incrementBy: (value: number) => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
  counter: 1,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () =>
    set((state) => ({
      counter: state.counter >= 1 ? state.counter - 1 : state.counter,
    })),

  incrementBy: (value) =>
    set((state) => ({
      counter: state.counter + value,
    })),
}));
