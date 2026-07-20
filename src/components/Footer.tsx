export function Footer() {
  return (
    <footer className="relative z-10 bg-black/40 backdrop-blur-md text-white pt-14 pb-8 border-t border-white/10">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="flex justify-between flex-wrap gap-6 pb-8 border-b border-white/10">
          <h3 className="text-2xl font-bold tracking-tight max-w-[360px]">If you want to give it a try, let's talk.</h3>
          <div className="flex gap-10 text-sm font-medium text-gray-400">
            <a href="#work" className="hover:text-white transition-colors">Recent work</a>
            <a href="#process" className="hover:text-white transition-colors">How it works</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
        </div>
        <div className="pt-6 text-[11px] font-bold text-gray-600 uppercase tracking-widest flex justify-center sm:justify-start flex-wrap gap-2.5">
          <span>© {new Date().getFullYear()} ALESSANDRO DI RUSCIO. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </footer>
  );
}
