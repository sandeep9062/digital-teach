"use client";

import React from "react";
import Link from "next/link";

const OffersStrip: React.FC = () => {
  return (
    <div
      className="w-full fixed top-0 mt-20 z-50 shadow-md transition-all duration-300 font-[Poppins]"
      style={{
        background: "linear-gradient(90deg, #4b4bf4 0%, #2b5dea 100%)",
        borderTop: "3px solid #1fb424",
        borderBottom: "3px solid #1fb424",
      }}
    >
      <div className="flex items-center w-full px-2 sm:px-4 py-1.5 justify-between">
        {/* Offers Marquee Section */}
        <div className="flex items-center flex-1 min-w-0">
          {/* Latest Offers Label (Hidden on small screens) */}
          <span
            className="text-[#f1a40a] text-lg sm:text-xl font-extrabold mr-3 sm:mr-4 hidden sm:block flex-shrink-0"
            style={{ textShadow: "0 2px 8px #2056AE44" }}
          >
            Offers:
          </span>

          {/* Scrolling Text Content */}
          <div className="w-full overflow-hidden">
            <div
              className="text-sm font-semibold text-white sm:text-[18px] whitespace-nowrap"
              style={{ animation: "scrollText 20s linear infinite" }}
            >
              <span
                className="inline-block mr-10"
                style={{ animation: "pulseOffer 1.2s infinite alternate" }}
              >
                <span className="text-[#F4A300] mr-1">🔥</span>
                <span className="text-white">Up to 50% off on all courses</span>
              </span>

              <span
                className="inline-block mr-10"
                style={{ animation: "pulseOffer 1.2s infinite alternate" }}
              >
                <span className="text-[#F4A300] mr-1">📚</span>
                <span className="text-white">
                  Free eBook for first-time students
                </span>
              </span>

              <span
                className="inline-block mr-10"
                style={{ animation: "pulseOffer 1.2s infinite alternate" }}
              >
                <span className="text-[#F4A300] mr-1">💡</span>
                <span className="text-white">Exclusive webinars every week</span>
              </span>

              <span
                className="inline-block mr-10"
                style={{ animation: "pulseOffer 1.2s infinite alternate" }}
              >
                <span className="text-[#F4A300] mr-1">🎓</span>
                <span className="text-white">Certification programs now available</span>
              </span>
            </div>
          </div>
        </div>

        {/* Download App Button */}
        <div className="flex-shrink-0 pl-2 sm:pl-4">
          <Link
            href="#"
            className="
              flex items-center gap-1 sm:gap-2 
              font-bold whitespace-nowrap
              text-white 
              border-2 border-[#87b7ff]
              transition-all duration-300 transform 
              hover:scale-105 active:scale-95
            "
            style={{
              background:
                "linear-gradient(135deg, #5fa8ff 0%, #3d8bff 40%, #1e6bff 100%)",
              padding: "0.45rem 0.9rem",
              borderRadius: "28px",
              textDecoration: "none",
              fontSize: "0.85rem",
              boxShadow: "0 4px 12px rgba(30,120,255,0.45)",
            }}
          >
            <span className="text-base sm:text-lg">📱</span>
            <span className="hidden sm:inline">Get the App Now</span>
            <span className="inline sm:hidden">App</span>
          </Link>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes scrollText {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes pulseOffer {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default OffersStrip;
