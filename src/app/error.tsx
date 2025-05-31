"use client";

import { useEffect } from "react";

import "./style.css";

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
    <div className="error-container">
      <h1 className="error-title">
        Something went wrong!
      </h1>
      <div className="error-actions">
        <button
          className="error-button"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
