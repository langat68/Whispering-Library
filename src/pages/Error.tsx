import { Link, useRouteError } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';

function Error() {
  // Get the current route error
  const error = useRouteError();

  // Type guard to check if error has a 'message' property
  const isErrorWithMessage = (error: unknown): error is { message: string } => {
    return typeof error === 'object' && error !== null && 'message' in error;
  };

  // Type guard to check if error has a 'statusText' property
  const isErrorWithStatusText = (error: unknown): error is { statusText: string } => {
    return typeof error === 'object' && error !== null && 'statusText' in error;
  };

  return (
    <div className="py-10 bg:base-100">
      <div className="text-center">
        {/* Error status code */}
        <p className="text-base font-semibold text-red-500">404</p>

        {/* Main error message */}
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-green-300 sm:text-5xl">
          Page not found
        </h1>

        {/* Additional error description */}
        <p className="mt-4 text-base leading-7 text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>

        {/* Display error message or status text if available */}
        <p>
          {isErrorWithStatusText(error) ? error.statusText : isErrorWithMessage(error) ? error.message : null}
        </p>

        {/* Navigation links */}
        <div className="mt-4 flex items-center justify-center gap-x-3">
          <Link to="/" className="inline-flex items-center btn btn-sm btn-info text-sm font-semibold">
            <ArrowLeft size={16} className="mr-2" />
            Go back
          </Link>
          <Link to="/" className="rounded-md btn btn-primary btn-sm text-sm font-semibold">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
