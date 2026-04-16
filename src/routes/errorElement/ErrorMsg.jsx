
import { Link } from 'react-router';

const ErrorMsg = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-6xl md:text-8xl font-extrabold text-red-500 tracking-tight">
                404
            </h1>

            <div className="mt-4 w-16 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full" />

            <p className="mt-6 text-xl md:text-2xl font-medium text-gray-700">
                Page Not Found
            </p>

            <p className="mt-2 text-gray-500 max-w-md">
                The page you're looking for doesn't exist or has been moved.
            </p>

            <Link
                to={"/"}
                className="mt-8 inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
            >
                ← Back to Home
            </Link>
        </div>
    );
};

export default ErrorMsg;