import React from "react";

export default function Context({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-2 mt-2">
      <h1 className="text-lg">{title}:</h1>
      <h1 className="opacity-70 text-sm">{subtitle}</h1>
    </div>
  );
}
