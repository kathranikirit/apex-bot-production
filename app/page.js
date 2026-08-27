web application/stitch/projects/12538483303495146642/screens/221990c5fa2c4b84b08f20eaf1b4ace6
/**
 * Apex AI BOT - Final Production Landing Page
 * Optimized for Lead Generation and Industrial Security.
 */
import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f8f9ff] font-sans text-[#001b3d]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold tracking-tighter text-[#001b3d]">APEX AI BOT</div>
        </div>
        <button className="bg-[#001b3d] text-white px-5 py-2 rounded-full text-sm font-semibold">Contact Us</button>
      </header>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-6 tracking-widest uppercase">
          Industrial Intelligence & Security
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Architecting <span className="text-blue-600">Industrial Reliability</span> Through Precision Automation.
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Empowering decision-makers with seamless integrations across physical security, digital ecosystems, and operational infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#001b3d] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-900/20">Industrial Security Solutions</button>
          <button className="bg-white border-2 border-[#001b3d] text-[#001b3d] px-8 py-4 rounded-xl font-bold">Digital ERP Solutions</button>
        </div>
      </main>

      {/* Trust Stats */}
      <section className="py-12 border-y border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-mono text-sm tracking-tighter opacity-60">
          <div>18+ YEARS EXPERTISE</div>
          <div>ZERO-TOUCH AI TRIAGE</div>
          <div>NAGPUR-BASED SUPPORT</div>
          <div>INDUSTRIAL COMPLIANCE</div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 px-6 bg-blue-50/30">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-2xl border border-blue-100">
          <h2 className="text-2xl font-bold mb-2">Quick Inquiry</h2>
          <p className="text-gray-500 text-sm mb-8 font-mono">Secure & Confidential Transmission</p>
          
          <form className="space-y-6 text-left">
            <div>
              <label className="block text-xs font-bold uppercase mb-2 text-gray-400">Corporate Email</label>
              <input type="email" placeholder="name@company.com" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-2 text-gray-400">Service Interest</label>
              <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none">
                <option>Select an area...</option>
                <option>Industrial Security (CCTV/Fire)</option>
                <option>Digital ERP / Custom Software</option>
                <option>Consulting & Strategy</option>
              </select>
            </div>
            <button className="w-full bg-[#001b3d] text-white py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2">
              Submit Request <span>&rarr;</span>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 text-center">
        <div className="text-xl font-bold mb-4">APEX</div>
        <p className="text-gray-400 text-xs">© 2024 Apex AI BOT. Precision Industrial Solutions.</p>
      </footer>
    </div>
  );
}
