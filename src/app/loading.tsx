export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-white"
      aria-label="Loading page"
      role="status"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-slate-200" />
          <div className="absolute inset-0 rounded-full border-4 border-t-blue-600 animate-spin" />
        </div>
        <p className="text-sm text-slate-500 font-medium">Loading…</p>
      </div>
    </div>
  );
}
