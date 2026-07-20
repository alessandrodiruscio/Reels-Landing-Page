import { Clapperboard } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-7 flex items-center justify-between py-4 sm:py-6">
        <div className="flex items-center gap-2 font-bold text-base sm:text-xl tracking-tight truncate mr-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
            <Clapperboard className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <span className="truncate">Alessandro Di Ruscio</span>
        </div>
        <div className="hidden lg:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#work" className="hover:text-white transition-colors">Recent work</a>
          <a href="#process" className="hover:text-white transition-colors">How it works</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        <a href="https://calendar.app.google/Ymkooby1zzEKqfZf8" target="_blank" rel="noopener noreferrer" className="px-4 py-2 sm:px-5 sm:py-2.5 bg-white text-black text-xs sm:text-sm font-medium rounded-full hover:bg-gray-200 transition-colors duration-150 shrink-0">
          <span className="hidden sm:inline">Schedule a call</span>
          <span className="sm:hidden">Let's talk</span>
        </a>
      </div>
    </nav>
  );
}
