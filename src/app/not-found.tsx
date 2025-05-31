import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 ext-2xl  text-center text-gray-800 mb-8">
        <h2>404 Not Found</h2>
        <p>Could not find requested resource</p>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <Link
          className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
