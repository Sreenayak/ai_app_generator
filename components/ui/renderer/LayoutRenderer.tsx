import SingleColumn from "@/components/ui/layouts/SingleColumn";
import TwoColumn from "@/components/ui/layouts/TwoColumn";
import GridLayout from "@/components/ui/layouts/GridLayout";

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

    case "grid":
      return (
        <GridLayout>
          {children}
        </GridLayout>
      );

    default:
      return (
        <SingleColumn>
          {children}
        </SingleColumn>
      );
  }
}