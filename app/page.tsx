import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 relative overflow-hidden">
      {/* Continuous background with floating elements */}
      <div className="fixed inset-0 z-0">
        {/* Large floating orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-10 w-88 h-88 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-300"></div>
        
        {/* Additional smaller orbs for depth */}
        <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-pink-500/5 rounded-full blur-2xl animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/3 left-2/3 w-52 h-52 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-36 h-36 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-800"></div>
      </div>
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
