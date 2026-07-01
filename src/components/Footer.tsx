
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 border-t border-white/5 bg-[#05070B] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side */}
        <div className="text-left">
          <span className="font-heading text-lg font-bold text-white tracking-tight">Srinidhi</span>
          <p className="font-sans text-xs text-[#B4B4C7] mt-2 font-light">
            Software Development Engineer. Crafting logic & interface.
          </p>
        </div>

        {/* Center: Quote */}
        <div className="hidden lg:block">
          <p className="font-sans text-xs text-white/30 italic font-light">
            "Code is poetry written in logic"
          </p>
        </div>

        {/* Right Side: Copyright & Scroll to Top */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <span className="font-sans text-xs text-white/30 font-light">
            &copy; {new Date().getFullYear()} Srinidhi. All rights reserved.
          </span>
          
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
