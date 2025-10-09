// Animation delays for staggered effects
export const ANIMATION_DELAYS = {
  HERO: 0,
  ABOUT: 0.2,
  EXPERIENCE: 0.4,
  PROJECTS: 0.6,
  TESTIMONIAL: 0.8,
  CONTACT: 1.0,
} as const

// Color gradients
export const GRADIENTS = {
  PRIMARY: 'from-[#00ff88] to-[#00cc6a]',
  TECH: 'from-[#00d4ff] to-[#7c3aed]',
  CYBER: 'from-[#00ff88] to-[#00d4ff] to-[#7c3aed]',
  MATRIX: 'from-[#00ff88] to-[#10b981] to-[#06b6d4]',
} as const

// Breakpoints
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
} as const

// Social media links
export const SOCIAL_LINKS = {
  LINKEDIN: 'https://www.linkedin.com/in/tuyen-le-nam-7614a1269/',
  EMAIL: 'mailto:bingo.namtuyen@gmail.com',
  GITHUB: '#',
  PORTFOLIO: '#',
} as const
