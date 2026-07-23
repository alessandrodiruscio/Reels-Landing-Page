import { useEffect, useState } from 'react';
import { ElementorLogo, SamcartLogo } from './Logos';
import { Sparkles } from 'lucide-react';

export function Hero() {
  const [views, setViews] = useState(2410234);
  const [recentViewers, setRecentViewers] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setViews(prev => prev + Math.floor(Math.random() * 8) + 1);
      if (Math.random() > 0.5) {
        setRecentViewers(prev => Math.max(8, prev + Math.floor(Math.random() * 5) - 2));
      }
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050505] to-[#050505] text-white pt-[140px] overflow-hidden relative pb-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none mix-blend-overlay mask-image:linear-gradient(to_bottom,black,transparent)"></div>
      <div className="max-w-[1120px] mx-auto px-7 flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-[55%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-bold tracking-wide uppercase backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.15)]">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            for SaaS &amp; app teams
          </div>
          <h1 className="text-[clamp(40px,5vw,64px)] leading-[1.1] font-extrabold tracking-tight">
            <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Viral Reels</em> Built for Your SaaS or App
          </h1>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-[540px]">
            Are you using short videos on Instagram or TikTok to skyrocket your software? Let me handle the entire pipeline—scripts, recording, editing, and captions—so you can get discovered by millions, and drive consistent sign-ups.
          </p>
          <div className="flex gap-[14px] mt-[34px] flex-wrap">
            <a href="https://calendar.app.google/Ymkooby1zzEKqfZf8" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors duration-150">
              Schedule a call
            </a>
            <a href="#work" className="px-6 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-150">
              See examples ↓
            </a>
          </div>
        </div>

        {/* Right Side: Phone Mockup */}
        <div className="w-full lg:w-[45%] h-full flex items-center justify-center relative min-h-[640px]">
          {/* Device Frame */}
          <div className="w-[320px] h-[640px] bg-[#111] rounded-[48px] p-3 border-[6px] border-gray-800 shadow-2xl relative overflow-hidden shrink-0">
            {/* Screen Content (Simulated Video) */}
            <div className="w-full h-full bg-black rounded-[38px] relative overflow-hidden flex flex-col items-center justify-center">
              <img 
                src="https://api.livid.com/v1/thumbnails/thumbnails%2Ff5c4db93-1862-48a2-87ba-24858eeb6474%2F699e3798-9936-41a7-adde-ec8f9de66193.jpg"
                alt="Video loading"
                className="absolute top-1/2 left-1/2 w-[400px] h-[712px] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
              />
              <iframe 
                src="https://livid.com/embed/ec23C38T71sq?autoplay=1&loop=1&muted=1&controls=0&background=1" 
                allow="autoplay; fullscreen"
                className="absolute top-1/2 left-1/2 w-[400px] h-[712px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{ border: 'none' }}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-black/20 to-black/80 pointer-events-none"></div>

              {/* Video UI Overlays */}
              <div className="absolute bottom-8 left-4 right-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/30 flex items-center justify-center">
                    <span className="text-[10px] font-bold">AR</span>
                  </div>
                  <div className="text-sm font-bold flex items-center gap-1">
                    @alessandro.video
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                  </div>
                </div>
                <p className="text-[12px] text-gray-200 line-clamp-2">This is how SaaS features actually get clicked. 🔥 #saas #marketing #design</p>
              </div>
              <div className="absolute right-4 bottom-24 flex flex-col gap-6 items-center">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 text-red-500">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  </div>
                  <span className="text-[10px] font-bold">128k</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 text-white">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
                  </div>
                  <span className="text-[10px] font-bold">4.2k</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 text-white">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M14.73 3.3L5.4 12.63c-.39.39-.39 1.02 0 1.41l9.33 9.33c.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41L16.14 3.3c-.39-.39-1.02-.39-1.41 0zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
                  </div>
                  <span className="text-[10px] font-bold">Share</span>
                </div>
              </div>
              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                <div className="h-full w-2/3 bg-white shadow-[0_0_10px_white]"></div>
              </div>
            </div>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl"></div>
          </div>
          
          {/* Floating Badges */}
          <div className="absolute top-10 right-0 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl transform rotate-3 z-10 hidden sm:block animate-float">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">{views.toLocaleString()} Views</span>
            </div>
          </div>
          <div className="absolute bottom-20 left-4 lg:-left-12 p-4 bg-indigo-600/20 backdrop-blur-xl border border-indigo-500/20 rounded-2xl shadow-xl transform -rotate-3 z-10 hidden sm:block animate-float-delayed">
            <div className="text-xs font-medium text-indigo-300">Top Trending #SaaSMarketing</div>
          </div>

          {/* Constant Engagement Indicator */}
          <div className="absolute top-1/4 -left-8 lg:-left-16 p-3 bg-rose-500/10 backdrop-blur-xl border border-rose-500/20 rounded-xl shadow-xl transform -rotate-6 z-10 hidden sm:flex items-center gap-2 animate-float" style={{ animationDelay: '1.5s' }}>
             <span className="text-sm">🔥</span>
             <span className="text-xs font-semibold text-rose-200">+{recentViewers} watching now</span>
          </div>
        </div>
      </div>

      {/* Client Logos Slider */}
      <div className="mt-32 border-y border-white/5 bg-black/20 backdrop-blur-sm py-10 overflow-hidden relative w-full flex flex-col items-center">
        <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8 text-center px-4">
          Proven Reels That Work for SaaS and Apps
        </div>
        
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none mt-[60px]"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none mt-[60px]"></div>
        
        <div className="flex w-max animate-scroll items-center opacity-80 hover:opacity-100 transition-opacity duration-500">
          {[...Array(8)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex gap-16 md:gap-24 pr-16 md:pr-24 items-center shrink-0">
              {[
                { name: 'ActiveCampaign', domain: 'activecampaign.com' },
                { name: 'Canva', domain: 'canva.com' },
                { name: 'Elementor', domain: 'elementor.com' },
                { name: 'Samcart', domain: 'samcart.com' },
                { name: 'Demio', domain: 'demio.com' },
                { name: 'PDF.net', domain: 'pdf.net' },
                { name: 'WPFunnels', domain: 'getwpfunnels.com' }
              ].map((client) => {
                const isElementor = client.name === 'Elementor';
                const isSamcart = client.name === 'Samcart';
                  
                return (
                  <div key={`${groupIndex}-${client.name}`} className="flex items-center gap-4 md:gap-5 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    {isElementor ? (
                      <ElementorLogo className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    ) : isSamcart ? (
                      <SamcartLogo className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    ) : (
                      <img 
                        src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${client.domain}&size=128`} 
                        alt={`${client.name} logo`} 
                        className="w-8 h-8 md:w-10 md:h-10 rounded-md object-contain brightness-200 contrast-75"
                      />
                    )}
                    <span className="font-display font-bold text-lg md:text-xl tracking-tight text-white">{client.name}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
