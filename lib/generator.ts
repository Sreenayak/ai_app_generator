export type Generated = {
  type: "json" | "text";
  content: string;
};

export function generateFromPrompt(prompt: string, mode: "json" | "text" = "json"): Generated {
  const normalized = prompt.trim().toLowerCase();

  // Simple heuristics to create a JSON UI config or text output.
  if (mode === "json") {
    // If prompt mentions form, table, or dashboard, create a matching config.
    if (normalized.includes("form") || normalized.includes("registration") || normalized.includes("contact")) {
      const config = {
        title: "Generated Form",
        layout: "single-column",
        components: [
          { id: "g-1", type: "input", label: "Name", placeholder: "Enter name" },
          { id: "g-2", type: "email", label: "Email", placeholder: "name@example.com" },
          { id: "g-3", type: "textarea", label: "Message", placeholder: "Type your message..." },
          { id: "g-4", type: "button", text: "Submit" },
        ],
      };
      return { type: "json", content: JSON.stringify(config, null, 2) };
    }

    if (normalized.includes("table") || normalized.includes("users") || normalized.includes("list")) {
      const config = {
        title: "Generated Table",
        layout: "single-column",
        components: [
          {
            id: "g-1",
            type: "table",
            columns: [
              { key: "id", label: "ID" },
              { key: "name", label: "Name" },
              { key: "email", label: "Email" },
            ],
            data: [
              { id: 1, name: "Alice", email: "alice@example.com" },
              { id: 2, name: "Bob", email: "bob@example.com" },
            ],
          },
        ],
      };
      return { type: "json", content: JSON.stringify(config, null, 2) };
    }

    // Default: generate a simple registration form JSON
    const defaultConfig = {
      title: "Generated UI",
      layout: "single-column",
      components: [
        { id: "g-1", type: "input", label: "Field 1", placeholder: "Enter value" },
        { id: "g-2", type: "button", text: "Action" },
      ],
      prompt,
    };

    return { type: "json", content: JSON.stringify(defaultConfig, null, 2) };
  }

  // text mode: produce a friendly explanation
  const text = `Prompt: ${prompt}\n\nGenerated text output:\n- Summary: This is a generated result based on your prompt.\n- Suggestions: Use the JSON mode to create UI configurations directly.`;
  return { type: "text", content: text };
}
