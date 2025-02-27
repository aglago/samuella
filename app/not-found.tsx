import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-primary mb-4">Page Not Found</h2>
        <p className="text-secondary mb-6">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-primary text-light px-6 py-3 rounded inline-block hover:bg-dark transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
