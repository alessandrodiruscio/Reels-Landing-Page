import { useState } from 'react';
import { CommuniLogo, WithMeLogo, ReapLogo } from './Logos';

export function Work() {
  const [playing, setPlaying] = useState<Record<number, boolean>>({});
  const [iframeLoaded, setIframeLoaded] = useState<Record<number, boolean>>({});

  const unmuteVideo = (id: number, provider?: string) => {
    const iframe = document.getElementById(`iframe-${id}`) as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      if (provider === 'vimeo') {
        try {
          iframe.contentWindow.postMessage(JSON.stringify({ method: 'setVolume', value: 1 }), '*');
          iframe.contentWindow.postMessage(JSON.stringify({ method: 'setMuted', value: false }), '*');
          iframe.contentWindow.postMessage(JSON.stringify({ method: 'play' }), '*');
        } catch (e) {
          console.error(e);
        }
      } else if (provider === 'youtube') {
        try {
          iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'unMute', args: [] }), '*');
          iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'setVolume', args: [100] }), '*');
          iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'playVideo', args: [] }), '*');
        } catch (e) {
          console.error(e);
        }
      } else {
        try {
          iframe.contentWindow.postMessage(JSON.stringify({ method: 'unmute' }), '*');
          iframe.contentWindow.postMessage(JSON.stringify({ method: 'setVolume', value: 1 }), '*');
        } catch (e) {
          console.error(e);
        }
      }
    }
  };

  const items = [
    {
      id: 1,
      client: "WPFunnels",
      domain: "getwpfunnels.com",
      videoId: "1211043772",
      provider: "vimeo",
      thumbnail: "https://i.vimeocdn.com/video/2181125015-bd9987de91af2798db9ccad690846de2c9c51b09610f80aca2fdce4eef40f550-d_640"
    },
    {
      id: 2,
      client: "Communi",
      domain: "communi.app",
      videoId: "1206473561",
      provider: "vimeo",
      thumbnail: "https://i.vimeocdn.com/video/2175325024-281e59e243b7b86ed09ee323b7b29b60e086e46f43bf5bf504c6c2468122593b-d_640"
    },
    {
      id: 3,
      client: "Fluent Forms",
      domain: "fluentforms.com",
      videoId: "1211043761",
      provider: "vimeo",
      thumbnail: "https://i.vimeocdn.com/video/2181125068-14f9fb9dd4ffa4d39ac1abe94e94c926f8ab797e6aad7af6122d7ddeee06d610-d_640"
    },
    {
      id: 4,
      client: "WithMe",
      domain: "withme.com",
      videoId: "1207413569",
      provider: "vimeo",
      thumbnail: "https://i.vimeocdn.com/video/2176494508-55b72ea64dc7de941482f1187e7c59ccffcb443766200f75ddf2a28b549499d2-d_640"
    },
    {
      id: 5,
      client: "PDF.net",
      domain: "pdf.net",
      videoId: "1212588251",
      provider: "vimeo",
      thumbnail: "https://i.vimeocdn.com/video/2183055501-83d78352570329b3afedbe9cb6bbaf8d3977176c51f321ec9398dd19192091d5-d_640"
    },
    {
      id: 7,
      client: "Reap",
      domain: "reap.global",
      videoId: "1212588769",
      provider: "vimeo",
      thumbnail: "https://i.vimeocdn.com/video/2183055684-7d9827d374d51cd378c6c7ed7f72a689a2f4e582a63ee47589a4616e453d7589-d_640"
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
            const isCommuni = item.client.includes('Communi');
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
                <div 
                  className="aspect-[9/16] relative bg-[#050505] group cursor-pointer" 
                  onClick={() => {
                    if (!playing[item.id]) {
                      setPlaying(prev => ({ ...prev, [item.id]: true }));
                    } else {
                      unmuteVideo(item.id, item.provider);
                    }
                  }}
                >
                  {playing[item.id] ? (
                    <>
                      {!iframeLoaded[item.id] && (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#050505] z-0">
                          <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin"></div>
                        </div>
                      )}
                      <iframe 
                        id={`iframe-${item.id}`}
                        src={
                          item.provider === 'youtube'
                            ? `https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=0&playsinline=1&enablejsapi=1&rel=0&modestbranding=1&fs=0&iv_load_policy=3`
                            : item.provider === 'vimeo'
                            ? `https://player.vimeo.com/video/${item.videoId}?autoplay=1&muted=0&playsinline=1&autopause=0&api=1`
                            : `https://livid.com/embed/${item.videoId}?muted=false&autoplay=1&playsinline=1`
                        } 
                        className={`w-full h-full absolute inset-0 z-10 transition-opacity duration-300 ${iframeLoaded[item.id] ? 'opacity-100' : 'opacity-0'}`}
                        allow="autoplay *; fullscreen *; picture-in-picture *; encrypted-media *; volume *"
                        frameBorder="0"
                        onLoad={() => {
                          setIframeLoaded(prev => ({ ...prev, [item.id]: true }));
                          unmuteVideo(item.id, item.provider);
                          setTimeout(() => unmuteVideo(item.id, item.provider), 300);
                          setTimeout(() => unmuteVideo(item.id, item.provider), 800);
                        }}
                      ></iframe>
                    </>
                  ) : (
                    <>
                      <img src={item.thumbnail} alt={item.client} className="w-full h-full object-cover absolute inset-0" loading="lazy" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-xl border border-white/30">
                          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </>
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
