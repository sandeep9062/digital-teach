"use client";
import React from "react";
import Image from "next/image";

const LogoSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0D1321] px-4">
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Logo icon centered above */}
        <div className="sparkle-animation relative w-32 h-32 sm:w-50 sm:h-50 mb-2">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default LogoSpinner;
