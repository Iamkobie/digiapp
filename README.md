# DigiApp Presentation

A responsive, interactive presentation showcasing a mobile app interface with smooth transitions and animations.

## ✨ Features

- **Fully Responsive**: Adapts to mobile, tablet, and desktop screens
- **Touch-Friendly**: Optimized for mobile interactions with proper touch targets
- **Performance Optimized**: Lightweight and fast loading
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Modern CSS**: Uses CSS custom properties and modern layout techniques
- **Mobile Browser Safe**: Handles browser chrome, notches, and safe areas

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/digiapp-presentation)

### Manual Deployment

1. **Clone or download** this repository
2. **Push to GitHub** (if not already)
3. **Connect to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Deploy (no configuration needed)

### Alternative Hosting Options

- **Netlify**: Drag and drop the folder to [netlify.com/drop](https://netlify.com/drop)
- **GitHub Pages**: Enable in repository settings
- **Firebase Hosting**: `firebase deploy`
- **Any static host**: Upload the entire folder

## 📱 Mobile Optimizations

- **Safe Area Support**: Respects iPhone notches and Android navigation bars
- **Responsive Typography**: Scales text appropriately for all screen sizes
- **Touch Targets**: Minimum 44px touch targets for accessibility
- **Viewport Handling**: Proper mobile viewport configuration
- **Performance**: Optimized animations and reduced motion support

## 🎯 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Legacy Support**: Graceful degradation for older browsers

## 🛠 Development

No build process required! Pure HTML, CSS, and JavaScript.

### Local Development
```bash
# Simple HTTP server (Python)
python -m http.server 8000

# Or Node.js
npx serve .

# Or PHP
php -S localhost:8000
```

Visit `http://localhost:8000`

## 📂 File Structure

```
digiapp-presentation/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles (responsive)
├── js/
│   └── app.js         # Interactive functionality
├── images/            # App screenshots and assets
├── vercel.json        # Vercel configuration
└── README.md          # This file
```

## 🎨 Customization

### Colors
Edit CSS custom properties in `:root` section of `style.css`:
```css
:root {
  --bg: #080a0f;        /* Background */
  --accent: #4285F4;    /* Accent color */
  --white: #f0f2f8;     /* Text color */
}
```

### Content
- Replace images in `/images/` folder
- Update text content in `index.html`
- Modify sections in the JavaScript data structure

## 🚨 Known Issues Fixed

- ✅ **Mobile viewport cutoff**: Added safe area support
- ✅ **Fixed phone dimensions**: Now responsive with CSS clamp
- ✅ **Side panel overflow**: Panels hide on mobile
- ✅ **Touch targets**: Minimum 44px for accessibility
- ✅ **START button visibility**: Enhanced contrast and positioning

## 📄 License

MIT License - Feel free to use for personal or commercial projects.

---

**Ready to deploy?** Just push to GitHub and connect with Vercel!