import Link from "next/link";

import "./style.css";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h2 className="not-found-title">404 Not Found</h2>
        <p className="not-found-message">Could not find requested resource</p>
      </div>
      <div className="not-found-actions">
        <Link
          className="not-found-button"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
