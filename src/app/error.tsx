'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <span className="text-sm text-neutral-500">Error: {error.message}</span>
    </div>
  );
}
