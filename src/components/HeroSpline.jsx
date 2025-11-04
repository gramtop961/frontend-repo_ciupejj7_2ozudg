import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, BookOpen } from 'lucide-react';

export default function HeroSpline() {
  return (
    <section className="relative h-[620px] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve contrast (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/40 to-slate-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-teal-300" />
          <span>SIMEL Design Guide • Figma Ready</span>
        </div>
        <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
          Panduan Figma & Referensi Desain SIMEL
        </h1>
        <p className="mt-3 max-w-2xl text-slate-200/90">
          Fondasi UI/UX untuk membangun dashboard manajemen energi yang modern, fungsional, dan konsisten.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#references"
            className="inline-flex items-center gap-2 rounded-md bg-teal-400 px-4 py-2 text-slate-900 transition hover:bg-teal-300"
          >
            <BookOpen className="h-4 w-4" />
            Lihat Referensi
          </a>
          <a
            href="#templates"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-white transition hover:bg-white/10"
          >
            Mulai dari Template
          </a>
        </div>
      </div>
    </section>
  );
}
