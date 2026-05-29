import { UIConfig } from "@/types/schema";

export function validateConfig(
  config: UIConfig
) {
  if (!config.components) {
    return false;
  }

  return true;
}