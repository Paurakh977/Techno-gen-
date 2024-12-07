import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

export default function Navbar({ isDarkMode, toggleDarkMode }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Check localStorage on mount
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDarkModeToggle = () => {
    const newDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', newDarkMode.toString());
    toggleDarkMode();
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Technogen
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/news">News</NavLink>
              <NavLink href="/about">About Us</NavLink>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div 
              className={`flex items-center justify-start w-[70px] h-[34px] rounded-full p-[3px] cursor-pointer ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
              }`}
              onClick={handleDarkModeToggle}
            >
              <motion.div
                className="w-[28px] h-[28px] rounded-full bg-white flex items-center justify-center"
                layout
                transition={spring}
                animate={{ x: isDarkMode ? 36 : 0 }}
              >
                {isDarkMode ? (
                  <Moon className="h-4 w-4 text-gray-800" />
                ) : (
                  <Sun className="h-4 w-4 text-gray-800" />
                )}
              </motion.div>
              <div className="absolute pointer-events-none w-[70px] h-[34px] rounded-full">
                <div className={`absolute inset-0 flex items-center ${isDarkMode ? 'justify-start pl-2' : 'justify-end pr-2'}`}>
                  {isDarkMode ? (
                    <Sun className="h-4 w-4 text-gray-200" />
                  ) : (
                    <Moon className="h-4 w-4 text-gray-600" />
                  )}
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavLink href="/" onClick={toggleMenu}>Home</MobileNavLink>
              <MobileNavLink href="/blog" onClick={toggleMenu}>Blog</MobileNavLink>
              <MobileNavLink href="/news" onClick={toggleMenu}>News</MobileNavLink>
              <MobileNavLink href="/about" onClick={toggleMenu}>About Us</MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium relative group transition-colors duration-200">
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
      {children}
    </Link>
  )
}

