import Link from "next/link";

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu content */}
      <div className="fixed right-0 top-0 h-full w-64 bg-zinc-900 p-6 shadow-xl">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-end">
            <button
              type="button"
              title="close"
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
              onClick={onClose}
            >
              White Paper
            </Link>
            <Link
              href="/"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
              onClick={onClose}
            >
              Project
            </Link>
            <Link
              href="/"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
              onClick={onClose}
            >
              Members
            </Link>

            <Link
              href="/"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
              onClick={onClose}
            >
              Contact
            </Link>
            <Link
              href="/"
              className="inline-flex items-center background justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:ring focus:outline-none"
            >
              Connect Wallet
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
