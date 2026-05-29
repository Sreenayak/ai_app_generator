import { UIConfig } from "@/types/schema";

export const tableConfig: UIConfig = {
  title: "Users Table",
  layout: "single-column",
  components: [
    {
      id: "1",
      type: "table",
      columns: [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "status", label: "Status" },
      ],
      data: [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          status: "Active",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          status: "Active",
        },
        {
          id: 3,
          name: "Bob Johnson",
          email: "bob@example.com",
          status: "Inactive",
        },
        {
          id: 4,
          name: "Alice Brown",
          email: "alice@example.com",
          status: "Active",
        },
      ],
    },
  ],
};
