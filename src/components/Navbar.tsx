import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#05070B]/70 backdrop-blur-xl border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand/Logo */}
        <a
          href="#"
          className="font-heading text-xl font-medium tracking-tight text-white flex items-center gap-2 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#5D63FF] group-hover:scale-150 transition-all duration-300"></span>
          Srinidhi
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm text-[#B4B4C7] hover:text-white transition-colors duration-300 relative py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#5D63FF] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <a
            href="https://drive.google.com/file/d/1d6Tj4oGAztSPBvPOFIu9nlXFRuElOCW3/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-sans text-xs font-medium transition-all duration-300"
          >
            Resume
            <ArrowUpRight size={14} className="text-[#B4B4C7]" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white/80 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[72px] bg-[#05070B]/95 backdrop-blur-2xl border-b border-white/5 py-8 px-6 transition-all duration-500 ease-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-heading text-lg text-[#B4B4C7] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1d6Tj4oGAztSPBvPOFIu9nlXFRuElOCW3/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-[#5D63FF] text-white font-sans text-sm font-medium transition-all duration-300"
          >
            Resume
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
}
