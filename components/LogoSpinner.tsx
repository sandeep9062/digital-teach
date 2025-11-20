"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * LogoSpinner with Coding Theme Background
 * - gradient + soft glow
 * - animated "code rain" vertical lines
 * - terminal panel with typing effect + blinking cursor
 * - floating logo + subtle ring glow
 *
 * Notes:
 * - Requires Tailwind CSS (for utility classes).
 * - Uses styled-jsx for the keyframe animations (scoped to this component).
 */

const CODE_LINES = [
  "const greet = () => console.log('Hello World');",
  "fetch('/api/courses').then(r => r.json())",
  "export default function App() { return <div /> }",
  "await trainModel(data)",
  "docker build -t app:latest .",
  "git checkout -b feature/login",
  "if (err) throw err;",
  "for (let i=0; i<10; i++) console.log(i);",
];

const LogoSpinner = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-[#071029] via-[#08284a] to-[#0e2f5a] px-4">
      {/* Ambient glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#0ea5e9] opacity-10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#8b5cf6] opacity-8 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      {/* CODE RAIN (several vertical columns) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full relative">
          {[...Array(12)].map((_, idx) => {
            const left = (idx / 12) * 100;
            const delay = (idx % 5) * 0.6;
            const dur = 6 + (idx % 4) * 1.2;
            return (
              <div
                key={idx}
                className="absolute top-0 h-full"
                style={{ left: `${left}%`, transform: "translateX(-50%)", width: "1ch" }}
              >
                <div
                  className="code-column text-xs font-mono text-[#9be7ff]/40"
                  style={{
                    animationDelay: `${delay}s`,
                    animationDuration: `${dur}s`,
                  }}
                >
                  {/* repeat code fragments to create a tall column */}
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className="leading-tight opacity-80">
                      {CODE_LINES[(i + idx) % CODE_LINES.length].slice(0, 20)}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Terminal panel (right) */}
      <div className="absolute right-8 top-20 md:top-32 w-80 md:w-96 rounded-xl z-10">
        <div className="bg-[#0b1220]/70 backdrop-blur-md border border-white/5 rounded-xl p-4 shadow-[0_20px_60px_rgba(2,6,23,0.6)]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <div className="ml-auto text-xs text-[#9fbcd9] font-mono">~/vprotech/client</div>
          </div>

          <div className="bg-[#031526]/60 p-3 rounded-md min-h-[120px]">
            <div className="text-xs text-[#7fd3ff] font-mono leading-relaxed">
              {/* Simulated typing lines */}
              <span className="block"><span className="text-[#cfefff]">vpro</span>:~$ <span className="text-[#9be7ff]">npm run build</span></span>
              <span className="block mt-1 typing-line">Compiling modules... <span className="text-green-400">OK</span></span>
              <span className="block mt-1 typing-line delay-2">Generating static assets... <span className="text-green-400">DONE</span></span>
              <span className="block mt-1 typing-line delay-3">Deployment ready.</span>
            </div>

            {/* blinking cursor */}
            <div className="mt-3 text-xs font-mono text-[#9be7ff]">
              <span className="text-[#cfefff]">user@vprotech</span>:~$ <span className="typing-ghost">Connecting<span className="blinking-cursor">█</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content: logo + ring */}
      <div className="relative z-20 flex flex-col items-center text-center">
        {/* glowing ring */}
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, scale: [1, 1.04, 1], rotate: 360 }}
          transition={{
            scale: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            opacity: { duration: 1.5 },
          }}
          className="absolute rounded-full w-80 h-80 sm:w-96 sm:h-96 border  border-white/6 shadow-[0_0_50px_12px_rgba(14,165,233,0.06)]"
        />

        {/* Logo floating */}
        <motion.div
          initial={{ y: -8, scale: 0.98 }}
          animate={{ y: [ -8, 8, -8 ], scale: [0.98, 1.03, 0.98] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-32 h-32 sm:w-38  sm:h-38 bg-amber-50  rounded-[42px]  overflow-hidden flex items-center justify-center"
        >
          <Image src="/logo.png" alt="Logo" fill className="object-contain" priority />
        </motion.div>

        {/* Title / caption */}
        <div className="mt-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">VproTech Digital</h1>
          <p className="text-sm sm:text-base text-[#a9d8ff] font-mono mt-1">Build • Deploy • Scale</p>
        </div>
      </div>

      {/* Decorative bottom code snippet strip */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[92%] md:w-3/4 bg-gradient-to-r from-[#06243a]/30 to-[#1b3450]/20 border border-white/5 rounded-lg p-3 text-xs font-mono text-[#9fdcff] flex gap-4 overflow-hidden">
        <div className="flex-1 truncate">const PORT = process.env.PORT || 3000;</div>
        <div className="flex-1 truncate">// init server → listen(PORT)</div>
        <div className="flex-1 truncate">db.connect(process.env.DB_URL)</div>
      </div>

      {/* Scoped animations */}
      <style jsx>{`
        /* code column animation (falling) */
        .code-column {
          display: flex;
          flex-direction: column;
          gap: 0.12rem;
          transform: translateY(-10%);
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes fall {
          0% { transform: translateY(-18%); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(120%); opacity: 0; }
        }

        /* typing lines: appear with small delays */
        .typing-line {
          overflow: hidden;
          white-space: nowrap;
          display: inline-block;
          animation: typeLine 1.4s steps(28, end) forwards;
        }
        .typing-line.delay-2 {
          animation-delay: 1.2s;
        }
        .typing-line.delay-3 {
          animation-delay: 2.1s;
        }
        @keyframes typeLine {
          from { width: 0ch; }
          to { width: 40ch; }
        }

        /* ghost typing line for cursor blinking */
        .typing-ghost {
          display: inline-block;
          width: 10ch;
          overflow: hidden;
          white-space: nowrap;
          animation: ghostType 2.4s steps(20,end) infinite;
        }
        @keyframes ghostType {
          0% { transform: translateX(0ch); }
          50% { transform: translateX(-4ch); }
          100% { transform: translateX(0ch); }
        }

        .blinking-cursor {
          display: inline-block;
          margin-left: 4px;
          animation: blink 1s steps(2, start) infinite;
          color: #9be7ff;
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }

        /* subtle slow pulsing for the background glows */
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
        @keyframes pulseSlow {
          0% { transform: scale(1); opacity: 0.08; }
          50% { transform: scale(1.06); opacity: 0.12; }
          100% { transform: scale(1); opacity: 0.08; }
        }
      `}</style>
    </div>
  );
};

export default LogoSpinner;
