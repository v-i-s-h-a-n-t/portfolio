"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyCodeButtonProps = {
  code: string;
};

export function CopyCodeButton({ code }: CopyCodeButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  const label =
    status === "copied"
      ? "Copied"
      : status === "error"
        ? "Copy failed"
        : "Copy";

  return (
    <>
      <button
        aria-label={status === "error" ? "Copy code failed" : "Copy code"}
        className="mdx-code-block__copy"
        onClick={copyCode}
        type="button"
      >
        {status === "copied" ? (
          <Check aria-hidden="true" size={14} />
        ) : (
          <Copy aria-hidden="true" size={14} />
        )}
        <span>{label}</span>
      </button>
      <span aria-atomic="true" aria-live="polite" className="sr-only">
        {status === "copied"
          ? "Code copied to clipboard."
          : status === "error"
            ? "Unable to copy code. Select and copy it manually."
            : ""}
      </span>
    </>
  );
}
