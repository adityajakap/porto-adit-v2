export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 animate-pulse">
              Aditya Jaka
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          
          <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto drop-shadow-md">
            I create beautiful, responsive web applications and user experiences 
            that solve real-world problems with modern glassmorphism design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 border border-white/20">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group relative bg-white/10 backdrop-blur-xl border border-white/30 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl hover:shadow-white/10">
              <span className="relative z-10">Contact Me</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
