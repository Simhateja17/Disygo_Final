# Interactive UI Component Library

A modern, interactive UI component library built with Next.js, React, and Framer Motion. This library showcases beautiful 3D scenes and interactive UI elements that can be used to create immersive web experiences.

![Interactive 3D Scene](https://github.com/yourusername/interactive-ui/raw/main/public/preview.png)

## Features

- **Interactive 3D Scenes**: Integration with Spline for beautiful, interactive 3D models
- **Dynamic Spotlight Effect**: Cursor-following spotlight that creates an immersive experience
- **Responsive Design**: Components that work across all device sizes
- **Modern UI Components**: A collection of reusable UI components built with Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for fluid transitions and effects

## Demo

The main demo showcases an interactive 3D robot model with a dynamic spotlight effect that follows the user's cursor, creating an engaging visual experience.

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhishekabysm/glowing-effect.git
   cd glowing-effect
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
interactive-ui/
├── app/                  # Next.js app directory
│   ├── page.tsx          # Main page component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/           # Reusable components
│   └── ui/               # UI components
│       ├── card.tsx      # Card component
│       ├── spotlight.tsx # Spotlight effect component
│       └── splite.tsx    # 3D scene integration
├── public/               # Static assets
└── ...                   # Configuration files
```

## Key Components

### SplineScene

The `SplineScene` component integrates with Spline to render interactive 3D models:

```tsx
<SplineScene 
  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
  className="w-full h-full"
/>
```

### Spotlight

The `Spotlight` component creates a dynamic light effect that follows the user's cursor:

```tsx
<Spotlight
  className="md:left-60"
  size={700}
/>
```

## Customization

### Modifying the 3D Scene

To use a different 3D model, replace the `scene` URL in the `SplineScene` component with your own Spline scene URL.

### Adjusting the Spotlight

The spotlight effect can be customized by modifying the following properties:

- `size`: Controls the size of the spotlight (default: 700px)
- `className`: Additional CSS classes for positioning and styling

## Troubleshooting

### Hydration Errors

If you encounter hydration errors with the Spotlight component, ensure that:

1. The component is properly client-side rendered with the 'use client' directive
2. Initial state values match between server and client rendering
3. DOM manipulation only occurs after component mounting

### 3D Scene Loading Issues

If the 3D scene fails to load:

1. Check your internet connection
2. Verify that the Spline scene URL is correct and accessible
3. Ensure that @splinetool/react-spline is properly installed

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Authors

- **Abhishek** - [@abhishekabysm](https://github.com/abhishekabysm) - [Instagram: @abhishekabysm](https://instagram.com/abhishekabysm)
- **Coding Tutor** - [@coding.tutor](https://github.com/coding.tutor) - [Instagram: @coding.tutor](https://instagram.com/coding.tutor)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Framer Motion](https://www.framer.com/motion/) - For animations
- [Spline](https://spline.design/) - For 3D models
- Inspired by modern UI/UX trends
- Built with performance and customization in mind
- Special thanks to the Next.js and React communities

## Project Link

[https://github.com/abhishekabysm/glowing-effect](https://github.com/abhishekabysm/glowing-effect)
