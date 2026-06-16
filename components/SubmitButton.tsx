"use client";

import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  text?: string;
  className?: string;
}

export function SubmitButton({
  text = "Submit",
  className,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  const defaultClasses =
    "px-8 py-3 bg-blue-600 text-white font-semibold rounded-full transition-colors duration-300 hover:bg-blue-700";

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${className || defaultClasses} ${
        pending ? "bg-slate-400! cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {pending ? "Sending..." : text}
    </button>
  );
}
