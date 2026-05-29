"use client";

import Editor from "@monaco-editor/react";

export default function JsonEditor({
  value,
  onChange,
}: any) {
  return (
    <Editor
      height="600px"
      defaultLanguage="json"
      value={value}
      onChange={(v) =>
        onChange(v || "")
      }
    />
  );
}