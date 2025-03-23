"use client";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type React from "react";
import { useState } from "react";

const Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#1264A3] text-white py-3 relative">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex-1 pr-8">
          <p className="text-sm md:text-base">
            Slack is your digital HQ. Meet the new features keeping teams
            connected in a work-from-anywhere world.
            <a href="#" className="font-medium ml-1 inline-flex items-center">
              Let&apos;s go <span className="ml-1">→</span>
            </a>
          </p>
        </div>
        <button
          className="text-white hover:text-gray-200"
          onClick={() => setIsVisible(false)}
        >
          <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
