import React from 'react';
import HeroSpline from './components/HeroSpline.jsx';
import ReferenceSection from './components/ReferenceSection.jsx';
import TemplateSection from './components/TemplateSection.jsx';
import StarterKitSection from './components/StarterKitSection.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeroSpline />
      <ReferenceSection />
      <TemplateSection />
      <StarterKitSection />
      <footer className="border-t border-slate-200 bg-slate-50 py-8 text-center text-sm text-slate-600">
        Dibuat untuk mempermudah penyusunan desain SIMEL di Figma. Gunakan sebagai panduan awal dan sesuaikan dengan kebutuhan tim.
      </footer>
    </div>
  );
}

export default App;
