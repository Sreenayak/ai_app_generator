import { create } from "zustand";
import { UIConfig } from "@/types/schema";

interface AppState {
  currentConfig: UIConfig | null;
  setCurrentConfig: (config: UIConfig) => void;
  error: string | null;
  setError: (error: string | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentConfig: null,
  setCurrentConfig: (config) => set({ currentConfig: config }),
  error: null,
  setError: (error) => set({ error }),
  loading: false,
  setLoading: (loading) => set({ loading }),
}));
