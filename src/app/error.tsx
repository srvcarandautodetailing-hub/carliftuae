"use client";

import { useEffect } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

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
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-red-600 text-2xl font-bold">!</span>
        </div>
        <h1 className="text-2xl font-extrabold text-slate-900 mb-3">
          Something went wrong
        </h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          We encountered an unexpected error. Please try again or contact us via
          WhatsApp if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
          >
            Go Home
          </Link>
          <a
            href="https://wa.me/971543308261?text=Hi%2C+I%20encountered%20an%20error%20on%20the%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#1ebe57] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
