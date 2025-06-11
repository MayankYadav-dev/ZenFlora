'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Leaf } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/plants', label: 'Plants' },
    { href: '/about', label: 'About' },
  ]

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[#E7EFC7]/80 backdrop-blur-sm border-b border-[#AEC8A4] sticky top-0 z-50"
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Leaf className="w-8 h-8 text-[#3B3B1A]" />
            </motion.div>
            <span className="text-2xl font-display font-semibold text-[#3B3B1A] group-hover:text-[#8A784E] transition-colors">
              ZenFlora
            </span>
          </Link>

          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors relative ${
                  pathname === item.href
                    ? 'text-[#8A784E]'
                    : 'text-[#3B3B1A] hover:text-[#8A784E]'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8A784E]"
                  />
                )}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </motion.header>
  )
}