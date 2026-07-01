import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  number: string;
  title: string;
  role: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl?: string;
  codeUrl: string;
}

const projects: Project[] = [
  {
    number: '01',
    title: 'ALGOVIZ – AI Enhanced Algorithm Visualizer',
    role: 'Patent Published',
    description: 'An interactive educational platform designed to visualize complex algorithms and data structures. Features real-time visualizers, an integrated AI Chatbot assistant, a personalized recommendation system, and gamified challenges.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'OpenAI API'],
    image: 'https://th.bing.com/th/id/R.6b5b392efa5f390903b30605b5643508?rik=V9eHKNj54DAeRg&riu=http%3a%2f%2fpossibly.github.io%2f2016%2f03%2fSchema-for-Content-Selection-Architectures%2fufo.png&ehk=Ztk3ZpruwRHQJLNc0r5L9c9yteqtcMjRpY41FosphTo%3d&risl=&pid=ImgRaw&r=0',
    demoUrl: 'https://algo-viz-one-dun.vercel.app',
    codeUrl: 'https://github.com/srinidhi9353/algorithm-visualizer',
  },
  {
    number: '02',
    title: 'Complete The Word Game',
    role: 'Creator & Developer',
    description: 'A real-time multiplayer word game. Players take turns contributing letters to spell valid words. Includes automated spelling validation and custom lobby layouts.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'Tailwind CSS'],
    image: 'https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/89/b3/66/89b3669c-3b3e-b534-461e-e91da15da734/source/512x512bb.jpg',
    demoUrl: 'https://complete-the-word-game.netlify.app/',
    codeUrl: 'https://github.com/srinidhi9353/complete_word_game',
  },
  {
    number: '03',
    title: 'Purchase Path Analyzer',
    role: 'Backend & Analytics Developer',
    description: 'A storefront funnel mapping system designed to track customer purchase paths. Offers administrators real-time data visualization of checkout drop-offs, user flows, and engagement metrics.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    image: 'https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg',
    codeUrl: 'https://github.com/srinidhi9353/Purchase_path_analyser',
  },
  {
    number: '04',
    title: 'Wispr Flow Clone',
    role: 'Core Integration Engineer',
    description: 'A low-latency real-time voice-to-text interface cloning key workflows of Wispr Flow. Integrates Deepgram API for instant transcription and text manipulation using a clean, floating dashboard layout.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'Flask', 'Deepgram API'],
    image: 'https://play-lh.googleusercontent.com/S80H7fVFFkmAvYo2P9ajG4yzHr-pNk0BkhSb4qr6Wht4EyqxL1DPimeFcz7MuFXswcK2',
    codeUrl: 'https://github.com/srinidhi9353/Wispr-Flow-Clone',
  },
  {
    number: '05',
    title: 'TaskNova',
    role: 'Full-Stack Developer',
    description: 'Next-generation task management platform utilizing artificial intelligence for workflow automation. It automatically schedules tasks, provides context-aware reminders, and organizes projects dynamically based on user habits.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Generative AI APIs'],
    image: 'https://internshala-uploads.internshala.com/logo/6tommhnbyru-4007.png',
    codeUrl: 'https://github.com/srinidhi9353/TaskNova',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 border-t border-white/5 bg-[#05070B] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-24 text-left">
          <span className="font-mono text-xs text-[#5D63FF] uppercase tracking-widest block mb-4">Portfolio</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white max-w-2xl leading-[1.1]">
            Selected Works
          </h2>
          <p className="font-sans text-lg text-[#B4B4C7] max-w-lg mt-6 font-light">
            An exploration of interfaces, logic, and intelligent features. Designed to feel immersive and content-driven.
          </p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={project.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Content Side */}
                <div className={`lg:col-span-5 flex flex-col items-start text-left ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="font-mono text-5xl md:text-7xl font-bold text-white/5 mb-6 block select-none">
                    {project.number}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-[#7B61FF] tracking-wider mb-6 block uppercase">
                    Role: {project.role}
                  </span>
                  <p className="font-sans text-[#B4B4C7] font-light leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {project.tech.map((tag) => (
                      <span 
                        key={tag}
                        className="font-mono text-[10px] px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.05] text-[#B4B4C7]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-white text-black font-sans text-xs font-semibold hover:bg-white/90 transition-all duration-300"
                      >
                        Live Demo
                        <ExternalLink size={12} />
                      </a>
                    )}
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-sans text-xs font-medium transition-all duration-300"
                    >
                      <Github size={12} />
                      Source Code
                    </a>
                  </div>
                </div>

                {/* Image Side */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'} w-full`}>
                  <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/5 bg-[#0C0E17] relative group flex items-center justify-center p-6 md:p-12">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070B]/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
