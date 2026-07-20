import { Target, FileText, Clapperboard, RefreshCw, Sparkles, Rocket } from 'lucide-react';

export function Process() {
  const steps = [
    {
      num: "01",
      icon: <Target className="w-6 h-6 text-indigo-400" />,
      title: "Map the problems",
      desc: "We go through your product together and pick the features and pain points worth turning into videos."
    },
    {
      num: "02",
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      title: "Script it",
      desc: "I write the script for each video and send it to you for approval before anything gets animated."
    },
    {
      num: "03",
      icon: <Clapperboard className="w-6 h-6 text-pink-400" />,
      title: "Produce the Reel",
      desc: "I animate the video and record the voiceover, built to match your brand."
    },
    {
      num: "04",
      icon: <RefreshCw className="w-6 h-6 text-blue-400" />,
      title: "Review & revise",
      desc: "You review the final cut and I revise it until it's ready to post."
    },
    {
      num: "05",
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      title: "Finishing touches",
      desc: "I handle captions, hashtags, and the thumbnail — all done for you."
    },
    {
      num: "06",
      icon: <Rocket className="w-6 h-6 text-emerald-400" />,
      title: "Publish",
      desc: "I post it to your social media — one less thing on your plate."
    }
  ];

  return (
    <section id="process" className="py-[120px] relative z-10 text-white bg-black/60 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.15] pointer-events-none"></div>
      {/* Background Illustration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      
      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-[560px]">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">Process</div>
            <h2 className="text-4xl font-extrabold tracking-tight">How it works</h2>
            <p className="text-gray-400 mt-4 text-lg">From feature to viral Reel in 6 simple steps. You just provide the software, I handle the rest.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:border-white/20 backdrop-blur-sm overflow-hidden">
              <div className="absolute -right-6 -top-6 text-[120px] font-extrabold text-white/5 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:text-white/10">
                {step.num}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center shrink-0 mb-8 relative z-10">
                {step.icon}
              </div>
              <div className="relative z-10 mt-auto">
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
