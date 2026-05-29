import SingleColumn from "@/components/ui/layouts/SingleColumn";
import TwoColumn from "@/components/ui/layouts/TwoColumn";
import ThreeColumn from "@/components/ui/layouts/ThreeColumn";
import GridLayout from "@/components/ui/layouts/GridLayout";
import DashboardLayout from "@/components/ui/layouts/DashboardLayout";

export default function LayoutRenderer({
  layout,
  children,
}: any) {
  switch (layout) {
    case "two-column":
      return (
        <TwoColumn>
          {children}
        </TwoColumn>
      );

    case "three-column":
      return (
        <ThreeColumn>
          {children}
        </ThreeColumn>
      );

    case "grid":
      return (
        <GridLayout>
          {children}
        </GridLayout>
      );

    case "dashboard":
      return (
        <DashboardLayout>
          {children}
        </DashboardLayout>
      );

    default:
      return (
        <SingleColumn>
          {children}
        </SingleColumn>
      );
  }
}