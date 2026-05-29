export interface UIComponent {
  id: string;
  type: string;
  label?: string;
  placeholder?: string;
  text?: string;
}

export interface UIConfig {
  title: string;
  layout?: string;
  components: UIComponent[];
}