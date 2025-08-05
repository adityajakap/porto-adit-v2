import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#62d7dd] via-[#b6b4b1] to-[#62d7dd] outline-10 animate-pulse">
                  Aditya Jaka Prasaja
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-6 drop-shadow-lg">
                Full Stack Developer & Tech Enthusiast
              </p>
              
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed drop-shadow-md max-w-2xl">
                I craft innovative web solutions with cutting-edge technologies, 
                specializing in <span className="text-[#62d7dd] font-medium">modern UI/UX design</span> and 
                <span className="text-[#62d7dd] font-medium"> scalable full-stack applications</span> that 
                deliver exceptional user experiences.
              </p>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'UI/UX'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="group relative bg-gradient-to-r from-[#62d7dd] to-[#706f6e] text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#62d7dd]/25"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="#contact"
                  className="group relative xbg-white/10 backdrop-blur-xl border border-white/30 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl hover:shadow-white/10"
                >
                  <span className="relative z-10">Contact Me</span>
                </a>
              </div>
            </div>
            
            {/* Right Side - Profile Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative group">
                {/* Glow Background Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#62d7dd] via-[#706f6e] to-[#62d7dd] rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Image Container with Glassmorphism */}
                <div className="relative bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-full p-2 shadow-2xl shadow-black/20 group-hover:shadow-cyan-500/20 transition-all duration-500">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden">
                    <Image
                      src="/potrait-adit.png"
                      alt="Aditya Jaka Profile"
                      fill
                      className="object-cover transition-transform duration-700"
                      sizes="(max-width: 768px) 256px, (max-width: 1200px) 320px, 384px"
                      priority
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#62d7dd]/10 via-transparent to-[#706f6e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                
                {/* Floating Elements Around Image */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-[#62d7dd] rounded-full animate-pulse opacity-60"></div>
                <div className="absolute bottom-4 left-0 w-3 h-3 bg-[#706f6e] rounded-full animate-pulse opacity-60 animation-delay-300"></div>
                <div className="absolute top-1/2 -right-2 w-2 h-2 bg-[#62d7dd] rounded-full animate-pulse opacity-60 animation-delay-700"></div>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}