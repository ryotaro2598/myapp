'use client';

export default function GlobalError({ error }: { error: Error }) {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <span className="text-sm text-neutral-500">Global Error: {error.message}</span>
    </div>
  );
}
