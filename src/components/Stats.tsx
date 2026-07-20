import { useEffect, useRef } from 'react';
import { useInView, animate } from 'motion/react';
import { TrendingUp, Users, Target, ShoppingCart } from 'lucide-react';

function AnimatedNumber({ value }: { value: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          if (nodeRef.current) {
            nodeRef.current.textContent = `+${Math.round(v)}%`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return <span ref={nodeRef}>+0%</span>;
}

export function Stats() {
  const stats = [
    { value: 87, label: "Trial Sign-ups", icon: <TrendingUp className="w-5 h-5 text-indigo-400" /> },
    { value: 97, label: "Customer Growth", icon: <Users className="w-5 h-5 text-purple-400" /> },
    { value: 71, label: "Better ROI", sub: "Than Image Posts", icon: <Target className="w-5 h-5 text-pink-400" /> },
    { value: 64, label: "More Sales", sub: "From Social Media", icon: <ShoppingCart className="w-5 h-5 text-amber-400" /> },
  ];

  return (
    <section id="impact" className="py-[100px] relative z-10 text-white overflow-hidden bg-gradient-to-br from-[#0a0a0f] to-black border-t border-white/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
            The Impact
          </div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold tracking-tight text-white max-w-[800px] mx-auto leading-tight">
            What happens when you switch to short video
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm group">
              <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="text-gray-300 font-semibold text-lg leading-tight">
                {stat.label}
              </div>
              {stat.sub && (
                <div className="text-gray-500 text-sm mt-1">
                  {stat.sub}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
