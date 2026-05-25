"use client"

import React from "react"

export default function AnimatedBackground() {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="absolute -left-10 -top-10 w-48 h-48 opacity-40 animate-float-slow" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="16" r="14" fill="#fff3c4" />
        <rect x="10" y="36" width="44" height="12" rx="3" fill="#ffd27a" />
      </svg>

      <svg className="absolute right-6 top-8 w-36 h-36 opacity-35 animate-float" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 48c8-8 20-8 28 0 4-8 16-12 20-20" stroke="#fff" strokeWidth="2" strokeOpacity="0.9" />
        <circle cx="18" cy="20" r="6" fill="#fff" />
      </svg>

      <svg className="absolute -right-16 bottom-6 w-56 h-56 opacity-30 animate-float-slower" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="48" height="48" rx="8" fill="#fff7e6" />
        <path d="M20 36h24v6H20z" fill="#ffd27a" />
      </svg>

      <svg className="absolute left-8 bottom-24 w-24 h-24 opacity-45 animate-float" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8c6 0 10 4 10 10s-4 10-10 10-10-4-10-10 4-10 10-10z" fill="#fff" />
        <path d="M20 40c8-6 24-6 32 0v6H20v-6z" fill="#ffd27a" />
      </svg>
    </div>
  )
}
