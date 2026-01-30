"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold">Something went wrong</h2>

      <p className="text-gray-600">{error.message}</p>

      <button
        onClick={reset}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Try again
      </button>
    </div>
  );
}
