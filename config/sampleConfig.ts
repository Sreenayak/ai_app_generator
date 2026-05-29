import { UIConfig } from "@/types/schema";

export const sampleConfig: UIConfig = {
  title: "Registration Form",

  layout: "single-column",

  components: [
    {
      id: "1",
      type: "input",
      label: "Username",
      placeholder: "Enter username",
    },

    {
      id: "2",
      type: "input",
      label: "Email",
      placeholder: "Enter email",
    },

    {
      id: "3",
      type: "button",
      text: "Submit",
    },
  ],
};