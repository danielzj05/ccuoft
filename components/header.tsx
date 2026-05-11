"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-border">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <img src="/img/CCLogoR.jpg" alt="Concrete Canoe Logo" className="h-10 w-10 object-contain" />
            <div>
              <div className="text-2xl font-bold text-gray-800 tracking-wide uppercase">University of Toronto Concrete Canoe</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-start gap-12 text-gray-700">
            <div className="flex flex-col gap-2">
              <a href="#home" className="text-base hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-base hover:text-primary transition-colors">
                About
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#canoes" className="text-base hover:text-primary transition-colors">
                Canoes
              </a>
              <a href="#sponsors" className="text-base hover:text-primary transition-colors">
                Sponsors
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#news" className="text-base hover:text-primary transition-colors">
                News
              </a>
              <a href="#contact" className="text-base hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-6 flex flex-col gap-3 pb-4">
            <a href="#home" className="text-base hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-base hover:text-primary transition-colors">
              About
            </a>
            <a href="#canoes" className="text-base hover:text-primary transition-colors">
              Canoes
            </a>
            <a href="#sponsors" className="text-base hover:text-primary transition-colors">
              Sponsors
            </a>
            <a href="#news" className="text-base hover:text-primary transition-colors">
              News
            </a>
            <a href="#contact" className="text-base hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
