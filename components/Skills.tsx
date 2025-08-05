const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
      { name: 'Next.js', icon: '▲', color: 'from-gray-400 to-white' },
      { name: 'TypeScript', icon: 'TS', color: 'from-blue-500 to-blue-600' },
      { name: 'Tailwind CSS', icon: '🎨', color: 'from-teal-400 to-blue-500' },
      { name: 'JavaScript', icon: 'JS', color: 'from-yellow-400 to-yellow-500'}
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-600' },
      { name: 'Express.js', icon: 'Ex', color: 'from-gray-600 to-gray-700' },
      { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-blue-500' },
      { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-600 to-indigo-600' },
      { name: 'Laravel', icon: '🕸️', color: 'from-red-500 to-red-600' },
      { name: 'MySQL', icon: '🍃', color: 'from-green-500 to-green-700' }
    ]
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', icon: '📦', color: 'from-orange-500 to-red-500' },
      { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-blue-600' },
      { name: 'Figma', icon: '🎯', color: 'from-purple-500 to-pink-500' },
      { name: 'Linux', icon: '🐧', color: 'from-yellow-500 to-orange-500' }
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
            Technologies I love working with
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <div 
              key={skillCategory.category} 
              className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-black/20 hover:scale-105 transition-all duration-500 hover:shadow-cyan-500/20"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category header with gradient */}
              <div className="relative mb-8">
                <h3 className="text-xl font-bold text-center drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-[#62d7dd] to-[#d1d0d0]">
                  {skillCategory.category}
                </h3>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-[#62d7dd] to-[#d1d0d0] rounded-full"></div>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="group/skill relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-500 hover:scale-110 hover:rotate-3 cursor-pointer"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    {/* Glow background effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover/skill:opacity-20 rounded-2xl blur-xl transition-all duration-500 -z-10 scale-150`}></div>
                    
                    {/* Icon container */}
                    <div className="text-center">
                      <div className={`relative w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${skill.color} p-0.5 group-hover/skill:shadow-2xl transition-all duration-500`}>
                        <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover/skill:bg-white/20 transition-all duration-300">
                          {skill.icon}
                        </div>
                        
                        {/* Floating particles around icon */}
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover/skill:opacity-100 animate-ping transition-opacity duration-300"></div>
                        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover/skill:opacity-100 animate-pulse transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Skill name */}
                      <h4 className="text-white/90 font-medium text-sm drop-shadow-sm group-hover/skill:text-white group-hover/skill:drop-shadow-lg transition-all duration-300">
                        {skill.name}
                      </h4>
                      
                      {/* Animated dots indicator */}
                      <div className="flex justify-center mt-2 space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skill.color} opacity-40 group-hover/skill:opacity-100 transition-all duration-300`}
                            style={{ 
                              animationDelay: `${i * 0.1}s`,
                              animation: 'pulse 2s infinite'
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Hover ripple effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-10 animate-ping`}></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Category bottom decoration */}
              <div className="mt-6 flex justify-center">
                <div className="flex space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-cyan-400 opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Floating tech icons background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 text-6xl opacity-5 animate-float">⚛️</div>
          <div className="absolute top-1/3 right-1/4 text-4xl opacity-5 animate-float delay-1000">🐍</div>
          <div className="absolute bottom-1/4 left-1/3 text-5xl opacity-5 animate-float delay-500">🎨</div>
          <div className="absolute bottom-1/3 right-1/3 text-3xl opacity-5 animate-float delay-1500">🐳</div>
        </div>
      </div>
    </section>
  )
}