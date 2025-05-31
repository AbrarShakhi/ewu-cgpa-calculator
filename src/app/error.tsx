"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1 className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 ext-2xl  text-center text-gray-800 mb-8">
        Something went wrong!
      </h1>
      <div className="mt-8 flex items-center justify-center">
        <button
          className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
