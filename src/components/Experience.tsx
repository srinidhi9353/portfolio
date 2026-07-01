interface InternshipItem {
  year: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}

interface EducationItem {
  yearRange: string;
  degree: string;
  institution: string;
  metric: string;
}

const internships: InternshipItem[] = [
  {
    year: '2026',
    role: 'Full Stack Developer Intern (MERN)',
    company: 'SuprMentr Technologies Pvt Ltd',
    duration: 'Feb 1, 2026 – May 15, 2026',
    description: 'Developing MERN applications, integrating APIs, building responsive interfaces and scalable backend functionality.',
  },
  {
    year: '2024',
    role: 'Web Development Intern',
    company: 'CodSoft',
    duration: 'Oct 2024 – Nov 2024',
    description: 'Built responsive web interfaces using HTML, CSS and JavaScript while improving usability through frontend enhancements and debugging.',
  },
];

const educationList: EducationItem[] = [
  {
    yearRange: '2022 – 2026',
    degree: 'Bachelor of Engineering (Computer Science & Engineering)',
    institution: 'East Point College of Engineering and Technology, Bengaluru',
    metric: 'CGPA: 7.74 / 10',
  },
  {
    yearRange: '2020 – 2022',
    degree: 'Pre-University Course (PCMCs)',
    institution: 'Advitya PU College, Bengaluru',
    metric: 'Percentage: 87.5%',
  },
  {
    yearRange: '2020',
    degree: 'Secondary School Education',
    institution: 'Swami Vivekananda Vidya Kendra, Hosakote',
    metric: 'Percentage: 92%',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 border-t border-white/5 bg-[#05070B] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* INTERNSHIPS Section */}
        <div className="mb-12 text-left">
          <span className="font-mono text-xs text-[#5D63FF] uppercase tracking-widest block mb-4">Professional</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white max-w-2xl leading-[1.1]">
            INTERNSHIPS
          </h2>
        </div>

        {/* Internships Timeline */}
        <div className="flex flex-col mb-32">
          {internships.map((intern, idx) => (
            <div 
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 py-12 border-b border-white/5 last:border-b-0 gap-6 md:gap-12 items-start"
            >
              <div className="md:col-span-3 flex items-center md:pt-1">
                <span className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white/10 select-none">
                  {intern.year}
                </span>
              </div>
              <div className="md:col-span-5 text-left">
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-white tracking-tight">
                  {intern.role}
                </h3>
                <span className="font-mono text-xs text-[#B4B4C7] mt-1.5 block">
                  {intern.company} &nbsp;·&nbsp; {intern.duration}
                </span>
              </div>
              <div className="md:col-span-4 text-left">
                <p className="font-sans text-sm md:text-base text-[#B4B4C7] font-light leading-relaxed">
                  {intern.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* EDUCATION Section */}
        <div className="border-t border-white/5 pt-32 text-left">
          <span className="font-mono text-xs text-[#7B61FF] uppercase tracking-widest block mb-4">Academic Journey</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white mb-20 leading-[1.1]">
            Education
          </h2>

          <div className="flex flex-col">
            {educationList.map((edu, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 py-12 border-b border-white/5 last:border-b-0 gap-6 md:gap-12 items-start"
              >
                {/* Year Label */}
                <div className="md:col-span-3">
                  <span className="font-heading text-3xl md:text-4xl font-bold text-white/10 select-none">
                    {edu.yearRange}
                  </span>
                </div>

                {/* Degree & Institution */}
                <div className="md:col-span-6">
                  <h4 className="font-heading text-xl md:text-2xl font-semibold text-white tracking-tight">
                    {edu.degree}
                  </h4>
                  <p className="font-sans text-sm text-[#B4B4C7] mt-1.5 font-light">
                    {edu.institution}
                  </p>
                </div>

                {/* Metric */}
                <div className="md:col-span-3 flex md:justify-end">
                  <span className="inline-block px-3 py-1.5 text-xs font-mono rounded-lg bg-white/[0.02] border border-white/[0.06] text-white">
                    {edu.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
