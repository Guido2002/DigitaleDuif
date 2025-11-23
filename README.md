# DigitaleDuif - Launch Countdown

A modern, responsive countdown website for the DigitaleDuif company launch. Built with React, Vite, and a sleek blue/white design.

## Features

- ⏱️ **Live Countdown Timer** - Real-time countdown to launch date (Nov 24, 2025)
- 🎨 **Modern Design** - Blue gradient background with glassmorphic UI elements
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ✉️ **Email Subscription** - Newsletter signup form
- ⚡ **Fast & Lightweight** - Built with Vite for optimal performance

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── App.jsx          # Main React component
│   ├── App.css          # Component styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## Technologies

- **React 19.2** - UI framework
- **Vite 7.2** - Build tool
- **CSS 3** - Styling with gradients and flexbox
- **Space Grotesk** - Custom font

## Customization

### Launch Date

Edit the `LAUNCH_DATE` in `src/App.jsx`:

```javascript
const LAUNCH_DATE = new Date('2025-11-24T09:00:00+01:00').getTime()
```

### Colors

Modify the CSS variables in `src/App.css` to change the color scheme.

### Email Contact

Update the contact email in `src/App.jsx`:

```jsx
<a href="mailto:hello@digitaleduif.nl" className="cta-button">
```

## License

MIT
