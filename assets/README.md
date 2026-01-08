# Assets Directory

This directory contains all media assets for your portfolio.

## Structure

```
assets/
├── images/          # Project screenshots, profile photos, game images
│   ├── project-1.jpg
│   ├── project-2.jpg
│   ├── project-3.jpg
│   └── profile.jpg
└── videos/          # Gameplay videos, demos, trailers
    ├── demo-1.mp4
    └── trailer.mp4
```

## Adding Your Assets

1. **Images**: Add your game screenshots and project images to the `images/` folder
   - Recommended size: 1920x1080 or 1280x720 for project screenshots
   - Format: JPG or PNG
   - Optimize images for web (compress to reduce file size)

2. **Videos**: Add gameplay videos and demos to the `videos/` folder
   - Recommended format: MP4 (H.264)
   - Keep file sizes reasonable for web loading
   - Consider hosting large videos on YouTube/Vimeo and embedding

## Using Images in Your Portfolio

To add images to your projects, edit `index.html` and replace the placeholder divs:

```html
<!-- Replace this: -->
<div class="project-image-placeholder">
    <p>[ SCREENSHOT PLACEHOLDER ]</p>
</div>

<!-- With this: -->
<img src="assets/images/project-1.jpg" alt="Project Name" style="width:100%;border:2px solid var(--color-primary);">
```

## Tips

- Use descriptive filenames (e.g., `fps-game-screenshot-1.jpg`)
- Maintain consistent image dimensions when possible
- Compress images using tools like TinyPNG or Squoosh
- Consider using WebP format for better compression
