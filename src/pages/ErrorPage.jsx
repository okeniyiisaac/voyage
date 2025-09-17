import { Link } from "react-router-dom";
import { MdError } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
        <div className="text-red-600 text-8xl">
            <MdError />
        </div>
      <h1 className="text-9xl font-extrabold text-red-600 tracking-widest">404</h1>
      <p className="text-2xl font-semibold mt-6">Page Not Found</p>
      <p className="text-gray-500 mt-2 text-center max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 bg-[#1CA8CB] text-white px-6 py-3 rounded-2xl shadow hover:bg-[#1CA8CB]/70 transition"
      >
        <FaHome className="w-5 h-5"/>
        Go Home
      </Link>
    </div>
  )
}

export default ErrorPage

