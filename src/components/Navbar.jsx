import { useEffect, useState } from 'react'

const links = [
  { href: '#home', id: 'home', label: 'Home' },
  { href: '#about', id: 'about', label: 'About' },
  { href: '#education', id: 'education', label: 'Education' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#experience', id: 'experience', label: 'Experience' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#certifications', id: 'certifications', label: 'Certifications' },
  { href: '#problem-solving', id: 'problem-solving', label: 'Problem Solving' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="navbar" aria-label="Primary">
      <div className="navbar-inner">
        <a href="#home" className="nav-mark">Ayushman Choudhary</a>
        <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? 'Close' : 'Menu'}
        </button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.id}>
              <a href={l.href} className={active === l.id ? 'active' : ''} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
