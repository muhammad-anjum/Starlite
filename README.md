# Starlite Childcare website

This is a static, mobile-friendly website for Starlite Childcare. It uses three files:

- `index.html` - page structure and copy
- `styles.css` - responsive visual design and animations
- `script.js` - mobile navigation, scroll reveals, current year, and inquiry email flow

## Add photos later

The first version intentionally uses abstract placeholders. Replace the elements with class `photo-placeholder` with image elements when the business photos are ready. Before adding any image, confirm that no child's face is visible. Crop, blur, or exclude any image that does not satisfy that rule.

Example replacement:

```html
<img class="real-photo" src="assets/indoor-play-area.jpg" alt="Indoor play area at Starlite Childcare" />
```

The inquiry form opens the visitor's default email application and creates an email addressed to `muhammad.u.anjum@gmail.com`. A hosted form service or backend can be added later if you want submissions to work without the visitor having a configured email app.

## Deploy

Upload `index.html`, `styles.css`, and `script.js` to the same directory on GitHub Pages, Netlify, Vercel, or another static host. No build step is required.
