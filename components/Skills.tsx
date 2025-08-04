const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Vue.js', level: 75 }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MongoDB', level: 75 }
    ]
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Figma', level: 80 },
      { name: 'Linux', level: 75 }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Skills & Technologies
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Here are the technologies and tools I work with
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <div 
              key={skillCategory.category} 
              className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-black/20 hover:scale-105 transition-all duration-500 hover:shadow-purple-500/20"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category header with gradient */}
              <div className="relative mb-8">
                <h3 className="text-xl font-bold text-center drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                  {skillCategory.category}
                </h3>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="group/skill"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="flex justify-between mb-3">
                      <span className="text-white font-medium drop-shadow-sm group-hover/skill:text-transparent group-hover/skill:bg-clip-text group-hover/skill:bg-gradient-to-r group-hover/skill:from-pink-400 group-hover/skill:to-cyan-400 transition-all duration-300">
                        {skill.name}
                      </span>
                      <span className="text-white/70 text-sm font-medium">{skill.level}%</span>
                    </div>
                    
                    {/* Skill bar with glow effect */}
                    <div className="relative">
                      <div className="w-full bg-white/10 backdrop-blur-sm rounded-full h-3 border border-white/20 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out relative group-hover/skill:shadow-lg group-hover/skill:shadow-purple-500/50"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.3) + (skillIndex * 0.1)}s`
                          }}
                        >
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 rounded-full opacity-0 group-hover/skill:opacity-50 blur-sm transition-opacity duration-300"></div>
                          
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full transform -skew-x-12 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      </div>
                      
                      {/* Floating particles effect on hover */}
                      <div className="absolute top-1/2 transform -translate-y-1/2 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="w-1 h-1 bg-pink-400 rounded-full animate-bounce" style={{ left: `${skill.level * 0.8}%` }}></div>
                        <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-150" style={{ left: `${skill.level * 0.9}%` }}></div>
                        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce delay-300" style={{ left: `${skill.level * 0.7}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
