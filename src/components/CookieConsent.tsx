"use client";

import type React from "react";
import { useState } from "react";

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl max-w-xs z-50 border border-gray-200">
      <div className="p-4">
        <p className="text-sm text-gray-700 mb-4">
          This website uses cookies to enhance your browsing experience, analyze
          site traffic, and serve personalized content. You can share
          information about your use of our site with our social media,
          advertising and analytics partners.
        </p>
        <div className="flex flex-col space-y-2">
          <button
            className="w-full bg-[#611f69] text-white py-2 px-4 rounded text-sm font-medium"
            onClick={() => setIsVisible(false)}
          >
            ACCEPT ALL COOKIES
          </button>
          <button className="w-full text-gray-700 py-2 px-4 text-sm">
            More info
          </button>
        </div>
      </div>
      <div className="border-t border-gray-200 p-3 flex items-center">
        <div className="flex-1">
          <p className="text-xs text-gray-500">
            Hey there! 👋 Want to know what we're building here?
          </p>
        </div>
        <div className="ml-2">
          <img
            src="https://ik.imagekit.io/q4rna6net/cactro/wave_4a14a41U-.png?updatedAt=1742715171661"
            alt="Chat avatar"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
