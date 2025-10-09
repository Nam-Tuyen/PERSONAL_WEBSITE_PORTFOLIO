# Personal Website Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Galaxy-themed background with futuristic tech effects
- **Responsive**: Fully responsive design for all devices
- **Bilingual Support**: English and Vietnamese language support
- **Interactive Sections**: Professional and Personal navigation
- **Modern UI Components**: Glass morphism, gradients, and animations
- **Certificate Viewer**: Modal viewer for certificates and achievements

## 📁 Project Structure

```
app/
├── components/           # Reusable UI components
│   ├── Header.tsx       # Navigation header component
│   ├── HeroSection.tsx  # Hero section with avatar and intro
│   ├── AboutSection.tsx # About me section with quote and description
│   ├── EducationSection.tsx # Education and certifications
│   └── WorkExperienceSection.tsx # Work experience cards
├── data/                # Data and translations
│   └── translations.ts  # Bilingual content data
├── globals.css          # Global styles and animations
├── layout.tsx           # Root layout component
└── page.tsx            # Main page component
```

## 🎨 Design System

### Colors
- Primary: `#00ff88` (Green)
- Secondary: `#00d4ff` (Cyan)
- Accent: `#7c3aed` (Purple)
- Background: Dark gradient from gray-900 to black

### Typography
- Headings: Montserrat (Google Fonts)
- Quote: Great Vibes (Google Fonts)
- Body: System fonts

### Animations
- Galaxy background effects
- Floating particles and stars
- Gradient animations
- Hover effects and transitions

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 📱 Responsive Breakpoints

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 🌐 Internationalization

The website supports two languages:
- English (en)
- Vietnamese (vi)

Language switching is available in the header navigation.

## 🎯 Sections

### Professional Section
- Hero with avatar and introduction
- About me with quote and description
- Education with university info and certifications
- Work experience with detailed achievements

### Personal Section
- Placeholder for personal content
- Can be expanded with hobbies, interests, etc.

## 🔧 Customization

### Adding New Content
1. Update `app/data/translations.ts` with new content
2. Add new components in `app/components/`
3. Import and use in `app/page.tsx`

### Styling
- Global styles in `app/globals.css`
- Component-specific styles using Tailwind CSS
- Custom animations defined in CSS

### Adding New Sections
1. Create component in `app/components/`
2. Add translations in `app/data/translations.ts`
3. Import and render in `app/page.tsx`

## 📄 License

This project is for personal portfolio use.

## 👨‍💻 Author

**LE NAM TUYEN**
- LinkedIn: [tuyen-le-nam-7614a1269](https://www.linkedin.com/in/tuyen-le-nam-7614a1269/)
- GitHub: [Nam-Tuyen](https://github.com/Nam-Tuyen)