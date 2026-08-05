interface SchemaScriptProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Renders a JSON-LD structured data script tag.
 * This is a server component — no "use client" directive.
 */
export default function SchemaScript({ schema }: SchemaScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 0),
      }}
    />
  );
}
