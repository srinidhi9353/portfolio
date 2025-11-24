# Portfolio Website

A responsive portfolio website showcasing projects, skills, and experience.

## Features
- Responsive design that works on all devices
- Dark/light theme toggle
- Project showcase with live demos and source code links
- Skills section with technology icons
- Certificates section with modal viewer
- Contact form
- Social media links

## Setup Instructions

### For Local Development
1. Clone the repository
2. Open `index.html` in your browser

### For GitHub Pages Hosting
1. Place your images in the `images` folder:
   - Profile photo named `profile.jpg`
   - Data Structures certificate named `Datastructures.png`
   - Python certificate named `Python.png`
2. Commit and push all files to your GitHub repository
3. Go to your repository Settings > Pages
4. Select "Deploy from a branch" and choose your main branch with `/ (root)` folder
5. Click "Save" - your site will be published at `https://[your-username].github.io/[repository-name]/`

## Customization
- Update personal information in `index.html`
- Replace profile image in `images/profile.jpg`
- Modify styles in `styles.css`
- Update functionality in `script.js`

## Project Structure
```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Custom styles
├── script.js           # JavaScript functionality
├── images/             # Image assets
│   ├── profile.jpg     # Your profile photo
│   ├── Datastructures.png # Data Structures certificate
│   ├── Python.png      # Python certificate
│   └── README.md       # Image folder instructions
└── README.md           # This file
```

## Notes
- All external images (project thumbnails) are loaded from CDN URLs
- The profile image must be added locally for GitHub Pages hosting
- The contact form requires backend implementation for functionality