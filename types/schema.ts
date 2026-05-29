export interface UIComponent {
  id: string;
  type: string;
  label?: string;
  placeholder?: string;
  text?: string;
}

export interface UIConfig {
  title: string;
  components: UIComponent[];
}