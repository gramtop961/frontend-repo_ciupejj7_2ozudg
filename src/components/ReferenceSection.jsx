import React from 'react';
import { BookOpen, Palette, LayoutDashboard, Lightbulb } from 'lucide-react';

export default function ReferenceSection() {
  return (
    <section id="references" className="bg-white py-14 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <BookOpen className="h-5 w-5 text-teal-600" />
          <h2 className="text-2xl font-bold">Referensi & Inspirasi Desain</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-6">
            <div className="mb-4 flex items-center gap-2 text-slate-700">
              <LayoutDashboard className="h-5 w-5 text-slate-500" />
              <h3 className="font-semibold">Inspirasi Visual (Look & Feel)</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <strong>Dribbble</strong>: Cari "Energy Dashboard", "Smart Home Dashboard", "IoT Dashboard", atau "Admin Dashboard Charts".
              </li>
              <li>
                <strong>Behance</strong>: Telusuri "Energy Management UI" untuk studi kasus yang lengkap.
              </li>
              <li>
                <strong>Pinterest</strong>: Cocok untuk membuat moodboard visual.
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 p-6">
            <div className="mb-4 flex items-center gap-2 text-slate-700">
              <Palette className="h-5 w-5 text-slate-500" />
              <h3 className="font-semibold">Best Practice (Fungsionalitas)</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <strong>Nielsen Norman Group (NN/g)</strong>: Cari artikel tentang "Dashboard Design" dan "Data Visualization".
              </li>
              <li>
                <strong>Material Design 3</strong>: Perhatikan komponen, layout, dan data visualization.
              </li>
              <li>
                <strong>Atlassian Design System</strong>: Handal untuk data kompleks, tabel, dan form.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-teal-50 p-6 text-teal-900">
          <div className="mb-2 flex items-center gap-2 font-semibold">
            <Lightbulb className="h-5 w-5" />
            Tips cepat
          </div>
          <p className="text-sm">
            Satukan semua inspirasi dalam satu moodboard dan definisikan tone/brand lebih awal agar keputusan visual konsisten.
          </p>
        </div>
      </div>
    </section>
  );
}
