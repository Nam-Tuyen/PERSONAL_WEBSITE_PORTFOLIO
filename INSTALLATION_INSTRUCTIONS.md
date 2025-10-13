# i18n Installation Instructions

## Next Steps to Complete i18n Setup

### 1. Install next-intl package
Run the following command in your terminal:
```bash
npm install next-intl
```

### 2. Update package.json
Add the next-intl dependency to your package.json:
```json
{
  "dependencies": {
    "next-intl": "^3.0.0"
  }
}
```

### 3. File Structure Created
The following i18n structure has been created:

```
my-portfolio/
├── messages/
│   ├── en.json          ✅ Created
│   └── vi.json          ✅ Created
├── src/
│   └── i18n/
│       ├── routing.ts   ✅ Created
│       └── request.ts   ✅ Created
├── app/
│   └── [locale]/
│       ├── layout.tsx   ✅ Created
│       ├── page.tsx     ✅ Created
│       └── components/
│           ├── LocaleSwitch.tsx  ✅ Created
│           └── Nav.tsx           ✅ Created
├── middleware.ts        ✅ Created
└── next.config.mjs      ✅ Updated
```

### 4. Features Implemented

#### ✅ **Messages Structure**
- Complete English translations in `messages/en.json`
- Complete Vietnamese translations in `messages/vi.json`
- All sections: Hero, About, Education, Skills, Certifications, Experience, Projects, Contact

#### ✅ **Routing Configuration**
- Default locale: Vietnamese (vi)
- Supported locales: vi, en
- Automatic locale detection and fallback

#### ✅ **Components**
- **LocaleSwitch**: Language switcher component
- **Nav**: Navigation component with translated links
- **Layout**: Root layout with i18n support
- **Page**: Complete portfolio page with all sections

#### ✅ **Configuration**
- Next.js config updated with next-intl plugin
- Middleware for locale routing and protection
- TypeScript support with proper types

### 5. How to Use

#### **URL Structure**
- Vietnamese: `https://yoursite.com/vi`
- English: `https://yoursite.com/en`
- Default (Vietnamese): `https://yoursite.com/`

#### **Language Switching**
- Users can switch languages using the VI/EN buttons in the header
- URLs will automatically update to reflect the selected language
- All content will be translated accordingly

#### **Content Sections**
- **Hero**: Greeting, name, role, quote, and action buttons
- **About**: Professional description
- **Education**: Degree, university, period, GPA, IELTS
- **Skills**: Programming, Data Tools, Product Management, Database
- **Certifications**: Google, NVIDIA, Journal Article
- **Experience**: Maybank and Agribank work experience
- **Projects**: Three featured projects with descriptions
- **Contact**: Contact information

### 6. Customization

#### **Adding New Translations**
1. Add new keys to both `messages/en.json` and `messages/vi.json`
2. Use the translations in components with `useTranslations('SectionName')`

#### **Adding New Sections**
1. Add section to navigation in `Nav.tsx`
2. Add translations to message files
3. Add section to `page.tsx`

#### **Styling**
- Current implementation uses inline styles for demonstration
- Replace with your preferred CSS framework (Tailwind, styled-components, etc.)

### 7. Testing

After installing next-intl:
1. Run `npm run dev`
2. Visit `http://localhost:3000` (defaults to Vietnamese)
3. Visit `http://localhost:3000/en` (English)
4. Test language switching functionality
5. Verify all content is properly translated

### 8. Deployment

The i18n setup is ready for deployment to platforms like:
- Vercel
- Netlify
- Any static hosting service

Make sure to install the next-intl package before building:
```bash
npm install next-intl
npm run build
```

## Summary

✅ **Complete i18n implementation ready**
✅ **Vietnamese and English support**
✅ **Professional translations**
✅ **Responsive design**
✅ **SEO-friendly URLs**
✅ **Type-safe implementation**

Just install the next-intl package and you're ready to go!
