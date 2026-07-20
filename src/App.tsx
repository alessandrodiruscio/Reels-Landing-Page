/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Process } from './components/Process';
import { Deliverables } from './components/Deliverables';
import { Pricing } from './components/Pricing';
import { Stats } from './components/Stats';
import { CTA } from './components/CTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen relative text-white font-sans bg-[#050505]">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay z-50"></div>
      
      {/* Background Ambient Glow */}
      <div className="fixed top-[-200px] right-[-100px] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Work />
        <Process />
        <Deliverables />
        <Pricing />
        <Stats />
        <CTA />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
