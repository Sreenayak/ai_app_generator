import InputField from "@/components/ui/ui/InputField";
import ButtonField from "@/components/ui/ui/ButtonField";
import CheckboxField from "@/components/ui/ui/CheckboxField";
import SelectField from "@/components/ui/ui/SelectField";
import TextAreaField from "@/components/ui/ui/TextAreaField";
import EmailField from "@/components/ui/ui/EmailField";
import PasswordField from "@/components/ui/ui/PasswordField";
import RadioField from "@/components/ui/ui/RadioField";
import CardField from "@/components/ui/ui/CardField";
import TableField from "@/components/ui/ui/TableField";

export const componentRegistry = {
  input: InputField,
  button: ButtonField,
  checkbox: CheckboxField,
  select: SelectField,
  textarea: TextAreaField,
  email: EmailField,
  password: PasswordField,
  radio: RadioField,
  card: CardField,
  table: TableField,
};