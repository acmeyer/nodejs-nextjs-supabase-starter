'use client'

import { useEffect } from "react";

export default function AppErrorState({ 
  error, 
  reset 
}: { 
  error: Error,
  reset: () => void 
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        <h2 className="text-2xl font-semibold dark:text-white text-gray-900 sm:text-3xl">
          We&#39;re sorry, but something went wrong
        </h2>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{error.message}</p>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Please click below to try again later or contact us at{" "}
          <a
            href={`mailto:support@${process.env.NEXT_PUBLIC_APP_DOMAIN}`}
            className="text-blue-500 hover:text-blue-600"
          >
            support@
            {process.env.NEXT_PUBLIC_APP_DOMAIN}
          </a>
        </p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
