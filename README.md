# Mozing - Premium Artisanal Chocolate Landing Page

A beautiful, modern landing page for Mozing, India's Premier European Style Bean to Bar Chocolate Experience. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion for stunning animations.

## 🍫 Features

- **Responsive Design**: Fully responsive across all devices
- **Beautiful Animations**: Smooth scroll animations and hover effects using Framer Motion
- **Modern UI**: Clean, elegant design with chocolate-themed color palette
- **SEO Optimized**: Proper meta tags, Open Graph, and structured data
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessibility**: WCAG compliant with proper semantic HTML

## 🎨 Design Sections

1. **Header Navigation**: Fixed header with logo, navigation links, and action icons
2. **Hero Section**: Eye-catching hero with animated chocolate imagery
3. **Brand Story**: Company story with cocoa bean imagery
4. **Chocolate Tempering**: Art of chocolate making showcase
5. **Collections**: Product categories (Bars/Barks, New Arrivals, Gift Collection)
6. **Product Categories**: Interactive list of chocolate products
7. **Social Media**: Instagram integration and press mentions
8. **Press Coverage**: Media outlet logos and recognition
9. **Footer**: Contact information, links, and social media

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mozimo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and custom animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── Button.tsx           # Reusable button component
│   ├── Footer.tsx           # Footer component
│   ├── Header.tsx           # Header navigation component
│   └── Section.tsx          # Section wrapper component
```

## 🎨 Color Palette

The design uses a warm chocolate-themed color palette:

- **Dark Chocolate**: `#3C2A21`
- **Medium Chocolate**: `#8B4513`
- **Light Chocolate**: `#D2691E`
- **Chocolate Cream**: `#F5E6D3`
- **Chocolate Gold**: `#DAA520`
- **Chocolate Copper**: `#CD7F32`

## 🔧 Customization

### Adding Real Images

Replace the placeholder emoji elements with actual images:

1. Add your images to the `public/` directory
2. Import and use Next.js `Image` component
3. Replace emoji placeholders with actual image components

### Updating Content

- Edit text content in the respective component files
- Update contact information in `Footer.tsx`
- Modify brand colors in `globals.css`

### Adding New Sections

1. Create new components in `src/components/`
2. Import and use the `Section` component for consistent styling
3. Add animations using Framer Motion

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 📄 License

This project is created for Mozing Chocolate. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

For questions or support, contact Mozing Chocolate:
- Phone: 0172-4054514
- Address: SCO 8, Inner Market, 9.D. Sector 9, Chandigarh, 160009

---

Made with ❤️ for Mozing Chocolate
