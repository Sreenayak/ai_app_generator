import ComponentFactory from "./ComponentFactory";
import LayoutRenderer from "./LayoutRenderer";

export default function DynamicRenderer({
  config,
}: any) {
  return (
    <LayoutRenderer
      layout={config.layout}
    >
      {config.components.map(
        (component: any) => (
          <ComponentFactory
            key={component.id}
            component={component}
          />
        )
      )}
    </LayoutRenderer>
  );
}