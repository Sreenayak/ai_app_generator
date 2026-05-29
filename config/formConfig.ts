import { UIConfig } from "@/types/schema";

export const formConfig: UIConfig = {
  title: "Contact Form",
  layout: "single-column",
  components: [
    {
      id: "1",
      type: "input",
      label: "Full Name",
      placeholder: "John Doe",
      required: true,
    },
    {
      id: "2",
      type: "email",
      label: "Email Address",
      placeholder: "john@example.com",
      required: true,
    },
    {
      id: "3",
      type: "textarea",
      label: "Message",
      placeholder: "Your message here...",
      rows: 5,
      required: true,
    },
    {
      id: "4",
      type: "select",
      label: "Subject",
      options: [
        { label: "General Inquiry", value: "general" },
        { label: "Support", value: "support" },
        { label: "Sales", value: "sales" },
      ],
    },
    {
      id: "5",
      type: "checkbox",
      label: "Subscribe to our newsletter",
    },
    {
      id: "6",
      type: "button",
      text: "Send Message",
    },
  ],
};
