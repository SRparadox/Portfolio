# 🎮 PARADOX GIRL - Game Designer Portfolio

A retro-styled terminal/ASCII aesthetic portfolio website for game designers, built with pure HTML, CSS, and JavaScript. Features a classic CRT monitor look with scanline effects, green and red terminal colors, and smooth animations.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-00ff41?style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub_Pages-ff0040?style=for-the-badge)

## ✨ Features

- 🖥️ **Retro Terminal Aesthetic** - Classic CRT monitor with scanline effects
- 🎨 **Custom Color Scheme** - Black background with vibrant green (#00ff41) and red (#ff0040) accents
- ⌨️ **Typing Animation** - Dynamic subtitle with terminal typing effect
- 🎯 **Smooth Navigation** - Single-page app with seamless section transitions
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎮 **Easter Eggs** - Hidden Konami Code surprise
- ⚡ **Fast Loading** - Pure vanilla JavaScript, no frameworks needed
- 🚀 **GitHub Pages Ready** - Automated deployment via GitHub Actions

## 🎨 Sections

1. **HOME** - Welcome screen with animated text
2. **ABOUT** - Your background, philosophy, and design approach
3. **PROJECTS** - Showcase your games with screenshots and descriptions
4. **SKILLS** - Display your expertise with animated progress bars
5. **CONTACT** - Links to your social media and portfolio sites

## 🚀 Quick Start

### Option 1: Use This Template

1. Click the "Use this template" button on GitHub
2. Name your repository (e.g., `your-username.github.io`)
3. Clone your new repository
4. Customize the content (see Customization section)
5. Push changes and enable GitHub Pages

### Option 2: Manual Setup

```bash
# Clone the repository
git clone https://github.com/SRparadox/Portfolio.git
cd Portfolio

# Open index.html in your browser to preview
# Use Live Server or similar for best experience
```

## 📝 Customization Guide

### 1. Personal Information

Edit `index.html` to update:

- **Line 6**: Page title
- **Lines 60-65**: Your tagline/subtitle options (in `textArray`)
- **Lines 85-95**: About section - name, role, location
- **Lines 140-200**: Project details (3 projects included)
- **Lines 250-270**: Skills and proficiency levels
- **Lines 300-315**: Contact information and social links

### 2. ASCII Header

To change the ASCII art header, edit line 28-35 in `index.html`. Create your own ASCII art at:
- [patorjk.com](https://patorjk.com/software/taag/)
- Choose "ANSI Shadow" font for best results

### 3. Color Scheme

Want different colors? Edit `css/style.css` (lines 6-12):

```css
:root {
    --color-bg: #0a0a0a;          /* Background */
    --color-primary: #00ff41;      /* Primary green */
    --color-secondary: #ff0040;    /* Accent red */
    /* ... */
}
```

### 4. Adding Project Images

1. Add images to `assets/images/` folder
2. In `index.html`, replace placeholder divs:

```html
<!-- Replace -->
<div class="project-image-placeholder">...</div>

<!-- With -->
<img src="assets/images/your-game.jpg" alt="Game Title" 
     style="width:100%;border:2px solid var(--color-primary);">
```

### 5. Typing Effect Text

Edit `js/script.js` (lines 13-18) to change the rotating subtitle messages:

```javascript
const textArray = [
    'YOUR CUSTOM MESSAGE HERE',
    'ANOTHER MESSAGE',
    // Add more...
];
```

## 🌐 GitHub Pages Deployment

### Enable GitHub Pages

1. Go to your repository **Settings**
2. Navigate to **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Source: `Deploy from a branch`
   - Branch: `main` / `(root)`
4. Click **Save**

### Automatic Deployment

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically deploys your site when you push to the `main` branch.

**To enable:**
1. Go to **Settings** → **Actions** → **General**
2. Under "Workflow permissions", select **Read and write permissions**
3. Save changes

Now every push to `main` will automatically deploy your site!

### Access Your Site

Your portfolio will be available at:
```
https://your-username.github.io/repository-name/
```

Or if using a custom domain:
```
https://your-custom-domain.com
```

## 📂 Project Structure

```
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── assets/
│   ├── images/                 # Project screenshots
│   ├── videos/                 # Game demos/trailers
│   └── README.md               # Assets guide
├── css/
│   └── style.css               # All styling & CRT effects
├── js/
│   └── script.js               # Interactivity & animations
├── index.html                  # Main HTML file
└── README.md                   # This file
```

## 🎮 Easter Eggs

Try the **Konami Code**: ↑ ↑ ↓ ↓ ← → ← → B A

Open your browser console to see system boot messages!

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Custom properties, animations, grid/flexbox
- **Vanilla JavaScript** - No frameworks, pure performance
- **Google Fonts** - VT323 & Press Start 2P for retro feel
- **GitHub Actions** - Automated CI/CD deployment

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS/Android)

## 🎯 Recommended Optimizations

1. **Compress images** before uploading (use [TinyPNG](https://tinypng.com/))
2. **Host large videos** on YouTube/Vimeo and embed
3. **Add meta tags** for SEO (Open Graph, Twitter Cards)
4. **Set up custom domain** for professional look
5. **Add Google Analytics** to track visitors

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork, customize, and make it your own! If you create something cool, share it!

## 💬 Support

- 🐛 Found a bug? [Open an issue](https://github.com/SRparadox/Portfolio/issues)
- 💡 Have a suggestion? [Start a discussion](https://github.com/SRparadox/Portfolio/discussions)
- ⭐ Like this template? Give it a star!

## 🎨 Inspiration & Credits

- Terminal aesthetics inspired by classic MS-DOS and early hacker culture
- CRT effects and scanlines for authentic retro feel
- Color scheme optimized for readability and nostalgia

---

<div align="center">

**Built with ♥ and code by game designers, for game designers**

[View Demo](https://srparadox.github.io/Portfolio/) • [Report Bug](https://github.com/SRparadox/Portfolio/issues) • [Request Feature](https://github.com/SRparadox/Portfolio/issues)

</div>
