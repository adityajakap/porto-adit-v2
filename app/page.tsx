import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#191f21] via-[#706f6e] to-[#191f21] relative overflow-hidden">
      {/* Fixed floating orbs for continuous background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#62d7dd]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-[#706f6e]/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-[#62d7dd]/15 rounded-full blur-3xl animate-float delay-2000"></div>
      </div>
      
      {/* Main content wrapper */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
      <Chatbot />
    </main>
  )
}
