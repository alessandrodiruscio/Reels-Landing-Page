import { PenTool, Video, Image as ImageIcon, Hash, Sparkles } from 'lucide-react';

export function Deliverables() {
  return (
    <section id="deliverables" className="py-[100px] relative z-10 text-white overflow-hidden bg-gradient-to-b from-black to-[#08080c] border-t border-white/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none mask-image:linear-gradient(to_bottom,black,transparent)"></div>
      {/* Background Illustration */}
      <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            The Full Package
          </div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold tracking-tight text-white mb-6 max-w-[600px]">Everything you need to hit publish</h2>
          <p className="text-gray-400 text-lg max-w-[600px] leading-relaxed">
            You don't just get a video file. Every project includes the script, animation, thumbnails, and social copy you need to publish immediately.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {/* Card 1: Wide */}
          <div className="md:col-span-2 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start justify-between group hover:border-white/20 transition-colors">
            <div className="flex-1">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-6">
                <PenTool className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Scripting & Storyboarding</h3>
              <p className="text-gray-400 text-[15px] leading-relaxed max-w-[400px]">I distill your complex features into a punchy, easy-to-understand narrative that hooks viewers instantly.</p>
            </div>
            {/* Decorative element */}
            <div className="hidden lg:flex w-[200px] h-[160px] bg-black/40 rounded-2xl border border-white/5 p-5 flex-col gap-3 shadow-2xl shrink-0 group-hover:-translate-y-2 group-hover:rotate-2 transition-transform duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/20 blur-[30px]"></div>
              <div className="w-2/3 h-2 bg-white/20 rounded-full"></div>
              <div className="w-full h-2 bg-white/10 rounded-full"></div>
              <div className="w-4/5 h-2 bg-white/10 rounded-full"></div>
              <div className="w-full h-2 bg-white/10 rounded-full mt-auto"></div>
            </div>
          </div>

          {/* Card 2: Square */}
          <div className="md:col-span-1 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[32px] p-8 md:p-10 flex flex-col group hover:border-white/20 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-6">
              <Video className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">AI Animation</h3>
            <p className="text-gray-400 text-[15px] leading-relaxed">High-quality, eye-catching visuals with smooth transitions and professional voiceovers to keep them watching.</p>
          </div>

          {/* Card 3: Square */}
          <div className="md:col-span-1 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[32px] p-8 md:p-10 flex flex-col group hover:border-white/20 transition-colors relative overflow-hidden">
             <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-500/10 blur-[40px] pointer-events-none group-hover:bg-pink-500/20 transition-colors duration-500"></div>
            <div className="w-14 h-14 rounded-2xl bg-pink-500/20 border border-pink-500/30 text-pink-400 flex items-center justify-center mb-6 relative z-10">
              <ImageIcon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white relative z-10">Custom Thumbnails</h3>
            <p className="text-gray-400 text-[15px] leading-relaxed relative z-10">Scroll-stopping thumbnails optimized for your specific platforms so people actually click play.</p>
          </div>

          {/* Card 4: Wide */}
          <div className="md:col-span-2 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start justify-between group hover:border-white/20 transition-colors">
            <div className="flex-1">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6">
                <Hash className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Captions & Hashtags</h3>
              <p className="text-gray-400 text-[15px] leading-relaxed max-w-[400px]">Engaging social copy and targeted hashtags designed to maximize reach and conversion.</p>
            </div>
            {/* Decorative element */}
            <div className="hidden lg:flex w-[200px] h-[160px] bg-black/40 rounded-2xl border border-white/5 p-4 flex-col gap-3 shadow-2xl shrink-0 items-start justify-end group-hover:-translate-y-2 group-hover:-rotate-2 transition-transform duration-500 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-20 h-20 bg-emerald-500/20 blur-[30px]"></div>
               <div className="px-3 py-1.5 bg-blue-500/20 text-blue-400 text-[11px] rounded-lg font-mono font-medium border border-blue-500/20">#saas</div>
               <div className="px-3 py-1.5 bg-purple-500/20 text-purple-400 text-[11px] rounded-lg font-mono font-medium border border-purple-500/20">#software</div>
               <div className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 text-[11px] rounded-lg font-mono font-medium border border-emerald-500/20">#launch</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
