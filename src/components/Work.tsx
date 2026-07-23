import { useState } from 'react';
import { CommuniLogo, WithMeLogo, ReapLogo } from './Logos';

export function Work() {
  const [playing, setPlaying] = useState<Record<number, boolean>>({});
  const [iframeLoaded, setIframeLoaded] = useState<Record<number, boolean>>({});

  const items = [
    {
      id: 1,
      client: "WPFunnels",
      domain: "getwpfunnels.com",
      videoId: "hOOUQhzSzzYN",
      thumbnail: "https://api.livid.com/v1/thumbnails/thumbnails%2F0f3f309c-01d1-42ae-aaef-56da3c58bc11%2F8f5a52c7-054b-4de3-b623-2ea5b7a13439.jpg"
    },
    {
      id: 2,
      client: "Communi",
      domain: "communi.app",
      videoId: "2KBXvo9ImXEW",
      thumbnail: "https://api.livid.com/v1/thumbnails/thumbnails%2F40207158-e7c4-4d7c-a4b2-018532ce3fac%2F4eee5b70-dd51-4d55-b4ce-54edf54ca89c.jpg"
    },
    {
      id: 3,
      client: "Fluent Forms",
      domain: "fluentforms.com",
      videoId: "n9uzExkR3DG9",
      thumbnail: "https://api.livid.com/v1/thumbnails/thumbnails%2F35aee909-e4aa-4f79-8a34-c6d25e905610%2F56181a51-bd2b-4995-b686-d3323b3e6900.jpg"
    },
    {
      id: 4,
      client: "WithMe",
      domain: "withme.com",
      videoId: "q4kc2OoYT_Di",
      thumbnail: "https://api.livid.com/v1/thumbnails/thumbnails%2F865d7f62-107f-48a4-808d-ded559c5df94%2Fcd098196-5916-4acc-b711-61afd29eda03.jpg"
    },
    {
      id: 5,
      client: "PDF.net",
      domain: "pdf.net",
      videoId: "SjWe26x2wkxW",
      thumbnail: "https://api.livid.com/v1/thumbnails/thumbnails%2F6907f446-ec56-42e4-96fe-a38c5c7ae13a%2F902ff8a8-4067-4368-bcce-d34848519e6e.jpg"
    },
    {
      id: 7,
      client: "Reap",
      domain: "reap.global",
      videoId: "mnWxrUuEfcYl",
      thumbnail: "https://api.livid.com/v1/thumbnails/thumbnails%2F0259487c-282b-4911-95b8-f8b1eb1ebe8d%2Fd6bed21a-d332-4ea5-aed1-082f9de4f05a.jpg"
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
                <div className="aspect-[9/16] relative bg-[#050505] group cursor-pointer" onClick={() => !playing[item.id] && setPlaying(prev => ({ ...prev, [item.id]: true }))}>
                  {/* Thumbnail Layer */}
                  <div className={`absolute inset-0 transition-opacity duration-500 z-0 ${iframeLoaded[item.id] ? 'opacity-0' : 'opacity-100'}`}>
                    <img src={item.thumbnail} alt={item.client} className="w-full h-full object-cover absolute inset-0" loading="lazy" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      {!playing[item.id] ? (
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-xl border border-white/30">
                          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-12 h-12 border-[3px] border-white/20 border-t-white/90 rounded-full animate-spin shadow-xl"></div>
                      )}
                    </div>
                  </div>

                  {/* Video Layer */}
                  {playing[item.id] && (
                    <iframe 
                      src={`https://livid.com/embed/${item.videoId}?muted=false&autoplay=1`} 
                      className={`w-full h-full absolute inset-0 z-10 transition-opacity duration-500 ${iframeLoaded[item.id] ? 'opacity-100' : 'opacity-0'}`}
                      allow="autoplay; fullscreen"
                      frameBorder="0"
                      onLoad={() => setIframeLoaded(prev => ({ ...prev, [item.id]: true }))}
                    ></iframe>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
