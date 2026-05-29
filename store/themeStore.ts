import { create } from "zustand";

export interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  border: string;
}

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Partial<Theme>) => void;
  resetTheme: () => void;
}

const defaultTheme: Theme = {
  primary: "#000000",
  secondary: "#f3f4f6",
  accent: "#3b82f6",
  background: "#ffffff",
  text: "#1f2937",
  border: "#e5e7eb",
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: defaultTheme,
  setTheme: (newTheme) =>
    set((state) => ({
      theme: { ...state.theme, ...newTheme },
    })),
  resetTheme: () => set({ theme: defaultTheme }),
}));
