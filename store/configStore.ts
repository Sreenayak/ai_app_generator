import { create } from "zustand";
import { UIConfig } from "@/types/schema";

interface ConfigState {
  configs: UIConfig[];
  addConfig: (config: UIConfig) => void;
  removeConfig: (id: string) => void;
  updateConfig: (id: string, config: UIConfig) => void;
  getConfig: (id: string) => UIConfig | undefined;
}

export const useConfigStore = create<ConfigState>((set, get) => ({
  configs: [],
  addConfig: (config) => {
    const newConfig = {
      ...config,
      id: config.id || Date.now().toString(),
    };
    set((state) => ({
      configs: [...state.configs, newConfig],
    }));
  },
  removeConfig: (id) =>
    set((state) => ({
      configs: state.configs.filter((c) => c.id !== id),
    })),
  updateConfig: (id, config) =>
    set((state) => ({
      configs: state.configs.map((c) =>
        c.id === id ? { ...config, id } : c
      ),
    })),
  getConfig: (id) => get().configs.find((c) => c.id === id),
}));
