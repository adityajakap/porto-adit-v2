export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            About Me
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Learn more about my background, experience, and passion for development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-black/20">
            <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">
              My Story
            </h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              I'm a passionate developer with experience in building modern web applications. 
              I love creating solutions that are not only functional but also beautiful and user-friendly.
            </p>
            <p className="text-white/80 mb-6 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <h4 className="font-semibold text-white mb-2 drop-shadow-md">Experience</h4>
                <p className="text-[#62d7dd] text-2xl font-bold drop-shadow-sm">2+ Years</p>
                <p className="text-white/60 text-sm">Web Development</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <h4 className="font-semibold text-white mb-2 drop-shadow-md">Projects</h4>
                <p className="text-[#ede9e6] text-2xl font-bold drop-shadow-sm">20+</p>
                <p className="text-white/60 text-sm">Completed</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white shadow-2xl shadow-black/20 hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#62d7dd]/10 to-[#706f6e]/10 rounded-3xl blur-xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 drop-shadow-lg">What I Do</h3>
                <ul className="space-y-3">
                  <li className="flex items-center group">
                    <span className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-pink-400/50"></span>
                    <span className="group-hover:text-white/100 transition-colors duration-300">Frontend Development</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-purple-400/50"></span>
                    <span className="group-hover:text-white/100 transition-colors duration-300">Backend Development</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-blue-400/50"></span>
                    <span className="group-hover:text-white/100 transition-colors duration-300">UI/UX Design</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-cyan-400/50"></span>
                    <span className="group-hover:text-white/100 transition-colors duration-300">Mobile Development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
