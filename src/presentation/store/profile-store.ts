import { create } from "zustand";

export interface ProfileState {
  email: string;
  name: string;
  chnageProfile: (name: string, email: string) => void;
}

export const useProfileStore = create<ProfileState>()((set, get) => ({
  name: "Demo name ",
  email: "demo.name@email.com",
  chnageProfile(name, email) {
    set({ name, email });
  },
}));
