import { UIComponent } from "./component";

export type LayoutType = "single-column" | "two-column" | "grid" | "three-column" | "dashboard";

export interface UIConfig {
  id?: string;
  title: string;
  description?: string;
  layout?: LayoutType;
  components: UIComponent[];
  theme?: {
    primary?: string;
    secondary?: string;
    accent?: string;
  };
}