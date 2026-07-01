import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, FileText } from 'lucide-react';

export default function Hero() {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/srinidhi9353',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/srinidhi-n-a185652a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:ssrinidhi622@gmail.com',
      label: 'Email',
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.98 10.02a1.37 1.37 0 0 0 0 1.94l4 4a1.37 1.37 0 0 0 1.94 0l10.019-10.02a1.374 1.374 0 0 0 0-1.94L14.442.414A1.37 1.37 0 0 0 13.483 0zm5.176 10.15a.5.5 0 0 1-.354-.146l-.854-.853a.5.5 0 0 1 .708-.708l.854.854a.5.5 0 0 1-.354.853zm-3 3a.5.5 0 0 1-.354-.146l-.854-.853a.5.5 0 0 1 .708-.708l.854.854a.5.5 0 0 1-.354.853zM5.854 18.854a.5.5 0 1 1-.708-.708l3.146-3.147a.5.5 0 0 1 .708.708l-3.146 3.147z" />
          <path d="M16.183 2.943a.5.5 0 0 0-.07.704C16.809 4.547 17 5.518 17 6.5c0 4.136-3.364 7.5-7.5 7.5a7.487 7.487 0 0 1-5.138-2.013.5.5 0 1 0-.68.735A8.487 8.487 0 0 0 9.5 15c4.687 0 8.5-3.813 8.5-8.5 0-1.115-.215-2.221-.62-3.235a.5.5 0 0 0-.697-.222z" />
        </svg>
      ),
      href: 'https://leetcode.com/xua0qxGkrF/',
      label: 'LeetCode',
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen relative flex items-center pt-24 pb-12 overflow-hidden bg-grid-subtle"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column - Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Metadata badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-3 py-1 text-xs font-mono font-medium tracking-tight rounded-full bg-white/[0.03] border border-white/[0.06] text-[#B4B4C7] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7B61FF]"></span>
              Patent Published
            </span>
            <span className="px-3 py-1 text-xs font-mono font-medium tracking-tight rounded-full bg-white/[0.03] border border-white/[0.06] text-[#B4B4C7] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5D63FF]"></span>
              MERN Developer
            </span>
            <span className="px-3 py-1 text-xs font-mono font-medium tracking-tight rounded-full bg-white/[0.03] border border-white/[0.06] text-[#B4B4C7] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Open to Opportunities
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[0.95]">
            Software <br />
            <span className="text-[#5D63FF]">Engineer</span>
          </h1>

          {/* Subheading */}
          <p className="font-sans text-lg md:text-xl text-[#B4B4C7] max-w-xl mb-10 leading-relaxed font-light">
            Building products that combine design, engineering and intelligence. 
            Focused on creating fluid digital experiences that are functionally robust 
            and visually refined.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-full bg-[#5D63FF] hover:bg-[#4E54E5] text-white font-sans text-sm font-medium tracking-tight transition-all duration-300 shadow-[0_4px_20px_rgba(93,99,255,0.25)] hover:shadow-[0_4px_25px_rgba(93,99,255,0.4)] hover:-translate-y-0.5"
            >
              Explore Work
            </a>
            <a
              href="https://drive.google.com/file/d/1d6Tj4oGAztSPBvPOFIu9nlXFRuElOCW3/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-sans text-sm font-medium tracking-tight transition-all duration-300 hover:-translate-y-0.5"
            >
              <FileText size={16} className="text-[#B4B4C7]" />
              Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="text-[#B4B4C7] hover:text-[#5D63FF] hover:scale-110 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Cinematic Portrait Image */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end w-full relative group"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {/* Extremely Subtle Ambient Light Behind Image */}
          <div className="absolute -inset-4 bg-white/5 rounded-2xl blur-2xl opacity-10 pointer-events-none"></div>

          {/* Portrait Container */}
          <div className="w-full max-w-[400px] lg:max-w-[420px] relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.01]">
            <motion.img
              src="images/profile.jpeg"
              alt="Srinidhi Portrait"
              className="w-full h-auto object-contain grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
            {/* Minimal overlay vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-20"></div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-40">
        <span className="font-mono text-[10px] tracking-widest text-[#B4B4C7] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-[#B4B4C7]" />
        </motion.div>
      </div>

    </section>
  );
}
