import ComponentFactory from "./ComponentFactory";

interface Props {
  config: any;
}

export default function DynamicRenderer({
  config,
}: Props) {
  return (
    <div className="space-y-5">

      {config.components.map(
        (component: any) => (
          <ComponentFactory
            key={component.id}
            component={component}
          />
        )
      )}

    </div>
  );
}