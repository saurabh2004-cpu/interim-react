"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#", active: true },
    { name: "About", href: "#", active: false },
    { name: "Services", href: "#", active: false, hasDropdown: true },
    { name: "Projects", href: "#", active: false },
    { name: "Gallery", href: "#", active: false },
    { name: "Blog", href: "#", active: false },
    { name: "Reviews", href: "#", active: false },
    { name: "Contact", href: "#", active: false },
  ]

  return (
    <nav className="bg-[FFFEF2] border-b border-gray-100 sticky top-0 z-50y-4 md:px-4 md:py-1">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className=" rounded flex items-center justify-center">
              <img className="w-[110px] h-[35px] text-white " fill="currentColor" viewBox="0 0 24 24"
              src="https://framerusercontent.com/images/1tnrEkQ7iu9Nrkj27WcReIcvyM.png?scale-down-to=512">
                
              </img>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex  items-center space-x-8 p-1 bg-[#F7F6E9] rounded-md">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center text-gray-700 hover:text-gray-900 mx-2 md:py-1 md:px-2 rounded-lg font-medium transition-colors duration-200 relative group inter-placeholder
                  ${item.active ? "bg-[#0000000D]" : ""}`}
              >
                <span className="text-lg font-medium inter-placeholder text-[#1d322d] ">{item.name}</span>
                {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}

                
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100  transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-10 w-10 border border-black p-2  rounded-lg" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className=" lg:hidden border-t border-gray-100">
            <div className=" pt-2 pb-3 space-y-1 bg-[#F7F6E9] flex flex-col items-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between  px-3 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
