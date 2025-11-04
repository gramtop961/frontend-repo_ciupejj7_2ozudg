import React from 'react';
import { CheckCircle, ToggleLeft, Gauge, Table, User, Bell, Calendar, FileText } from 'lucide-react';

export default function StarterKitSection() {
  return (
    <section id="starter" className="bg-white py-14 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-2xl font-bold">Starter Kit Komponen SIMEL</h2>

        {/* A. Fondasi Desain */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-6">
            <h3 className="mb-3 font-semibold">A. Fondasi Desain (Style Guide)</h3>
            <div className="space-y-4 text-sm">
              <div>
                <div className="mb-2 font-medium">Palet Warna</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Primary-Blue', color: '#005A87' },
                    { name: 'Secondary-Teal', color: '#00AEEF' },
                    { name: 'Alert-Red', color: '#E53935' },
                    { name: 'Warning-Yellow', color: '#FFC107' },
                    { name: 'Success-Green', color: '#4CAF50' },
                    { name: 'Background-Light', color: '#F4F7F6' },
                    { name: 'Surface-White', color: '#FFFFFF', border: true },
                    { name: 'Text-Primary', color: '#212529' },
                    { name: 'Text-Secondary', color: '#6C757D' },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center gap-2">
                      <span
                        className="inline-block h-6 w-6 rounded"
                        style={{ backgroundColor: c.color, border: c.border ? '1px solid #e5e7eb' : 'none' }}
                      />
                      <span className="text-xs text-slate-700">{c.name} {c.color}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-2 font-medium">Tipografi</div>
                <ul className="text-slate-700">
                  <li>Font: Inter</li>
                  <li>H1: 32px Bold • H2: 24px Bold • Body: 16px Regular • Label: 14px Medium • Button: 16px Semibold</li>
                </ul>
              </div>
            </div>
          </div>

          {/* B. Komponen Inti */}
          <div className="rounded-lg border border-slate-200 p-6">
            <h3 className="mb-3 font-semibold">B. Komponen Inti</h3>
            <ul className="grid gap-3 text-sm text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-teal-600" /> Tombol: Primary, Secondary, Alert (State: Default, Hover, Disabled)</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-teal-600" /> Kartu: KPI, Chart, Control</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-teal-600" /> Form: Input, Dropdown, Date Range Picker</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-teal-600" /> Navigasi: Sidebar Item, Header Profile <User className="ml-1 h-3.5 w-3.5" />, Header Notification <Bell className="ml-1 h-3.5 w-3.5" /></li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-teal-600" /> Widget: Toggle <ToggleLeft className="ml-1 h-4 w-4" />, Table Row <Table className="ml-1 h-4 w-4" />, Gauge <Gauge className="ml-1 h-4 w-4" /></li>
            </ul>
          </div>
        </div>

        {/* C. Halaman (Checklist) */}
        <div className="mt-6 rounded-lg border border-slate-200 p-6">
          <h3 className="mb-3 font-semibold">C. Daftar Halaman (Checklist Desain)</h3>
          <ul className="grid gap-2 text-sm text-slate-700 md:grid-cols-2">
            {[
              'Halaman Login',
              'Dashboard Publik (Dosen & Mahasiswa)',
              'Dashboard Manajer',
              'Dashboard Pimpinan',
              'Dashboard Teknisi',
              'Halaman Kontrol Perangkat',
              'Halaman Analitik & Riwayat',
              'Halaman Generator Laporan',
              'Modal/Dropdown Notifikasi Anomali',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-600">
            <div className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1"><Calendar className="h-3.5 w-3.5" /> Gunakan Date Range untuk Analitik</div>
            <div className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1"><FileText className="h-3.5 w-3.5" /> Siapkan format PDF/Excel</div>
          </div>
        </div>
      </div>
    </section>
  );
}
