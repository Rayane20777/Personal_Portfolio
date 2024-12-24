'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import CustomCursor from '../components/CustomCursor'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Image from 'next/image'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-300 flex cursor-none">
      <CustomCursor />
      {/* Left Sidebar */}
      <aside className="w-[500px] ml-[60px] h-screen p-8 flex flex-col justify-between fixed left-8">
        {/* Personal Picture */}
        <div className="mb-8 relative w-64 h-64 mx-auto">
          <Image
            src="/images/me1.PNG"
            alt="Fiach Rayane"
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-emerald-400"
          />
        </div>
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-100 hover:text-emerald-400 transition-colors duration-300">Fiach Rayane</h1>
            <h2 className="text-xl text-emerald-400">Développeur Full-Stack Java</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-400">
              <Phone className="w-4 h-4" />
              <a href="tel:+212700900082" className="hover:text-emerald-400 transition-colors duration-300">
                +212 700 900 082
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="w-4 h-4" />
              <a href="mailto:rayanefiach@gmail.com" className="hover:text-emerald-400 transition-colors duration-300">
                rayanefiach@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Casablanca, Morocco</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 my-8">
          {['about', 'experience', 'projects', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setActiveSection(item)}
              className={`block text-xs tracking-wider uppercase py-2 px-4 border-l-2 transition-all duration-300 hover:text-emerald-400 hover:pl-6 ${
                activeSection === item 
                  ? 'text-emerald-400 border-emerald-400' 
                  : 'border-transparent'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex space-x-5">
          <a 
            href="mailto:rayannefiach@gmail.com" 
            className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-[640px] p-8 max-w-3xl">
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

