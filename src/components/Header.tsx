import type React from "react";
import { useState } from "react";
import Button from "./common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Side: Logo & Navigation */}
        <div className="flex items-center space-x-8">
          <a href="/" className="flex items-center">
            <img
              src="https://ik.imagekit.io/q4rna6net/Social%20Icons/Slack_Technologies_Logo.svg_jZQbvkrMJ.png?updatedAt=1742713505202"
              alt="Slack"
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {["Product", "Enterprise", "Resources", "Pricing"].map((item) => (
              <div key={item} className="relative group">
                <button className="text-gray-700 text-sm font-medium hover:text-gray-900 flex items-center">
                  {item}
                  {item === "Product" && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="ml-1 h-4 w-3 text-gray-500"
                    />
                  )}
                </button>
              </div>
            ))}
          </nav>
        </div>

        {/* Right Side: Buttons & Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="text-gray-700 hover:text-gray-900">
            <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FontAwesomeIcon
              icon={mobileMenuOpen ? faTimes : faBars}
              className="h-6 w-6"
            />
          </button>

          {/* Desktop Buttons */}
          {/* Desktop Buttons (Fixed Alignment) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/signin"
              className="text-gray-700 text-sm font-medium hover:text-gray-900"
            >
              Sign in
            </a>
            <Button variant="outline" href="/sales">
              TALK TO SALES
            </Button>
            <Button variant="primary" href="/signup">
              TRY FOR FREE
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-4">
            {["Product", "Enterprise", "Resources", "Pricing"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 text-sm font-medium hover:text-gray-900"
              >
                {item}
              </a>
            ))}
            <a
              href="/signin"
              className="text-gray-700 text-sm font-medium hover:text-gray-900"
            >
              Sign in
            </a>
            <Button variant="outline" className="w-full" href="/sales">
              TALK TO SALES
            </Button>
            <Button variant="primary" className="w-full" href="/signup">
              TRY FOR FREE
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
