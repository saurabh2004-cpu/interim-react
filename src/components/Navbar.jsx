"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#", active: false },
    { name: "About", href: "#", active: true },
    { name: "Services", href: "#", active: false, hasDropdown: true },
    { name: "Projects", href: "#", active: false },
    { name: "Gallery", href: "#", active: false },
    { name: "Blog", href: "#", active: false },
    { name: "Reviews", href: "#", active: false },
    { name: "Contact", href: "#", active: false },
  ]

  return (
    <nav className="bg-[#FFFEF2] sticky top-0 z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 13c0 2.21 1.79 4 4 4s4-1.79 4-4V9H7v4zm12-8h-2V3c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v2H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM9 4h6v1H9V4z" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">Interim</span>
          </div>

          <div className="hidden lg:flex items-center space-x-2  rounded-md ">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onHove
                className="flex items-center transition-colors duration-200 text-bolder font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md hover:text-orange-600"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
              </a>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-100 border-t border-gray-200">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md transition-colors duration-200 ${
                    item.active ? "text-orange-500 bg-orange-50" : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
