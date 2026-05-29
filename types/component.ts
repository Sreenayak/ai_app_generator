export type ComponentType =
  | "input"
  | "button"
  | "checkbox"
  | "select"
  | "textarea"
  | "email"
  | "password"
  | "radio"
  | "card"
  | "table";

export interface BaseComponent {
  id: string;
  type: ComponentType;
}

export interface InputComponent extends BaseComponent {
  type: "input";
  label?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
}

export interface EmailComponent extends BaseComponent {
  type: "email";
  label?: string;
  placeholder?: string;
  required?: boolean;
}

export interface PasswordComponent extends BaseComponent {
  type: "password";
  label?: string;
  placeholder?: string;
  required?: boolean;
}

export interface ButtonComponent extends BaseComponent {
  type: "button";
  text: string;
  onClick?: string;
  variant?: "primary" | "secondary" | "danger";
}

export interface CheckboxComponent extends BaseComponent {
  type: "checkbox";
  label?: string;
  checked?: boolean;
}

export interface RadioComponent extends BaseComponent {
  type: "radio";
  label?: string;
  options?: { label: string; value: string }[];
  selected?: string;
}

export interface SelectComponent extends BaseComponent {
  type: "select";
  label?: string;
  options: { label: string; value: string }[];
  placeholder?: string;
  multiple?: boolean;
}

export interface TextAreaComponent extends BaseComponent {
  type: "textarea";
  label?: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}

export interface CardComponent extends BaseComponent {
  type: "card";
  title?: string;
  description?: string;
  children?: UIComponent[];
}

export interface TableComponent extends BaseComponent {
  type: "table";
  columns: { key: string; label: string }[];
  data: Record<string, any>[];
}

export type UIComponent =
  | InputComponent
  | EmailComponent
  | PasswordComponent
  | ButtonComponent
  | CheckboxComponent
  | RadioComponent
  | SelectComponent
  | TextAreaComponent
  | CardComponent
  | TableComponent;
