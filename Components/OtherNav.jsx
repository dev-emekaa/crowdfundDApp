"use client";
import Link from "next/link";
import { useState, useContext } from "react";
import MobileMenu from "./MobileMenu";

import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Logo } from "../Components/index";

const OtherNav = () => {
  const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className=" fixed top-0 left-0 w-full border-b border-white/5 backgroundMain backdrop-blur-xl z-50 ">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-24 items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <Link
                href="/"
                className="flex items-center space-x-1 sm:space-x-3"
              >
                <Logo color="text-white" />

                <span className=" sm:text-lg lg:text-xl font-bold text-gray-100 tracking-wide">
                  WeFund
                </span>
              </Link>
            </div>

            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className=" font-medium text-zinc-400 hover:text-gray-100 transition-colors"
              >
                White Paper
              </Link>
              <Link
                href="/"
                className="font-medium text-zinc-400 hover:text-gray-100 transition-colors"
              >
                Project
              </Link>
              <Link
                href="/"
                className="font-medium text-zinc-400 hover:text-gray-100 transition-colors"
              >
                Members
              </Link>
            </div>

            {/* Connect Wallet Button */}
            <div className="flex items-center space-x-4">
              {!currentAccount && (
                <button
                  onClick={() => connectWallet()}
                  className="inline-flex items-center justify-center h-12 px-6 mr-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400  hover:bg-purple-700 focus:shadow-ring focus:outline-none background"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Connect Wallet
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                type="button"
                title="mobile menu button"
                className="md:hidden p-2 text-zinc-400 hover:text-white"
                onClick={() => setIsMobileMenuOpen(true)}
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default OtherNav;
