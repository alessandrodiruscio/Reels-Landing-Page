import { Calendar } from 'lucide-react';

export function CTA() {
  return (
    <section id="cta" className="py-[120px] pb-20 relative z-10">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="bg-gradient-to-br from-indigo-900/40 via-purple-900/20 to-[#050505] border border-indigo-500/20 backdrop-blur-xl rounded-[32px] pt-8 md:pt-10 px-6 sm:px-8 md:px-12 pb-0 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 md:gap-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-700"></div>

          <div className="relative z-10 w-full md:w-[52%] flex flex-col items-start pt-2 pb-6 md:py-8">
            <h2 className="text-[clamp(28px,3.5vw,36px)] max-w-[500px] font-extrabold tracking-tight text-white leading-tight">
              Curious how this could work for you?
            </h2>
            <p className="text-indigo-200/80 mt-4 max-w-[460px] text-[16px] leading-relaxed mb-8">
              Let's schedule a brief call. We can chat about your product, your goals, and explore how short-form video could fit into your current strategy.
            </p>
            <a href="https://calendar.app.google/Ymkooby1zzEKqfZf8" target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-center gap-2 bg-white text-black font-bold text-[15px] py-4 px-8 rounded-xl hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] whitespace-nowrap">
              <Calendar className="w-5 h-5" />
              Schedule a call
            </a>
          </div>

          <div className="relative z-10 w-full md:w-[45%] flex justify-center md:justify-end items-end shrink-0 mt-2 md:mt-0 pointer-events-none">
            <img 
              src="/alessandro2.png"
              alt="Alessandro" 
              referrerPolicy="no-referrer"
              className="h-[280px] sm:h-[340px] md:h-[380px] lg:h-[420px] w-auto max-w-full object-contain object-bottom filter drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

