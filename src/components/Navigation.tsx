export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1120px] mx-auto px-7 flex items-center justify-between py-6">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm"></div>
          </div>
          Alessandro Di Ruscio
        </div>
        <div className="hidden lg:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#work" className="hover:text-white transition-colors">Recent work</a>
          <a href="#process" className="hover:text-white transition-colors">How it works</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        <a href="https://calendar.app.google/Ymkooby1zzEKqfZf8" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-colors duration-150">
          Schedule a call
        </a>
      </div>
    </nav>
  );
}
