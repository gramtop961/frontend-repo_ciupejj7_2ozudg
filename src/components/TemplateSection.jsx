import React from 'react';
import { LayoutTemplate, BarChart3, PieChart, Images } from 'lucide-react';

export default function TemplateSection() {
  return (
    <section id="templates" className="bg-slate-50 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3 text-slate-900">
          <LayoutTemplate className="h-5 w-5 text-teal-600" />
          <h2 className="text-2xl font-bold">Template & UI Kit Figma</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="mb-1 font-semibold text-slate-900">Template Dashboard Admin</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Horizon UI – Free Dashboard</li>
              <li>Venus Dashboard UI Kit</li>
              <li>Purity UI Dashboard</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">Cari di Figma Community</p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="mb-2 flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-slate-500" />
              <h3 className="font-semibold text-slate-900">UI Kit untuk Chart</h3>
            </div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Charts UI Kit for Figma</li>
              <li>Graphs & Charts UI Kit</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">Sangat penting untuk visualisasi data SIMEL</p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="mb-2 flex items-center gap-2">
              <Images className="h-4 w-4 text-slate-500" />
              <h3 className="font-semibold text-slate-900">Library Ikon</h3>
            </div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Lucide Icons (plugin Figma)</li>
              <li>Feather Icons (plugin Figma)</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-teal-200 bg-white p-4 text-sm text-slate-700">
          Gunakan template sebagai fondasi — jangan mulai dari nol agar waktu desain lebih efisien dan konsisten.
        </div>
      </div>
    </section>
  );
}
