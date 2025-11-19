"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import ToggleButton from "./ToggleButton";
import { motion, AnimatePresence } from "framer-motion";
import SocialMediaLinks from "./SocialMediaLinks";

const submenuVariants = {
  hidden: { opacity: 0, y: 10, pointerEvents: "none" },
  visible: {
    opacity: 1,
    y: 0,
    pointerEvents: "auto",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const navLinks = [
  { name: "Home", href: "/" },

  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },

  {
    name: "Student Zone",
    href: "/student-zone",
    submenu: [
      { name: "Courses", href: "/student-zone/courses" },
      { name: "Trainings", href: "/student-zone/trainings" },
      { name: "Internships", href: "/student-zone/internships" },
      { name: "Work With Us", href: "/student-zone/works-with-us" },
    ],
  },

  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Detect mobile screen size
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Close drawer on outside click
  useEffect(() => {
    function handleClick(e: any) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
        setSubmenuOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <header className="backdrop-blur-xl bg-gray-50 dark:bg-[#bbc4e7]/80 shadow-lg border-b border-[#D9E2FF] dark:border-[#1A2340] w-full z-100 fixed top-0">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Ignot Logo"
            width={100}
            height={45}
            className="object-contain hover:scale-105 transition-transform duration-300 drop-shadow-md"
          />
        </Link>

        {/* DESKTOP MENU */}
        {!isMobile && (
          <div className="flex items-center justify-between w-full">
            <nav className="flex-1 flex justify-center items-center gap-8 font-semibold relative">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const hasSubmenu = !!link.submenu;

                return (
                  <div key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className={`relative flex items-center gap-1 text-[16px] tracking-wide transition-all duration-300 ${
                        isActive
                          ? "text-[#00041b] dark:text-[#143d57] font-bold"
                          : "text-[#040e35] dark:text-gray-900 hover:text-[#053645]"
                      }`}
                    >
                      {link.name}

                      {hasSubmenu && (
                        <ChevronDown
                          size={18}
                          className="group-hover:rotate-180 transition-transform duration-300"
                        />
                      )}
                    </Link>

                    {/* DESKTOP SUBMENU */}

                    {hasSubmenu && (
                      <div className="absolute left-0  top-full pt-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="bg-white shadow-2xl rounded-xl py-3 w-60 
      border border-gray-200/60 overflow-hidden backdrop-blur-lg"
                        >
                          {link.submenu.map((sub) => (
                            <motion.div
                              key={sub.name}
                              whileHover={{ x: 6 }}
                              transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 12,
                              }}
                            >
                              <Link
                                href={sub.href}
                                className="block px-4 py-3 text-sm text-[#1d2e55] 
            hover:bg-[#F0F6FF] hover:text-[#2B4CFF] transition rounded-md"
                              >
                                {sub.name}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* CTA BUTTON */}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#2B4CFF] to-[#00C2FF] text-white px-6 py-2 rounded-full text-sm font-bold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-200/40"
              >
                Free Consultation
              </Link>
            </nav>

            <div className="flex items-center ml-5">
              <ToggleButton />
            </div>
          </div>
        )}

        {/* MOBILE ICON */}
        {isMobile && (
          <button
            className="text-[#2B4CFF] dark:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        )}
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMobile && open && (
          <motion.div
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 85, damping: 22 }}
            className="fixed top-0 right-0 w-80 h-full bg-gradient-to-b from-[#2B4CFF] via-[#274BBA] to-[#1D2A70] dark:from-[#090D1E] dark:via-[#0D152D] dark:to-[#0B1126] shadow-2xl z-50"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-blue-300/30 dark:border-blue-900/40">
              <Image src="/logo.png" alt="Logo" width={50} height={45} />
              <button
                onClick={() => setOpen(false)}
                className="text-white hover:text-[#FFB400]"
              >
                <X size={28} />
              </button>
            </div>

            {/* MOBILE NAV LINKS */}
            <nav className="flex flex-col items-start px-6 py-8 gap-7">
              {navLinks.map((link) => {
                const hasSubmenu = !!link.submenu;

                return (
                  <div key={link.name} className="w-full">
                    {/* Main item */}
                    <button
                      className={`flex justify-between items-center w-full text-left text-[17px] font-medium ${
                        pathname === link.href ? "text-[#FFB400]" : "text-white"
                      }`}
                      onClick={() =>
                        hasSubmenu
                          ? setSubmenuOpen(!submenuOpen)
                          : setOpen(false)
                      }
                    >
                      {link.name}
                      {hasSubmenu && (
                        <ChevronDown
                          className={`${
                            submenuOpen ? "rotate-180" : ""
                          } transition`}
                        />
                      )}
                    </button>

                    {/* Submenu mobile */}
                    {hasSubmenu && submenuOpen && (
                      <div className="ml-4 mt-3 flex flex-col gap-4">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="text-white/90 hover:text-[#00E3FF] text-[15px] pl-2 border-l border-white/40"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* CTA BUTTON */}
            <div className="px-6 mt-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block text-center bg-[#00C2FF] text-blue-900 font-bold py-3 rounded-full shadow-md hover:bg-[#FFB400] hover:text-blue-900 transition-transform hover:scale-105"
              >
                Free Consultation
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-6 px-4">
              <SocialMediaLinks />
            </div>

            {/* Dark mode toggle */}
            <div className="flex justify-center py-5 border-t border-blue-300/30 dark:border-blue-900/40 mt-6">
              <ToggleButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
