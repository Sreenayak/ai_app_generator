import { componentRegistry } from "@/lib/componentRegistry";

interface Props {
  component: any;
}

export default function ComponentFactory({
  component,
}: Props) {
  const DynamicComponent =
    componentRegistry[
      component.type as keyof typeof componentRegistry
    ];

  if (!DynamicComponent) {
    return (
      <div className="text-red-500">
        Unknown Component:
        {component.type}
      </div>
    );
  }

  return (
    <DynamicComponent
      {...component}
    />
  );
}