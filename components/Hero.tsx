"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio-data";
import {
  ArrowDown,
  Mail,
  FileText,
  MapPin,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Code2
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const { personal } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner text-xs sm:text-sm text-cyan-300">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>4th-Year Software Engineering Student</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-gray-400">Ethiopia</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text-accent">
                  {personal.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-gray-300">
                Aspiring Full-Stack Web & Mobile Developer
              </p>
            </div>

            {/* Concise Pitch */}
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about turning ideas into high-performance digital products. Specializing in{" "}
              <span className="text-cyan-400 font-medium">Next.js</span>,{" "}
              <span className="text-cyan-400 font-medium">Tailwind CSS</span>,{" "}
              <span className="text-cyan-400 font-medium">shadcn/ui</span>, and{" "}
              <span className="text-cyan-400 font-medium">Python</span> backend services, with a strong focus on clean code, responsive design, and AI-enabled software.
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-emerald-400 font-medium">{personal.availability.details}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View My Work</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/10 hover:border-cyan-500/40 backdrop-blur-sm transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get in Touch</span>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-sm border border-white/10 transition-all"
              >
                <FaGithub className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Avatar & Tech Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 md:w-96 group">
              {/* Outer decorative ambient glows */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
              
              {/* Main Card Frame */}
              <div className="relative rounded-3xl bg-[#0e121b] border border-white/10 p-6 shadow-2xl backdrop-blur-2xl">
                {/* Top Terminal Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-xs font-mono text-gray-400 flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>gezehagn.tsx</span>
                  </div>
                </div>

                {/* Avatar Display */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 flex items-center justify-center">
                  {!imageError ? (
                    <img
                      src="/profile.jpg"
                      alt={personal.name}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : null}

                  {/* Elegant Fallback Avatar if profile.jpg is not yet added */}
                  {imageError && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 via-zinc-900 to-black">
                      <div className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 p-1 mb-3 shadow-lg shadow-cyan-500/20">
                        <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center">
                          <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono">
                            GL
                          </span>
                        </div>
                      </div>
                      <h4 className="text-white font-semibold text-base">{personal.name}</h4>
                      <p className="text-xs text-cyan-400 mt-1 font-mono">Full-Stack Engineer</p>
                      <p className="text-[11px] text-gray-400 mt-2 px-2">
                        Add <code className="text-cyan-300">public/profile.jpg</code> to display your photo
                      </p>
                    </div>
                  )}

                  {/* Corner Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                    <span className="text-gray-300 font-mono">Status:</span>
                    <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active Student & Dev
                    </span>
                  </div>
                </div>

                {/* Tech Highlights Footer */}
                <div className="mt-4 pt-3 flex items-center justify-between text-xs text-gray-400 font-mono">
                  <span>Stack: Next.js • Python • PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {personal.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {stat.value}
                </span>
              </div>
              <div className="text-sm font-semibold text-gray-300">{stat.label}</div>
              <div className="text-xs text-gray-400">{stat.subtext}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
