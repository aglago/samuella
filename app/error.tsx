'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>
          Something went wrong!
        </h2>
        <p className="mb-6" style={{color: 'var(--color-secondary)'}}>
          We&apos;re sorry, but an unexpected error occurred. Our team has been notified.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 rounded transition-colors"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-light)'
            }}
          >
            Try again
          </button>
          <Link
            href="/"
            className="border-2 px-6 py-3 rounded transition-colors"
            style={{
              borderColor: 'var(--color-primary)',
              color: 'var(--color-primary)'
            }}
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
