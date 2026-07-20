import { Calendar } from 'lucide-react';
import alessandroImage from '../assets/alessandro2.png';

export function CTA() {
  return (
    <section id="cta" className="py-[120px] pb-20 relative z-10">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="bg-gradient-to-br from-indigo-900/40 via-purple-900/20 to-[#050505] border border-indigo-500/20 backdrop-blur-xl rounded-[32px] pt-[56px] px-[48px] md:pt-[64px] md:px-[64px] pb-[56px] md:pb-0 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-700"></div>

          <div className="relative z-10 md:w-[55%] flex flex-col items-start md:pb-[64px]">
            <h2 className="text-[clamp(28px,3.5vw,36px)] max-w-[500px] font-extrabold tracking-tight text-white leading-tight">
              Curious how this could work for you?
            </h2>
            <p className="text-indigo-200/80 mt-5 max-w-[460px] text-[16px] leading-relaxed mb-8">
              Let's schedule a brief call. We can chat about your product, your goals, and explore how short-form video could fit into your current strategy.
            </p>
            <a href="https://calendar.app.google/Ymkooby1zzEKqfZf8" target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-center gap-2 bg-white text-black font-bold text-[15px] py-4 px-8 rounded-xl hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] whitespace-nowrap">
              <Calendar className="w-5 h-5" />
              Schedule a call
            </a>
          </div>

          <div className="relative z-10 md:w-[45%] h-full flex justify-center md:justify-end items-end mt-auto pointer-events-none">
            <img 
              src={alessandroImage}
              alt="Alessandro" 
              className="w-full max-w-[320px] md:max-w-[420px] object-contain object-bottom -mb-2 md:-mb-6 filter drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
