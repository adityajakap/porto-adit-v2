import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Website Profile Sarifah Ainun Jariyah, DPR RI',
    description: 'A comprehensive political figure profile website featuring responsive design, content management system, and optimized performance for public engagement.',
    image: '/project1.jpg',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://sarifahainunjariyah.com',
    githubUrl: 'https://github.com/username/sarifah-profile'
  },
  {
    id: 2,
    title: 'Ultimate Adventure Website - PT Ultima Nusantara',
    description: 'A dynamic adventure tourism platform with booking system and interactive tour packages showcase.',
    image: '/project2.jpg',
    technologies: ['Laravel', 'Tailwind CSS', 'MySQL'],
    liveUrl: 'https://ultimaadventure.com',
    githubUrl: 'https://github.com/username/ultima-adventure'
  },
  {
    id: 3,
    title: 'Fullstack Developer, Website Badan Kesbangpol Kabupaten Cianjur',
    description: 'A comprehensive website for the Badan Kesbangpol of Cianjur, featuring a modern design and user-friendly interface.',
    image: '/project3.jpg',
    technologies: ['Laravel', 'Tailwind CSS', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            My Projects
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 shadow-2xl shadow-black/20 hover:shadow-cyan-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 bg-gradient-to-br from-[#62d7dd]/20 to-[#706f6e]/20 overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#62d7dd]/20 to-[#706f6e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white/60 font-medium">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-2 mx-auto backdrop-blur-sm border border-white/30">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    Project Preview
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#62d7dd] group-hover:to-[#706f6e] transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link text-[#62d7dd] hover:text-[#4fc3c9] font-medium transition-all duration-300 hover:drop-shadow-lg flex items-center gap-1"
                    >
                      Live Demo
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link text-white/70 hover:text-white font-medium transition-all duration-300 hover:drop-shadow-lg flex items-center gap-1"
                    >
                      GitHub
                      <svg className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
