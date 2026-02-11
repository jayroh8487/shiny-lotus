# Shiny Lotus

An Angular application showcasing 10 informational pages about lotus flowers, built with Angular Material UI, standalone components, lazy-loaded routing, and mock JSON data.

## Pages

1. **Lotus Types** - Diverse varieties of lotus flowers worldwide
2. **Prices** - Current market prices for various lotus varieties
3. **Cultivation Places** - Major cultivation regions globally
4. **Growing Seasons** - Seasonal growth and bloom cycles
5. **Farming Guide** - Step-by-step lotus farming techniques
6. **Medicinal Uses** - Traditional and modern medicinal applications
7. **Culinary Uses** - Lotus in cuisines around the world
8. **Export Trends** - Global export data and market trends
9. **Gallery** - Curated lotus flower visual collection
10. **FAQs** - Frequently asked questions

## Tech Stack

- **Angular 21** with standalone components
- **Angular Material** (Material 3) for UI components
- **Angular Router** with lazy-loaded routes
- **TypeScript** with strict mode
- **SCSS** for styling
- **Responsive design** via CDK BreakpointObserver

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm start
# Navigate to http://localhost:4200

# Build for production
npm run build
```

## Project Structure

```
src/app/
├── data/
│   └── lotus-data.json          # Mock JSON data for all pages
├── services/
│   └── lotus.service.ts         # Data service
├── pages/
│   ├── price/
│   ├── types/
│   ├── cultivation-places/
│   ├── seasons/
│   ├── farming/
│   ├── medicinal-uses/
│   ├── culinary-uses/
│   ├── export-trends/
│   ├── gallery/
│   └── faqs/
├── app.ts                       # Root component with sidenav layout
├── app.html                     # Root template
├── app.scss                     # Root styles
├── app.routes.ts                # Route definitions
└── app.config.ts                # App configuration
```
