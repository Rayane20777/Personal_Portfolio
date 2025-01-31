'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Phone, MapPin, User, Code, BookOpen, Briefcase, FolderOpen, Send, Menu, X, ChevronLeft, ChevronRight, Download  } from 'lucide-react'
import CustomCursor from '../components/CustomCursor'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about')
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const sections = ['about', 'skills', 'education', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100 // offset for header

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop && scrollPosition < (element.offsetTop + element.offsetHeight)) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  const navItems = [
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'education', icon: BookOpen, label: 'Education' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'contact', icon: Send, label: 'Contact' },
  ]

  return (
      <div className="min-h-screen bg-[#0a192f] text-gray-300 flex flex-col lg:flex-row">
        <CustomCursor />

        {/* Mobile Menu Button */}
        <button
            className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-gray-800 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Left Sidebar */}
        <aside className={`
        w-full lg:w-[300px] xl:w-[400px] h-screen ml-8 p-8 flex flex-col justify-between
        fixed lg:sticky top-0 left-0 z-40
        bg-[#0a192f] transition-all duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
          <div className="space-y-12">
            {/* Personal Picture */}
            <div className="relative w-64 h-64 mx-auto">
              <Image
                  src="/images/me1.jpg"
                  alt="Fiach Rayane"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-4 border-emerald-400"
              />
            </div>

            {/* Hero Section */}
            <div>
              <h1 className="text-4xl font-bold text-gray-100 hover:text-emerald-400 transition-colors duration-300">Fiach Rayane</h1>
              <h2 className="text-xl text-emerald-400 mt-1">Développeur Full-Stack Java</h2>
            </div>

            <div className="space-y-3 ml-2">
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

            {/* Download CV Button */}
            <div className="mt-6">
              <a
                  href="/pdf/Cv-Fiach-Rayane.pdf"
                  download
                  className="flex items-center justify-center gap-2 bg-emerald-400 text-gray-900 py-2 px-4 rounded-md hover:bg-emerald-500 transition-colors duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex  space-x-5 mt-8">
            <a
                href="mailto:rayannefiach@gmail.com"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="Email"
            >
              <Mail className="w-10 h-10" />
            </a>
            <a
                href="https://github.com/Rayane20777"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="GitHub"
            >
              <Github className="w-10 h-10" />
            </a>
            <a
                href="https://www.linkedin.com/in/rayane-fiach/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
            >
              <Linkedin className="w-10 h-10" />
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-[calc(90%-300px)] xl:w-[calc(90%-400px)] max-w-8xl p-8 lg:p-8 mt-16 lg:mt-0 relative transition-all duration-300 ease-in-out mx-auto">
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </main>

        {/* Right-side Navigation */}
        <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
          <ul className="space-y-4">
            {navItems.map((item) => (
                <motion.li key={item.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <a
                      href={`#${item.id}`}
                      className={`flex items-center ${
                          activeSection === item.id
                              ? 'text-emerald-400'
                              : 'text-gray-400 hover:text-emerald-400'
                      } transition-colors duration-300`}
                  >
                    <span className="sr-only">{item.label}</span>
                    <item.icon className="w-6 h-6" />
                  </a>
                </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
              <motion.nav
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-30 bg-[#0a192f] bg-opacity-90 flex items-center justify-center lg:hidden"
              >
                <ul className="space-y-4">
                  {navItems.map((item) => (
                      <motion.li key={item.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <a
                            href={`#${item.id}`}
                            className={`flex items-center gap-2 text-2xl ${
                                activeSection === item.id
                                    ? 'text-emerald-400'
                                    : 'text-gray-400 hover:text-emerald-400'
                            } transition-colors duration-300`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                          <item.icon className="w-6 h-6" />
                          <span>{item.label}</span>
                        </a>
                      </motion.li>
                  ))}
                </ul>
              </motion.nav>
          )}
        </AnimatePresence>
      </div>
  )
}

