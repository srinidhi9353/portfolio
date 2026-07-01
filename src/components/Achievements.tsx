import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Building, X, ShieldCheck, FileText } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  type: 'certificate' | 'patent' | 'achievement' | 'internship';
  link?: string;
}

const certificationsList: Certification[] = [
  {
    name: 'SuprMentr Technologies Internship Completion Certificate',
    issuer: 'SuprMentr Technologies Pvt Ltd',
    date: 'Feb 1, 2026 – May 15, 2026',
    image: 'images/suprmentr.png',
    description: 'Completion certificate for engineering contributions during the full-stack developer MERN internship.',
    type: 'internship',
  },
  {
    name: 'Deloitte Technology Job Simulation',
    issuer: 'Deloitte (via Forage)',
    date: '2026',
    image: 'images/delloitte.png',
    description: 'Executed analytical and tech consulting tasks covering data analysis, forensic technology, and database structures.',
    type: 'certificate',
  },
  {
    name: 'ALGOVIZ Patent Publication Certificate',
    issuer: 'Indian Patent Office',
    date: '2026',
    image: 'images/Patentimage_page-0001.jpg',
    description: 'Patent publication certificate covering the logic and visual scheduling pipeline designed for the AI-Enhanced Algorithm Visualizer.',
    type: 'patent',
  },
  {
    name: 'ET AI Hackathon Semi-Finalist Certificate',
    issuer: 'The Economic Times',
    date: '2026',
    image: 'images/ETAI.png',
    description: 'Recognized certificate for top performance in the Economic Times national AI hackathon challenge.',
    type: 'achievement',
  },
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'AWS Training and Certification',
    date: '2025',
    image: 'images/aws.png',
    description: 'AWS cloud platform fundamentals, architecture services, database management, and security credentials.',
    type: 'certificate',
  },
  {
    name: 'Oracle Academy – Java Foundations',
    issuer: 'Oracle Academy',
    date: '2024',
    image: 'images/java.png',
    description: 'Validation of Java programming foundations, syntax structures, classes, exceptions, and object-oriented principles.',
    type: 'certificate',
  },
  {
    name: 'Infosys Springboard – Data Structures & Algorithms',
    issuer: 'Infosys Springboard',
    date: '2024',
    image: 'images/dsa.png',
    description: 'Core concepts in data structures, algorithms design, search/sort optimization, and complexity calculations.',
    type: 'certificate',
  },
  {
    name: 'UiPath Automation Starter',
    issuer: 'UiPath',
    date: '2024',
    image: 'images/uipath.png',
    description: 'Credential covering basic robotic process automation triggers, flows, and bot architecture.',
    type: 'certificate',
  },
  {
    name: 'CodSoft Internship Completion Certificate',
    issuer: 'CodSoft',
    date: 'Oct 2024 – Nov 2024',
    image: 'images/codsoft.png',
    description: 'Completed projects covering HTML, CSS, JavaScript, and user experience layout debugging.',
    type: 'internship',
  },
];

export default function Achievements() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="achievements" className="py-32 border-t border-white/5 bg-[#05070B] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-24 text-left">
          <span className="font-mono text-xs text-[#5D63FF] uppercase tracking-widest block mb-4">Credentials</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white max-w-2xl leading-[1.1]">
            Certifications & Patents
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {certificationsList.map((cert, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCert(cert)}
              className="flex flex-col items-start p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300 text-left focus:outline-none focus:ring-1 focus:ring-[#5D63FF] group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#B4B4C7] mb-6 group-hover:text-[#5D63FF] transition-colors duration-300">
                {cert.type === 'patent' ? <FileText size={20} /> : <ShieldCheck size={20} />}
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#7B61FF] mb-2 block">
                {cert.type}
              </span>
              <h3 className="font-heading text-lg font-semibold text-white tracking-tight line-clamp-2 min-h-[56px]">
                {cert.name}
              </h3>
              <p className="font-sans text-xs text-[#B4B4C7] mt-2 line-clamp-2">
                {cert.issuer}
              </p>
              <span className="font-mono text-[10px] text-white/40 mt-6 block">
                {cert.date}
              </span>
            </button>
          ))}
        </div>

      </div>

      {/* Certification Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#05070B]/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="w-full max-w-2xl bg-[#0F111A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <div className="text-left">
                  <h3 className="font-heading text-lg font-bold text-white leading-tight">
                    {selectedCert.name}
                  </h3>
                  <span className="font-mono text-xs text-[#B4B4C7] mt-1 block">
                    {selectedCert.issuer}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-[#B4B4C7] hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#B4B4C7]">
                  <span className="flex items-center gap-1">
                    <Building size={14} className="text-[#5D63FF]" />
                    {selectedCert.issuer}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-[#7B61FF]" />
                    {selectedCert.date}
                  </span>
                </div>
                
                <p className="font-sans text-sm text-[#B4B4C7] text-left font-light leading-relaxed">
                  {selectedCert.description}
                </p>

                {/* Credential Image */}
                <div className="aspect-[4/3] w-full rounded-lg border border-white/5 bg-black/40 overflow-hidden relative flex items-center justify-center">
                  <img
                    src={selectedCert.image}
                    alt={`${selectedCert.name} credential`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
