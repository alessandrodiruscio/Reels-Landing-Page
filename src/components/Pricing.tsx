import { ArrowRight, Sparkles } from 'lucide-react';

export function Pricing() {
  const packages = [
    {
      title: "Ad Creative",
      subtitle: "For paid campaigns",
      desc: "A batch of scroll-stopping videos built to test as ad creative — different hooks, same core message, so you can see what converts before scaling spend.",
      subtitleColor: "text-amber-400",
      buttonColor: "hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/30",
      illustration: (
        <div className="relative w-full h-[220px] bg-[#0a0a0a] rounded-[28px] border border-white/5 overflow-hidden flex items-center justify-center group-hover:border-amber-500/20 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px] group-hover:bg-amber-500/20 transition-colors duration-700"></div>
          
          <div className="flex gap-3 items-center relative z-10 w-full justify-center px-4">
            {/* Version A */}
            <div className="w-[80px] h-[120px] bg-white/5 border border-white/10 rounded-xl p-2 flex flex-col gap-2 shadow-xl -rotate-6 translate-y-4 group-hover:-translate-y-1 group-hover:-rotate-12 transition-all duration-700">
              <div className="w-full h-1/2 bg-amber-500/20 rounded-lg relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="w-3/4 h-1.5 bg-white/20 rounded-full"></div>
              <div className="w-1/2 h-1.5 bg-white/10 rounded-full"></div>
              <div className="mt-auto flex justify-between items-center">
                <div className="w-3 h-3 rounded-full bg-white/10"></div>
                <div className="w-6 h-3 rounded-full bg-amber-500/30"></div>
              </div>
            </div>
            {/* Version B */}
            <div className="w-[96px] h-[144px] bg-white/10 border border-white/20 rounded-xl p-2.5 flex flex-col gap-2 shadow-2xl z-10 relative group-hover:-translate-y-2 transition-transform duration-500 delay-100">
              <div className="absolute -top-3 -right-3 bg-amber-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">WINNER</div>
              <div className="w-full h-1/2 bg-amber-500/40 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-amber-500/80"></div>
              </div>
              <div className="w-4/5 h-2 bg-white/30 rounded-full"></div>
              <div className="w-2/3 h-1.5 bg-white/20 rounded-full"></div>
              <div className="mt-auto flex justify-between items-center">
                <div className="w-4 h-4 rounded-full bg-white/20"></div>
                <div className="w-8 h-4 rounded-full bg-amber-500"></div>
              </div>
            </div>
            {/* Version C */}
            <div className="w-[80px] h-[120px] bg-white/5 border border-white/10 rounded-xl p-2 flex flex-col gap-2 shadow-xl rotate-6 translate-y-4 group-hover:-translate-y-1 group-hover:rotate-12 transition-all duration-700">
              <div className="w-full h-1/2 bg-amber-500/10 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="w-full h-1.5 bg-white/20 rounded-full"></div>
              <div className="w-2/3 h-1.5 bg-white/10 rounded-full"></div>
              <div className="mt-auto flex justify-between items-center">
                <div className="w-3 h-3 rounded-full bg-white/10"></div>
                <div className="w-6 h-3 rounded-full bg-amber-500/30"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Organic Content",
      subtitle: "For consistent social presence",
      desc: "A steady stream of videos — for example, 3 per week — so your feed never goes quiet and your audience keeps hearing from you.",
      subtitleColor: "text-indigo-400",
      buttonColor: "hover:bg-indigo-500/10 hover:text-indigo-400 hover:border-indigo-500/30",
      illustration: (
        <div className="relative w-full h-[220px] bg-[#0a0a0a] rounded-[28px] border border-white/5 overflow-hidden flex items-center justify-center group-hover:border-indigo-500/20 transition-colors duration-500">
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/10 blur-[50px] group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
          
          <div className="grid grid-cols-3 gap-3 relative z-10 w-full px-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`flex flex-col gap-2 ${i === 2 ? 'group-hover:-translate-y-2' : 'translate-y-2 group-hover:translate-y-0'} transition-transform duration-700 ${i === 1 ? 'delay-75' : i === 2 ? 'delay-150' : 'delay-200'}`}>
                <div className={`w-full aspect-[9/16] bg-white/5 border border-white/10 rounded-lg relative overflow-hidden transition-colors duration-500 ${i === 2 ? 'group-hover:border-indigo-500/40 bg-white/10' : 'group-hover:border-indigo-500/20'}`}>
                  <div className="absolute top-2 left-2 flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    <div className="w-4 h-1.5 rounded-full bg-white/10"></div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full ${i === 2 ? 'bg-indigo-400' : 'bg-indigo-500/60'} rounded-full`} style={{ width: `${30 + i * 20}%` }}></div>
                  </div>
                </div>
                <div className={`w-1/2 h-1 rounded-full mx-auto ${i === 2 ? 'bg-indigo-500/50' : 'bg-white/10'}`}></div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Custom",
      subtitle: "For launches and one-off needs",
      desc: "A single explainer, a full onboarding series, or anything in between — scoped around what your team needs right now.",
      subtitleColor: "text-pink-400",
      buttonColor: "hover:bg-pink-500/10 hover:text-pink-400 hover:border-pink-500/30",
      illustration: (
        <div className="relative w-full h-[220px] bg-[#0a0a0a] rounded-[28px] border border-white/5 overflow-hidden flex items-center justify-center group-hover:border-pink-500/20 transition-colors duration-500">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-500/10 blur-[50px] group-hover:bg-pink-500/20 transition-colors duration-700"></div>
          
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            {/* Central hub */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.2)] z-20 group-hover:scale-110 transition-transform duration-700">
              <Sparkles className="w-7 h-7 text-pink-400 group-hover:animate-pulse" />
            </div>
            
            {/* Orbiting elements */}
            <div className="absolute w-[120px] h-[120px] border border-white/10 rounded-full border-dashed group-hover:animate-[spin_6s_linear_infinite] animate-[spin_10s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-black border border-white/20 rounded-md flex items-center justify-center">
                <div className="w-2 h-2 bg-pink-500/50 rounded-sm"></div>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-pink-400/80 rounded-full shadow-[0_0_10px_rgba(244,114,182,0.5)]"></div>
            </div>
            
            <div className="absolute w-[180px] h-[180px] border border-white/5 rounded-full border-dashed group-hover:animate-[spin_10s_linear_infinite_reverse] animate-[spin_15s_linear_infinite_reverse]">
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-6 h-8 bg-black border border-white/20 rounded-lg flex flex-col gap-1 p-1">
                <div className="w-full h-1 bg-white/20 rounded-full"></div>
                <div className="w-full h-1 bg-white/20 rounded-full"></div>
                <div className="w-full h-1 bg-pink-500/40 rounded-full"></div>
              </div>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-pink-500/20 border border-pink-500/30 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="pricing" className="py-[120px] relative z-10 text-white overflow-hidden bg-gradient-to-b from-indigo-950/20 to-black border-t border-indigo-500/10">
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none mix-blend-overlay"></div>
      {/* Background Illustration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <div className="max-w-[560px] mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">Packages</div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white">How we can work together</h2>
          <p className="text-gray-400 mt-4 text-lg">Choose the package that fits your current goals, whether you're testing ads or building an audience.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => (
            <div key={idx} className="group bg-white/5 border border-white/10 rounded-[32px] p-2 flex flex-col transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 backdrop-blur-sm">
              {pkg.illustration}
              
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                  <div className={`text-[13px] font-semibold ${pkg.subtitleColor} uppercase tracking-wider`}>{pkg.subtitle}</div>
                </div>
                
                <p className="text-gray-400 text-[15px] leading-relaxed mb-8 flex-1">
                  {pkg.desc}
                </p>
                
                <a href="https://calendar.app.google/Ymkooby1zzEKqfZf8" target="_blank" rel="noopener noreferrer" className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 text-white transition-all whitespace-nowrap mt-auto ${pkg.buttonColor}`}>
                  Schedule a call <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
