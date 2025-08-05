import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/10 backdrop-blur-xl border-b border-white/20 z-50 shadow-lg shadow-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-white drop-shadow-lg">
            Built By Adit🚀
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="text-white/80 hover:text-white transition-all duration-300 hover:drop-shadow-lg hover:scale-105">
              About
            </Link>
            <Link href="#projects" className="text-white/80 hover:text-white transition-all duration-300 hover:drop-shadow-lg hover:scale-105">
              Projects
            </Link>
            <Link href="#skills" className="text-white/80 hover:text-white transition-all duration-300 hover:drop-shadow-lg hover:scale-105">
              Skills
            </Link>
            <Link href="#contact" className="text-white/80 hover:text-white transition-all duration-300 hover:drop-shadow-lg hover:scale-105">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
