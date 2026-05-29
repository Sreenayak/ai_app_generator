import { UIConfig } from "@/types/schema";

export const dashboardConfig: UIConfig = {
  title: "Admin Dashboard",
  layout: "dashboard",
  components: [
    {
      id: "1",
      type: "card",
      title: "Total Users",
      description: "1,234 active users",
    },
    {
      id: "2",
      type: "card",
      title: "Revenue",
      description: "$12,345 this month",
    },
    {
      id: "3",
      type: "card",
      title: "Growth",
      description: "+23% from last month",
    },
  ],
};
