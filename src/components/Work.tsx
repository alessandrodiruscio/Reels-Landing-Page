import { CommuniLogo, WithMeLogo, ReapLogo } from './Logos';

export function Work() {
  const items = [
    {
      id: 1,
      client: "WPFunnels",
      domain: "getwpfunnels.com",
      videoId: "hOOUQhzSzzYN"
    },
    {
      id: 2,
      client: "Communi",
      domain: "communi.app",
      videoId: "2KBXvo9ImXEW"
    },
    {
      id: 3,
      client: "Fluent Forms",
      domain: "fluentforms.com",
      videoId: "n9uzExkR3DG9"
    },
    {
      id: 4,
      client: "WithMe",
      domain: "withme.com",
      videoId: "q4kc2OoYT_Di"
    },
    {
      id: 5,
      client: "PDF.net",
      domain: "pdf.net",
      videoId: "SjWe26x2wkxW"
    },
    {
      id: 7,
      client: "Reap",
      domain: "reap.global",
      videoId: "mnWxrUuEfcYl"
    }
  ];

  return (
    <section id="work" className="py-[88px] relative z-10 flex flex-col items-center bg-[#0a0a0a] border-y border-white/5">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="w-full max-w-[1200px] px-7 flex flex-col items-center text-center">
        <div className="max-w-[560px] mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">Portfolio</div>
          <h2 className="text-4xl font-extrabold tracking-tight">Recent work</h2>
          <p className="text-gray-400 mt-4 text-lg">High-energy videos made to show off software features and get sign-ups</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-[1000px]">
          {items.map((item) => {
            const isCommuni = item.client === 'Communi';
            const isWithMe = item.client === 'WithMe';
            const isReap = item.client === 'Reap';
            
            return (
              <div key={item.id} className="w-full sm:w-[280px] md:w-[260px] lg:w-[280px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[20px] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-[3px] hover:shadow-2xl hover:border-white/20 hover:bg-white/10 text-left">
                <div className="p-3.5 flex items-center gap-3 border-b border-white/5 bg-black/20">
                  {isCommuni ? (
                    <CommuniLogo className="w-5 h-5" />
                  ) : isWithMe ? (
                    <WithMeLogo className="w-5 h-5" />
                  ) : isReap ? (
                    <ReapLogo className="w-5 h-5" />
                  ) : (
                    <img 
                      src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${item.domain}&size=128`} 
                      alt={`${item.client} logo`}
                      className="w-5 h-5 rounded-md object-contain brightness-200 contrast-75"
                    />
                  )}
                  <span className="font-display font-semibold text-[15px] tracking-tight text-white">{item.client}</span>
                </div>
                <div className="aspect-[9/16] relative bg-[#050505]">
                  <iframe 
                    src={`https://livid.com/embed/${item.videoId}?muted=false`} 
                    className="w-full h-full absolute inset-0"
                    allow="autoplay; fullscreen"
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
