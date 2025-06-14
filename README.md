# DISYGO - Digital Agency Website

A modern, responsive website for DISYGO digital agency built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern dark theme with gradient accents
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js 14
- 🎭 Smooth animations and transitions
- 🎯 Professional business sections
- 💼 Portfolio showcase
- 👥 Client testimonials
- 📧 Newsletter subscription
- 🔗 Social media integration

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Custom SVG components
- **Font:** Inter (Google Fonts)

## Project Structure

```
disygo-website/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── Portfolio.tsx
│   ├── TestimonialsSection.tsx
│   ├── Footer.tsx
│   └── Icons.tsx
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd disygo-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Sections

### 1. Header
- Fixed navigation with scroll effects
- Mobile-responsive hamburger menu
- Call-to-action button

### 2. Hero Section
- Compelling headline and description
- Action buttons (Get Started, Watch Demo)
- DIA (DISYGO Integrated AI) showcase
- Key statistics display

### 3. Services
- Six core service offerings:
  - Digital Advertising
  - Website Development
  - Graphic Designing
  - Search Engine Optimization
  - Ecommerce Writing
  - Network Security
- Statistics showcase

### 4. Portfolio
- Recent project showcase
- Technology tags
- Project categories
- Call-to-action for full portfolio

### 5. Testimonials
- Client reviews with photos
- Star ratings
- Newsletter subscription form

### 6. Footer
- Company information
- Service links
- Quick links
- Contact information
- Social media links

## Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- Primary: Cyan blue (#06b6d4)
- Secondary: Blue (#3b82f6)
- Dark theme: Various gray shades

### Fonts
Using Inter font from Google Fonts for clean, modern typography.

### Icons
Custom SVG icons are defined in `components/Icons.tsx` for consistent styling and performance.

## Performance Features

- Optimized images with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- Custom icons to avoid external dependencies
- Semantic HTML for better SEO
- Responsive design for all devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes.

## Contact

For questions or support, please contact the development team. 