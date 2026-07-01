

interface SkillGroup {
  category: string;
  items: string[];
}

const skillsList: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'C / C++'],
  },
  {
    category: 'Frontend Development',
    items: ['React.js', 'Vite', 'HTML5', 'CSS3', 'Tailwind CSS', 'Zustand', 'Shadcn/UI'],
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Flask', 'JWT Authentication'],
  },
  {
    category: 'Databases & Cloud',
    items: ['MongoDB', 'Amazon Web Services (AWS)', 'Git & GitHub Version Control'],
  },
  {
    category: 'Engineering & Methodologies',
    items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Problem Solving', 'Team Leadership', 'Project Management'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 border-t border-white/5 bg-[#05070B] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-24 text-left">
          <span className="font-mono text-xs text-[#5D63FF] uppercase tracking-widest block mb-4">Core</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white max-w-2xl leading-[1.1]">
            Skills & Expertise
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 items-start">
          {skillsList.map((group, idx) => (
            <div key={idx} className="flex flex-col items-start text-left">
              <h3 className="font-heading text-sm font-semibold tracking-wider text-white uppercase mb-6 pb-3 border-b border-white/10 w-full">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-3 w-full">
                {group.items.map((skill, sIdx) => (
                  <li 
                    key={sIdx}
                    className="font-sans text-[#B4B4C7] font-light hover:text-white transition-colors duration-300 flex items-center gap-2 group cursor-default"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#5D63FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
