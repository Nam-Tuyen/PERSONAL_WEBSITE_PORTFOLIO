# Personal Website Portfolio

A modern, tech-focused portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Design** - Cyberpunk-inspired UI with gradient effects
- **Responsive Layout** - Optimized for all devices
- **Smooth Animations** - CSS animations and transitions
- **Montserrat Font** - Professional typography
- **Gradient Buttons** - Modern interactive elements
- **Glass Morphism** - Backdrop blur effects
- **Tech Grid Background** - Animated grid patterns
- **Matrix Rain Effect** - Cyber aesthetic elements

## 🎨 Design System

### Colors
- **Primary**: #00ff88 (Neon Green)
- **Secondary**: #00cc6a (Dark Green)
- **Tech Blue**: #00d4ff (Cyan)
- **Tech Purple**: #7c3aed (Purple)
- **Background**: #0a0a0a → #1a1a1a (Dark Gradient)

### Gradients
- **Primary**: #00ff88 → #00cc6a
- **Tech**: #00d4ff → #7c3aed
- **Cyber**: #00ff88 → #00d4ff → #7c3aed
- **Matrix**: #00ff88 → #10b981 → #06b6d4

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.0
- **Icons**: Lucide React
- **Font**: Montserrat (Google Fonts)
- **Deployment**: Vercel

## 📁 Project Structure

```
├── app/
│   ├── globals.css      # Global styles and animations
│   ├── layout.tsx       # Root layout with Montserrat font
│   └── page.tsx         # Main portfolio page
├── public/              # Static assets
├── .gitignore          # Git ignore rules
├── .vercelignore       # Vercel ignore rules
├── next.config.mjs     # Next.js configuration
├── package.json        # Dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vercel.json         # Vercel deployment configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Nam-Tuyen/PERSONAL_WEBSITE_PORTFOLIO.git
cd PERSONAL_WEBSITE_PORTFOLIO
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Sections

- **Hero** - Introduction with animated background
- **About** - Personal information and profile
- **Services** - Offered services with tech icons
- **Projects** - Portfolio projects showcase
- **Testimonial** - Client feedback
- **Contact** - Contact information and social links

## 🎨 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: '#00ff88',
  secondary: '#00cc6a',
  // ... other colors
}
```

### Content
Edit content in `app/page.tsx` translations object:
```javascript
const translations = {
  vi: {
    hero: {
      greeting: "XIN CHÀO, TÔI LÀ TUYÊN!",
      // ... other content
    }
  }
}
```

## 📱 Responsive Design

- **Mobile**: Optimized for phones
- **Tablet**: Adapted for tablets
- **Desktop**: Full experience on large screens

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Manual Build
```bash
npm run build
npm start
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Lê Nam Tuyên**
- Data Analyst & FinTech Specialist
- LinkedIn: [tuyen-le-nam-7614a1269](https://www.linkedin.com/in/tuyen-le-nam-7614a1269/)
- Email: bingo.namtuyen@gmail.com

---

Built with ❤️ using Next.js and Tailwind CSS
